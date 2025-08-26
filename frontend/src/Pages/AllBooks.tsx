import { useGetAllBooksQuery } from "@/api/bookApi";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AllBooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const books = data?.data;

  console.log("All Books books : ", books);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-400 mb-4"></div>
        <p className="text-lg text-orange-500 font-semibold">
          Loading Books.....
        </p>
        ;
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl text-center font-bold mb-4 text-orange-500">
        Your Book Table
      </h1>
      <div>
          <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Author</TableHead>
              <TableHead className="text-center">Genre</TableHead>
              <TableHead className="text-center">Published Year</TableHead>
              <TableHead className="text-center">Copies</TableHead>
              <TableHead className="text-center">Available</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              books?.map((book:any)=>(
            <TableCell className="text-center font-medium">
              {book.title}
            </TableCell>
            <TableCell className="text-center font-medium">
              {book.author}
            </TableCell>
            <TableCell className="text-center font-medium">
              {book.genre}
            </TableCell>
            <TableCell className="text-center font-medium">
              {book.pusblishedYear}
            </TableCell>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBooks;
