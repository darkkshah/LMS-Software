import React from 'react'
import WriteInput from '../../../components/WriteInput/WriteInput'

export default function RegistrationControl() {
    return (
        <>
            <h1 className='text-center font-bold'>Registration Control</h1>

            <div className='d-flex flex-column align-items-center'>

                <div className='w-11/12 my-6 input-box'>
                    <div className='d-flex'>
                        <WriteInput type="radio" name='form' value='Open' />
                        <label htmlFor="male">Open</label>
                        <WriteInput type="radio" name='form' value='Close' />
                        <label htmlFor="female">Close</label>
                    </div>
                </div>


                <div className='w-11/12 my-4 input-box'>
                    <WriteInput label='Courses' />
                </div>
            </div>
        </>
    )
}
