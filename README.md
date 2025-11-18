# Reli.Ai - LegalTech Platform Landing Page

This is the official landing page for Reli.Ai, the most comprehensive LegalTech platform in Mexico. This project is built with Next.js and serves as the main entry point for users to learn about our products, tools, security measures, and subscription plans.

## ✨ Features

- **Dynamic Hero Section:** Engaging introduction to the platform.
- **Product Showcase:** A video demonstration of the Reli.Ai product.
- **AI Tool Carousel:** An interactive display of our AI-powered legal tools.
- **Security Information:** Details on our commitment to data security, built on AWS infrastructure.
- **Subscription & Pricing:** Seamless integration with Stripe for handling monthly and annual subscription plans.
- **User Authentication:** Powered by AWS Amplify for secure sign-up and sign-in.
- **Responsive Design:** Fully responsive layout for optimal viewing on all devices, built with Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [AWS Amplify](https://aws.amazon.com/amplify/)
- **Payments:** [Stripe](https://stripe.com/)
- **Deployment:** [AWS Amplify](https://aws.amazon.com/amplify/)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Environment Variables

This project requires certain environment variables to function correctly. Create a `.env.local` file in the root of your project and add the following variables:

```plaintext
# Stripe
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_PRODUCT_ID=prod_...,prod_...

# Domain for Stripe Checkout redirects
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

You will also need to have an `amplify_outputs.json` file in the root directory, configured for your AWS Amplify backend.

### Running the Development Server

To start the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚢 Deployment

This application is configured for easy deployment on the [AWS Amplify Platform](https://aws.amazon.com/amplify/). The `amplify.yml` file in the root directory contains the build and deployment settings.

To deploy, connect your repository to AWS Amplify and follow the on-screen instructions. Amplify will automatically detect the settings and deploy the application.
