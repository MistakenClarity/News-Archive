const ArticleTopbar = ({ sortKey, setSortKey, titleDisplay }) => {

    function handleSelect(e) {
        e.preventDefault();
        setSortKey(e.target.value);
    }

    return (
        <div className='min-w-[478px] w-auto flex justify-center m-2 mt-0 p-2 bg-white dark:bg-zinc-900 shadow w-40 min-w-[165px] box-border border-2 min-w-36 dark:text-slate-200 rounded border-zinc-500'>
            <h1 className='text-slate-800 dark:text-white my-auto mx-2 font-bold'>Sort:</h1>
            <select onChange={handleSelect} defaultValue={sortKey} className='text-zinc-900 rounded border-sky-500 py-1 bg-zinc-300 '>
                <option value="1">Keyword</option>
                <optgroup label="Published">
                    <option value="2">Oldest</option>
                    <option value="3">Newest</option>
                </optgroup>
                <optgroup label="Added">
                    <option value="4">Oldest</option>
                    <option value="5">Newest</option>
                </optgroup>
            </select>
            <h1 className='text-slate-800 dark:text-slate-200 ml-8 my-auto font-bold'>Search:</h1>
            <input type='search' placeholder="Not Operational" className='w-48 mx-2 text-zinc-900 rounded border-sky-500 py-1 bg-slate-200'></input>
        </div >
    )
}

export default ArticleTopbar