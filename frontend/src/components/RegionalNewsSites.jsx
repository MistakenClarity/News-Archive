import NewsSiteDetails from './NewsSiteDetails';

const RegionalNewsSites = ({ region }) => {
    const regionSites = [...region.sites];
    return (
        <div id={`${region._id}`} className='m-2 p-2 bg-white dark:bg-zinc-900 box-border border-2 h-auto block rounded border-zinc-500 shadow'>
            <h3 className='font-bold dark:text-white'>{region._id}</h3>
            {regionSites && regionSites.map((site) => {
                return (
                    <NewsSiteDetails key={site._id} site={site} />
                )
            })}
        </div>
    )
}

export default RegionalNewsSites