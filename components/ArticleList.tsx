import { IArticle } from "../types"
import BlogCard from "./BlogCard"
import BlogCardWithImage from "./BlogCardWithImage"

interface IPropType {
    articles: IArticle[]
}

const ArticleList = ({ articles }: IPropType) => {
    return (
        <div className="grid gap-16 mt-16 lg:grid-cols-2">{

            articles.map((article, idx) => (idx === 1 ? <BlogCardWithImage article={article} key={article.id} /> :
                <BlogCard article={article} key={article.id} />
            ))

        }</div>
    )
}

export default ArticleList