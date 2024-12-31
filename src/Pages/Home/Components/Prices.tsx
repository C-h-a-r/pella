import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Cpu, MemoryStick, HardDrive, Wifi } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam.tsx";

interface PricesProps {
  className?: string;
}

export function Prices({ className }: PricesProps){
    return (
        <div className={`w-full max-w-7xl mx-auto px-4 py-16 ${className || ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Want More?</h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-10">
                {/* Free Plan */}
                <Card className="w-full md:w-[350px] p-6 min-h-[500px] flex flex-col backdrop-blur-xl bg-zinc-900/60">
                    <CardHeader className="text-center px-0">
                        <h3 className="text-2xl font-bold">Free</h3>
                    </CardHeader>
                    <div className="flex justify-center">
                        <Separator className="w-4/5 bg-gray-600"/>
                    </div>
                    <CardContent className="space-y-6 py-8 flex-grow">
                        <div className="flex items-center gap-2">
                            <Cpu className="h-5 w-5 text-primary" /> <span>0.1 CPU</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MemoryStick className="h-5 w-5 text-primary" /> <span>100MB RAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HardDrive className="h-5 w-5 text-primary" /> <span>5GB DISK</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="h-5 w-5 text-primary" /> <span>Unmetered Bandwidth</span>
                        </div>
                    </CardContent>
                    <div className="flex justify-center">
                        <Separator className="w-4/5 bg-gray-600" />
                    </div>
                    <CardFooter className="pt-8">
                        <Button className="w-full">$0.00/month</Button>
                    </CardFooter>
                </Card>

                {/* Small Plan */}
                <Card className="w-full md:w-[350px] p-6 min-h-[500px] flex flex-col relative transform md:-translate-y-8 backdrop-blur-xl bg-zinc-900/60">
                    <div className="absolute -top-4 right-3 bg-primary text-white px-4 py-2 rounded-full text-base font-medium z-40">
                        Most Popular
                    </div>
                    <CardHeader className="text-center px-0">
                        <h3 className="text-2xl font-bold">Small</h3>
                    </CardHeader>
                    <div className="flex justify-center">
                        <Separator className="w-4/5 bg-gray-600" />
                    </div>
                    <CardContent className="space-y-4 pt-6">
                        <div className="flex items-center gap-2">
                            <Cpu className="h-5 w-5 text-primary" /> <span>0.5 CPU</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MemoryStick className="h-5 w-5 text-primary" /> <span>1GB RAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HardDrive className="h-5 w-5 text-primary" /> <span>Unmetered Disk</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="h-5 w-5 text-primary" /> <span>Unmetered Bandwidth</span>
                        </div>
                    </CardContent>
                    <div className="flex justify-center">
                        <Separator className="w-4/5 bg-gray-600" />
                    </div>
                    <CardFooter className="pt-6">
                        <Button className="w-full">$1.25/month</Button>
                    </CardFooter>
                    <BorderBeam />
                </Card>

                {/* Super Plan */}
                <Card className="w-full md:w-[350px] p-6 min-h-[500px] flex flex-col backdrop-blur-xl bg-zinc-900/60">
                    <CardHeader className="text-center px-0">
                        <h3 className="text-2xl font-bold">Super</h3>
                    </CardHeader>
                    <div className="flex justify-center">
                        <Separator className="w-4/5 bg-gray-600"/>
                    </div>
                    <CardContent className="space-y-6 py-8">
                        <div className="flex items-center gap-2">
                            <Cpu className="h-5 w-5 text-primary" /> <span>4 CPU</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MemoryStick className="h-5 w-5 text-primary" /> <span>16GB RAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HardDrive className="h-5 w-5 text-primary" /> <span>Unmetered Disk</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="h-5 w-5 text-primary" /> <span>Unmetered Bandwidth</span>
                        </div>
                    </CardContent>
                    <div className="flex justify-center">
                        <Separator className="w-4/5 bg-gray-600" />
                    </div>
                    <CardFooter className="pt-8">
                        <Button className="w-full">$19.99/month</Button>
                    </CardFooter>
                    
                </Card>
            </div>
            <p className="text-center mt-12 text-gray-500">
                Don't see a plan that suits you?{" "}
                <a href="/plans" className="text-primary hover:underline transition-all">
                    Browse our other plans!
                </a>
            </p>
        </div>
    )
}