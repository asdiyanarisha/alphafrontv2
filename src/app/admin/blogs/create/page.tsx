'use client'

import React, {useMemo, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import ReactQuill from 'react-quill-new';
import { TagsInput } from "react-tag-input-component";
import 'react-quill/dist/quill.snow.css';
import './styles.css'



const CreateBlogs: React.FC = () => {
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


    const [selected, setSelected] = useState(["golang"]);
    const [value, setValue] = useState('');

    console.log(value);

    return (
        <div className="w-full relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8">
            <Card className="font-sans">
                <CardHeader className="flex flex-row justify-between p-6">
                    <div>
                        <CardTitle>
                            <h1 className="text-3xl font-bold pl-3">Create a Post</h1>
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
                                               placeholder="Event title"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Content</label>
                                        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Tags</label>
                                        {/*<input type="text"*/}
                                        {/*       className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"*/}
                                        {/*       placeholder="Optional"/>*/}
                                        <TagsInput value={selected} onChange={setSelected} classNames={{tag: 'input-tag'}}/>

                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button
                                        className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none ring-1 shadow-md">
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none shadow-md">Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};



export default CreateBlogs;