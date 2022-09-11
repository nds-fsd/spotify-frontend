import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './homeRefactor.module.css';
import RefactorSongs from '../Songs/refactorSongs';
import RefactorGenre from '../Genre/RefactorGenre';
import RefactorArtist from '../Artist/ArtistRefactor';
import RefactorAlbum from '../Albums/RefactorAlbum';
import SearchBar from '../SearchBar/searchBar';
import { HomeContextProvider } from './homeRefactor.context';

const HomeRefactorBody = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = searchParams.get('search');
  const seeAllSongs = () => {
    let url = '/songs';
    if (search) {
      url = `${url}?search=${search}`;
    }

    navigate(url, { replace: false });
  };

  const seeAllGenres = () => {
    let url = '/genre';
    if (search) {
      url = `${url}?search=${search}`;
    }

    navigate(url, { replace: false });
  };

  const seeAllArtist = () => {
    let url = '/artist';
    if (search) {
      url = `${url}?search=${search}`;
    }

    navigate(url, { replace: false });
  };

  const seeAllAlbums = () => {
    let url = '/albums';
    if (search) {
      url = `${url}?search=${search}`;
    }

    navigate(url, { replace: false });
  };

  return (
    <HomeContextProvider>
      <div className={styles.refactorContainer}>
        <SearchBar />
        <h3 className={styles.homeRefactorTitle}>SONGS</h3>
        <button className={styles.seeMore} type="button" onClick={seeAllSongs}>
          See All
        </button>
        <hr className={styles.hrDivision} />
        <RefactorSongs />
      </div>
      <div className={styles.refactorContainer}>
        <h3 className={styles.homeRefactorTitle}>GENRES </h3>
        <button className={styles.seeMore} type="button" onClick={seeAllGenres}>
          See All
        </button>
        <hr className={styles.hrDivision} />
        <RefactorGenre />
      </div>
      <div className={styles.refactorContainer}>
        <h3 className={styles.homeRefactorTitle}>ALBUMS </h3>
        <button className={styles.seeMore} type="button" onClick={seeAllAlbums}>
          See All
        </button>
        <hr className={styles.hrDivision} />
        <RefactorAlbum />
      </div>
      <div className={styles.refactorContainer}>
        <h3 className={styles.homeRefactorTitle}>ARTISTS</h3>
        <button className={styles.seeMore} type="button" onClick={seeAllArtist}>
          See All
        </button>
        <hr className={styles.hrDivision} />
        <RefactorArtist />
      </div>
    </HomeContextProvider>
  );
};
export default HomeRefactorBody;
