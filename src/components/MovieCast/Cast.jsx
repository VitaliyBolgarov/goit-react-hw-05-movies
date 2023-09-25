import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Servises/Api';
import { MovieText, Title, SecondaryMovieTitle } from '../../Styles/style';
import { ImageCast, CastItem } from './CastStyled';
import { Loader } from '../Loader/Loader';
import { setSliderSettings } from '../Slider/Slider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        await fetchCast(moviesId).then(data => setActors(data.cast));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [moviesId]);

  const showNoActors = !loading && actors.length === 0;

  return (
    <>
      {loading && <Loader />}
      {showNoActors && <Title>No actors for this movie</Title>}
      <Slider {...setSliderSettings(actors.length)} width="100%">
        {!error &&
          actors &&
          actors.map(({ id, character, name, profile_path }) => (
            <CastItem key={id}>
              {profile_path (
                <ImageCast
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt=""
                />
              )
              }
              {name ? (
                <SecondaryMovieTitle>{name}</SecondaryMovieTitle>
              ) : (
                <SecondaryMovieTitle>No actor`s name</SecondaryMovieTitle>
              )}
              {character ? (
                <MovieText>{character}</MovieText>
              ) : (
                <MovieText>No actor`s character</MovieText>
              )}
            </CastItem>
          ))}
      </Slider>
    </>
  );
}
