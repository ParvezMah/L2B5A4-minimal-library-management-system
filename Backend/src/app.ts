import express, {Application, Request, Response,} from "express";
import { bookRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";




const app: Application = express()


// Middlewares
app.use(express.json()) 

// Routes
app.use('/api/books', bookRoutes)
app.use('/api/borrow', borrowRoutes)


app.get('/', (req: Request, res: Response)=>{
    res.send("Welcome to Minimal library management API")
})

export default app;