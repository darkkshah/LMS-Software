import WriteInput from '../../../components/WriteInput/WriteInput'
import ABSelect from '../../../components/ABSelect'
import { useState } from 'react'
import { fbSignUp } from '../../../config/firebase/firebasemethod'
import ABButton from '../../../components/ABButton'


export default function InstituteForm() {


    const [model, setModel] = useState<any>({})

    const fillModel = (key: any, val: any) => {
        model[key] = val
        setModel({ ...model })
    }


    const signUpInstitute = () => {
        console.log(model)
        model.role = "institute";
        fbSignUp(model).then(
            (res) => {
                console.log(res)
                alert('Institute is now signed up')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <h1 className='text-center font-bold'>InstituteForm</h1>


            <div className='d-flex flex-column align-items-center'>

                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.email}
                        onChange={(e: any) => { fillModel("email", e.target.value) }}
                        label='Email' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.password}
                        onChange={(e: any) => { fillModel("password", e.target.value) }}
                        label='Password'
                        type='password' />

                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.instituteName}
                        onChange={(e: any) => { fillModel("instituteName", e.target.value) }}
                        label='Institute Name' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.instituteShortName}
                        onChange={(e: any) => { fillModel("instituteShortName", e.target.value) }}
                        label='Institute Short Name' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        // value={model.fullName}
                        onChange={(e: any) => { fillModel("picture", e.target.value) }}
                        type='file' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.noOfCampus}
                        onChange={(e: any) => { fillModel("noOfCampus", e.target.value) }}
                        type='number'
                        label='Number Of Campus' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.campusDetail}
                        onChange={(e: any) => { fillModel("campusDetail", e.target.value) }}
                        label='Campus Detail' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.location}
                        onChange={(e: any) => { fillModel("location", e.target.value) }}
                        label='Location' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.address}
                        onChange={(e: any) => { fillModel("address", e.target.value) }}
                        label='Address' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.contact}
                        onChange={(e: any) => { fillModel("contact", e.target.value) }}
                        label='Contact' />
                </div>
                <div className='md:w-[400px] my-2 input-box'>
                    <WriteInput
                        value={model.ownerContact}
                        onChange={(e: any) => { fillModel("ownerContact", e.target.value) }}
                        label='Owner Contact' />
                </div>

                <div className='md:w-[400px] my-2 input-box'>
                    <ABSelect

                        handleChange={(e: any) => { fillModel("instituteType", e.target.value) }}
                        value={model.instituteType}
                        optionsList={["School", "College", "Teacher", "Institute"]}
                        label={"Institute Type"} />
                </div>

                <div className='my-3'>
                    <ABButton onClick={signUpInstitute} label='ADD Institute' />
                </div>

            </div>

        </>
    )
}
