import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postComment } from '../methods/index.js';
import { logIn } from './../actions/index.js';

import { Comments } from './Comments.js';

export const CommentPost = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [comment, setComment] = useState('');
    // const [user, setUser] = useState({});
    const [error, setError] = useState(false);

    useEffect(() =>{
        // When the user see the error message and log in, the message is gone.
        setError(false);
    }, [user])
    
    async function handleComment(user, comment){
        setComment('');
        if(user != null){
            await postComment(user, comment);
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <div className='flex flex-col items-center w-full bg-gray0 py-12'>
            <h2 className='text-blue text-4xl tracking-wide'>LEAVE A COMMENT</h2>
            <p className='text-brown-dark text-xl mt-2'>Leave a review if you want</p>
            <input className='w-2/5 p-4 text-md my-8 focus:outline-0' type='text' placeholder='Write a comment' onChange={(e) => setComment(e.target.value)} value={comment}></input>
            {error && <p className='text-blue'>You need to <button className='bg-violet-light p-2 border-2 border-violet-light hover:bg-gray0 hover:border-violet-light duration-200' onClick={() => dispatch(logIn())}>log in</button> to comment here.</p>}
            <button className='border-1 border-gray p-4 text-xl mt-4 hover:bg-black hover:text-white0 duration-200' onClick={() => handleComment(user, comment)}>COMMENT</button>
            <Comments comment={comment}/>
        </div>
    )
}
