export default function LanguageToggle() {
  return (
    <div className="flex gap-0.5 items-center justify-center">
      <button className="block rounded-md w-8 py-1 pointer hover:bg-purple-800 hover:text-white transition">
        EN
      </button>
      <span>/</span>
      <button className="block rounded-md w-8 py-1 pointer hover:bg-purple-800 hover:text-white transition">
        IT
      </button>
    </div>
  );
}
