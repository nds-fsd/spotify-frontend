import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homeRefactor.module.css';
import RefactorSongs from '../Songs/refactorSongs';
import RefactorGenre from '../Genre/RefactorGenre';
import RefactorArtist from '../Artist/ArtistRefactor';
import RefactorAlbum from '../Albums/RefactorAlbum';
import SearchBar from '../SearchBar/searchBar';

const HomeRefactorBody = () => {
  const navigate = useNavigate();

  const seeAllSongs = () => {
    navigate('/songs', { replace: false });
  };

  const seeAllGenres = () => {
    navigate('/genre', { replace: false });
  };

  const seeAllArtist = () => {
    navigate('/artist', { replace: false });
  };

  const seeAllAlbums = () => {
    navigate('/albums', { replace: false });
  };

  return (
    <>
      <div className={styles.refactorContainer}>
        <h3 className={styles.homeRefactorTitle}>SONGS</h3>
        <button className={styles.seeMore} type="button" onClick={seeAllSongs}>
          See more...
        </button>
        <hr className={styles.hrDivision} />
        <RefactorSongs />
      </div>
      <div>
        <h3 className={styles.homeRefactorTitle}>GENRES </h3>
        <button className={styles.seeMore} type="button" onClick={seeAllGenres}>
          See more...
        </button>
        <hr className={styles.hrDivision} />
        <RefactorGenre />
      </div>
      <div>
        <h3 className={styles.homeRefactorTitle}>ALBUMS </h3>
        <button className={styles.seeMore} type="button" onClick={seeAllAlbums}>
          See more...
        </button>
        <hr className={styles.hrDivision} />
        <RefactorAlbum />
      </div>
      <div>
        <h3 className={styles.homeRefactorTitle}>Artists</h3>
        <button className={styles.seeMore} type="button" onClick={seeAllArtist}>
          See more...
        </button>
        <hr className={styles.hrDivision} />
        <RefactorArtist />
      </div>
    </>
  );
};
export default HomeRefactorBody;
