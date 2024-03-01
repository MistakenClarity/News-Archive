import axios from 'axios';
import RegionalNewsSites from '../components/RegionalNewsSites';
import { useState, useEffect } from 'react';
import ArticlesSidebar from '../components/ArticlesSidebar';

const NewsHome = () => {
    const [regionSites, setRegionSites] = useState(null);
    const [keyGroups, setKeyGroups] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + '/news');
                setRegionSites(response.data.regionalSites);
                setKeyGroups(response.data.regions);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <div id="top" className='font-sans bg-slate-300 dark:bg-slate-800 flex w-fit mx-auto'>
            {keyGroups && <ArticlesSidebar key={keyGroups._id} keyGroups={keyGroups} />}
            <div className='w-72 bg-slate-300 dark:bg-slate-800'>
                {regionSites && regionSites.map((region) => {
                    return (
                        <RegionalNewsSites key={region._id} region={region} />
                    );
                })}
            </div>
        </div>
    )
}

export default NewsHome