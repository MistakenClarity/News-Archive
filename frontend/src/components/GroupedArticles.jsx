import ArticleDetails from './ArticleDetails';
import { convertDate } from '../utils/articleMsc';

const GroupedArticles = ({ articleKeyBlock }) => {
    const articles = [...articleKeyBlock.articles];
    var keyVal = (typeof (articleKeyBlock._id) == "string") ? articleKeyBlock._id : convertDate(articleKeyBlock._id);

    return (
        <div className='m-2 p-2 bg-white dark:bg-slate-500 shadow w-auto box-border border-4 h-auto block' id={`${articleKeyBlock._id}`} >
            <h3 id={keyVal} className='font-bold dark:text-slate-200'>{keyVal}</h3>
            {articles && articles.map((article, idx) => {
                return (
                    <ArticleDetails key={idx} article={article} />
                )
            })}
        </div>
    )
}

export default GroupedArticles