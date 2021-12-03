import { getArraySlice } from "../TicketsPage";

test("get array slice works correctly", ()=>{
    expect(getArraySlice([1,2,3,4,5], 2, 1).length).toBe(2)
    expect(getArraySlice([1,2,3,4,5], 2, 1)[0]).toBe(1)
})