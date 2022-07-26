import React from 'react';
import './  Reproductor.css';

import ReactPlayer from 'react-player';

const audioUrl =
  'https://gfsopfaepyoticvbyeev.supabase.co/storage/v1/object/sign/spofy/BAD BUNNY - YO PERREO SOLA YHLQMDLG (Video Oficial).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzcG9meS9CQUQgQlVOTlkgLSBZTyBQRVJSRU8gU09MQSBZSExRTURMRyAoVmlkZW8gT2ZpY2lhbCkubXAzIiwiaWF0IjoxNjU4NjcyNDQ5LCJleHAiOjE5NzQwMzI0NDl9.Rc-JaTf9ty47i4zBBGmfNin8nxq50-x06XjhyGah4uQ';

const PlayAudio = () => (
  <div className="play-audio">
    <ReactPlayer url={audioUrl} controls />
  </div>
);

export default PlayAudio;
