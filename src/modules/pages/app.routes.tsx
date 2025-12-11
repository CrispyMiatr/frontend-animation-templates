import { createBrowserRouter } from "react-router";
import { Layout } from '~/components';
import { Home } from './Home';
import { Assets } from "./Assets";
import styles from '~styles/app.module.scss';

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "assets",
                    element: <Assets />
                },
                {
                    path: "*",
                    element: (
                        <div className={styles['error']}>
                            <h1 className={styles['error__h1']}>404 Page not found</h1>
                        </div>
                    ),
                },
            ],
        },
    ],
    // {
    //     basename: "/cp-frontend-MaximWesterbeek"
    // }
);
