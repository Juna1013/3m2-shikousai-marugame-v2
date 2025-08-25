export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ロケールレイアウトがHTMLとBODYを提供するので、ここは単純にchildrenを返す
  return children;
}
