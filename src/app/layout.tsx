import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "3M2 丸亀クレープ",
  description: "茨香祭 2024 出店サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
