export interface TBook {
    _id?: string;
    title: string;
    description?: string;
    author: string;
    isbn: string;
    pusblishedYear: number;
    genre?: string[];
    available: boolean;
    copies: number;
    createdAt: Date;
    updatedAt: Date;
}