import axios from "axios";
import { useEffect, useState } from "react"

const NewsData = () => {
    const [articles, setArticles] = useState(null);
    const [newsSites, setNewsSites] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL_HOST + `/news/data`);
                setArticles(response.data.articles);
                setNewsSites(response.data.newssites);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    })

    return (
        <div>
            <div className="mt-5 mx-2 text-white">
                <h1 className=" text-xl">Articles</h1>
                {articles && articles.map((article) => {
                    return <h1 className="text-white"><a href={"articles/" + article._id} >{article.title}</a></h1>
                })}
            </div>

            <div className="mt-5 mx-2 text-white">
                <h1 className="text-xl">News Sites</h1>
                {newsSites && newsSites.map((site) => {
                    return <h1 className="text-white">{site.name}</h1>
                })}
            </div>

        </div>
    )
}

export default NewsData