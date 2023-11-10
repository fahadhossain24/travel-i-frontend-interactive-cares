import desImg2 from '../../images/banner/banner2.jpg'
import desImg3 from '../../images/banner/banner3.jpg'
import desImg4 from '../../images/banner/banner4.jpg'
import desImg5 from '../../images/banner/banner1.jpg'
import { Icon } from '@iconify/react';

const Destination = () => {
    return (
        <div className='w-full h-[100vh] '>
            <div className='flex items-center justify-center '>
                <input type="search" name="destination" id="" className='outline-primary py-1 px-2 border-2 border-primary mt-2 rounded-lg w-[30%]' placeholder='Search your favorite place' />
                <button className='cursor-pointer'><Icon icon="ic:baseline-search" className=' bg-primary w-[35px] h-[35px] p-2 mt-2 rounded-md'/></button>
            </div>
            <div className='w-[40%] h-[40%] mx-auto mt-5'>
            <iframe  width="500" height="270" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=QhwSSmCNrbrXDZ-b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='w-[70%] h-[30%] flex gap-3 mt-5 mx-auto '>
                <img src={desImg5} alt="" className='w-[25%] h-full' />
                <img src={desImg2} alt="" className='w-[25%] h-full' />
                <img src={desImg3} alt="" className='w-[25%] h-full' />
                <img src={desImg4} alt="" className='w-[25%] h-full' />
            </div>
        </div>
    );
};

export default Destination;