import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Telegram() {
    const [code, setCode] = useState(`from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

def start(update: Update, context: CallbackContext):
    update.message.reply_text("Hello! I am your simple bot.")

def main():
    updater = Updater("YOUR_API_TOKEN", use_context=True)
    dispatcher = updater.dispatcher
    dispatcher.add_handler(CommandHandler("start", start))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()`);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 mt-[100px]">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
                & <span className="text-[#79B8FF]">Telegram</span> Bots
            </h1>
            
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden backdrop-blur-xl border border-white/10">
                {/* Editor Header */}
                <div className="bg-zinc-900/50 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm text-gray-400">main.py</span>
                </div>
                
                {/* Code Editor */}
                <div className="relative p-6 bg-zinc-900/30 min-h-[400px]">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-white resize-none p-6 font-mono text-lg z-10 outline-none"
                    />
                    <SyntaxHighlighter
                        language="python"
                        style={atomDark}
                        customStyle={{
                            background: 'transparent',
                            margin: 0,
                            padding: 0,
                            fontSize: '1.125rem',
                            lineHeight: '1.75rem'
                        }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}