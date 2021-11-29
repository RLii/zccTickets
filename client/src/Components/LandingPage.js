import { useEffect } from "react"
import axios from "axios"
function LandingPage() {
    useEffect(()=>{
        axios.get("http://localhost:3001/getTickets")
        .then(res =>{ console.log(res)})
        .catch(err=>{console.log(err)})
        console.log("landingpageuseeffect");
    }, [])
    return(<p>LandingPage</p>)
}
export default LandingPage