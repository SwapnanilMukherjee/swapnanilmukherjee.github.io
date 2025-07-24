import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/research", label: "Research" },
  { path: "/blog", label: "Blog" },
  { path: "/miscellaneous", label: "Miscellaneous" },
  { path: "/gallery", label: "Gallery" },
];

export const SimpleNavigation = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-end space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};