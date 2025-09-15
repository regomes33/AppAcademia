import Header from "./Header";
import { MadeWithDyad } from "./made-with-dyad";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <MadeWithDyad />
    </div>
  );
};

export default Layout;