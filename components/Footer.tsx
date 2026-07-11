export default function Footer() {
  return (
    <footer className="bg-[#070A0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold">
          <span className="text-white">Somesh</span>
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          © 2026 Somesh Pradhan • Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
