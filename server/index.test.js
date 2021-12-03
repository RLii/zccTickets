const {getAuthHeader} = require("./index.js")
const {getToken} = require("./index.js")

test("token is in base 64", ()=>{
    expect(Buffer.from(Buffer.from(getToken(), 'base64').toString()).toString('base64') === getToken()).toBe(true)
})

test("auth format is correct", ()=>{
    expect('Authorization' in getAuthHeader()).toBe(true)
})
