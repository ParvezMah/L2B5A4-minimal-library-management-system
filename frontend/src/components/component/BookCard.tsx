import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { TBook } from "@/types/BookType";

export const BookCard= ({book}:{book:TBook}) =>{

  console.log("books from Books : ", book);



  return (
    <Card className="w-full max-w-xm rounded-lg shadow hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-orange-500">{book.title}</CardTitle>
        <CardDescription className="text-gray-500">{book.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 mb-2">{book.description}</p>
        <div className="space-y-1 text-sm">
            <span className="block font-semibold">
              ISBN : {book.isbn}
            </span>
            <span className="block font-semibold">
              Published Year : {book.pusblishedYear}
            </span>
            <span className="block font-semibold">
              Copies : {book.copies}
            </span>
            <span className={`font-bold ${book.available ? "text-green-600" : "text-orange-600"}`}>
              Availablity : {book.available ? "Yes" : "No"}
            </span>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Want to Read?
        </Button>
      </CardFooter>
    </Card>
  )
}
