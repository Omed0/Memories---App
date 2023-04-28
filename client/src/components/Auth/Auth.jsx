import { useState } from "react";
// import { GoogleLogin } from "@leecheuk/react-google-login"
import { GrSecure } from "react-icons/gr"
import Input from "./input";
import { useDispatch } from "react-redux"
import { signin, signup } from "../../actions/auth";


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();


  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData))
    } else {
      dispatch(signin(formData))
    }
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: 'AUTH', data: { result, token } })

  //     window.history.go('/');
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const googleFailure = (error) => {
  //   console.log(error)
  //   console.log("Google Sign In was unsuccessful. Try Again Later")
  // }

  return (
    <section className="w-4/12 min-w-[18rem] mx-auto mt-14 p-2 bg-slate-700 rounded-lg">
      <div className="flex flex-col items-center gap-1">
        <span className="bg-pink-600 mt-2 p-1 rounded-full"><GrSecure size={28} /></span>
        <h1 className="text-xl text-white">{isSignup ? 'Sign Up' : 'Sign In'}</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-3 mt-2 p-4 ">
        {isSignup &&
          <div className="px-2 grid grid-cols-2">
            <Input name="firstName" placeholder="First Name*" handleChange={handleChange} className="" />
            <Input name="lastName" placeholder="Last Name*" handleChange={handleChange} className="" />
          </div>
        }
        <Input name="email" placeholder="Email Address*" handleChange={handleChange} type="email" className="" />
        <Input name="password" placeholder="Password*" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} className="" />
        {isSignup &&
          <>
            <Input name="confirmPassword" placeholder="Repeat Password*" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} className="" />
          </>
        }
        <button type="submit" className="w-11/12 mx-auto p-2 bg-[#1D4ED8] mt-4 mb-6 text-white rounded">{isSignup ? "SIGN UP" : "SIGN IN"}</button>
        {/* <GoogleLogin
          clientId="742034412427-ohf5p6hpjp8fkaf2ohfd68fgjunjp31i.apps.googleusercontent.com"
          render={(renderProps) => {
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="w-11/12 mx-auto p-2 bg-pink-600 mt-4 mb-6 text-white rounded">
              Google Sign In
            </button>
          }}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        /> */}
        <div className="ml-auto px-3">
          <button className="text-slate-50" onClick={switchMode} type="button">
            {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>
      </form>
    </section>
  )
}
