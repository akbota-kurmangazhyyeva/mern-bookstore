import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack'

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar();

    const handleSaveBook = () =>{
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);

        axios
            .post('http://localhost:5555/books', data)
            .then((response)=>{
                setLoading(false);
                enqueueSnackbar('Book created successfully', {variant: 'success'});
                navigate('/')
            })
            .catch((error)=>{
                console.log(error);
                enqueueSnackbar('Failed to create book', {variant: 'error'});
                setLoading(false);
            })
    }
  return (
    <div className='p-4'>
        <BackButton></BackButton>
        <h1 className='text-3xl my-4'>Create Book</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border border-sky-400 rounded-xl p-4'>
            <div className='my-4'>
                <label htmlFor='title' className='text-xl mr-4 text-gray-500'>Title:</label>
                <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='border border-sky-400 rounded-md p-2'/>
            </div>
            <div className='my-4'>
                <label htmlFor='author' className='text-xl mr-4 text-gray-500'>Author:</label>
                <input type='text' id='author' value={author} onChange={(e)=>setAuthor(e.target.value)} className='border border-sky-400 rounded-md p-2'/>
            </div>
            <div className='my-4'>
                <label htmlFor='publishYear' className='text-xl mr-4 text-gray-500'>Publish year:</label>
                <input type='text' id='publishYear' value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='border border-sky-400 rounded-md p-2'/>
            </div>
            <button onClick={handleSaveBook} className='bg-green-500 text-white p-2 rounded-md'>Save</button>
        </div>
    </div>
  )
}

export default CreateBook