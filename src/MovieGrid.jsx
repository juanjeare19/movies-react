import { MovieImg } from "./MovieImg";
import movies from "./movies.json"
import styles from "./MovieGrid.module.css";

export function MovieGrid() {
    return <ul className={styles.moviesGrid}>
         {movies.map((movie) =>
           <MovieImg key={movie.id} movie={movie}/>
         )}
    </ul>
}