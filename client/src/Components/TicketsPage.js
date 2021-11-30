import { Typography, Paper, Box, Grid, Pagination, styled, Button } from "@mui/material"
import React from "react"

function TicketsPage({ticketsArray}) {
    function createRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <Button>asd</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>asd</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>asd</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>asd</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>asd</Button>
                </Grid>
            </React.Fragment>
        )
    }
    return(
        <Box>
            <Grid container spacing ={1}>
                <Grid container item spacing={2}>
                    {createRow()}
                </Grid>
                <Grid container item spacing={2}>
                    {createRow()}
                </Grid>
                <Grid container item spacing={2}>
                    {createRow()}
                </Grid>
                <Grid container item spacing={2}>
                    {createRow()}
                </Grid>
                <Grid container item spacing={2}>
                    {createRow()}
                </Grid>
            </Grid>
            <Pagination/>
        </Box>
    )
}
export default TicketsPage