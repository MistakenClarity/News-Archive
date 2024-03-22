import DarkModeButton from './DarkModeButton';
import { convertDate } from '../utils/articleMsc';

const ArticlesSidebar = ({ keyGroups }) => {
  return (
    <div className='m-2 p-2 bg-white dark:bg-zinc-900 shadow w-40 min-w-[165px] box-border border-2 rounded min-w-36 dark:text-slate-200 border-zinc-500'>
      <div className='sticky top-0 p-2 bg-white dark:bg-zinc-900 dark:text-white'>
        <div className='mx-auto flex flex-col items-center pb-5'><DarkModeButton size={35} /></div>
        <h4 className='mb-2 pl-2 bg-white dark:bg-zinc-900 border-2 border-sky-700 dark:border-sky-300 font-bold rounded '><a href="/">/Home</a></h4>
        <h4 className='mb-2 pl-2 bg-white dark:bg-zinc-900 border-2 border-sky-700 dark:border-sky-300 font-bold rounded'><a href="/news">/News</a></h4>
        <h4 className='mb-2 pl-2 bg-white dark:bg-zinc-900 border-2 border-sky-700 dark:border-sky-300 font-bold rounded'><a href="/news/articles">/Articles</a></h4>
        <h4 className='mb-2 pl-2 bg-white dark:bg-zinc-900 border-2 border-sky-700 dark:border-sky-300 font-bold rounded'><a href="/images">/Images</a></h4>
        <h4 className='mb-2 pl-2 bg-white dark:bg-zinc-900 border-2 border-sky-700 dark:border-sky-300 font-bold rounded '><a href="#top">#Top</a></h4>
        {keyGroups.map((key, idx) => {
          var keyVal = (typeof (key._id) == "string") ? key._id : convertDate(key._id);
          return (
            <h4 key={"sb-" + keyVal} className='font-semibold text-sm'><a className='dark:text-white hover:underline hover:underline-offset-2' href={`#${keyVal}`}>{`${keyVal}`} <span className='text-sm font-medium'> ({key.count})</span></a></h4>
          );
        })}
      </div>
    </div>
  )
}

export default ArticlesSidebar