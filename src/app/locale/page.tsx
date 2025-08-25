import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function App() {
  const t = useTranslations('Index');
  return (
    <div className="bg-gradient-to-br from-pink-100 to-red-100 min-h-screen">
      <Header />
      <h1>{t('hello')}</h1>;
      <Main />
      <Footer />
    </div>
  );
}
