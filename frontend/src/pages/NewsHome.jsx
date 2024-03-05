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

        <div className='flex'>
        <div id="top" className='font-sans bg-zinc-300 flex dark:bg-zinc-900 w-fit'>
            {keyGroups && <ArticlesSidebar key={keyGroups._id} keyGroups={keyGroups} />}
            <div className='w-72 bg-zinc-300 dark:bg-zinc-900'>
                {regionSites && regionSites.map((region, idx) => {
                    return (
                        <RegionalNewsSites key={"rns-" + region._id} region={region} />
                    );
                })}
            </div>
        </div> 
        <div className='font-sans bg-zinc-300 dark:bg-zinc-900 flex h-lvd w-full'>
            <div className='w-full m-2 mr-4 px-4 pt-2 bg-white dark:bg-zinc-900 dark:text-slate-200 shadow border-2 block dark:border-zinc-500 border-zinc-500 rounded'>
                <div className='mx-auto flex flex-col items-center'>
                </div>
                <h2 className='font-bold text-lg'>Home / Notes</h2>
                <div className='border-2 p-2 border-zinc-300'>
                    <h3 className='font-semibold'>Set up reminders:</h3>
                    <ul className='list-decimal ml-2 pl-3'>
                        <li className='pl-2'>Whitelist ip address on MongoDB</li>
                        <li className='pl-2'>Move 'Article' folder into frontend/public/</li>
                    </ul>
                </div>
                <div className='border-x-2 p-2 border-slate-300'>
                    <h3 className='font-semibold'>Info</h3>
                    <ul className='list-decimal ml-2 pl-3'>
                        <li className='pl-2'>Server: http://localhost:4000</li>
                        <li className='pl-2'>Web Pages: http://localhost:5173</li>
                    </ul>
                </div>
                <div className='border-2 p-2 border-slate-300'>
                    <h3 className='font-semibold'>Active Routes</h3>
                    <h5>If: XXXX = 4000 -&gt; returns JSON</h5>
                    <h5>If: XXXX = 5173 -&gt; returns React page</h5>
                    <ul className='list-decimal ml-2 pl-3'>
                        <li className='pl-2'>http://localhost:XXXX/news  -&gt; News Sites</li>
                        <li className='pl-2'>http://localhost:XXXX/news/articles  -&gt; Saved Articles</li>
                        <li className='pl-2'>http://localhost:XXXX/news/articles/:id  -&gt; Article Display</li>
                    </ul>
                </div>
                <div className='border-x-2 border-b-2 p-2 border-slate-300'>
                    <h3 className='font-semibold'>To Do:</h3>
                    <ul className='list-disc ml-2 pl-3'>
                        <li className='pl-2 line-through'>Fix white flash on screen reload (issue with Dark Mode load order)</li>
                        <li className='pl-2'>Add user login / password protection</li>
                        <li className='pl-2 line-through'>Implement sort options for Article Home, (key groupings, dates)</li>
                        <li className='pl-2'>Search bar</li>
                    </ul>
                </div>
                <div className='border-x-2 border-b-2 p-2 border-slate-300'>
                    <h3 className='font-semibold'>Notes:</h3>
                    <p>fix appearence</p>
                </div>
            </div>
        </div>           
        </div>
    )
}

export default NewsHome