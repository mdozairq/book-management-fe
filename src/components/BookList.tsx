"use client"
import { getBookData } from "@/api"
import { Books } from "@/lib/interfaces"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'


export const BookList = () => {
    const [books, setBooks] = useState<[] | any>([])
    let navigation = useRouter()

    let getBookDatas = async () => {
        let booksData = await getBookData()
        setBooks(booksData?.data?.data);
    }

    useEffect(() => {
        if (!books.length) {
            getBookDatas();
        }
    }, [])

    console.log(books);

    const handleCheckOut = (book: Books) => {
        navigation.push('/checkout')
    }

    const handleReturn = (book: Books) => {
        navigation.push('/return')
    }


    return (
        <div className="flex w-screen flex-wrap p-4">
            {
                books.length && books.map((book: Books, index: number) => {
                    return (<div className="flex-none w-54 bg-slate-200 m-4 h-60" key={index}>
                        <h3 className="text-black text-center flex-wrap p-3">{book.book_name}</h3>
                        <div className="flex text-center p-2">
                            <p className="text-center font-mono">Number of Copies:</p>
                            <p className="text-center text-gray-500">{book.number_of_copies}</p>
                        </div>
                        <div className="flex-row">
                            <button className="bg-red-400 m-2 p-2 rounded-sm" onClick={() => handleCheckOut(book)}>Checkout</button>
                            <button className="bg-orange-400 p4 m-2 p-2 rounded-sm" onClick={() => handleReturn(book)}>Return</button>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}