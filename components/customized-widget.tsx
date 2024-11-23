"use client";

import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';


const CustomizedCloudinaryWidget = () => {
    // Make this any array to get multiple uploads
    const [resource, setResource] = useState<any>();

    return (

        <>
            <CldUploadButton
                onUpload={(result) => {
                    setResource(result?.info);  // { public_id, secure_url, etc }
                }}
                options={{ sources: ['local', 'camera',] }}
                // make sure your preset is set to unsigned in your cloudinary settings
                uploadPreset="hms_preset"
                className='text-white bg-[#132096] text-center gap-x-2 w-[500px] py-2 rounded-full hover:bg-primary/80'
            >
                Upload File(s) - Less than 1000kb
            </CldUploadButton>
            {
                resource && (
                    <CldImage
                        width="250"
                        height="250"
                        src={resource?.public_id}
                        sizes="100vw"
                        alt="Image preview"
                    />
                )
            }
        </>

    )
}

export default CustomizedCloudinaryWidget;