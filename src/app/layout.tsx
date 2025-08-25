import "./globals.css";

export const metadata = {
  title: "3M2 丸亀クレープ",
  description: "茨香祭 2024 出店サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
