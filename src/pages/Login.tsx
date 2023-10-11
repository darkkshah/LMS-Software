import ABButton from '../components/ABButton'
import { useState } from "react";
import { fbLogin } from '../config/firebase/firebasemethod';
import { Link, useNavigate } from 'react-router-dom';
import WriteInput from '../components/WriteInput/WriteInput';
import { useDispatch } from 'react-redux';
import { addUser } from '../config/redux/reducers/userSlice';
import { addInstitute } from '../config/redux/reducers/instituteSlice';


export default function Login() {
  const [model, setModel] = useState<any>({})
  const dispatch = useDispatch()

  const fillModel = (key: any, val: any) => {
    model[key] = val
    setModel({ ...model })
  }

  const navigate = useNavigate()


  const loginUser = () => {
    console.log(model)
    fbLogin(model).then(
      (res: any) => {
        console.log(res)
        if (res) {
          dispatch(addUser({ ...res }));
          dispatch(addInstitute({ ...res }));
        }

        // res.role = "student"

        if (res.role == "admin") {
          navigate("/admin");
        } else if (res.role == "institute") {
          navigate("/institute");
        } else {
          navigate("/");

        }
      })
      .catch((err) => {
        alert('Incorrect Email Or password')

      })
  }
  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center ">
        <div className='loginBox p-12 m-3 w-[400px] text-center'>
          <div className='p-3'>
            <p className='text-5xl text-white font-bold'>Login</p>
          </div>
          <div className='my-4 login-input-box'>
            <WriteInput label='Email'
              value={model.email}
              onChange={(e: any) => { fillModel("email", e.target.value) }}
            />
          </div>
          <div className='my-4 login-input-box'>
            <WriteInput label='Password'
              type='password'
              value={model.password}
              onChange={(e: any) => { fillModel("password", e.target.value) }}
            />
          </div>
          <div className='my-12 '>
            <ABButton
              onClick={loginUser}
              className='bg-gradient-to-r from-sky-400 to-blue-900 '
              label='Login' />
          </div>
          {/* <div className='py-3 pb-5'>
            <span className=' text-white'>Don't have an account?</span>
            <Link className='font-bold text-lg signupBtn' to={'/signup'}>  Sign Up</Link>
          </div> */}
        </div>
      </div>
    </>
  )
}
