import React from "react";
import { Grid, Button, Typography } from "@mui/material";

function RowVariant({array}){
    return(
        array.length === 5?
        <React.Fragment>
            <Grid item md={1}/>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button sx={{width:1}} onClick={()=>{console.log(array)}}>
                    <Typography>
                        asd
                    </Typography>
                </Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid item md={1}/>
        </React.Fragment>
        :
        array.length === 4?
        <React.Fragment>
            <Grid item md={2}/>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid item md={2}/>
        </React.Fragment>
        :
        array.length === 3?
        <React.Fragment>
            <Grid item md={1}/>
            <Grid item md={2}/>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid item md={2}/>
            <Grid item md={1}/>
        </React.Fragment>
        :
        array.length === 2?
        <React.Fragment>
            <Grid item md={2}/>
            <Grid item md={2}/>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid item md={2}/>
            <Grid item md={2}/>
        </React.Fragment>
        :
        array.length === 1?
        <React.Fragment>
            <Grid item md={1}/>
            <Grid item md={2}/>
            <Grid item md={2}/>
            <Grid display ="flex" alignItems="center" justifyContent="center" item xs={12} md={2}>
                <Button>asd</Button>
            </Grid>
            <Grid item md={2}/>
            <Grid item md={2}/>
            <Grid item md={1}/>
        </React.Fragment>
        :
        null
    )
}
export default RowVariant