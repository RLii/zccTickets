import axios from "axios";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import TicketsPage from "./TicketsPage";
import { Typography } from "@mui/material";

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
        <Typography variant="h1" textAlign="center">Loading</Typography>:
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