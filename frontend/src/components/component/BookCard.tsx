import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

export function BookCard() {
  return (
    <Card className="w-full max-w-xm">
      <CardHeader>
        <CardTitle>Book Title</CardTitle>
        <CardDescription>Book Author</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Book Description</p>
        <div>
            <p>Book Isbn</p>
            <p>Book Publisher</p>
            <p>Book Copies</p>
            <p>Book Avalibility</p>
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
