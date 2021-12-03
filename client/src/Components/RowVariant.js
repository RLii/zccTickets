import React from "react";
import { Grid, Button, Typography, Card, CardHeader, CardContent, IconButton } from "@mui/material";
import { OpenInFullRounded } from '@mui/icons-material' 
import TicketCard from "./TicketCard";
function RowVariant({array, openDialog}){
    return(
        array.length === 5?
        <React.Fragment>
            <Grid item md={1}/>
            {array.map((item)=>{
                return(
                    <TicketCard item={item} openDialog={openDialog}/>
                )
            })}
            <Grid item md={1}/>
        </React.Fragment>
        :
        array.length === 4?
        <React.Fragment>
            <Grid item md={2}/>
            {array.map((item)=>{
                return(
                    <TicketCard item={item} openDialog={openDialog}/>
                )
            })}
            <Grid item md={2}/>
        </React.Fragment>
        :
        array.length === 3?
        <React.Fragment>
            <Grid item md={1}/>
            <Grid item md={2}/>
            {array.map((item)=>{
                return(
                    <TicketCard item={item} openDialog={openDialog}/>
                )
            })}
            <Grid item md={2}/>
            <Grid item md={1}/>
        </React.Fragment>
        :
        array.length === 2?
        <React.Fragment>
            <Grid item md={2}/>
            <Grid item md={2}/>
            {array.map((item)=>{
                return(
                    <TicketCard item={item} openDialog={openDialog}/>
                )
            })}
            <Grid item md={2}/>
            <Grid item md={2}/>
        </React.Fragment>
        :
        array.length === 1?
        <React.Fragment>
            <Grid item md={1}/>
            <Grid item md={2}/>
            <Grid item md={2}/>
            {array.map((item)=>{
                return(
                    <TicketCard item={item} openDialog={openDialog}/>
                )
            })}
            <Grid item md={2}/>
            <Grid item md={2}/>
            <Grid item md={1}/>
        </React.Fragment>
        :
        null
    )
}
export default RowVariant