import { useGetAllBooksQuery } from "@/api/bookApi"
import { BookCard } from "@/components/component/BookCard";
import type { TBook } from "@/types/BookType";


const AllBooks = () => {

  const {data, error, isLoading}= useGetAllBooksQuery();

  // console.log('Loaded Books : ', data?.books);
  const dataBooks = data?.books;

  if(isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-400 mb-4"></div>
        <p className="text-lg text-orange-500 font-semibold">Loading Books.....</p>;
      </div>
    )
  }
  if(error) {
    return (
      <div className="flex flex-col items-center justify-center h-40">
        <p className="text-lg text-orange-500 font-semibold">Error Fethcing Books.....</p>
        <p className="text-sm text-gray-500 mt-2">Please try again later</p>
      </div>
    )
  }


  return (
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">All Books</h1>
        <div className="grid gap-6 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4">
        </div>
    </div>
  )
}

export default AllBooks