import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import ArticleDetails from './ArticleDetails';
import { convertDate } from '../utils/articleMsc';
const GroupedAccordian = ({ articleKeyBlock, gIdx }) => {
    const articles = [...articleKeyBlock.articles];
    var keyVal = (typeof (articleKeyBlock._id) == "string") ? articleKeyBlock._id : convertDate(articleKeyBlock._id);

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                {keyVal}
            </AccordionSummary>
            <AccordionDetails>
               {/* {articles && articles.map((article, idx) => {
                return (
                    <ArticleDetails key={idx} article={article} />
                )})} */}
            </AccordionDetails>
        </Accordion>

        // <div className='m-2 p-2 bg-white dark:bg-zinc-700 shadow box-border border-2 h-auto block rounded border-zinc-500' id={`${articleKeyBlock._id}`} >
        //     <h3 id={keyVal} className='font-bold dark:text-slate-200'>{keyVal}</h3>
        //     {articles && articles.map((article, idx) => {
        //         return (
        //             <ArticleDetails key={idx} article={article} />
        //         )
        //     })}
        // </div>
    )
}

export default GroupedAccordian