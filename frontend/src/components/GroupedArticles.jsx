import ArticleDetails from './ArticleDetails';
import { convertDate } from '../utils/articleMsc';
const GroupedArticles = ({ articleKeyBlock }) => {
    const articles = [...articleKeyBlock.articles];
    var keyVal = (typeof (articleKeyBlock._id) == "string") ? articleKeyBlock._id : convertDate(articleKeyBlock._id);

    return (
        <div className='m-2 p-2 bg-white dark:bg-zinc-900  box-border border-2 h-auto block rounded border-zinc-500 shadow' id={`${articleKeyBlock._id}`} >
            <h3 id={"h-"+ keyVal} className='font-bold dark:text-white'>{keyVal}</h3>
            {articles && articles.map((article, idx) => {
                return (
                    <ArticleDetails key={idx} article={article} />
                )
            })}
        </div>
    )
}

export default GroupedArticles