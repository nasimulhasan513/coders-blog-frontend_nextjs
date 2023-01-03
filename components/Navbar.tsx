import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image src="/logo.png" alt="Logo" height={35} width={40} />

                    <span className="font-bold ml-2 text-primary">Coders Blog</span>
                </div>
            </Link>

            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Products</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Pricing</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Docs</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Company</a>
                </li>
            </ul>

            <ul className="flex items-center">

                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-400">Login</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="bg-primary py-2 px-4 rounded-sm text-white transition-all hover:bg-primary-dark">Sign Up</a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar