import React, { useState, useEffect } from 'react';

export const Comments = () => {

    const [comment, setComment] = useState('');
    const [user, setUser] = useState({});

    useEffect(() =>{
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])
    console.log(comment)
    console.log(user)
    return (
        <div className='flex flex-col gap-2 items-center w-full bg-gray0'>
            <h2 className='text-3xl tracking-wide'>LEAVE A COMMENT</h2>
            <p>Leave us your opinion</p>
            <input className='w-2/5 p-2' type='text' placeholder='Write a comment' onChange={(e) => setComment(e.target.value)}></input>
        </div>
    )
}
