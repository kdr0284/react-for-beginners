import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImage, title, summary, genres }) {
    return (
        <div key={id}>
            <img src={coverImage} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
        </div>
    );
}

Movie.propTypes = {
    coverImage: propTypes.string,
    summary: propTypes.string,
    genres: propTypes.arrayOf(propTypes.string),
};
export default Movie;
