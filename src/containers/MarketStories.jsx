import marketStories from '@/content/market-stories';
import Image from 'next/image';
import Link from 'next/link';

const MarketStories = ({ className }) => {
  return (
    <section className={`relative flex-grow w-3/12 bg-blue-100 p-2 ${className}`}>
      <h1 className='hidden heading-primary md:block font-bold text-red-500 mt-5  border border-indigo-200 w-40'style={{
      width: '35%',
      background: ' #E5E4E2',
      boxShadow:  '2px 1px 5px #747c87,-1px -1px 5px #ffffff'
    }}>MARKET STORIES</h1>

      <div className='grid h-[calc(100vh-250px)] xs:h-[calc(100vh-100px)]  md:h-[calc(100vh-80px)]  py-8 gap-5 overflow-scroll m-3 grid-cols-fluid'>
        {marketStories.map(({ img, text, id, url }) => (
          <Link
            key={id}
            href={url}
            target='_blank'
            className='group relative h-[200px] cursor-pointer overflow-hidden rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500'style={{
              borderRadius: '12px',
              background: ' #DBEAFE',
              boxShadow:  '2px 2px 7px #747c87,-1px -1px 9px #ffffff'
            }}
          >
            <Image
              src={img}
              alt={url}
              width={300}
              height={300}
              className='object-cover w-full h-full'
            />
            <div className='absolute inset-0 z-10 flex items-end p-3 px-5 text-white to-black-black/70 bg-gradient-to-t from-black/70 hover:from-purple-700 group-focus:from-blue-700'>
              <h4 className='mt-5 text-sm'>{text}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MarketStories;
