"use client"
import { checkoutBook, getBookData } from "@/api"
import { Books, CheckoutData } from "@/lib/interfaces"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"


let initialCheckOutForm: CheckoutData = {
    "eventtype": "checkout",
    "book_id": 0,
    "member_id": 0,
    "date": new Date()
}

export const CheckoutForm = () => {
    const [member, setMember] = useState("")
    const searchParams = useSearchParams();
    let navigation = useRouter()

    const handleSubmit = async () => {
        if (member.length && searchParams.get("book_id")) {
            let payload: CheckoutData = { ...initialCheckOutForm, book_id: parseInt(searchParams.get("book_id") || "0"), member_id: parseInt(member) }
            try {
                let res = await checkoutBook(payload)
                console.log(res);
                
                if(res.status >= 200 && res.status < 300) {
                    alert("Book returned Successfully!")
                    navigation.back()
                }
            } catch (error: any) {
                alert(error?.message)
                navigation.back()
            }
        } else {
            alert("Please Enter Member ID")
            navigation.back()
        }
    }


    console.log(searchParams.get("book_name"));



    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg shadow-md w-96 p-6">
                    <h1 className="text-2xl font-bold mb-4">Checkout Details</h1>
                    <hr className="mb-4" />
                    <h2 className="text-xl font-semibold mb-4">Book Name: {searchParams.get("book_name")}</h2>
                    <h4 className="text-xl font-semibold mb-4">Book Id: {searchParams.get("book_id")}</h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="memberId" className="text-sm font-semibold mb-1">Enter Member Id:</label>
                            <input
                                type="text"
                                id="memberId"
                                className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                onChange={(e) => { setMember(e.target.value) }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full"
                        >
                            Checkout Now!
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}