import MovieList from "./comps/MovieList";
import SearchBox from "./comps/SearchBox";
import { useState, useEffect} from 'react';


const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=eab8d491`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
    useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
            <div className="movielist">
                <MovieList movies={movies}/>
            </div>
		</div>
    );
}
 
export default Home;