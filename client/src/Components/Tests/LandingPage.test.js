import { ExpandCircleDownTwoTone } from "@mui/icons-material";
import axios from "axios";
import { fetchUrl, fetchTickets } from "../LandingPage";

jest.mock("axios")

describe('fetching tickets', ()=>{
        it("should be called with fetchUrl", async ()=>{
            axios.get.mockResolvedValueOnce({data:{tickets:[]}});
            const result = await fetchTickets();

            expect(axios.get).toHaveBeenCalledWith(fetchUrl)
        })
})

test('fetchUrl should be a string', ()=>{
    expect(typeof fetchUrl).toBe('string')
}) 