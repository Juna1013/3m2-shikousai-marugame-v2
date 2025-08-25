export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-6">
      <div className="container mx-auto text-center">
        <img
          src="logo.png"
          alt="サークルカット"
          className="w-32 h-32 mx-auto rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4 font-serif">丸亀式クレープ</h1>
      </div>
    </header>
  );
}
