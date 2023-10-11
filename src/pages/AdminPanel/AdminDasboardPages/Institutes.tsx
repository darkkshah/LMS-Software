import ABTable from '../../../components/ABTable'
import { useSelector } from 'react-redux'


export default function Institutes() {
    const instituteData = useSelector((list: any) => (list.institute))

    const data = [{ instituteName: 'asd' }]

    console.log({ ...instituteData.instituteDetail.instituteName })

    return (
        <>
            <h1 className='text-center font-bold'></h1>
            {instituteData.instituteDetail.email}

            <ABTable label="Intitute List"
                dataSource={data}
                cols={[
                    {
                        displayName: "Institute Name",
                        key: "instituteName",
                    },
                    {
                        displayName: "Number of Campuses",
                        key: "noOfCampuses",
                    },
                    {
                        displayName: "Active/Inactive",
                        key: "active/inactive",
                    },
                ]} />
        </>
    )
}
