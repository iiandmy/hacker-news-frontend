import './App.css';
import NewsPage from "./component/newsPage/NewsPage";
import { Route, Routes } from 'react-router-dom';
import ArticlePage from "./component/articlePage/ArticlePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}/>
      <Route path="/article/:id" element={<ArticlePage />}/>
    </Routes>
  );
}

export default App;
