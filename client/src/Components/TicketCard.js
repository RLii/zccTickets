import React from "react"
import { Card, CardHeader, IconButton, CardContent, Typography } from "@mui/material"
import { OpenInFullRounded } from "@mui/icons-material"
function TicketCard(){

    return (<Card>
        <CardHeader
            action={
                <IconButton onClick={()=>{
                    
                }}>
                    <OpenInFullRounded/>
                </IconButton>
            }
            title={item.subject}
            subheader={"Created At " + item.created_at}
        />
        <CardContent>
            <Typography>
                {item.description}
            </Typography>
        </CardContent>
    </Card>)
}