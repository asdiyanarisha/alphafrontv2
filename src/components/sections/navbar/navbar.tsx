'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation'

import "./styles.css";

const datas: {title: string, id: number, route: string}[] = [
    {
        id: 0,
        title: "Home",
        route: "/"
    },
    {
        id: 1,
        title: "Work",
        route: "/works"
    },
    {
        id: 2,
        title: "Blogs",
        route: "/blogs"
    },
    {
        id: 3,
        title: "Projects",
        route: "/projects"
    }
];

const Navbar = () => {
    const pathName = usePathname() || '';
    console.log(pathName)

    return (
        <NavigationMenu className="flex justify-center mx-auto pt-5 px-3">
            <NavigationMenuList>
                {datas.map((data) =>
                    (
                        <span key={"item-"+data.id}>
                            <NavigationMenuItem>
                                <NavigationMenuLink key={"link-"+data.id}
                                                    className={`NavigationMenuLink px-4 py-3 text-black underline underline-offset-4 decoration-1 decoration-black hover:text-white hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-white hover:bg-black hover:rounded-md hover:shadow-lg 
                                                    ${pathName === data.route ? 'text-white underline underline-offset-4 decoration-1 bg-black decoration-white rounded-md shadow-lg' : ''}`}
                                                    href={data.route}>
                                    {data.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </span>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>

    );
};

export default Navbar;