import { Appbar } from "../Components/Appbar";

import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div className="">
      <Appbar />
      <div className="max-w-2xl mx-auto p-4 mt-5">
        <div className="relative bg-white shadow-sm">
          {/* Title input */}
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="w-full p-4 text-5xl font-extralight placeholder-slate-400 focus:outline-none focus:ring-0"
          />

          {/* Textarea for content */}
          <div className="relative">
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="Tell your story..."
              className="w-full p-4 font-extralight leading-relaxed placeholder-slate-400 resize-none overflow-hidden focus:outline-none focus:ring-0 min-h-[200px]"
            />
          </div>
        </div>
        <button
          onClick={async() => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
              title,
              content,
            }, {
                headers:{
                    Authorization : localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)
          }}
          type="submit"
          className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-green-800"
        >
          Publish post
        </button>

        {/* Word count */}
        {/* <div className="mt-2 text-sm text-gray-500 text-right">
          {content.split(/\s+/).filter(Boolean).length} words
        </div> */}
      </div>
    </div>
  );
};


// export const Publish = () => {
//   return (
//     <div>
//       <Appbar />
//       <div className="flex justify-center">
//             <div className="max-w-screen-lg w-full pt-8">
//                <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
//                border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
//                placeholder="Write your thoughts here..."></textarea>
//             </div>
//         </div>

//       <TextEditor />
//     </div>
//   );
// };

// function TextEditor() {
//   return (
//     <div className="w-full b-4">
//         <div className="flex items-center justify-center border">
//             <div className="py-2 bg-white rounded-b-lg w-full">
//                 <label className="sr-only">Publish Post</label>
//             </div>
//         </div>
//     </div>
//   );
// }
