"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Desenvolvimento Ágil",
  "Clean Code",
  "Arquitetura Escalável",
  "UI/UX Design", 
  "SEO Optimization",
  "Performance First",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
        >
          {/* Image/Visual Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 aspect-square md:aspect-[4/3] flex items-center justify-center">
               <Image 
                 src="/perfil.png"
                 alt="Foto de Perfil"
                 width={600}
                 height={800}
                 className="object-cover object-top w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
               />
               
               {/* Overlay Badge */}
               <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl">
                 <p className="text-xs text-gray-400 mb-1">Experiência</p>
                 <p className="text-xl font-bold text-white">1+ Anos</p>
               </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre <span className="text-indigo-400">Mim</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sou desenvolvedor full stack, com foco em front-end moderno utilizando React e Next.js, criando interfaces rápidas, responsivas e bem estruturadas. No back-end, trabalho com Node.js, integração com APIs, autenticação e bancos de dados, buscando sempre unir performance, organização de código e boa experiência do usuário em aplicações completas e funcionais.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Acredito que um bom código é aquele que resolve problemas reais de forma simples e eficiente.
              Estou sempre em busca de novas tecnologias e metodologias para elevar o padrão dos meus projetos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
