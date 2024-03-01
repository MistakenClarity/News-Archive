import axios from 'axios';
import { useState, useEffect } from 'react';
import GroupedArticles from '../components/GroupedArticles';
import ArticlesSidebar from '../components/ArticlesSidebar';
import ArticleTopbar from '../components/ArticleTopbar';

const ArticlesHome = () => {
    const [articles, setArticles] = useState(null);
    const [sortKey, setSortKey] = useState('1');   //work on
    const [keyGroups, setKeyGroups] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + `/news/articles?sort=${sortKey}`);
                setArticles(response.data.articles);
                setKeyGroups(response.data.grouping);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [sortKey]);

    return (
        <div className='font-sans bg-slate-300 dark:bg-slate-800 w-fit mx-auto'>
            <ArticleTopbar key={sortKey} sortKey={sortKey} setSortKey={setSortKey} />
            <div className='flex'>
                {keyGroups && <ArticlesSidebar key={keyGroups._id} keyGroups={keyGroups} />}
                <div>
                    {articles && articles.map((articleKeyBlock, idx) => {
                        return (
                            <div key={idx} id={idx}> <GroupedArticles articleKeyBlock={articleKeyBlock} /> </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}

export default ArticlesHome