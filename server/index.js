const express = require("express");
const axios = require("axios")

const PORT = process.env.PORT || 3001

const app = express();

const token = Buffer.from("richlii@outlook.com/token:6lZGByHibQEd2eJUWscFFTPcrKINrPxvHHcJB4Xk").toString("base64")

app.get("/getTickets", async (req, res) => {
    const url = "https://zccliitickets.zendesk.com/api/v2/tickets";
    try{
        const res = await axios({
            method: 'get',
            url: url,
            headers:{"Authorization" : "Basic " + token}
        })
        console.log("toot",res)
    }
    catch(err){
        console.log("monkah")
        console.log(err, "tee")
    }
    res.json({message: "from server"})
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})