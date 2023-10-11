import ABInput from '../components/ABInput';
import ABButton from '../components/ABButton';
import { useState } from "react";
import { fbSignUp } from '../config/firebase/firebasemethod';
import { Link, useNavigate } from 'react-router-dom';
import WriteInput from '../components/WriteInput/WriteInput';

interface user {
  fullName: string
  userName: string
  email: string
  password: string
  role: string
}
export default function SignUp() {
  // const [model, setModel] = useState<any>({})

  // const fillModel = (key: any, val: any) => {
  //   model[key] = val
  //   setModel({ ...model })
  // }

  const [model, setModel] = useState<user>({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    role: '',
  });
  const fillModel = (key: keyof user, val: string) => {
    model[key] = val;
    setModel({ ...model })
  }

  const navigate = useNavigate()

  const signUpUser = () => {
    console.log(model)
    fbSignUp(model).then(
      (res) => {
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center ">
        <div className='signupBox p-12 m-3 w-[500px] text-center'>
          <div className='p-3'>
            <p className='text-5xl text-white font-bold'>Sign Up</p>
          </div>
          <div className='my-4 login-input-box'>
            <WriteInput label='Full Name'
              value={model.fullName}
              onChange={(e: any) => { fillModel("fullName", e.target.value) }} />
          </div>
          <div className='my-4 login-input-box'>
            <WriteInput label='User Name'
              value={model.userName}
              onChange={(e: any) => { fillModel("userName", e.target.value) }} />
          </div>
          <div className='my-4 login-input-box'>
            <WriteInput label='Email'
              value={model.email}
              onChange={(e: any) => { fillModel("email", e.target.value) }} />
          </div>
          <div className='my-4 login-input-box'>
            <WriteInput label='Password'
              type='password'
              value={model.password}
              onChange={(e: any) => { fillModel("password", e.target.value) }} />
          </div>
          <div className='my-4 '>
            <ABButton onClick={signUpUser} className='bg-gradient-to-r from-sky-400 to-blue-900 ' label='Sign Up' />
          </div>
          <div className='py-3 pb-5'>
            <span className='text-white'>Already have an account?</span>
            <Link className='font-bold text-lg loginBtn' to={'/login'}>  Log in</Link>
          </div>
        </div>
      </div>

    </>
  )
}
