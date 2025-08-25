import Image from "next/image";

export default function Main() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-4">Welcome to 3M2!</h2>
        <div className="text-center text-xl mb-4">
          <div>2024年 10/26(土) ▶ 10/27(日)</div>
          <div>1日目: 10:00 - 16:00</div>
          <div>2日目: 10:00 - 16:00</div>
        </div>
        <div id="countdown" className="text-center text-base font-bold text-blue-500 pt-2 pd-2"></div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-red-500 underline">What?</h2>
          <p className="text-lg">
            丸亀式クレープとは、うどんチェーンで有名な丸亀うどんが販売していた自分で具材を選ぶクレープです。
            3M2では茨香祭限定で販売いたします！
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-red-500 underline">Topping</h2>
          <div className="relative">
            <div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-500">Base</h3>
                <p>・ホイップクリーム</p>
                <p>・ホイップ＆あんこ</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-500">Fruit</h3>
                <p>・みかん🍊</p>
                <p>・パイナップル🍍</p>
                <p>・マンゴー🥭</p>
                <p>・もも🍑</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-500">Sauce</h3>
                <p>・チョコソース🍫</p>
                <p>・ジャムソース</p>
                <p>・メイプルシロップ🍁</p>
                <p>・はちみつ🍯</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-red-500 underline">Extra</h2>
          <div className="relative">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Sweets</h3>
              <p>・クッキー🍪</p>
              <p>・チョコチップ🍫</p>
              <p>・カラースプレー</p>
              <p>・アザラシ</p>
              <p>・ココナッツ🥥</p>
              <p>・ぱちぱちパニック🐊</p>
              <p>・コアラのマーチ🐨</p>
              <p>・ポッキー</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Fruit</h3>
              <p>・みかん🍊</p>
              <p>・パイナップル🍍</p>
              <p>・マンゴー🥭</p>
              <p>・もも🍑</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Sauce</h3>
              <p>・チョコソース🍫</p>
              <p>・ジャムソース</p>
              <p>・メイプルシロップ🍁</p>
              <p>・はちみつ🍯</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-500">Other</h3>
              <p>・チーズケーキ🧀</p>
              <p>・ホイップ増し</p>
              <p>・マシュマロ</p>
              <p>・バナナチップ🍌</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-red-500 underline">Details</h2>
          <div className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <i data-lucide="map-pin" className="text-red-500 mr-2"></i>
                <p className="text-base my-2">茨城高専8号館1階102号室</p>
              </div>
              <div className="flex items-center">
                <i data-lucide="coffee" className="text-red-500 mr-2"></i>
                <p className="text-base my-2">多種多様な具材をご用意！</p>
              </div>
              <div className="flex items-center">
                <i data-lucide="clock" className="text-red-500 mr-2"></i>
                <p className="text-base my-2">開店直後が空いています！</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
