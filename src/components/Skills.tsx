"use client";

import { motion } from "framer-motion";
import { 
  Code2, Layout, Database, Server, Smartphone, Globe, 
  Terminal, Cpu, Layers, GitBranch, Box, Cloud 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-pink-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-indigo-400" />,
    skills: ["Node.js", "Express", "WebSocket", "Prisma", "REST API", "Autenticação (JWT) / Bycript"],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: ["Git", "VS Code", "Figma", "Vercel", "Netlify"],
  },
  {
    title: "Soft Skills",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    skills: ["Comunicação", "Persistência", "Resolução de Problemas", "Trabalho em Equipe", "Adaptabilidade"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-indigo-400">Habilidades</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Um conjunto de ferramentas e tecnologias que domino para transformar ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-indigo-500/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-200">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
