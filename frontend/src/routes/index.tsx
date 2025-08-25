import AppLayout from "@/Layout/AppLayout";
import AddBook from "@/Pages/AddBook";
import AllBooks from "@/Pages/AllBooks";
import BorrowSummery from "@/Pages/BorrowSummery";
import Landing from "@/Pages/Landing";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children : [
            {
                index: true,
                Component: Landing
            },
            {
                path:"books",
                Component: AllBooks
            },
            {
                path:"create-book",
                Component: AddBook
            },
            {
                path:"borrow",
                Component: BorrowSummery
            },
        ]
    },
])

export default router;