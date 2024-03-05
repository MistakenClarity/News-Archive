const NewsSiteDetails = ({ site }) => {
  return (
    <h4 className='m-2 p-2 bg-white dark:bg-zinc-700 dark:border-black border-zinc-400 border-2 rounded text-sky-800 dark:text-sky-200 font-semibold '>
      <a className='hover:underline' href={`${site.url}`}>
        <span>{site.name}</span>
        <h5 className='text-sm text-zinc-400 italic'>{site.url}</h5>
      </a>
    </h4>
  )
}

export default NewsSiteDetails