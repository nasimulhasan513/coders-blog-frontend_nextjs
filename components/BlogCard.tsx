import Link from "next/link"
import { IArticle } from "../types"
import Image from "next/image"
import { formatDate } from "../utils"

interface IpropTypes {

    article: IArticle
}

const BlogCard = ({ article }: IpropTypes) => {
    return (
        <div>

            <Link href="#">
                <h1 className="text-xl font-bold text-gray-600 hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.attributes.title}
                </h1>

            </Link>
            <div className="flex items-center my-4">
                <div className="flex items-center justify-center mr-2 overflow-hidden rounded-lg">
                    <Image
                        src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                        height={40}
                        width={40}
                        alt="avatar"
                    />
                </div>
                <span className="text-sm font-bold text-gray-600">
                    {article.attributes.author.data.attributes.first_name}{' '}
                    {article.attributes.author.data.attributes.last_name} on
                    &nbsp;
                    <span className="text-gray-400">
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>
            </div>
            <div className="text-gray-500">
                {article.attributes.shortDescription.slice(0, 250)}{' '}
                {article.attributes.shortDescription.length > 250 ? '...' : ''}
            </div>
        </div>

    )
}

export default BlogCard