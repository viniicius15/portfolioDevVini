export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ViniciusDevPortfolio. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
