import {LayoutDashboard, NotebookText,  Settings} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "admin/",
        icon: LayoutDashboard,
    },
    {
        title: "Blogs",
        url: "admin/blogs",
        icon: NotebookText,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="mb-3 mt-2">
                <div className="sidebar-header text-2xl font-bold font-sans text-slate-900 ml-3">
                    <h1>ADMIN PAGE</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="ml-1.5">
                    <SidebarGroupLabel className='font-sans text-[16px] font-bold text-slate-700'>Main Content</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="font-sansfont-medium text-[15px] text-slate-700">
                                        <a href={item.url} className="my-1.5">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
