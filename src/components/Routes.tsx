import { BrowserRouter, Route, Routes as RoutesComponent } from "react-router";

import Home from "./Home";
import Projects from "./Projects";
import Lifestyle from "./Lifestyle";
import Blog from "./lifestylePages/Blog";
import Food from "./lifestylePages/Food";
import BlogPostGenerator from "./tinyMCE/BlogPostGenerator";
import FoodImagePage from "./lifestylePages/FoodImagePage";
import EmptyState from "./EmptyState";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RoutesComponent>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/lifestyle/blog" element={<Blog />} />
        <Route path="/lifestyle/food" element={<Food />} />
        <Route path="/lifestyle/food-image" element={<FoodImagePage />} />
        <Route path="/blog-post-generator" element={<BlogPostGenerator />} />
        <Route path="*" element={<EmptyState />} />
      </RoutesComponent>
    </BrowserRouter>
  );
};

export default Routes;
