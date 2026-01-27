"use client";

import { motion } from "framer-motion";
import { Layout, Server, Sparkles, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Frontend Moderno",
    description:
      "Interfaces responsivas e acessíveis com foco em UX. React, Next.js e animações fluidas.",
    icon: Layout,
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "APIs & Backend",
    description:
      "APIs seguras e performáticas. Node.js, Express, Prisma, integrações e arquitetura escalável.",
    icon: Server,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Design & Branding",
    description:
      "Design clean com identidade forte. Sistemas de design, tipografia e consistente visual premium.",
    icon: Sparkles,
    accent: "from-pink-500 to-orange-500",
  },
  {
    title: "Reinstalação e licenciamento do PC",
    description:
      "Serviço de reinstalação do sistema e configuração de licenças, garantindo funcionamento correto e do software.",
    icon: Lightbulb,
    accent: "from-blue-500 to-cyan-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços <span className="text-indigo-400">Oferecidos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas para transformar ideias em produtos digitais
            de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative rounded-2xl p-6 bg-white/5 border border-white/10 overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${svc.accent}`} />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5">
                  <svc.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-200">{svc.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
