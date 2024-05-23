// component.Navbar

import Image from "next/image";
import Link from "next/link";
import { markazi } from "@/app/fonts";
import logo from "@/public/Logo.svg";
import menu from "@/public/menu.svg"
import cart from "@/public/cart.svg"

interface Directory {
    name: string;
    url: string;
}

interface DirectoryList {
    directories: Array<Directory>;
}

export default function Navbar(props: DirectoryList) {
    const listNav = () => {
        return(
            props.directories.map(dir => {
                return (
                    <Link href={dir.url} key={dir.name}>
                        <h2 className="text-2xl font-semibold text-tertiary-color hover:text-dark-color">{dir.name}</h2>
                    </Link>
                )
            })
        );
    };
    return(
        <nav className="flex items-center justify-between m-auto max-w-6xl px-5">
            <div id="header-logo">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={220}/>
                </Link>
            </div>
            <div className={`${markazi.className} flex items-center gap-11`} id="header-nav">
                <div className="hidden lg:flex items-center gap-11" id="header-nav-text">
                    {listNav()}
                </div>
                <div className="flex gap-5" id="header-buttons">
                    <button className="btn-secondary h-12 w-12 px-3 lg:hidden">
                        <Image src={menu} alt="Menu"/>
                    </button>
                    <button className="btn-secondary h-12 w-12 px-3">
                        <Image src={cart} alt="Cart"/>
                    </button>
                    <button className="btn-primary px-3 text-2xl font-semibold text-dark-color">
                        Reserve Table
                    </button>
                </div>
            </div>
        </nav>
    );
}
