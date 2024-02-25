import axios from 'axios';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ArticleDetails from '../components/ArticleDetails';
import ArticleDisplayNavbar from '../components/ArticleDisplayNavbar';

const ArticleDisplay = () => {
  var [article, setArticle] = useState(null);
  var [textData, setTextData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      var id = location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length);
    }
    const getData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + '/news/articles/' + id);
        setArticle(response.data.article);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [location]);

  if (article) {
    axios.get("/Articles/" + article.title)
      .then(function (response) {
        setTextData(response.data);
      });
  }

  return (
    <div id="top" className='w-auto h-full font-sans bg-slate-300 dark:bg-slate-800'>
      <div className='w-full text-center pt-4 '>
        <ArticleDisplayNavbar />
        <div className='w-1/2 border-2 mx-auto mt-7 border-slate-400 bg-slate-100 dark:bg-slate-500 shadow rounded'>
          {article && <ArticleDetails key={article._id} article={article} />}
        </div>
      </div>
      {textData &&
        <div className='bg-slate-300 dark:bg-slate-800 font-sans whitespace-pre-wrap h-full w-auto p-4 mx-5'>
          <p className=' rounded shadow border-slate-400 dark:border-slate-200 border-2 p-4 bg-white dark:bg-slate-400'>{textData}</p>
        </div>}
    </div>
  )
}

export default ArticleDisplay