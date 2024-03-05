import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ArticleDetails = ({ article }) => {

  return (
    <div className=' m-2 p-2 bg-white dark:bg-zinc-700 dark:border-black border-zinc-400 border-2 rounded'>
      <Accordion className='dark:bg-zinc-700 border-2 dark:border-zinc-900 border-zinc-400 text-sky-400 dark:text-sky-200' >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" className="font-semibold text-white">
        <a href={`/news/articles/${article._id}`} className='decoration-sky-600 dark:decoration-sky-200 hover:underline hover:underline-offset-2 decoration-2'>{article.title.slice(0, -4)}</a>
        </AccordionSummary>
        <AccordionDetails sx={{color: "#e4e4e7"}}>
        {article.notes}
        </AccordionDetails>
      </Accordion>
      <div className='ml-2 mt-2 dark:text-zinc-200'>
        <h5 className='italic'><span className='font-semibold'>{article.publisher}</span><span className=''> - By: {article.authors.join(', ').toString()}</span></h5> 
        <h6 className='italic'><span className='font-semibold'>Pub: </span>{article.dates.published.slice(0, 10)}<span className='font-semibold pl-4'>Added: </span>{article.dates.added.slice(0, 10)}</h6>
      </div>
    </div>
  );
}

export default ArticleDetails