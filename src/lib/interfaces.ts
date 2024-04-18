export interface Books {
    _id: string,
    book_name: string,
    number_of_copies: number,
    is_active: boolean,
    created_at: Date,
    updated_at: Date
}

export interface CheckoutData {
    eventtype: string,
    book_id: number,
    member_id: number,
    date: Date
}

export interface ReturnData {
    eventtype: string,
    book_id: number,
    member_id: number,
    date: Date
}