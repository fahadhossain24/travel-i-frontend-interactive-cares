/* eslint-disable react/prop-types */

const UserInput = ({ label, name, inputType, customInputStyle, customLabelStyle, required, register, formState }) => {
    const isError = formState.errors[name];
    console.log(isError)
    return (
        <div>
            <label className={`${customLabelStyle} font-medium text-lg text-white `}>
                {label} {required && <span className='text-primary'>*</span>}
            </label><br />
            <input
                type={inputType || 'text'}
                className={`${customInputStyle}  w-[100%] mx-auto h-[25px] py-4 px-3 outline-primary border-[1px] border-black rounded-md mt-1 ${isError ? 'border-primary' : ''}`}
                {...register(name, { required: true })}
            />
            {isError && <p className='text-primary'>this field is required</p>}
        </div>
    );
};

export default UserInput;