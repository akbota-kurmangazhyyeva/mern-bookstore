import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        axios
            .get('http://localhost:5555/books/' + id)
            .then((response) => {
                setTitle(response.data.data.title);
                setAuthor(response.data.data.author);
                setPublishYear(response.data.data.publishYear);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            });
    },[]);
    const handleEditBook = () =>{
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);

        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then((response)=>{
                setLoading(false);
                navigate('/')
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
    }
  return (
    <div className='p-4'>
        <BackButton></BackButton>
        <h1 className='text-3xl my-4'>Edit Book</h1>
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
            <button onClick={handleEditBook} className='bg-green-500 text-white p-2 rounded-md'>Save</button>
        </div>
    </div>
  )
}

export default EditBook