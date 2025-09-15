import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Dumbbell } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navLinkClasses = (path: string) =>
    cn(
      "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
      location.pathname === path
        ? "bg-primary text-primary-foreground"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center gap-4 lg:gap-6">
          <Link to="/" className="flex items-center gap-2 font-semibold mr-4">
            <Dumbbell className="h-6 w-6" />
            <span className="">WorkoutApp</span>
          </Link>
          <Link to="/" className={navLinkClasses("/")}>
            Planos
          </Link>
          <Link to="/history" className={navLinkClasses("/history")}>
            Histórico
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;