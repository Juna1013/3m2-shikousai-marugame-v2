import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-12">
      <Image
        src="/images/hero.png"
        alt="クレープの写真"
        width={300}
        height={300}
        className="rounded-2xl shadow-lg"
      />
      <h2 className="mt-6 text-3xl font-bold">手作りクレープを提供！</h2>
      <p className="mt-4 max-w-xl text-gray-700">
        3M2クラスが心を込めて作ったクレープです。ぜひ食べに来てください！
      </p>
      <a
        href="https://www.instagram.com/xxxx"
        target="_blank"
        className="mt-6 inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-600"
      >
        Instagram をチェック
        <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} />
      </a>
    </section>
  );
}
