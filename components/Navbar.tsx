// component.Navbar

import Image from "next/image";
import Link from "next/link";
import { markazi } from "@/app/fonts";
import logo from "@/public/Logo.svg";

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
            <div className={`${markazi.className} lg:flex items-center gap-11 hidden`} id="header-nav">
                {listNav()}
            </div>
        </nav>
    );
}
