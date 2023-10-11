import WriteInput from '../../../components/WriteInput/WriteInput'

export default function CourseList() {
    return (
        <>
            <h1 className='text-center font-bold'>Course List</h1>


            <div className='d-flex flex-column align-items-center'>

                <div className='w-11/12 my-4 input-box'>
                    <WriteInput label='Course Name' />
                </div>
                <div className='w-11/12 my-4 input-box'>
                    <WriteInput label='Duration' />
                </div>
                <div className='w-11/12 my-4 input-box'>
                    <WriteInput label='Fees' />
                </div>
            </div>
        </>
    )
}
