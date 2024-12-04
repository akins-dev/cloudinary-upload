"use client";

import { CldImage, CldUploadButton } from 'next-cloudinary';

import { useState } from 'react';
import { Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';


const CustomizedCloudinaryWidget = () => {
    // Make this any array to get multiple uploads
    const [resource, setResource] = useState<any>();

    return (

        <>
            <CldUploadButton
                onSuccess={(result) => {
                    setResource(result?.info);  // { public_id, secure_url, etc }
                }}
                options={{ sources: ['local', 'camera',] }}
                // make sure your preset is set to unsigned in your cloudinary settings
                uploadPreset="replace_with_your_reset"
            >
                <Button >
                    <Upload />
                    Upload
                </Button>
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