export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 mt-8 pt-8 pb-8">
      <div className="container mx-auto text-center">
        <p className="text-3xl font-serif font-bold mt-4 mb-4">3M2 丸亀式クレープ</p>
        <p className="text-xl font-serif">Opening Hour</p>
        <p className="text-xl font-serif">Sat 10:00 - 16:00</p>
        <p className="text-xl font-serif">Sun 10:00 - 16:00</p>
        <div className="w-8 container mx-auto text-center mt-2 mb-2">
          <a href="https://www.instagram.com/3m2.shikousai?igsh=aThibGx3M3lhMnps">
            <img src="Instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
