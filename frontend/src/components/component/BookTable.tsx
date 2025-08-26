import type { TBook } from "@/types/BookType"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const BookTable = ({book}:{book:TBook}) => {

    console.log('BookTable book : ', book);
  return (
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
            <TableCell className="text-center font-medium">{book.title}</TableCell>
            <TableCell className="text-center font-medium">{book.author}</TableCell>
            <TableCell className="text-center font-medium">{book.genre}</TableCell>
            <TableCell className="text-center font-medium">{book.pusblishedYear}</TableCell>
        </TableBody>
    </Table>
  )
}

export default BookTable