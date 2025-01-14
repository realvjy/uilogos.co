'use client';

import React, { useState, useEffect } from 'react';

// DirectoryTraversal component
const DirectoryTraversal = ({ directoryData }) => {
    // State to store processed image names
    const [imageNames, setImageNames] = useState([]);

    // Function to traverse through directory data
    const traverseDirectory = (data) => {
        const names = [];

        const traverse = (node) => {
            // If current node is a file and it's an image
            if (node.type === 'file' && isImageFile(node.name)) {
                names.push(node.name);
                console.log('Found image:', node.name);
            }

            // If current node is a directory, traverse its children
            if (node.type === 'directory' && node.children) {
                console.log('Entering directory:', node.name);
                node.children.forEach(child => traverse(child));
            }
        };

        // Helper function to check if file is an image
        const isImageFile = (filename) => {
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
            return imageExtensions.some(ext =>
                filename.toLowerCase().endsWith(ext)
            );
        };

        // Start traversal from root
        traverse(data);
        return names;
    };

    useEffect(() => {
        if (directoryData) {
            const names = traverseDirectory(directoryData);
            setImageNames(names);
        }
    }, [directoryData]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Found Images:</h2>
            <ul className="list-disc pl-6">
                {imageNames.map((name, index) => (
                    <li key={index} className="mb-2">{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DirectoryTraversal;