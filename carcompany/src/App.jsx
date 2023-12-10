import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/HomePage";
import Catalog from "./pages/CatalogPage/CatalogPage";
import Favorites from "./pages/FavoritesPage/FavoritesPage";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route render={() => <div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
