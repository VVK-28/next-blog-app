// 'use client'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { assets, blog_data } from '@/Assets/assets'

// const page = () => {

//     const[image,setImage] = useState(false)

//   return (
//     <>
//         <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
//            <p className='text-xl'>Upload thumbnail</p> 
//            <label htmlFor="image">
//                 <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={40} alt =''/>
//            </label>
//            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
//            <p className='text-xl mt-4'>Blog title</p>
//            <input className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />
//         </form> 
//     </>
//   )
// }

// export default page

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

const Page = () => {
    const [image, setImage] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const[data,setData] = useState({
        title:"",
        description:"",
        catgory:"startup",
        author:"Alex Bennett",
        authorImg:"/author_img.png"
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);
    }

    // ✅ Yeh ensure karega ki preview sirf client pe render ho
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <form className="pt-5 px-5 sm:pt-12 sm:px-16">
            <p className="text-xl">Upload thumbnail</p>
            <label htmlFor="image">
                {isClient && (
                    <Image
                        className="mt-4"
                        src={image ? URL.createObjectURL(image) : assets.upload_area}
                        width={140}
                        height={40}
                        // ye niche vali line daali hai chatgpt se
                        
                        style={{height:'auto'}} 
                        alt="Upload preview"
                    />
                )}
            </label>
            <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
                required
            />
            <p className='text-xl mt-4'>Blog title</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />
            <p className='text-xl mt-4'>Blog Description</p>
            <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='write content here' rows={6} required />
            <p className ='text-xl mt-4'>Blog category</p>
            <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br />
            <button type="submit" className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
        </form>
    );
};

export default Page;
