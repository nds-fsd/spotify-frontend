import './footerleft.css';
import usePlayer from '../../../../Hooks/use-player';

const FooterLeft = () => {
  const { playListSongs, footImg, footTitle } = usePlayer();

  return (
    <div className="FooterLeft-container">
      <img src={footImg || 'https://nuclio.school/wp-content/uploads/2019/10/logo-nuclio-2019.png'} alt="albun" />
      <div>
        <h5>{footTitle}</h5>
      </div>
    </div>
  );
};

export default FooterLeft;
