"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LandingPage Premium",
    description: "Landing page responsiva para divulgação online, com foco em conversão e estrutura moderna/responsiva.",
    tags: ["HTML", "CSS", "JS"],
    image: "/image2.png", // Placeholder logic will be handled in UI
    github: "https://github.com/viniicius15/Barbpj",
    demo: " https://viniicius15.github.io/Barbpj/",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "App de Comunicação",
    description: "Aplicação de chat em tempo real com suporte a múltiplos usuários, autenticação de usuários e persistência de mensagens básico.",
    tags: ["HTML", "Node.js", "WebSocket ", "Js"],
    image: "/image.png",
    github: "https://github.com/viniicius15/WS",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Portal Agro",
    description: "Aplicação full stack com autenticação de usuários, painel administrativo e persistência de dados, organizada em arquitetura MVC.",
    tags: ["Prisma", "JWT", "Arquitetura MVC", "Express.js", "HTML5/CSS3"],
    image: "/image3.png",
    github: "https://github.com/viniicius15/projeto-ferias",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-indigo-400">Destaque</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos trabalhos que melhor representam minha expertise técnica e criatividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-colors"
            >
              {/* Image Placeholder */}
              <div className="h-48 w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                <div className="absolute bottom-4 left-4 p-2 bg-white/50 backdrop-blur-md rounded-lg">
                  <span className="text-black text-xs font-mono font-bold uppercase tracking-wider">
                    Project Preview
                  </span>
                </div>
              </div>


              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {index === 0 ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors ml-auto"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="ml-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      Em breve
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/repos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all"
          >
            Ver todos os projetos no GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
