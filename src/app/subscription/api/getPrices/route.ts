import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
});

/**
 * @interface Plan
 * @description Defines the structure of a subscription plan object.
 * @property {string} id - The unique identifier for the plan.
 * @property {string} name - The name of the plan.
 * @property {string} description - A short description of the plan.
 * @property {string} price - The price of the plan.
 * @property {string} currency - The currency of the price.
 * @property {string} interval - The billing interval (e.g., 'month', 'year').
 * @property {string[]} features - A list of features included in the plan.
 */
export interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  interval: string;
  features: string[];
}

/**
 * Handles a GET request to fetch subscription plans from Stripe.
 * It filters plans based on the `interval` query parameter (e.g., 'month' or 'year'),
 * formats the data, adds a free plan, sorts them by price, and returns the list.
 *
 * @param {NextRequest} req - The incoming Next.js request object.
 * @returns {Promise<NextResponse>} A response object with the list of plans or an error message.
 */
export async function GET(req: NextRequest) {
  const productId = process.env.STRIPE_PRODUCT_ID;

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is missing from the environment variables" },
      { status: 500 }
    );
  }

  // Extract the interval (month/year) from query parameters
  const { searchParams } = new URL(req.url);
  const requestedInterval = searchParams.get("interval");

  try {
    // Check if STRIPE_PRODUCT_ID contains commas and split into an array
    const productIds = productId
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    let pricesData = [];

    if (productIds.length > 1) {
      // If there are multiple product IDs, fetch prices for each product concurrently
      const priceResponses = await Promise.all(
        productIds.map(async (id) =>
          stripe.prices.list({
            product: id,
            active: true,
            expand: ["data.product"],
          })
        )
      );

      // Combine all prices from the responses
      pricesData = priceResponses.flatMap((response) => response.data);
    } else {
      // Only one product ID, fetch prices normally
      const pricesResponse = await stripe.prices.list({
        product: productIds[0],
        active: true,
        expand: ["data.product"],
      });
      pricesData = pricesResponse.data;
    }

    // Filter prices based on the requested interval (monthly/yearly)
    const filteredPrices = pricesData.filter((price) => {
      return price.recurring?.interval === requestedInterval;
    });

    // Format the response to include necessary fields (price id, product name, description, amount, etc.)
    const formattedPrices = filteredPrices.map((price) => {
      const productName =
        typeof price.product === "object" && "name" in price.product
          ? price.product.name
          : "Unknown Product"; // Fallback for deleted or unexpanded products

      const productDescription =
        typeof price.product === "object" && "description" in price.product
          ? price.product.description
          : "No description available";

      const features = price.metadata.features
        ? price.metadata.features.split(",").map((feature) => feature.trim())
        : [];

      return {
        id: price.id,
        name: productName,
        description: productDescription,
        price: price.unit_amount ? (price.unit_amount / 100).toFixed(2) : "N/A",
        currency: price.currency.toUpperCase(),
        interval: price.recurring?.interval || "Recurring",
        features,
      } as Plan;
    });

    // Add free plan to the list of prices
    formattedPrices.push({
      id: "free",
      name: "Reli.Ai Gratis",
      description:
        "Plan gratuito para siempre, sin tarjeta de crédito requerida",
      price: "0.00",
      currency: "MXN",
      interval: "forever",
      features: [
        "🗄️ Acceso a Compendios Temáticos",
        "📜 Acceso a los 500 documentos legales más relevantes",
        "👨‍⚖️ Acceso limitado a S.A.U.L.",
        "🔍 7 documentos analizados por consulta",
      ],
    });

    // Sort the prices from least expensive to most expensive
    const sortedPrices = formattedPrices.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );

    return NextResponse.json({ prices: sortedPrices });
  } catch (error) {
    console.error("Error fetching prices from Stripe:", error);
    return NextResponse.json(
      { error: "Failed to fetch prices" },
      { status: 500 }
    );
  }
}
