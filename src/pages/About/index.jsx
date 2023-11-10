import aboutImg from '../../images/banner/banner8.jpg'
const About = () => {
    return (
        <div className='h-[100vh] mt-[8%] flex gap-3'>
            <div className='w-[40%] h-[50%] pl-[5%]'>
                <img src={aboutImg} alt="" className='w-full h-full'/>
            </div>
            <div className='w-[50%]'>
                <h2 className='text-3xl font-bold '>About the place</h2>
                <p className='font-semibold text-[#616161] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tenetur numquam et ipsa iusto possimus ipsum quaerat perferendis placeat quam. Quaerat repellat, nostrum maiores commodi odio quia vitae perferendis nihil, beatae optio autem ducimus, a atque modi provident? Maiores reiciendis perferendis quas expedita itaque impedit laudantium provident voluptas totam, non minus placeat quod ex fugiat voluptate nulla est rem officiis. Quaerat repellat, nostrum maiores commodi odio quia vitae perferendis nihil, beatae optio autem ducimus, a atque modi provident? Maiores reiciendis perferendis quas expedita itaque impedit laudantium provident voluptas totam, non minus placeat quod ex fugiat voluptate nulla est rem officiis. Quaerat repellat, nostrum maiores commodi odio quia vitae perferendis nihil, beatae optio autem ducimus, a atque modi provident? Maiores reiciendis perferendis quas expedita itaque impedit laudantium.</p>
            </div>
        </div>
    );
};

export default About;