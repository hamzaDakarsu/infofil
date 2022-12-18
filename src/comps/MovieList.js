import React from 'react';
import { Link } from 'react-router-dom';


const MovieList = (props) => {

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie-preview' key={movie.imdbID}>
					<div className="well text-center">
						<img src={movie.Poster} alt='movie'></img>
						<Link to={`/movieDetails/${movie.imdbID}`}>
							<h2>{movie.Title}</h2>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;