import {Post} from '@/components';
import posts from '@/content/userpost';

const Discussion = ({ className }) => {
  return (
    <section
      className={` bg-blue-100 flex-grow w-6/12 p-2 xl:p-2 h-[calc(100vh-30px)] ${className}`}
    >
<h1 className='hidden heading-primary md:block bg-blue-100 text-red-500 font-bold border border-indigo-200 m-4'style={{
      width: '22%',
      background: ' #E5E4E2',
      boxShadow:  '2px 1px 5px #747c87,-1px -1px 5px #ffffff'
    }}>DISCUSSION FOURM
</h1>

        <div className=' h-[calc(100vh-250px)] xs:h-[calc(100vh-100px)] md:h-[calc(100vh-80px)] py-1 space-y-1 overflow-y-scroll'>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      
    </section>
  );
};

export default Discussion;
