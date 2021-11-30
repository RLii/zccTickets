
import { Typography, Paper, Box, Grid } from "@mui/material"
function ErrorPage({status, error}) {

    console.log(error)
    return(
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
            <Grid item xs>
                    <Typography variant="h1" textAlign="center">Error Code {status}</Typography>
                    <Typography variant="h3" textAlign="center">{error}</Typography>
                    <Typography style={{color:'grey'}} variant="h5" textAlign="center">Refresh to try again</Typography>
            </Grid>
        </Grid>
    )
}
export default ErrorPage