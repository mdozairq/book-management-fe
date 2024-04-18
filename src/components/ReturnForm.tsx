"use client"
import { getBookData } from "@/api"
import { Books, CheckoutData } from "@/lib/interfaces"
import { useState } from "react"


let initialCheckOutForm: CheckoutData = {
    "eventtype": "checkout",
    "book_id": 0,
    "member_id": 0,
    "date": new Date()
}

export const ReturnForm = () => {
    const [member, setMemeber] = useState("")


    const handleSubmit = () => {
        
    }

    


    return (
        <div className="flex w-screen flex-wrap p-4">
            <form onSubmit={handleSubmit}>
                <label className="">Enter Member Id</label>
                <input type="text" className="" onChange={(e) => { setMemeber(e.target.value) }}></input>
                <button className="" type="submit">Return Now!</button>
            </form>
        </div>
    )
}