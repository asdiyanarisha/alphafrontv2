'use client'

import { useParams } from "next/navigation";
import React from "react";

const DetailBlog: React.FC = () => {
    const params = useParams();
    const { slug } = params;

    return (
        <h1>Inside Bro {slug}</h1>
    )
};

export default DetailBlog;