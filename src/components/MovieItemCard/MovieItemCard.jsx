import { useLocation } from 'react-router-dom';
// import noFilm from '../../images/noFilm.jpg';
import {
  CardInfoContainer,
  SecondaryMovieTitle,
  MovieItem,
  MovieText,
  ImageFilm,
  LinkStyled,
} from '../../Styles/style';

export function MovieItemCard({
  id,
  title,
  name,
  backdrop_path,
  release_date,
}) {
  const location = useLocation();

  const releaseData = new Date(release_date);

  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        {backdrop_path (
          <ImageFilm
            src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
            alt=""
          />
        )
      }

        <CardInfoContainer>
          <SecondaryMovieTitle>{title ? title : name}</SecondaryMovieTitle>
          <MovieText>{releaseData.toLocaleDateString()}</MovieText>
        </CardInfoContainer>
      </LinkStyled>
    </MovieItem>
  );
}
