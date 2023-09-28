import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() =>
  import('./Layout').then(module => ({
    ...module,
    default: module.Layout,
  }))
);

const Movies = lazy(() =>
  import('../Pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../Pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Home = lazy(() =>
  import('../Pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);
const NotFound = lazy(() =>
  import('../Pages/NotFound/NotFound').then(module => ({
    ...module,
    default: module.NotFound,
  }))
);
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
