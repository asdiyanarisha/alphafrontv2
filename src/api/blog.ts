'use server'

import axiosInstance from "@/lib/axios";
import {BodyFormData} from "@/app/admin/blogs/create/page";
import { cookies } from 'next/headers'


export async function StorePostBlog (formDataRaw: BodyFormData) {
    const cookieStore = await cookies()
    const session = cookieStore.get('session');


    const bodyFormData = new FormData();
    bodyFormData.append("title", formDataRaw.title);
    bodyFormData.append("content", formDataRaw.content);
    bodyFormData.append("tags", formDataRaw.tags.join(','));

    if (formDataRaw.file) {
        bodyFormData.append("file", formDataRaw.file);
    }

    return await axiosInstance.post("/blog",
        bodyFormData, {
        headers: {
            'Authorization': 'bearer ' + session?.value
        }
    }).then(async function (response) {
        return {code: response.status, status: "success", token: response.data.token};
    }).catch(function (err) {
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}


export async function EditPostBlog(id: string | undefined, formDataRaw: BodyFormData) {
    const cookieStore = await cookies()
    const session = cookieStore.get('session');


    const bodyFormData = new FormData();
    bodyFormData.append("title", formDataRaw.title);
    bodyFormData.append("content", formDataRaw.content);
    bodyFormData.append("tags", formDataRaw.tags.join(','));

    // if (formDataRaw.file) {
    //     bodyFormData.append("file", formDataRaw.file);
    // }

    console.log(bodyFormData);

    return await axiosInstance.put("/blog/post/"+id,
        bodyFormData, {
        headers: {
            'Authorization': 'bearer ' + session?.value
        }
    }).then(async function (response) {
        console.log(response);
        return {code: response.status, status: "success"};
    }).catch(function (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}


export async function GetPublicBlog(slug: string | Array<string> | undefined) {
    return await axiosInstance.get("/blog/public/"+slug, {}).
    then(async function (response) {
        return response.data;
    }).catch(function (err) {
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}

export async function GetBlogById(id: string | Array<string> | undefined) {
    const cookieStore = await cookies()
    const session = cookieStore.get('session');

    return await axiosInstance.get("/blog/post/"+id, {
        headers: {
            'Authorization': 'bearer ' + session?.value
        }
    }).
    then(async function (response) {
        return response.data;
    }).catch(function (err) {
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}

export async function GetPublicBlogs() {
    return await axiosInstance.get("/blog/public/", {}).
    then(async function (response) {
        return response.data;
    }).catch(function (err) {
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}

