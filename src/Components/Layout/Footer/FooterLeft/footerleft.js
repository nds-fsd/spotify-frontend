import './footerleft.css';
import { useEffect, useState } from 'react';
import usePlayer from '../../../../Hooks/use-player';

const FooterLeft = () => {
  const { playListSongs, indexSongs, footImg, footTitle } = usePlayer();

  console.log(playListSongs);

  return (
    <div className="FooterLeft-container">
      <img src={footImg || 'https://nuclio.school/wp-content/uploads/2019/10/logo-nuclio-2019.png'} alt="albun" />
      <div>
        <h5>{footTitle}</h5>
        {/* <p></p> */}
      </div>
    </div>
  );
};

export default FooterLeft;
