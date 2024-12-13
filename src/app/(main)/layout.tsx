import React from "react";


export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
<>
        <section className="flex justify-center">
            {children}
        </section>
</>
    );
}