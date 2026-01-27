"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const toEmail = "vcavalcante739@gmail.com";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      return;
    }
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
          payload.subject || "Contato via Portfólio"
        )}&body=${encodeURIComponent(
          `Nome: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
        )}`;
        window.location.href = mailto;
        setStatus("idle");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="w-full md:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos trabalhar <br />
              <span className="text-indigo-400">juntos?</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Estou sempre aberto a novas oportunidades e desafios. 
              Se você tem um projeto em mente ou apenas quer trocar uma ideia, 
              entre em contato!
            </p>

            <div className="space-y-6">
              <a href="mailto:vcavalcante739@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-sm text-gray-400">vcavalcante739@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                 <div className="p-3 bg-green-500/20 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Social</h4>
                  <p className="text-sm text-gray-400">@vinicoode</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-7/12">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                  placeholder="Sobre o que vamos conversar?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Conte-me mais sobre seu projeto..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:hover:bg-indigo-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {status === "success" && (
                <p className="text-sm text-emerald-400">Mensagem enviada com sucesso!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">Preencha os campos obrigatórios ou tente novamente.</p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
