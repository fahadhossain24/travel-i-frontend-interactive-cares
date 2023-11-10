import { ShimmerText } from 'react-shimmer-effects';
import banner1 from '../../images/banner/banner6.jpg';
import { searchQuery } from '../../utils/searchQueryData';
import { useState } from 'react';
import Modal from '../../utils/Modal';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchData, setSearchData] = useState({});
    const { register, handleSubmit } = useForm();

    const hanldeContinueBooking = (data) => {
        setSearchData(data);
        if (Object.values(data).filter(item => item !== 'none').length !== 0) {
            setModalIsOpen(true);
        } else {
            toast.error('Please select necessary fields!');
        }
    };

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className='relative'>
            <div className='w-full sm:h-[200vh] md:h-[100vh]'>
                <img src={banner1} alt="slider image" className='w-full h-full brightness-50' />
            </div>
            <div className='absolute top-[30%] left-[10%] right-[10%] md:left-[5%] md:right-[5%]'>
                <h2 className='text-4xl md:text-6xl font-bold text-primary'>Experience Is Far More Valuable Than Money Will Ever Be </h2>
                <ShimmerText line={1} variant="primary" className='mt-2' />
            </div>
            <div className='absolute top-[65%] left-[10%] right-[10%] md:left-[5%] md:right-[5%] text-white'>
                <div className='flex flex-col md:flex-row gap-3 items-end justify-center'>
                    {searchQuery.map((item, index) => (
                        <div key={index} className='w-full md:w-[25%]'>
                            <h2 className='text-xl md:text-lg font-semibold'>{item.lebel}</h2>
                            <select
                                {...register(item.name)}
                                name={item.name}
                                id=""
                                className='w-full py-2 px-3 outline-primary border-2 border-primary rounded-md mt-2 text-secondary text-md font-semibold'
                            >
                                <option value="none" disabled>
                                    {item.placeholderOption}
                                </option>
                                {item.options.map((item, index) => (
                                    <option key={index} value={item.value} className='font-semibold'>
                                        {item.option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <button
                        onClick={handleSubmit(hanldeContinueBooking)}
                        type='button'
                        className='bg-primary h-[40px] md:h-[50px] px-2 md:px-4 rounded-md font-semibold hover:bg-[#6e2665] mt-2 md:mb-[2px]'
                    >
                        Continue Booking
                    </button>
                </div>
            </div>
            <Modal
                modalInfo={{
                    modalIsOpen,
                    closeModal,
                    className: 'w-full md:w-[40%] h-[70%] mx-auto mt-[7%] md:mt-[10%] border-2 p-2 border-primary outline-none bg-[#ddd]',
                    searchData,
                }}
            />
        </div>
    );
};

export default Home;
