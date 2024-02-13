import React from 'react'
import ArticleDetails from './ArticleDetails';

const GroupedArticles = ({articleKeyBlock}) => {
    const articles = [...articleKeyBlock.articles];
    return (
        <div className='m-2 p-2 bg-white dark:bg-slate-500 shadow w-auto box-border border-4 h-auto block' id={`${articleKeyBlock._id}`} >
            <h3 id={`${articleKeyBlock._id}`} className='font-bold dark:text-slate-200'>{articleKeyBlock._id}</h3>
                { articles && articles.map((article) => {
                    return (
                        <ArticleDetails key={article._id} article={article} />
            )})}
        </div>
    )
}

export default GroupedArticles