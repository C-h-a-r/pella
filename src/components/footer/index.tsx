export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} pella. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}