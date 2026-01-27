"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Curso técnico Desenvolvimento de Sistemas",
    company: "Senai",
    period: "2023 - 2025",
    description: "Capacita para criar e manter sistemas, utilizando programação, bancos de dados e desenvolvimento de aplicações.",
    type: "education"
  },
  {
    id: 2,
    role: "Junior Full Stack Developer",
    company: null,
    period: "2025 - Presente",
    description: "Desenvolvimento de arquiteturas escaláveis e implementação de microserviços.",
    type: "work"
  },
  {
    id: 3,
    role: "Curso Graduação em Ciência da Computação",
    company: "Universidade Facape",
    period: "Presente",
    description: "Formação profissional para desenvolver soluções computacionais, com foco em programação, algoritmos, sistemas e tecnologia.",
    type: "education"
  },
  {
    id: 4,
    role: "Freelance Developer",
    company: "Autônomo",
    period: "Presente",
    description: "Atendimento a clientes internacionais, entregando soluções web completas do design ao deploy.",
    type: "work"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minha <span className="text-indigo-400">Jornada</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma linha do tempo da minha evolução profissional e acadêmica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
            >
              {/* Dot indicator */}
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-black" />
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {item.role}
                    {item.type === "education" && <GraduationCap className="w-4 h-4 text-gray-500" />}
                  </h3>
                  <span className="text-indigo-400 font-medium text-sm">{item.company}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
