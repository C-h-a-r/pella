import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CTA() { 
    return ( 
        <div className="w-full max-w-7xl mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                What Are You Waiting For?
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl">
                Begin your journey here, and never look back.
            </p>
            <Button size="lg" className="group">
                Get Started 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
            </Button>
        </div>
    )
}
