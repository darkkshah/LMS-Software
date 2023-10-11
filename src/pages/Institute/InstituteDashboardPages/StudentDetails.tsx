import WriteInput from '../../../components/WriteInput/WriteInput'
import { useState } from 'react'
import ABSelect from '../../../components/ABSelect'
import ABButton from '../../../components/ABButton'
import { fbSignUp } from '../../../config/firebase/firebasemethod'
import { useNavigate } from 'react-router-dom'


export default function StudentDetails() {
    const [model, setModel] = useState<any>({})

    const fillModel = (key: any, val: any) => {
        model[key] = val
        setModel({ ...model })
    }

    const navigate = useNavigate()

    const signUpStudent = () => {
        console.log(model)
        model.role = "student";
        fbSignUp(model).then(
            (res) => {
                console.log(res)
                alert('Student is now signed up')
                navigate('/institute/studentsList')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <h1 className='text-center font-bold'>Student Details</h1>


            <div className=' grid md:grid-cols-3  md:grid-flow-row'>

                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.studentName}
                        onChange={(e: any) => { fillModel("studentName", e.target.value) }}
                        label='Student Name' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.fatherName}
                        onChange={(e: any) => { fillModel("fatherName", e.target.value) }}
                        label='Father Name' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.contact}
                        onChange={(e: any) => { fillModel("contact", e.target.value) }}
                        label='Contact' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.cnic}
                        onChange={(e: any) => { fillModel("cnic", e.target.value) }}
                        label='CNIC' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <ABSelect
                        handleChange={(e: any) => { fillModel("qualification", e.target.value) }}
                        value={model.qualification}
                        optionsList={["Matric", "Intermediate", "Graduate", "PostGraduate",]}
                        label={"Qualification"} />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <ABSelect
                        handleChange={(e: any) => { fillModel("course", e.target.value) }}
                        value={model.course}
                        optionsList={["MERN", "PYTHON", "FLUTTER", "WEB3.0",]}
                        label={"Course"} />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.institute}
                        onChange={(e: any) => { fillModel("institute", e.target.value) }}
                        label='Institute' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <ABSelect
                        handleChange={(e: any) => { fillModel("section", e.target.value) }}
                        value={model.section}
                        optionsList={["A", "B", "C", "D",]}
                        label={"Section"} />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.email}
                        onChange={(e: any) => { fillModel("email", e.target.value) }}
                        type='email' label='Email' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.password}
                        onChange={(e: any) => { fillModel("password", e.target.value) }}
                        type='password' label='Password' />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <ABSelect
                        handleChange={(e: any) => { fillModel("city", e.target.value) }}
                        value={model.city}
                        optionsList={["Karachi", "Lahore", "Islamabad", "Queeta",]}
                        label={"City"} />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <ABSelect
                        handleChange={(e: any) => { fillModel("country", e.target.value) }}
                        value={model.country}
                        optionsList={["Pakistan", "UAE", "USA", "Malaysia",]}
                        label={"Country"} />
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.date}
                        onChange={(e: any) => { fillModel("date", e.target.value) }}
                        type='date' />
                </div>
                <div className='w-11/12 my-6 input-box'>
                    <div className='d-flex'>
                        <WriteInput
                            value={model.gender}
                            onChange={(e: any) => { fillModel("gender", 'male') }}
                            type="radio" name='Gender' />
                        <label htmlFor="male">Male</label>
                        <WriteInput
                            value={model.gender}
                            onChange={(e: any) => { fillModel("gender", 'female') }}
                            type="radio" name='Gender' />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className='w-11/12 my-2 input-box'>
                    <WriteInput
                        value={model.adress}
                        onChange={(e: any) => { fillModel("adress", e.target.value) }}
                        label='Adress' />
                </div>
            </div>
            <div className='text-center my-5'>
                <ABButton onClick={signUpStudent} label='Add Student' />
            </div>
        </>
    )
}
