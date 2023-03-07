import React, { useState, useEffect } from 'react';

import { postComment } from '../methods/index.js';

import { Comments } from './Comments.js';

export const CommentPost = () => {

    const [comment, setComment] = useState('');
    const [user, setUser] = useState({});

    useEffect(() =>{
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])
    
    async function handleComment(user, comment){
        await postComment(user, comment);
        setComment('');
    }

    return (
        <div className='flex flex-col items-center w-full bg-gray0 py-12'>
            <h2 className='text-blue text-4xl tracking-wide'>LEAVE A COMMENT</h2>
            <p className='text-violet text-xl mt-2'>Leave us your opinion</p>
            <input className='w-2/5 p-4 text-md my-8 focus:outline-0' type='text' placeholder='Write a comment' onChange={(e) => setComment(e.target.value)} value={comment}></input>
            <button className='border-1 border-gray p-4 text-xl hover:bg-blue hover:text-violet-light duration-200' onClick={() => handleComment(user, comment)}>COMMENT</button>
            <Comments comment={comment}/>
        </div>
    )
}
