import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
});

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  interval: string;
  features: string[];
}

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
    // Fetch active prices for the specific product, expanding the associated product object
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
      expand: ["data.product"], // Expand to get full product details
    });

    // Filter prices based on the requested interval (monthly/yearly)
    const filteredPrices = prices.data.filter((price) => {
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
