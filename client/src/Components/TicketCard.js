import React from "react"
import { Card, CardHeader, IconButton, CardContent, Typography } from "@mui/material"
import { OpenInFullRounded } from "@mui/icons-material"
function TicketCard({item, openDialog}){

    return (
        <Card sx={{maxHeight:300, minHeight:300}}>
        <CardHeader
            action={
                <IconButton onClick={()=>{
                    openDialog(item);
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
    </Card>
    )
}
export default TicketCard