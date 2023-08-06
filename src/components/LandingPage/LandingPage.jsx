import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LandingPage.css';
import song from '../../assets/song.mp3';
import transition from "../../assets/transition.mp3"

const LandingPage = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const audioFile = song;
  const navigate = useNavigate();
  const audio = new Audio(audioFile);
  const ambience = new Audio('https://systemspace.dimden.dev/res/audio/ambience/7.ogg');
  const transitionaudio = new Audio(transition)//placeholder for a transition song (if worked on)

  // useEffect for playing a song on the mount of the page
  useEffect(() => {
    ambience.loop = true;
    ambience.play()
    ambience.volume = .5
    audio.play();
    audio.volume = .4
    return () => {
      audio.pause();
    };
  }, [audioFile]);

  const handleButtonClick = () => {
    //pausing the audio on new page
    const audio = new Audio(audioFile);
    audio.pause()
    ambience.pause()
    setButtonClicked(true);

    setTimeout(() => {
      navigate('/home')
    }, 200);
  };

  return (
    <div className = 'landing'>
      
        <button className='glitch' onClick={handleButtonClick}>
          ENTER THE WIRED
        </button>
    </div>
  );
};

export default LandingPage;
