import { useState, useEffect } from "react"
import { 
    Box, 
    Grid, 
    Pagination, 
    Button, 
    Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography 
} from "@mui/material"
import { CloseRounded } from "@mui/icons-material"
import React from "react"
import RowVariant from "./RowVariant"

function TicketsPage({ticketsArray}) {
    const [pageGroups, setPageGroups] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [dialogItem, setDialogItem] = useState({})
    const [openDialog, setOpenDialog] = useState(false)
    let currentPageArray = ticketsArray.slice((currentPage-1) * 25, currentPage * 25)

    useEffect(()=>{
        if((ticketsArray.length%25) == 0)
            setPageGroups(Math.floor(ticketsArray.length/25)) 
        else
            setPageGroups(Math.floor(ticketsArray.length/25) + 1)
    }, [])

        
    function GetRow(rowNum) {
        let rowArray = currentPageArray.slice((rowNum - 1) * 5, rowNum * 5);
        return (
            <RowVariant 
                array={rowArray}    
                openDialog={(item)=>{
                    setDialogItem(item);
                    setOpenDialog(true);
                }}
            />
        )
    }
    return(
        <Box sx={{width:1, minHeight:"100%", backgroundColor:"pink", justifyContent:'space-between'}} alignItems="center" justifyContent="space-between" display="flex">
            <Grid container display ="flex" alignItems="center" justifyContent="center" direction="column">
                <Typography variant='h2' color={"whitesmoke"}>Your Tickets</Typography>
                <Grid container display ="flex" alignItems="center" justifyContent="center" spacing ={3}>
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
            <Dialog
                open={openDialog}
            >
                <DialogTitle>
                    {dialogItem.subject}
                    <IconButton
                        sx={{
                            position:'absolute',
                            right:8,
                            top:8,
                        }}
                        onClick={()=>{setOpenDialog(false)}}
                    >
                        <CloseRounded/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        Assignee ID: {dialogItem.assignee_id}
                    </Typography>
                    <Typography>
                        Brand ID: {dialogItem.brand_id}
                    </Typography>
                    <Typography>
                        Description: {dialogItem.description}
                    </Typography>
                    <Typography>
                        Status: {dialogItem.status}
                    </Typography>
                    <Typography>
                        Created At: {dialogItem.created_at}
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    )
}
export default TicketsPage