// component.Navbar

import Image from "next/image";
import Link from "next/link";
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
                        <h2>{dir.name}</h2>
                    </Link>
                )
            })
        );
    };
    return(
        <nav>
            <Link href="/">
                <Image src={logo} alt="Logo"/>
            </Link>
            {listNav()}
        </nav>
    );
}
