import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fbAuth } from "../config/firebase/firebasemethod"
import ABLoader from "../components/loader/Loader"

export default function Protected(props: any) {
    const { Screen, role } = props
    const [loader, setLoader] = useState(true)

    const navigate = useNavigate()

    const checkAuth = () => {
        setLoader(true)
        fbAuth().then((res: any) => {
            setLoader(false)

            // if (res.role !== role) {
            // if (res.role == "admin") {
            //     navigate("/admin");
            // } else if (res.role == "institute") {
            //     navigate("/institute");
            // } else {
            //     navigate("/");
            // }
            // }

        }).catch(err => {
            setLoader(false)
            navigate('/login')
        })


    }

    useEffect(() => {
        checkAuth()
    }, [])

    return loader ? <>
        <ABLoader />
    </> : <Screen />

}
