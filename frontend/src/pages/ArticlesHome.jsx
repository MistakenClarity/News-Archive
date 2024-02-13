import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GroupedArticles from '../components/GroupedArticles';
import ArticlesSidebar from '../components/ArticlesSidebar';

const ArticlesHome = () => {
    const [articlesByKey, setArticlesByKey] = useState(null);
    const [sortKey, setSortKey] = useState(null);   //work on
    const [keyGroups, setKeyGroups] = useState(null);

    useEffect(() => {
        setSortKey("dateA");
        const getData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + '/news/articles');
                setArticlesByKey(response.data.articlesByKey);
                setKeyGroups(response.data.keywords);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <div className='font-sans bg-slate-300 dark:bg-slate-800 flex'>
            {keyGroups && <ArticlesSidebar key={keyGroups._id} keyGroups={keyGroups} />}
            <div>
                {articlesByKey && articlesByKey.map((articleKeyBlock) => {
                    return (
                        <div > <GroupedArticles key={articleKeyBlock._id} articleKeyBlock={articleKeyBlock} /> </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ArticlesHome