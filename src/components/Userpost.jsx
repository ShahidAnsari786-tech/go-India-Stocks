import { IoMdHeart } from "react-icons/io";
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { Card, UserProfile } from '.';
import { convertToK, timeSince } from '@/time/time';
import Image from 'next/image';

const Post = ({ time, user, post, actions }) => {
  return (
    <Card>
      
      <header className='flex justify-end ml-auto text-sm font-semibold text-blue-600'>
        {timeSince(time)}
      </header>
      
      <figcaption className='flex gap-2'>
        <div className='w-[50px]'>
          <UserProfile src={user.img} />
        </div>
        <div className='p-2 py-1 space-y-2 md:flex-grow'>
          <h3 className='font-bold capitalize'>{user.name}</h3>

          <p>{post.caption}</p>

          </div>
      </figcaption>
    
      <figure className='w-full'>
        {post.media ? (
          <Image
            src={post.media}
            className='rounded-lg'
            alt='post'
            height={300}
            width={800}
          />
        ) : (
          post.text
        )}
      </figure>
      <footer className='flex justify-between mt-4 text-sm font-semibold flex-wrap'>
   
    <div className='post-btn flex items-center mb-1 mr-1'>
        <button>
            <IoMdHeart  className='md:text-xl text-red-500' />
        </button>
        <span className='ml-1'>{convertToK(actions.likes)}</span>
    </div>
    
    <div className='post-btn flex items-center mb-1 mr-1'>
        <FiEye className='md:text-xl' />
        <span className='ml-1'>
            {convertToK(actions.views)}
        </span>
    </div>
    
    <div className='post-btn flex items-center mb-1 mr-1'>
        <BiComment className='md:text-xl' />
        <span className='ml-1'>
            {convertToK(actions.comments)} Comments
        </span>
    </div>
    
    <div className='post-btn flex items-center mb-1 mr-1'>
        <BiShareAlt className='md:text-xl' />
        <span className='ml-1'>
         Share
        </span>
    </div>
</footer>


    </Card>
  );
};

export default Post;
