import { useEffect } from "react"
import axios from "axios"
function LandingPage() {
    useEffect(()=>{
        console.log("landingpageuseeffect");
    }, [])
    return(<p>LandingPage</p>)
}
export default LandingPage