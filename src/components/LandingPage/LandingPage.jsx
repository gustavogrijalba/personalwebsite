import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import song from "../../assets/float.mp3";
import transition from "../../assets/transition.mp3";

const LandingPage = () => {
  const [buttonClicked, setButtonClicked] = useState(false); //button that will navigate us to another page

  const [backgroundImageIndex, setBackgroundImageIndex] = useState(1); //start at the second image (my favorite)

  const audioFile = song; // the song that will be playing on the landing page repeatedly

  const navigate = useNavigate();

  const audio = new Audio(audioFile);

  const ambience = new Audio(
    "https://systemspace.dimden.dev/res/audio/ambience/7.ogg"
  );

  const transitionaudio = new Audio(transition); //placeholder for a transition song (if worked on)

  const backgrounds = [
    "https://66.media.tumblr.com/d02867a4c225b6d933bfc10e78aaf1a9/tumblr_pqs5e7xqRY1vk2qmmo1_540.gif",
    "https://66.media.tumblr.com/4dc9e5884b85c6370964779d1d76ae92/tumblr_puu1ygd7rj1vk2qmmo1_540.gif",
  ];

  // useEffect for playing a song on the mount of the page
  useEffect(() => {
    // ambience.loop = true;
    // ambience.play()
    // ambience.volume = .5
    audio.play();
    audio.loop = true;
    audio.volume = 0.4;
    return () => {
      audio.pause();
    };
  }, [audioFile]);

  useEffect(() => {
    //change the index of the background periodicallty
    const changeBackgroundImage = () => {
      setBackgroundImageIndex(
        (prevIndex) => (prevIndex + 1) % backgrounds.length
      );
    };

    //interval that allows changing the background image every 50s
    const interval = setInterval(changeBackgroundImage, 50000);

    // remove interval when we unmount the page
    return () => {
      clearInterval(interval);
    };
  }, []);

  //get the current background by using the index
  const currentBackgroundImageURL = backgrounds[backgroundImageIndex];

  const handleButtonClick = () => {
    //pausing the audio on new page
    const audio = new Audio(audioFile);
    audio.pause();
    ambience.pause();
    setButtonClicked(true);

    setTimeout(() => {
      navigate("/home");
    }, 200);
  };

  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${currentBackgroundImageURL})` }}
    >
      <button className="glitch" onClick={handleButtonClick}>
        ENTER PARADISE
      </button>
    </div>
  );
};

export default LandingPage;
