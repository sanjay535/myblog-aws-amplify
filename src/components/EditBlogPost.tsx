'use client';
import React, { useState } from 'react';
import { initialContent, editorConfig } from '../components/EditorConfig';
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false,
});
const EditBlogPost = () => {
    const [data, setData] = useState(initialContent);

    return (
        <div
            className="App"
            style={{ maxWidth: editorConfig.width, margin: '0 auto' }}
        >
            <JoditEditor
                value={data}
                config={editorConfig}
                onChange={(value) => setData(value)}
                onBlur={(value, event) => console.log(event)}
            />
            <div
                className='bg-gray-300 p-4 jodit-wysiwyg'
                dangerouslySetInnerHTML={{ __html: data }}
            ></div>
        </div>
    );
}

export default EditBlogPost