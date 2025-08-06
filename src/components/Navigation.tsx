import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/research", label: "Research" },
    { path: "/blog", label: "Blog" },
    { path: "/gallery", label: "Gallery" },
    { path: "/miscellaneous", label: "Miscellaneous" },
  ];

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-lg font-semibold text-foreground">
            Academic Portfolio
          </Link>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}