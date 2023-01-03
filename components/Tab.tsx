import React from 'react'
import { ICategory } from '../types'
import Link from 'next/link'
import { useRouter } from 'next/router'


interface IpropTypes {

    categories: ICategory[]

}


const Tab = ({ categories }: IpropTypes) => {

    const router = useRouter()

    const isActiveLink = (category: ICategory) => {

        return category.attributes.slug === router.query.category
    }

    return (
        <div className='my-8 flex items-center justify-between border-b-2 border-gray-100'>

            <ul className='flex items-center'>
                <li className={'mr-6 pb-4 border-b-4 rounded-sm' + `${router.pathname == '/' ? 'border-primary text-primary' : 'border-white text-gray-400'}`}>
                    <Link href="#">Recent</Link>
                </li>

                {categories.map((category) => (<li className={'mr-6 pb-4 border-b-4  rounded-sm' +
                    `${isActiveLink(category) ? 'border-primary text-primary' : 'border-white text-gray-400'}`} key={category.id}>
                    <Link href={`/category/${category.attributes.slug}`}>{category.attributes.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Tab