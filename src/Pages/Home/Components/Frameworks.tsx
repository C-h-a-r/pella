import { SiExpress, SiFastapi, SiFlask, SiDjango } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export function Frameworks() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 mt-[200px]">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                PELLA SUPPORTS ALL YOUR FAVORITES
            </h1>
            <p className="text-lg md:text-xl text-gray-500 text-center mb-12">
                Hosting so simple, we can't put into words
            </p>
            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
                    {/* Express Card */}
                    <div className="aspect-square rounded-xl p-6 flex items-center justify-center bg-gradient-to-br from-[#F7DF1E] to-[#918312]">
                        <SiExpress className="w-24 h-24 text-white" strokeWidth={1.5} />
                    </div>

                    {/* FastAPI Card */}
                    <div className="aspect-square rounded-xl p-6 flex items-center justify-center bg-gradient-to-br from-[#009688] to-[#00675D]">
                        <SiFastapi className="w-24 h-24 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Flask Card */}
                    <div className="aspect-square rounded-xl p-6 flex items-center justify-center bg-gradient-to-br from-[#959595] to-[#1F1F1F]">
                        <SiFlask className="w-24 h-24 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Django Card */}
                    <div className="aspect-square rounded-xl p-6 flex items-center justify-center bg-gradient-to-br from-[#092E20] to-[#03100B]">
                        <SiDjango className="w-24 h-24 text-white" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}