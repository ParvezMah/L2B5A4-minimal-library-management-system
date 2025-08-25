import { useGetAllBooksQuery } from "@/api/bookApi"
import { BookCard } from "@/components/component/BookCard";

const AllBooks = () => {

  const {data:books, error, isLoading}= useGetAllBooksQuery();

  console.log('Loaded Books : ', books);

  if(isLoading) return <p>Loading Books.....</p>;
  if(error) return <p>Error Fethcing Books.....</p>;


  return (
    <div>
        <h1 className="text-3xl font-bold text-center mb-6">All Books</h1>
        <div className="text-2xl font-bold text-center mb-6">
          {
            books?.map((book)=>(
              <BookCard key={book._id} book={book}/>
            ))
          }
        </div>
    </div>
  )
}

export default AllBooks