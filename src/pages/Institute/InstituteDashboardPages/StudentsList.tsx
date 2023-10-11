import React from 'react'
import ABTable from '../../../components/ABTable';

export default function StudentsList() {
    const data = [
        {
            id: 1,
            name: "Ammad",
            course: "Hyrbrid Development",
            enrolled: true,
        },
        {
            id: 2,
            name: "Shahzaib",
            course: "Hyrbrid Development",
            enrolled: true,
        },
        {
            id: 3,
            name: "Hassan",
            course: "Hyrbrid Development",
            enrolled: true,
        },
        {
            id: 4,
            name: "Haris",
            course: "Hyrbrid Development",
            enrolled: false,
        },
        {
            id: 5,
            name: "Shahmeer",
            course: "Hyrbrid Development",
            enrolled: false,
        },
    ];
    return (
        <>
            <div className="border border-4 border-dark p-4 m-3">
                <h1></h1>
                <ABTable
                    label="Student List"
                    dataSource={data}
                    cols={[
                        {
                            displayName: "Id",
                            key: "id",
                        },
                        {
                            displayName: "Name",
                            key: "name",
                        },
                        {
                            displayName: "Course",
                            key: "course",
                        },
                    ]}
                />
            </div>
        </>
    )
}
