import Link from 'next/link'
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return (
        <div className="flex justify-between w-screen h-20 bg-primary-default">
            <div className="flex flex-wrap gap-x-8 ml-8 justify-center items-center">
                <Link href="/">
                    <span className={router.pathname == "/" ? "text-secundary-default text-base font-bold" : "text-white text-base"}>Home</span>
                </Link>
                <Link href="/destaques">
                    <span className={router.pathname == "/destaques" ? "text-secundary-default text-base font-bold" : "text-white text-base"}>Destaques</span>
                </Link>
                <Link href="/busca">
                    <span className={router.pathname == "/busca" ? "text-secundary-default text-base font-bold" : "text-white text-base"}>Busca</span>
                </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 mr-8 text-white items-center">
                <span>Login</span>
            </div>
        </div>
    )
}

export default Header;