export interface TBorrow {
    _id?: string;
    bookId: string;
    quantity: number;
    dueDate: string;
    createdAt?: Date;
    updatedAt?: Date;
}
