import React from 'react'
import DarkModeButton from './DarkModeButton'

const ArticleDisplayNavbar = () => {
  return (
    <div className='dark:text-white fixed top-0 left-0 right-0 max-w-[450px] min-w-[250px] border-2 border-slate-400 mx-auto mb-2 py-1 rounded bg-slate-200 dark:bg-slate-500 shadow flex font-semibold text-sm'>

      <div className='min-w-14 w-16 border-2 mx-auto border-slate-300 shadow bg-white dark:bg-slate-400 flex flex-col items-center '><DarkModeButton size={20}/></div>
      <div className='min-w-14 w-16 border-2 mx-auto border-slate-300 shadow bg-white dark:bg-slate-400 hover:underline hover:underline-offset-2'><a href="/">/Home</a></div>
      <div className='min-w-14 w-16 border-2 mx-auto border-slate-300 shadow bg-white dark:bg-slate-400 hover:underline hover:underline-offset-2'><a href="/news">/News</a></div>
      <div className='min-w-14 w-16 border-2 mx-auto border-slate-300 shadow bg-white dark:bg-slate-400 hover:underline hover:underline-offset-2'><a href="/news/articles">/Articles</a></div>
      <div className='min-w-14 w-16 border-2 mx-auto border-slate-300 shadow bg-white dark:bg-slate-400 hover:underline hover:underline-offset-2'><a href="#top">#Top</a></div>
    </div>
  )
}

export default ArticleDisplayNavbar