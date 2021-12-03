const express = require("express");
const axios = require("axios")
const cors = require("cors")

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors())

app.use(express.static("../client/src"))

const token = "";//Fill in your token here

const getToken = () => Buffer.from(token).toString("base64")

const getAuthHeader = ()=> {return {"Authorization" : "Basic " + getToken()}}//Change the header depending on which token type you are using

const url = ()=>"https://zccliitickets.zendesk.com/api/v2/tickets.json?page[size]=100";

app.get("/getTickets", async (req, res) => {
    let tickets = [];

    try{
        
        let result = await axios({
            method: 'get',
            url: url(),
            headers:getAuthHeader()
        })
        tickets = result.data.tickets;
        while(result.data.meta.has_more){
            result = await axios({
                method: 'get',
                url: result.data.links.next,
                headers:getAuthHeader()
            })
            tickets = tickets.concat(result.data.tickets)
        }
        res.status(200).json({tickets:tickets})
    }
    catch(err){
        console.log(err)
        if('response' in err)
            res.status(err.response.status).json({error: err.response.data.error})
        else
            res.status(500).json({error: "Unexpected Server Error"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})

exports.getToken = getToken;
exports.getAuthHeader = getAuthHeader;
exports.url = url;