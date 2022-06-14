import styles from "./MovieImg.module.css";

export function MovieImg({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieImg}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imgUrl}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </li>
  );
}