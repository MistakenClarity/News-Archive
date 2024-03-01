const ArticleTopbar = ({ sortKey, setSortKey }) => {

    function handleSelect(e) {
        e.preventDefault();
        setSortKey(e.target.value);
    }

    return (
        <div className=' min-w-[478px] w-auto flex justify-center mb-2 mx-2 p-2 bg-white dark:bg-slate-500 shadow w-40 min-w-[165px] box-border border-4 min-w-36 dark:text-slate-200'>
            <h1 className='text-slate-800 dark:text-slate-200 my-auto mx-2'>Sort:</h1>
            <select onChange={handleSelect} defaultValue={sortKey} className='text-slate-600 rounded border-sky-500 py-1 bg-slate-200'>
                <option value="1">Keyword</option>
                <option value="2">Published [old]</option>
                <option value="3">Published [new]</option>
                <option value="4">Added [old]</option>
                <option value="5">Added [new]</option>
            </select>
            <h1 className='text-slate-800 dark:text-slate-200 ml-8 my-auto '>Search:</h1>
            <input type='search' placeholder="Not Operational" className='w-48 mx-2 text-slate-600 rounded border-sky-500 py-1 bg-slate-200'></input>
        </div >
    )
}

export default ArticleTopbar