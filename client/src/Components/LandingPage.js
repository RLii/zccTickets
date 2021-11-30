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
                setFetchStatus(fetchModes.Success)
                setResult(res.data.tickets)
            }
            else{
                setFetchStatus(fetchModes.Error)
                setResult({
                    status:501,
                    errorMsg:"Should Not Happen"
                })
            }
        })
        .catch(err=>{
            console.log(err.response, "wtfff")
            setFetchStatus(fetchModes.Error)
            setResult({
                status:err.response.status,
                errorMsg:err.response.data.error
            })
        })
    }, [])
    

    return(
        fetchStatus === fetchModes.Loading ? 
        <p>Loading</p>:
        fetchStatus === fetchModes.Success ?
        <TicketsPage
            ticketsArray={result}
        />
        :
        <ErrorPage 
            status={result.status}
            error={result.errorMsg}
        />
    )
}
export default LandingPage