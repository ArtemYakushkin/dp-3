import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../../redux/features/post/postSlice';
import '../AddPostWidget/addPostWidget.css';
import axios from '../../utils/axios';

export const EditPostWidget = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [newImage, setNewImage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`);
        setTitle(data.title);
        setText(data.text);
        setOldImage(data.imgUrl);
    }, [params.id]);

    const submitHandler = () => {
        try {
            const updatedPost = new FormData();
            updatedPost.append('title', title);
            updatedPost.append('text', text);
            updatedPost.append('id', params.id);
            updatedPost.append('image', newImage);
            dispatch(updatePost(updatedPost));
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    };

    const clearFormHandler = () => {
        setTitle('')
        setText('')
    }

    useEffect(() => {
        fetchPost()
    }, [fetchPost]);

    return (
        <div className='addPostWidWrapper'>
            <form className='addPostWidForm' onSubmit={(e) => e.preventDefault()}>
                <label className='addPostWidLabel'>
                    Add image
                    <input
                        type="file"
                        className='hidden'
                        onChange={(e) => {
                            setNewImage(e.target.files[0])
                            setOldImage('')
                        }}
                    />
                </label>
                <div className='addPostWidBoxImg'>
                    {oldImage && (
                        <img className='addPostWidImg' src={`http://localhost:3002/${oldImage}`} alt="" />
                    )}
                    {newImage && (
                        <img className='addPostWidImg' src={URL.createObjectURL(newImage)} alt="" />
                    )}
                </div>
                <input className='addPostWidInput' type="text" placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea className='addPostWidTextarea' placeholder='Text...' value={text} onChange={(e) => setText(e.target.value)} />
                <div className='addPostWidBtnBox'>
                    <button className='addPostWidBtn' onClick={submitHandler}>Refresh</button>
                    <button className='addPostWidBtnClean' onClick={clearFormHandler}>Cancel</button>
                </div>
            </form>
        </div>
    )
};