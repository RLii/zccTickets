import React from "react";
import { Grid, Button, Typography, Card, CardHeader, CardContent, IconButton } from "@mui/material";
import { OpenInFullRounded } from '@mui/icons-material' 
function RowVariant({array, openDialog}){
    return(
        array.length === 5?
        <React.Fragment>
            <Grid item md={1}/>
            {array.map((item)=>{
                return(
                    <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                        <Card>
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
                    </Grid>)
            })}
            <Grid item md={1}/>
        </React.Fragment>
        :
        array.length === 4?
        <React.Fragment>
            <Grid item md={2}/>
            {array.map((item)=>{
                return(
                    <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                        <Card>
                            <CardHeader
                                title={item.subject}
                                subheader={"Created At " + item.created_at}
                            />
                            <IconButton>
                                <OpenInFullRounded/>
                            </IconButton>
                            <CardContent>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
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
                    <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                        <Card>
                            <CardHeader
                                title={item.subject}
                                subheader={"Created At " + item.created_at}
                            />
                            <IconButton>
                                <OpenInFullRounded/>
                            </IconButton>
                            <CardContent>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
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
                    <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                        <Card>
                            <CardHeader
                                title={item.subject}
                                subheader={"Created At " + item.created_at}
                            />
                            <IconButton>
                                <OpenInFullRounded/>
                            </IconButton>
                            <CardContent>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
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
                    <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                        <Card>
                            <CardHeader
                                title={item.subject}
                                subheader={"Created At " + item.created_at}
                            />
                            <IconButton>
                                <OpenInFullRounded/>
                            </IconButton>
                            <CardContent>
                                <Typography>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)
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