import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const router = useRouter();


  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Access the environment variable

  const instance = axios.create({
    baseURL: baseURL
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

       // Extract the username from the query parameters
      const { username } = router.query;

      // Append the username to the upload URL
      const uploadURL = `/api/upload?username=${username}`;


      // Reset the selected file and preview URL
      instance.post(uploadURL, formData)
        .then((response) => {
          // Handle the response from the server
          console.log('Upload success:', response.data);
          // Extract the username from the query parameters
          

          // Navigate back to the profile page with the username parameter
          router.push(`/page/Profile?username=${username}`);
        })
        .catch((error) => {
          // Handle any errors that occur during the upload
          console.error('Upload error:', error);
        })
        .finally(() => {
          // Reset the selected file and preview URL
          setSelectedFile(null);
          setPreviewURL('');
        });
    }
  };

  return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-gray-100 shadow">
          <h2 className="text-2xl text-black font-bold mb-4">Upload File</h2>
          <div>
            <input type="file" onChange={handleFileChange} className='text-black' />
            {selectedFile && (
              <div>
                <img src={previewURL} alt="File Preview" className="my-4" />
                <p>{selectedFile.name}</p>
                <p>{selectedFile.size} bytes</p>
              </div>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
  );
};

export default FileUpload;
