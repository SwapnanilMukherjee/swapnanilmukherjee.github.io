import { SimpleNavigation } from "@/components/SimpleNavigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};