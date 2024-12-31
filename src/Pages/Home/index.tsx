import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Hero } from "./Components/Hero";
import { Prices } from "./Components/Prices";
import { Frameworks } from "./Components/Frameworks";
import { Discord } from "./Components/Discord";
import { Telegram } from "./Components/Telegram";
import { CTA } from "./Components/CTA";

export function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [_isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setIsTop(currentScroll === 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - (scrollY / 100));
  
  // Calculate positions with immediate updates
  const xPosition = Math.sin(scrollY * 0.002) * window.innerWidth * 0.4;
  const yPosition = Math.min(scrollY * 0.3, window.innerHeight * 0.8);
  
  const glowPosition = {
    top: yPosition + 'px',
    transform: `translateX(${xPosition}px)`,
    transition: 'none'
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="fixed w-[500px] h-[500px] rounded-full bg-primary blur-[200px] opacity-50 pointer-events-none z-[-1]"
        style={glowPosition}
      />
      <div 
        className="fixed top-[60vh] left-0 right-0 h-[40vh] bg-gradient-to-t from-background to-transparent pointer-events-none z-[20] transition-opacity duration-200"
        style={{ opacity }}
      />
      <div className="relative z-10">
        <div className="-mt-[100px]">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Hero/>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Prices className="-mt-[200px]"/>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Frameworks/>
          </motion.div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Discord/>
          </motion.div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Telegram/>
          </motion.div>


          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <CTA/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}