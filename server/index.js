const express = require("express");
const axios = require("axios")
const cors = require("cors")

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors())

app.use(express.static("../client/src"))

const token = Buffer.from("richlii@outlook.com/token:6lZGByHibQEd2eJUWscFFTPcrKINrPxvHHcJB4Xk").toString("base64")

app.get("/getTickets", async (req, res) => {
    const url = "https://zccliitickets.zendesk.com/api/v2/tickets";
    try{
        const result = await axios({
            method: 'get',
            url: url,
            headers:{"Authorization" : "Basic " + token}
        })
        console.log("toot",result.data.tickets)
        res.json({tickets:result.data.tickets})
    }
    catch(err){
        console.log("monkah")
        console.log(err, "tee")
        res.json({error: err.data})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})