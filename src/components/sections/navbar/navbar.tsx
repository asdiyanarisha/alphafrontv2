import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import "./styles.css";

const datas: {title: string, id: number}[] = [
    {
        id: 1,
        title: "Home",
    },
    {
        id: 2,
        title: "Work",
    },
    {
        id: 3,
        title: "Blogs",
    },
    {
        id: 4,
        title: "Projects",
    }
];

const Navbar = () => {
    return (

        <NavigationMenu className="flex justify-center mx-auto pt-5 px-3">
            <NavigationMenuList>
                {datas.map((data) =>
                    (
                        <span key={"item-"+data.id}>
                            <NavigationMenuItem>
                                <NavigationMenuLink key={"link-"+data.id}
                                                    className="NavigationMenuLink px-2 py-2
                                                    text-black underline underline-offset-4 decoration-1 decoration-black
                                                    hover:text-white hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-white hover:bg-black hover:rounded-md hover:shadow-lg"
                                                    href="https://github.com/radix-ui"
                                >
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