import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <div className="hero min-h-screen flex items-center justify-center flex-col gap-4 md:gap-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center leading-tight tracking-tight">
          Simple, Reliable & Affordable.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center mt-4 md:mt-6">
          Join pella and experience the redefined cloud.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center">
          <Button size="lg" className="group">
            Get Started <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
          </Button>
          <Button variant="secondary" size="lg">
            Check Prices
          </Button>
        </div>
      </div>
    </div>
  )
}