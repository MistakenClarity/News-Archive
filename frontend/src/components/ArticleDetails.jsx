import React from 'react'

const ArticleDetails = ({article}) => {
  return (
      <div className=' m-2 p-2 bg-white dark:bg-slate-400 shadow dark:shadow-slate-300 border'>
          <h5 className='text-sky-800 dark:text-white font-semibold'><a href={`/news/articles/${article._id}`} className='decoration-sky-600 dark:decoration-slate-800 hover:underline hover:underline-offset-2'>{article.title.slice(0, -4)}</a></h5>
          <h5 className='text-sm italic'><span className='font-semibold'>{article.publisher}</span><span className=''> - By: {article.authors.join(', ').toString()}</span></h5>
          <h6 className='text-sm italic'><span className='font-semibold'>Pub: </span>{article.dates.published.slice(0,10)}<span className='font-semibold pl-4'>Added: </span>{article.dates.added.slice(0,10)}</h6>
      </div>
  );
}

export default ArticleDetails