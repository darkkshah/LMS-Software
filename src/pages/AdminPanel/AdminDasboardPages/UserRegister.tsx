import ABSelect from '../../../components/ABSelect'
import WriteInput from '../../../components/WriteInput/WriteInput'
import { useState } from 'react'


export default function UserRegister() {
    const [instituteType, setInstituteType] = useState<string>()
    const onChange = (e: any) => {
        setInstituteType(e.target.value)
    }
    return (
        <>
            <h1 className='text-center font-bold'>User Register</h1>


            <div className='d-flex flex-column align-items-center'>

                <div className='w-[400px] my-6 input-box'>
                    <WriteInput label='Name' />
                </div>
                <div className='w-[400px] my-6 input-box'>
                    <WriteInput type='email' label='Email' />
                </div>
                <div className='w-[400px] my-6 input-box'>
                    <WriteInput type='password' label='Password' />
                </div>
                <div className='w-[400px] my-6 input-box'>
                    <WriteInput label='CNIC' />
                </div>
                <div className='w-[400px] my-6 input-box'>
                    <ABSelect handleChange={onChange}
                        value={instituteType}
                        optionsList={["School", "College", "Teacher", "Institute"]}
                        label={"Institute Type"} />
                </div>
            </div>
        </>
    )
}
