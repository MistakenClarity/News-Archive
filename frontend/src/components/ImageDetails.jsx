const ImageDetails = ({ file }) => {
    return (
        <div className="h-fit my-auto">
            <img src={file} className="max-w-60 " />
            <h2 className="dark:text-zinc-400 text-center mt-2">{file.slice(7).slice(0, -4)}</h2>
        </div>
    )
}

export default ImageDetails;