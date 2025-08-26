import { useGetAllBooksQuery } from "@/api/bookApi"
import { BookCard } from "@/components/component/BookCard";
import type { TBook } from "@/types/BookType";

export const Books = () => {

  const {data}=useGetAllBooksQuery();
  const books = data?.data;

  
  return (
    <div>
      <h1>Our Books</h1>
      <div>
        {
          books?.map((book: TBook)=>(
            <BookCard key={book._id} book={book}/>
          ))
        }
      </div>
    </div>
  )
}
