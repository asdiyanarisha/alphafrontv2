import React from "react";
import Navbar from "@/components/sections/navbar/navbar";
import Footer from "@/components/sections/footer/footer";


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
    <Footer/>
</>
    );
}