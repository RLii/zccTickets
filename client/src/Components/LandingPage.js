import axios from "axios";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import TicketsPage from "./TicketsPage";

const fetchModes = {
    Loading:'Loading',
    Success:'Success',
    Error:'Error',
}

function LandingPage() {
    const [result, setResult] = useState([])
    const [fetchStatus, setFetchStatus] = useState(fetchModes.Loading)
    
    useEffect(()=>{
        axios.get("http://localhost:3001/getTickets")
        .then(res =>{ 
            console.log(res)
            if('tickets' in res.data)
            {
                setResult(res.data.tickets)
                setFetchStatus(fetchModes.Success)
            }
            else{
                setResult({
                    status:501,
                    errorMsg:"Should Not Happen"
                })
                setFetchStatus(fetchModes.Error)
            }
        })
        .catch(err=>{
            console.log(err.response, "wtfff")
            setResult({
                status:err.response.status,
                errorMsg:err.response.data.error
            })
            setFetchStatus(fetchModes.Error)
        })
    }, [])
    

    return(
        fetchStatus === fetchModes.Loading ? 
        <p>Loading</p>:
        fetchStatus === fetchModes.Success ?
        <TicketsPage
            ticketsArray={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,23,24,25,26,27,28, 29, 30, 31, 32, 33]}
        />
        :
        <ErrorPage 
            status={result.status}
            error={result.errorMsg}
        />
    )
}
export default LandingPage