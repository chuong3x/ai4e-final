/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import { store } from "./app/store";
import theme from "./theme";

import App from "./App.tsx";
import Loading from "./pages/LoadingPage.tsx";
import ErrorPage from "./pages/Error.page.tsx";
import NotFoundPage from "./pages/NotFound.page.tsx";
import MainLayout from "./layouts/Main.layout.tsx";
import ProgressBar from "./components/Common/ProgressBar/ProgressBar.tsx";

const HomePage = lazy(() => import("./pages/Home.page.tsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <MainLayout>
                        <Suspense fallback={<ProgressBar />}>
                            <HomePage />
                        </Suspense>
                    </MainLayout>
                ),
            },
        ],
    },
    {
        path: "/*",
        element: <NotFoundPage />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} fallbackElement={<Loading />} />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
