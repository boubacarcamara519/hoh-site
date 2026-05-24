import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "HOH Group",
  description: "Site officiel HOH Group Guinée"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-slate-50">
        <Header />{/* ✅ Une seule fois ici */}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}









