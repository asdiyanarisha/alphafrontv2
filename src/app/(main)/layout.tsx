import React from "react";
import Navbar from "@/components/sections/navbar/navbar"


export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
<>
        <Navbar/>
        <section className="flex justify-center">
            {children}
        </section>
</>
    );
}