'use client'

import {Input} from "@/components/ui/input";
import React, {useRef, useState} from "react";
import ReactCrop, {type Crop} from 'react-image-crop'
import Image from 'next/image'
import "./styles.css";
import 'react-image-crop/dist/ReactCrop.css'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogOverlay,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {X} from "lucide-react";

interface FileUpload {
    src?: string,
    croppedImageUrl?: string,
    image?: File,
    name: string,
}

interface DialogAction {
    isOpen: boolean,
}

const NikExtractorPage: React.FC = () => {
    const [file, setFile] = useState<FileUpload>({
        src: "",
        croppedImageUrl: "",
        image: undefined,
        name: ""
    });

    const [isOpen, setIsOpen] = useState<DialogAction>({
        isOpen: false,
    })

    const [count, setCount] = useState(0);
    const [crop, setCrop] = useState<Crop>()
    const imgRef = useRef<HTMLImageElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadFile = e.target.files?.[0] || undefined;
        console.log('before', file);
        console.log('uploadFile', uploadFile);

        const nameFile = uploadFile?.name ? uploadFile.name : ""
        const blob = new Blob([uploadFile!], { type: "text/plain" });

        setFile({src: URL.createObjectURL(blob), name: nameFile, image: uploadFile!});

        setCount(count + 1);
        setIsOpen({isOpen: true})
        console.log('after', file);
    };

    const processCropImage = () => {
        const canvas = document.createElement("canvas");
        const image = imgRef.current
        const scaleX = image!.naturalWidth / image!.width
        const scaleY = image!.naturalHeight / image!.height
        canvas.width = crop!.width;
        canvas.height = crop!.height;
        const ctx = canvas.getContext("2d");

        ctx!.drawImage(
            image!,
            crop!.x * scaleX,
            crop!.y * scaleY,
            crop!.width * scaleX,
            crop!.height * scaleY,
            0,
            0,
            crop!.width,
            crop!.height
        );

        canvas.toBlob(blob => {
            if (!blob) {
                return;
            }
            // blob.name = "newFile.jpeg";
            // window.URL.revokeObjectURL(this.fileUrl);
            const fileUrl = window.URL.createObjectURL(blob);
            setFile({src: file.src, croppedImageUrl: fileUrl!, name: file.name, image: file.image})
            console.log("File URL ", fileUrl);
        }, "image/jpeg");

        setIsOpen({isOpen: false});

        console.log("crop complete", crop, file, scaleX, scaleY);
    }

    const onCropComplete = (crop: Crop) => {
        console.log(crop);
    };

    return (
        <div className="flex justify-center mx-auto pt-10">
            <div className="flex flex-col items-center justify-center w-full">
                <Card className="w-[650px] content-center">
                    <CardHeader>
                        <CardTitle>KTP Extractor</CardTitle>
                        <CardDescription>Get detail information of your card</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Input type="file" className="box-shadow h-10 align-middle py-2" onChange={handleFileChange}/>
                                </div>

                                {!!file.croppedImageUrl && (
                                    <Image src={file.croppedImageUrl!} alt="image crop" width={600}
                                           height={500} sizes="max-height"/>
                                    )}

                                {count > 0 && (
                                    <Dialog open={isOpen.isOpen!} modal={false}>
                                        <DialogOverlay className="DialogOverlay"/>
                                        <DialogContent className="w-[1028px] max-h-[90vh] overflow-y-auto DialogContent min-w-fit min-h-fit">
                                            <DialogHeader>
                                                <DialogTitle>Crop Image</DialogTitle>
                                                <DialogDescription/>
                                            </DialogHeader>
                                            <DialogBody>
                                                <ReactCrop crop={crop} onChange={crop=> setCrop(crop)} ruleOfThirds onComplete={onCropComplete}>
                                                    <div className="flex flex-col items-center justify-center w-full">
                                                        <Image src={file.src!} ref={imgRef} alt="image crop" width={1028}
                                                               height={500} sizes="max-height"/>
                                                    </div>
                                                </ReactCrop>
                                            </DialogBody>
                                            <DialogPrimitive.Close onClick={() => {setIsOpen({isOpen: false})}} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                                                <X className="h-4 w-4" />
                                                <span className="sr-only">Close</span>
                                            </DialogPrimitive.Close>
                                            <DialogFooter>
                                                <Button className={"w-full"} onClick={processCropImage}>Crop</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                )}
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between space-x-2">
                        <Button variant="outline" className="w-1/4">Cancel</Button>
                        <Button className="w-3/4 ">Generate</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
    );
}

export default NikExtractorPage;