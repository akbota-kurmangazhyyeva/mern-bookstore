import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const {id} = useParams();   
    const navigate = useNavigate();
    const handleDeleteBook = () =>{
        setLoading(true);
        axios
            .delete('http://localhost:5555/books/' + id)
            .then(()=>{
                setLoading(false);
                navigate('/')
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            }
        )
    };
  return (
    <div className='p-4'>
        <BackButton></BackButton>
        <h1 className='text-3xl my-4'>Delete Book</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border border-sky-400 rounded-xl p-4'>
            <div className='my-4'>
                <p>Are you sure you want to delete this book?</p>
            </div>
            <div className='my-4'>
                <button onClick={handleDeleteBook} className='bg-red-500 text-white p-2 rounded-md'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteBook