import type { TBook } from "@/types/BookType";
import type { TBrorrowSummery } from "@/types/BorrowSummery";
import type { TBorrow } from "@/types/BorrowType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://library-management-api-ruddy.vercel.app/'}),
    tagTypes: ['Books', 'Borrows'],
    endpoints: (builder)=>({
        getBookId:builder.query<TBook, string>({
            query: (id)=> `/books/${id}`,
            providesTags: ['Books'],
        }),
        getAllBooks: builder.query<TBook[], void>({
            query: ()=> '/books',
            providesTags: ['Books'],
        }),
        createBook: builder.mutation<TBook, Partial<TBook>>({
            query: (body)=> ({
                url: '/books',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Books'],
        }),
        updatebook: builder.mutation<TBook, {id: string, body: Partial<TBook>}>({
            query: ({id, body})=> ({
                url: `/books/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Books'],
        }),
        deletebook: builder.mutation<{success: boolean, id: string}, string>({
            query: (id)=> ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
        }),
        borrowBook: builder.mutation<TBorrow, {bookId: string, quantity: number; dueDate: string}>({
            query: (body)=> ({
                url: '/borrows',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Books', 'Borrows'],
        }),
        getBorrowSummery: builder.query<TBrorrowSummery[], void>({
            query: (body)=> ({
                url: '/borrows/summery',
                method: 'POST',
                body,
            }),
            providesTags: ['Borrows'],
        }),
    }),
})

export const {
    useGetAllBooksQuery, 
    useGetBookIdQuery, 
    useCreateBookMutation, 
    useUpdatebookMutation, 
    useDeletebookMutation,
    useBorrowBookMutation,
    useGetBorrowSummeryQuery
} = bookApi;