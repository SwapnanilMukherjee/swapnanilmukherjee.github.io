import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { ResearchPage } from "./pages/ResearchPage";
import { BlogPage } from "./pages/BlogPage";
import { GalleryPage } from "./pages/GalleryPage";
import { MiscellaneousPage } from "./pages/MiscellaneousPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/miscellaneous" element={<MiscellaneousPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;