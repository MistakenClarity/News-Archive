import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsHome from "./pages/NewsHome";
import ArticlesHome from "./pages/ArticlesHome";
import ArticleDisplay from "./pages/ArticleDisplay";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/news' element={<NewsHome />} />
      <Route path='/news/articles' element={<ArticlesHome />} />
      <Route path='/news/articles/:id' element={<ArticleDisplay />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App
