import { useState, useEffect } from "react"
import { Box, Grid, Pagination, styled, Button, List, ListItem, ListItemText } from "@mui/material"
import React from "react"
import RowVariant from "./RowVariant"

function TicketsPage({ticketsArray}) {
    const [pageGroups, setPageGroups] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    let currentPageArray = ticketsArray.slice((currentPage-1) * 25, currentPage * 25)

    useEffect(()=>{
        console.log((ticketsArray.length%25) == 0, "asd", ticketsArray.length/25, ticketsArray.length)
        if((ticketsArray.length%25) == 0)
            setPageGroups(Math.floor(ticketsArray.length/25)) 
        else
            setPageGroups(Math.floor(ticketsArray.length/25) + 1)
    }, [])

        
    function GetRow(rowNum) {
        let rowArray = currentPageArray.slice((rowNum - 1) * 5, rowNum * 5);
        return (
            <RowVariant array={rowArray}/>
        )
    }
    return(
        <Box sx={{width:1, height:1, backgroundColor:"pink"}} alignItems="center" justifyContent="center" display="flex">
            <Grid container display ="flex" alignItems="center" justifyContent="center" direction="column">
                <Grid container display ="flex" alignItems="center" justifyContent="center" spacing ={15}>
                    {currentPageArray.length > 0? 
                        <Grid container item spacing={3}>
                            {GetRow(1)}
                        </Grid>
                        :
                        <Grid container item spacing={3}>
                            <React.Fragment>
                                <Grid item md={12}>
                                    <Button sx={{height:1}}></Button>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    }
                    {currentPageArray.length > 5? 
                        <Grid container item spacing={3}>
                            {GetRow(2)}
                        </Grid>
                        :
                        <Grid container item spacing={3}>
                            <React.Fragment>
                                <Grid item md={12}>
                                    <Button sx={{height:1}}></Button>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    }
                    {currentPageArray.length > 10? 
                        <Grid container item spacing={3}>
                            {GetRow(3)}
                        </Grid>
                        :
                        <Grid container item spacing={3}>
                            <React.Fragment>
                                <Grid item md={12}>
                                    <Button sx={{height:1}}></Button>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    }
                    {currentPageArray.length > 15? 
                        <Grid container item spacing={3}>
                            {GetRow(4)}
                        </Grid>
                        :
                        <Grid container item spacing={3}>
                            <React.Fragment>
                                <Grid item md={12}>
                                    <Button sx={{height:1}}></Button>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    }
                    {currentPageArray.length > 20? 
                        <Grid container item spacing={3}>
                            {GetRow(5)}
                        </Grid>
                        :
                        <Grid container item spacing={3}>
                            <React.Fragment>
                                <Grid item md={12}>
                                    <Button sx={{height:1}}></Button>
                                </Grid>
                            </React.Fragment>
                        </Grid>
                    }
                </Grid>
                <Pagination 
                count={pageGroups} 
                onChange={(ev, page)=>{
                    setCurrentPage(page)
                }}/>
            </Grid>
        </Box>
    )
}
export default TicketsPage