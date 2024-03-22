import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ArticleDetails = ({ article }) => {

  const updateNote = async () => {
    const newPost = document.querySelector("#article-note-" + article._id);
    console.log(newPost.textContent);
    const content = { notes: newPost.textContent };
    fetch(import.meta.env.VITE_LOCAL_HOST + "/news/articles/" + article._id, {
      method: "PATCH",
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  return (
    <div className=' m-2 p-2 bg-white dark:bg-zinc-700 dark:border-black border-zinc-400 border-2 rounded'>
      <Accordion className='dark:bg-zinc-700 border-2 dark:border-zinc-900 border-zinc-400 text-sky-400 dark:text-sky-200' >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" className="font-semibold text-white " sx={{ padding: "2" }}>
          <a href={`/news/articles/${article._id}`} className='decoration-sky-600 dark:decoration-sky-200 hover:underline hover:underline-offset-2 decoration-2'>{article.title.slice(0, -4)}</a>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#e4e4e7" }}>
          <div id={"article-note-" + article._id} contentEditable dangerouslySetInnerHTML={{ __html: article.notes }} />
          <button className='border border-sky-300 border-2 p-1 mt-2 rounded dark:bg-zinc-700 dark:text-white dark:hover:bg-sky-300 dark:hover:text-zinc-700 text-sm' onClick={updateNote}>Update</button>
        </AccordionDetails>
      </Accordion>
      <div className='ml-2 mt-2 text-sm dark:text-sky-200'>
        <h5 className='italic'><span className='dark:text-zinc-200'>Publisher: </span><span className=''>{article.publisher}</span><span className='dark:text-zinc-200 '> - By: </span>{article.authors.join(', ').toString()}</h5>
        <h6 className='italic'><span className='dark:text-zinc-200'>Pub: </span>{article.dates.published.slice(0, 10)}<span className=' pl-4 dark:text-zinc-200'>Added: </span>{article.dates.added.slice(0, 10)}</h6>
        <h6 className='italic'><span className='dark:text-zinc-200'>Keywords: </span>{article.keywords.join(", ")}</h6>
      </div>
    </div>
  );
}

export default ArticleDetails