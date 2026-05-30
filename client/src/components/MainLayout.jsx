import { Header } from "./Header";
import { Footer } from "./Footer";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
