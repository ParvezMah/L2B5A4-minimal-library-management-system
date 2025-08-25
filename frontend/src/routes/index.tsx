import AppLayout from "@/Layout/AppLayout";
import Landing from "@/Pages/Landing";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children : [
            {
                index: true,
                Component: Landing
            },
        ]
    },
])

export default router;