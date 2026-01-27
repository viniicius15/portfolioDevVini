"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-6">
              Disponível para novos projetos
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Transformando ideias em <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                experiências digitais
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sou um Desenvolvedor Full Stack apaixonado por criar interfaces modernas, 
              performáticas e escaláveis que geram impacto real.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all flex items-center gap-2 group"
              >
                Ver Projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
              >
                Entrar em contato
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <SocialLink href="https://github.com/viniicius15" icon={<Github className="w-6 h-6" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/vinicius-cavalcanti-8032b72b0/" icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
              <SocialLink href="mailto:vcavalcante739@email.com" icon={<Mail className="w-6 h-6" />} label="Email" />
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
                 <Image 
                   src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                   alt="Digital Experience"
                   width={800}
                   height={800}
                   className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                   priority
                 />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Status</p>
                    <p className="text-sm font-bold text-white">Online & Coding</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-indigo-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all hover:scale-110 border border-white/5"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
