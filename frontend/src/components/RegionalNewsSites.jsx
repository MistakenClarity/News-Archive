import NewsSiteDetails from './NewsSiteDetails';

const RegionalNewsSites = ({ region }) => {
    const regionSites = [...region.sites];
    return (
        <div id={`${region._id}`} className='m-2 p-2 bg-white dark:bg-slate-500 shadow w-auto box-border border-4 h-auto block'>
            <h3 className='font-bold dark:text-sky-300'>{region._id}</h3>
            {regionSites && regionSites.map((site) => {
                return (
                    <div className=''> <NewsSiteDetails key={site._id} site={site} /></div>
                )
            })}
        </div>
    )
}

export default RegionalNewsSites