import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <div>
            {loading ? <h1>Loading....</h1> : null}
            <Movie
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
            />
        </div>
    );
}

export default Detail;
