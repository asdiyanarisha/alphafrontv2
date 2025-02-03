import type {Metadata} from "next";
import "./styles.css";

export const metadata: Metadata = {
    title: "Blogs",
    description: "",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        children
    )
}