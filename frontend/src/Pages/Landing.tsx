import { useGetAllBooksQuery } from "@/api/bookApi";
import { BookCard } from "@/components/component/BookCard";
import type { TBook } from "@/types/BookType";


const Landing = () => {

    const {data, error, isLoading}= useGetAllBooksQuery();
  
    // console.log('Loaded Books : ', data?.books);
    const dataBooks = data?.books;

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[50vh] bg-yellow-100 mb-8 rounded-lg shadow">
        <h1 className="text-5xl font-bold mb-4 text-orange-500">
          Minimal Library Management System
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Effortlessly manage you library, books and borrowings.
        </p>
        <button className="px-6 py-2 bg-orange-400 text-white font-semibold rounded hover:bg-orange-500 transition">
          Explre Books
        </button>
      </section>
      {/* See Our Books */}
      
    <div className="container mx-auto py-8">
        <h1 className="text-5xl text-center font-bold mb-4 text-orange-500">See Our Books</h1>
        <div className="grid gap-6 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4">
          {
            dataBooks?.map((book:TBook)=>(
              <BookCard key={book._id} book={book}/>
            ))
          }
        </div>
    </div>
    </div>
  );
};

export default Landing;
