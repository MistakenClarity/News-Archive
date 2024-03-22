import axios from "axios";
import { useState, useEffect } from "react";
import ImageDetails from "../components/ImageDetails";
import ImagesSidebar from "../components/ImagesSidebar";

const ImagesHome = () => {
    const [images, setImages] = useState(null);
    const [fileNames, setFileNames] = useState(null);
    // const url = "images/OldUSAFBomberCrews.jpg"

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + `/images`);
                setImages(response.data.images);
                setFileNames(response.data.fileNames);
            } catch (error) {
                console.log('error')
            }
        };
        getData();
    }, [])

    return (
        <div className="text-white w-full h-full flex">
            <ImagesSidebar />
            <div className="mt-5 flex flex-wrap gap-4 justify-center">
                {fileNames && fileNames.map((file) => {
                    return (
                        < ImageDetails file={file} />
                    )
                })}
            </div>
        </div>
    )
}

export default ImagesHome;