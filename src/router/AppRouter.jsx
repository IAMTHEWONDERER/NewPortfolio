import React from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const ScrollToTopRoute = () => (
    <>
        <ScrollToTop />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        element: <ScrollToTopRoute />,  // Wrap all routes with ScrollToTop functionality
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },


            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '*', // Catch-all route for 404 Not Found page
                element: <NotFoundPage />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;