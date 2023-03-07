import React, { useState, useEffect } from 'react';

import { getComments } from '../methods/index.js';

export const Comments = ({ comment }) => {

    const [comments, setComments] = useState([]);

    useEffect(() =>{
        if(comment === ''){
            showComments()
        }
    }, [comment])
    
    async function showComments(){
        setComments(await getComments());
    }

    return (
        <div className='flex flex-col gap-4 items-center w-[40vw] bg-gray0 my-14'>
            {comments.length > 0 ?
                comments.map((c, i) => 
                    <div className='flex w-full p-2' key={i}>
                        <img className='rounded-full' src={c.userImg} alt={`profile picture of ${c.userName}`} />
                        <div className='flex flex-col ml-4 gap-4'>
                            <div className='flex gap-2 items-center text-sm'>
                                <p className='text-black bg-brown p-2 rounded'>{c.userName}</p>
                                <p className='text-green'>{c.date}</p>
                            </div>
                            <p className='w-max p-2 border-b-1 border-gray'>{c.comment}</p>
                        </div>
                    </div>
                )
            :
                <p>No comments yet...</p>
            }
        </div>
    )
}
