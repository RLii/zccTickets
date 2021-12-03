const express = require("express");
const axios = require("axios")
const cors = require("cors")

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors())

app.use(express.static("../client/src"))

const token = Buffer.from("richlii@outlook.com/token:6lZGByHibQEd2eJUWscFFTPcrKINrPxvHHcJB4Xk").toString("base64")

const authHeader = {"Authorization" : "Basic " + token}

let tickets = [];
app.get("/getTickets", async (req, res) => {
    const url = "https://zccliitickets.zendesk.com/api/v2/tickets.json?page[size]=100";
    try{
        
        let result = await axios({
            method: 'get',
            url: url,
            headers:authHeader
        })
        tickets = result.data.tickets;
        while(result.data.meta.has_more){
            result = await axios({
                method: 'get',
                url: result.data.links.next,
                headers:authHeader
            })
            tickets = tickets.concat(result.data.tickets)
        }
        res.status(200).json({tickets:tickets})
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