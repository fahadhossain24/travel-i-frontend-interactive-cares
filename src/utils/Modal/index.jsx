/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactModal from "react-modal";

const Modal = ({ modalInfo }) => {

    const { modalIsOpen, closeModal, className, searchData } = modalInfo;
    const {register, handleSubmit} = useForm()

    const formSubmit = (data) => {
        data.destination = searchData.destination;
        data.type = searchData.type;
        data.date = searchData.date
        localStorage.setItem('bookingData', JSON.stringify(data));206.+366.610
    }

    const handleBookingDone = () => {
        closeModal();
        toast.success('Your booking submitted')
    }

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={className}
            contentLabel="Example Modal"
        >

            <button onClick={closeModal} className="w-full flex justify-end ]"><Icon icon="tabler:x" className="text-4xl hover:bg-[#f75151] p-2" /></button>
            <div className="px-5 text-2xl font-semibold">Booking Informations</div>
            <div>
                <h2 className="px-5 mt-2 font-semibold text-green text-[17px]">You booked for {searchData.destination} at {searchData.date} typed {searchData.type}</h2>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="mt-5 px-5">
                    <label htmlFor="name" className="text-lg font-semibold text-[#535353]">Full Name</label><br />
                    <input type="text" name="name" id="name" placeholder="Your Full Name" className="py-2 px-4 text-lg w-full rounded-lg mt-1 outline-primary" {...register('name')}/>
                </div>
                <div className="mt-2 px-5">
                    <label htmlFor="name" className="text-lg font-semibold text-[#535353]">Email Address</label><br />
                    <input type="text" name="name" id="name" placeholder="Enter active email address" className="py-2 px-4 text-lg w-full rounded-lg mt-1 outline-primary"  {...register('email')}/>
                </div>
                <div className="mt-2 px-5">
                    <label htmlFor="name" className="text-lg font-semibold text-[#535353]">Phone Number</label><br />
                    <input type="text" name="name" id="name" placeholder="Enter active phone number" className="py-2 px-4 text-lg w-full rounded-lg mt-1 outline-primary"  {...register('phone')}/>
                </div>
                <input type="submit" value="Done" onClick={handleBookingDone} className="mx-auto block mt-2 rounded-md font-semibold text-center px-5 bg-primary py-1 cursor-pointer hover:bg-[#d349c1]"/>
            </form>
        </ReactModal>
    );
};

export default Modal;