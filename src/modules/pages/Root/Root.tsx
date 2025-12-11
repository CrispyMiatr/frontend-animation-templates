import { RouterProvider } from 'react-router';
import { router } from '../app.routes';

export const Root = () => {
    return (
        <RouterProvider router={router} />
    )
}