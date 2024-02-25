const NewsSiteDetails = ({ site }) => {
  return (
    <h4 className='m-2 p-2 bg-white dark:bg-slate-400 shadow border text-sky-800 dark:text-white font-semibold '>
      <a className='hover:underline' href={`${site.url}`}>
        <span>{site.name}</span>
        <h5 className='text-sm text-black italic'>{site.url}</h5>
      </a>
    </h4>
  )
}

export default NewsSiteDetails