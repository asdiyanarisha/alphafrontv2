import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

const MySkill = () => {
    return (
        <div className="lg:w-1/2 w-full my-20">
            <Card>
                <CardHeader>
                    <CardTitle className="font-sans scroll-m-20 text-4xl font-bold tracking-tight">My Skills</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 items-center justify-around py-10">
                        <div className="border rounded border-gray-200">
                            TEST
                        </div>
                        <div className="border rounded border-gray-200">
                            TEST
                        </div>
                        <div className="border rounded border-gray-200">
                            TEST
                        </div>
                        <div className="border rounded border-gray-200">
                            TEST
                        </div>
                    </div>

                </CardContent>
                <CardFooter className="flex justify-between">
                </CardFooter>
            </Card>
        </div>
    );
};

export default MySkill;