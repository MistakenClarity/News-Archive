import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsHome from "./pages/NewsHome";
import ArticlesHome from "./pages/ArticlesHome";
import ArticleDisplay from "./pages/ArticleDisplay";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<NewsHome />} />
      <Route path='/news/articles' element={<ArticlesHome />} />
      <Route path='/news/articles/:id' element={<ArticleDisplay />} />
    </Routes>
  )
}

export default App
