"use client";

import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';


const CloudinaryWidget = () => {
    const [resource, setResource] = useState<any>();

    return (

        <>
            <CldUploadButton
                onUpload={(result) => {
                    setResource(result?.info);  // { public_id, secure_url, etc }
                }}
                options={{ sources: ['local', 'camera',] }}
                uploadPreset="hms_preset"
            />
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

export default CloudinaryWidget