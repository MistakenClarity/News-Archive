import React from 'react'
import DarkModeButton from '../components/DarkModeButton'

const Home = () => {
    return (
        <div id="top" className='font-sans bg-slate-300 dark:bg-slate-800 flex h-lvh '>
            <div className='max-w-[900px] mx-auto p-2 mt-5 bg-white dark:bg-slate-500 dark:text-slate-200 shadow w-3/4 box-border border-4 block dark:border-slate-300'>
                <div className='mx-auto flex flex-col items-center'>
                    <DarkModeButton size={35} />
                </div>
                <h2 className='font-bold text-lg'>Home / Notes</h2>
                <div className='border-2 p-2 border-slate-300'>
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
                    <h3 className='font-semibold'>Active Links: 5173</h3>
                    <ul className='list-decimal ml-2 pl-3'>
                        <li className='pl-2'><a href="/news" className='underline underline-2'>News Sites</a></li>
                        <li className='pl-2'><a href="/news/articles" className='underline underline-2'>Articles</a></li>
                    </ul>
                </div>
                <div className='border-x-2 border-b-2 p-2 border-slate-300'>
                    <h3 className='font-semibold'>To Do:</h3>
                    <ul className='list-disc ml-2 pl-3'>
                        <li className='pl-2'>Fix white flash on screen reload (issue with Dark Mode load order)</li>
                        <li className='pl-2'>Add user login / password protection</li>
                        <li className='pl-2'>Implement sort options for Article Home, (key groupings)</li>
                        <li className='pl-2'>Search bar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home