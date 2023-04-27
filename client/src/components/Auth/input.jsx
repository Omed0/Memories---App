import { MdVisibility, MdVisibilityOff } from "react-icons/md"


export default function input({ name, type, placeholder, handleChange, handleShowPassword, className }) {
    return (
        <div className='relative grid xl:grid-cols-1'>
            <input
                className={`relative w-11/12 p-2 border-2 border-gray-400 mx-auto rounded${className}`}
                name={name}
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <>
                {name === 'password' ? (
                    <div onClick={handleShowPassword} className='absolute top-2 right-8'>
                        {type === 'password' ? <MdVisibility color="gray" size={26} /> : <MdVisibilityOff color="gray" size={26} />}
                    </div>
                ) : name === 'confirmPassword' ? (
                    <div onClick={handleShowPassword} className='absolute top-2 right-8'>
                        {type === 'password' ? <MdVisibility color="gray" size={26} /> : <MdVisibilityOff color="gray" size={26} />}
                    </div>
                ) : null}
            </>
        </div>
    )
}
