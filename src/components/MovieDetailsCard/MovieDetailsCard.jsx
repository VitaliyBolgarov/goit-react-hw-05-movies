import {
  MovieDetailsImg,
  MovieDetailsAbout,
  MovieDetailsTitle,
  MovieDetailsScore,
  MovieDetailsOverview,
  MovieDetailsOverviewText,
  MovieDetailsGenres,
  MovieDetailsGenresText,
  MovieDetailsCard,
} from './MovieDetailsCard.styled';

export const MovieCard = ({ movie }) => {
  const { overview, title, release_date, genres, vote_average } = movie;

  let posterPath;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
  } else {
    posterPath =
      'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
  }
  return (
    <MovieDetailsCard>
      <MovieDetailsImg src={posterPath} alt={title} />
      <MovieDetailsAbout>
        <MovieDetailsTitle>
          "{title}"({new Date(release_date).getFullYear()})
        </MovieDetailsTitle>
        <MovieDetailsScore>
          User Score: {Math.round(vote_average * 10)}%
        </MovieDetailsScore>
        <MovieDetailsOverview>Overview</MovieDetailsOverview>
        <MovieDetailsOverviewText>{overview}</MovieDetailsOverviewText>
        <MovieDetailsGenres>Genres</MovieDetailsGenres>
        <MovieDetailsGenresText>
          {genres.map(genre => genre.name).join(', ')}
        </MovieDetailsGenresText>
      </MovieDetailsAbout>
    </MovieDetailsCard>
  );
};
