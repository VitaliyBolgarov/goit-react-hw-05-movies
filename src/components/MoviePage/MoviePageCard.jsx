import { MovieItemCard } from '../MovieItemCard/MovieItemCard';
import { MovieList } from '../../Styles/style';

export function MoviePageCard({ searchFilms }) {
  return (
    <MovieList>
      {searchFilms.map(({ id, title, release_date, name, backdrop_path }) => (
        <MovieItemCard
          key={id}
          id={id}
          release_date={release_date}
          title={title}
          name={name}
          backdrop_path={backdrop_path}
        />
      ))}
    </MovieList>
  );
}
