'use client'

import React, {useMemo, useState, useEffect} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { TagsInput } from "react-tag-input-component";
import {Input} from "@/components/ui/input";
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import dynamic from "next/dynamic";
import {Button} from "@/components/ui/button";
import {GetBlogById, StorePostBlog} from "@/api/blog";
import {useToast} from "@/hooks/use-toast";
import {cn} from "@/lib/utils";
import {redirect, useParams} from "next/navigation";
import {ToasterCustom} from "@/components/ui/toaster";

export interface BodyFormData {
    title: string;
    content: string;
    tags: string[];
    file: File | null;
}


const EditBlogs: React.FC = () => {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill-new'), { ssr: false }),[]);
    const { toast } = useToast()
    const params = useParams();
    const id = params.id;

    let selectLocalImage;
    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['image', 'code-block']
            ],
            handlers: {
                image: selectLocalImage,
            }
        }
    }), [selectLocalImage])

    const [formData, setFormData] = useState<BodyFormData>({
            content: "", file: null, tags: [], title: ""}
    );

    useEffect(() => {
        const fetchDataById = async () => {
            GetBlogById(id).then(r => {
                console.log(r.data.title);
                // setTimeout(() => {
                //     setBlogData({
                //         title: r.data.title,
                //         content: r.data.content,
                //         imageUrl: process.env.NEXT_PUBLIC_API_HOST + r.data.url_image,
                //         tags: r.data.tags,
                //         createdAt: Moment(r.createdAt).format("DD MMM YYYY HH:mm"),
                //     });
                //
                //     // setLoading(false);
                // }, 350);

                setFormData({
                    file: r.data.file, tags: r.data.tags,
                    title: r.data.title,
                    content: r.data.content
                })
            })
        };

        fetchDataById().then();

    }, [id]);

    const onSubmit = () => {
        StorePostBlog(formData).then(
            async function () {
                toast({
                    title: "success",
                    description: "Edit a post is success!",
                    variant: "default",
                    duration: 3000,
                    className: cn(
                        'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                    ),
                })

                setTimeout(() => {
                    redirect('/admin/blogs');
                }, 4000);
            }
        );
    }

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === 'title') {
            setFormData({...formData, title: value});
        }
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                file: e.target.files![0]
            }));
        }
    }

    const handleContent = async (value: string) => {
        setFormData({...formData, content: value});
    }

    const handleTags = async (values: string[]) => {
        setFormData({...formData, tags: values});
    }

    return (
        <div className="w-full relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8">
            {
                formData.content ? (
                    <Card className="font-sans">
                        <CardHeader className="flex flex-row justify-between p-6">
                            <div>
                                <CardTitle>
                                    <h1 className="text-3xl font-bold pl-3">Edit a Post</h1>
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="px-4 py-10 md:mx-0 sm:p-3">
                                <div className="mx-auto">
                                    <div className="divide-y divide-gray-200">
                                        <div
                                            className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Title</label>
                                                <input type="text"
                                                       className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                       placeholder="Event title" onChange={handleInputChange} name="title" value={formData.title}/>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Content</label>
                                                <ReactQuill theme="snow" value={formData.content} onChange={handleContent} modules={modules}/>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Header Image</label>
                                                <div>
                                                    <Input type="file"
                                                           className="h-10 px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                           onChange={handleFileChange} name="file"/>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Tags</label>
                                                <TagsInput value={formData.tags} onChange={handleTags} classNames={{tag: 'input-tag'}}/>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center space-x-4">
                                            <Button
                                                className="bg-white flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none ring-1 shadow-md">
                                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                                Cancel
                                            </Button>
                                            <Button
                                                className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none shadow-md" onClick={onSubmit}>Edit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <p>Loading...</p>
                )
            }
            <ToasterCustom />
        </div>
    )
};



export default EditBlogs;