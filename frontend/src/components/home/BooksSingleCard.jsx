import {Link} from 'react-router-dom'
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksSingleCard = ({book}) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 m-4 relative hover:shadow-xl">
    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear}
    </h2>
    <h4 className='my-2 text-gray-500'>{book._id}</h4>
    <div className='flex books-center justify-start gap-x-2'>
        <PiBookOpenTextLight className='text-2xl text-red-300'/>
        <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex books-center justify-start gap-x-2'>
        <BiUserCircle className='text-2xl text-red-300'/>
        <h2 className='my-1'>{book.author}</h2>
    </div>
    <div className='flex books-center justify-between gap-x-2 p-4 mt-4'>
        <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className='text-blue-500 text-2xl cursor-pointer'/>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className='text-green-500 text-2xl cursor-pointer'/>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-red-500 text-2xl cursor-pointer'/>
        </Link>
        
    </div>
    </div>  
)
}

export default BooksSingleCard