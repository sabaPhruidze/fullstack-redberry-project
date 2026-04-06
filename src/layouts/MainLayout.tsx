import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-redberry-background">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
