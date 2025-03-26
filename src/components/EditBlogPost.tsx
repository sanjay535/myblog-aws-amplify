'use client';
import React, { useState } from 'react';
import { initialContent, editorConfig } from '../components/EditorConfig';
import dynamic from 'next/dynamic';
import { Divider } from '@aws-amplify/ui-react';

const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
});
const EditBlogPost = () => {
    const [data, setData] = useState(initialContent);

    return (
        <div className="bg-white p-4 mx-5 grid grid-cols-2 gap-4">
            <div className=' p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <h2 className='text-lg font-semibold'>Editor</h2>
                <Divider orientation='horizontal' className='my-2' />
                <JoditEditor
                    value={data}
                    config={editorConfig}
                    onChange={(value) => setData(value)}
                    onBlur={(value, event) => console.log(event)}
                />
            </div>
            <div className=' p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <h2 className='text-lg font-semibold'>Preview</h2>
                <Divider orientation='horizontal' className='my-2' />
                <div
                    className='bg-white p-4 jodit-wysiwyg'
                    dangerouslySetInnerHTML={{ __html: data }}
                ></div>
            </div>
        </div>
    );
}

export default EditBlogPost