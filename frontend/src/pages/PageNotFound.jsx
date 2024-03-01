const PageNotFound = () => {
  return (
    <div className='dark:text-white text-center text-lg'>
        <div className='pt-20'>404</div>
        <div>Invalid URL</div>
        <div>Return <a href="/" className='underline underline-offset-2'>Home</a></div>           
    </div>

  )
}

export default PageNotFound