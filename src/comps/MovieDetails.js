import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch(`http://www.omdbapi.com/?i=${id}&apikey=eab8d491`);




  return (
    <div className="movie-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <>
        <div className="row">
            <div className="col-md-8">
                <img src={movie.Poster} className="thumbnail" alt="" />
            </div>
            <div className="col-md-8">
                <h2>{ movie.Title }</h2>
                <ul className="list-group">
                    <li className="list-group-item"><strong>Tür:</strong>{movie.Genre}</li>
                    <li className="list-group-item"><strong>Vizyon Tarihi:</strong>{movie.Released}</li>
                    <li className="list-group-item"><strong>IMDB Puanı:</strong>{movie.imdbRating}</li>
                    <li className="list-group-item"><strong>Yönetmen:</strong>{movie.Director}</li>
                    <li className="list-group-item"><strong>Yazar:</strong>{movie.Writer}</li>
                    <li className="list-group-item"><strong>Aktörler:</strong>{movie.Actors}</li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="well">
                <h3>Temalar</h3>
                { movie.Plot }
                <hr />
                <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" className="btn btn-primary" >IMDB'ye bakmak için</a>
            </div>

        </div>
        </>
 
      )}
    </div>
  );
}
 
export default BlogDetails;

