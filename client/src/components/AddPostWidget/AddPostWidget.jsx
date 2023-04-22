import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/features/post/postSlice';
import './addPostWidget.css';

export const AddPostWidget = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = () => {
        try {
            const data = new FormData();
            data.append('title', title);
            data.append('text', text);
            data.append('image', image);
            dispatch(createPost(data));
            navigate('/home');
        } catch (error) {
            console.log(error)
        }
    };

    const clearFormHandler = () => {
        setText('')
        setTitle('')
    };

    return (
        <div className='addPostWidWrapper'>
            <form className='addPostWidForm' onSubmit={(e) => e.preventDefault()}>
                <label className='addPostWidLabel'>
                    Add image
                    <input type="file" className='hidden' onChange={(e) => setImage(e.target.files[0])} />
                </label>
                <div className='addPostWidBoxImg'>
                    {image && (
                        <img className='addPostWidImg' src={URL.createObjectURL(image)} alt="" />
                    )}
                </div>
                <input className='addPostWidInput' type="text" placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className='addPostWidTextarea' placeholder='Text...' value={text} onChange={(e) => setText(e.target.value)} />
                <div className='addPostWidBtnBox'>
                    <button className='addPostWidBtn' onClick={submitHandler}>Add post</button>
                    <button className='addPostWidBtnClean' onClick={clearFormHandler}>Cancel</button>
                </div>
            </form>
        </div>
    )
};
