import { MovieItemCard } from '../MovieItemCard/MovieItemCard';
import { MovieList } from '../../Styles/style';

export function MovieHomePageCard({ films }) {
  return (
    <MovieList>
      {films.map(({ id, title, name, backdrop_path, release_date }) => (
        <MovieItemCard
          key={id}
          id={id}
          name={name}
          title={title}
          backdrop_path={backdrop_path}
          release_date={release_date}
        />
      ))}
    </MovieList>
  );
}
