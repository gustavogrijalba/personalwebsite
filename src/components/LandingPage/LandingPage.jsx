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
  const transitionaudio = new Audio(transition)

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
    // Pause the audio before navigating to the HomePage
    const audio = new Audio(audioFile);
    audio.pause()
    ambience.pause()
    setButtonClicked(true);

    // Add a short delay to see the white flash before navigating
    setTimeout(() => {
      navigate('/home')
    }, 200);
  };

  const landingPageStyles = {
    backgroundImage: 'url("https://media.tenor.com/VYUs0iVjqUAAAAAC/digital-life-lain.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 75%',
    fontFamily: 'Love Letter',
    height: '100vh', // Set the height to cover the full viewport
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
