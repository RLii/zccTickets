const express = require("express");
const axios = require("axios")
const cors = require("cors")

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors())

app.use(express.static("../client/src"))

const token = Buffer.from("richlii@outlook.com/token:6lZGByHibQEd2eJUWscFFTPcrKINrPxvHHcJB4Xk").toString("base64")

const authHeader = {"Authorization" : "Basic " + token}

app.get("/getTickets", async (req, res) => {
    const url = "https://zccliitickets.zendesk.com/api/v2/tickets";
    try{
        const result = await axios({
            method: 'get',
            url: url,
            headers:authHeader
        })
        res.status(200).json({tickets:result.data.tickets})
    }
    catch(err){
        if('response' in err)
            res.status(err.response.status).json({error: err.response.data.error})
        else
            res.status(500).json({error: "Unexpected Server Error"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})