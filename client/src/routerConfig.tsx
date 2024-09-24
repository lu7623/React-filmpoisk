import { FilmPage } from './routes/FilmPage/Page';
import { FilmsPage } from './routes/FilmsPage/Page';
import { RootLayout } from './layouts/RootLayout';
//import NotFound from './routes/components/NotFound';

export const routerConfig = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <FilmsPage />,
      },
      {
        path: 'film/:filmId',
        element: <FilmPage />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
];
