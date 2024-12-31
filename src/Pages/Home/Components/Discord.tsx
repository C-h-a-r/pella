import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Discord() {
    const [code, setCode] = useState(`import discord
from discord.ext import commands

token = 'randomString'
bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')

@bot.command(name='hello')
async def hello(ctx):
    await ctx.send('Hello! I am a Discord bot hosted on Pella!')

bot.run("YOUR TOKEN")`);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 mt-[200px]">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
                Deploy <span className="text-[#5865F2]">Discord</span> Bots
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