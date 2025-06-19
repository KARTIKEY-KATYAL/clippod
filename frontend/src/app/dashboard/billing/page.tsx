"use client";

import type { VariantProps } from "class-variance-authority";
import { ArrowLeftIcon, CheckIcon, Sparkles, Zap, Crown } from "lucide-react";
import Link from "next/link";
import { createCheckoutSession, type PriceId } from "~/actions/stripe";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: VariantProps<typeof buttonVariants>["variant"];
  priceId: PriceId;
  isPopular?: boolean;
  icon: React.ReactNode;
  gradient: string;
}

const plans: PricingPlan[] = [
  {
    title: "Small Pack",
    price: "₹150",
    description: "Perfect for occasional podcast creators",
    features: [
      "50 credits",
      "No expiration",
      "Download all clips",
      "Basic support",
    ],
    buttonText: "Buy 50 credits",
    buttonVariant: "outline",
    priceId: "small",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Medium Pack",
    price: "₹300",
    description: "Best value for regular podcasters",
    features: [
      "100 credits",
      "No expiration",
      "Download all clips",
      "Priority support",
      "Advanced features",
    ],
    buttonText: "Buy 100 credits",
    buttonVariant: "default",
    priceId: "medium",
    isPopular: true,
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Large Pack",
    price: "₹500",
    description: "For professional content creators",
    features: [
      "200 credits",
      "No expiration",
      "Download all clips",
      "Premium support",
      "All features",
      "API access",
    ],
    buttonText: "Buy 200 credits",
    buttonVariant: "outline",
    priceId: "large",
    icon: <Crown className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        plan.isPopular && "border-primary border-2 shadow-lg scale-105"
      )}
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <CardHeader className="flex-1 text-center pb-4">
        <div
          className={cn(
            "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg",
            plan.gradient
          )}
        >
          {plan.icon}
        </div>
        <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
        <div className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {plan.price}
        </div>
        <CardDescription className="text-base mt-2">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3 text-sm">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6">
        <form action={() => createCheckoutSession(plan.priceId)} className="w-full">
          <Button
            variant={plan.buttonVariant}
            className={cn(
              "w-full h-12 text-base font-semibold transition-all duration-200",
              plan.isPopular &&
                "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
            )}
            type="submit"
          >
            {plan.buttonText}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "mb-6 hover:bg-muted/50 transition-colors"
            )}
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Power up your podcast creation with our flexible credit packages. No
              subscriptions, just pay for what you need.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h3 className="text-lg font-semibold mb-2">Need something custom?</h3>
          <p className="text-muted-foreground">
            Contact us for enterprise plans and custom solutions tailored to your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}
