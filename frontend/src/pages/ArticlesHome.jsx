import axios from 'axios';
import { useState, useEffect } from 'react';
import GroupedArticles from '../components/GroupedArticles';
import ArticlesSidebar from '../components/ArticlesSidebar';
import ArticleTopbar from '../components/ArticleTopbar';


const ArticlesHome = () => {
    const [articles, setArticles] = useState(null);
    const [sortKey, setSortKey] = useState('1');   //work on    1: keywords, 2: pubOld, 3: pubNew, 4:addedOld 5:addedNew
    const [keyGroups, setKeyGroups] = useState(null);
    const [sortOrder, setSortOrder] = useState('0');    //1 = newest, 0 = oldest (auto)
    const [fetchData, setFetchData] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + `/news/articles?sort=${sortKey}`);
                setArticles(response.data.articles);
                setKeyGroups(response.data.grouping);
            } catch (error) {
                (error.name === 'AbortError') ? console.log('Fetching data was cancelled') : console.log(error);
            }
        }
        getData();
    }, [sortKey]);

    return (
        <div className='font-sans bg-zinc-300 dark:bg-zinc-900 mx-auto w-full '>
            <ArticleTopbar key={sortKey} sortKey={sortKey} setSortKey={setSortKey} />
            <div className='flex'>
                {keyGroups && <ArticlesSidebar key={keyGroups._id} keyGroups={keyGroups} />}
                <div>
                    {articles && articles.map((articleKeyBlock, idx) => {
                        return (
                            <div key={idx} id={idx}> <GroupedArticles articleKeyBlock={articleKeyBlock} gIdx={idx} /> </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}

export default ArticlesHome