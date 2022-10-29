import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function DetailMovie (){
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate("/")
        }
    }, [navigate])

    return (
        <div>

        </div>
    )
}

export default DetailMovie