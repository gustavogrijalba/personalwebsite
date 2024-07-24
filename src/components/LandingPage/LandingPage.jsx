import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import song from "../../assets/float.mp3";
import transition from "../../assets/transition.mp3";
import button_song from "../../assets/button_click.mp3";

const LandingPage = () => {
  //for creating a sound for our transition
  const [buttonClicked, setButtonClicked] = useState(false); //button that will navigate us to another page
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(1); //start at the second image (my favorite)
  //to show our transition gif that will play once the button is pressed
  const [showTransitionGif, setShowTransitionGif] = useState(false)
  //an array of gifs to create a jumpscare effect
  const [gifs, setGifs] = useState([]);
  const audioFile = song; // the song that will be playing on the landing page repeatedly
  const navigate = useNavigate();
  const audio = new Audio(audioFile);
  const button_audio = new Audio(button_song);
  const ambience = new Audio(
    "https://systemspace.dimden.dev/res/audio/ambience/7.ogg"
  );
  const transitionaudio = new Audio(transition); //placeholder for a transition song (if worked on)
  const backgrounds = [
    "https://66.media.tumblr.com/d02867a4c225b6d933bfc10e78aaf1a9/tumblr_pqs5e7xqRY1vk2qmmo1_540.gif",
    "https://66.media.tumblr.com/4dc9e5884b85c6370964779d1d76ae92/tumblr_puu1ygd7rj1vk2qmmo1_540.gif",
  ];

  const generateGifs = () => {
    const gifArray = [];
    for (let i = 0; i < 30; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      gifArray.push({ id: i, top: `${top}%`, left: `${left}%` });
    }
    setGifs(gifArray);
  };

  // useEffect for playing a song on the mount of the page
  useEffect(() => {
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
    button_audio.play();
    generateGifs();
    setShowTransitionGif(true)

    setTimeout(() => {
      button_audio.pause();
      navigate("/home");
    }, 1500);
  };

  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${currentBackgroundImageURL})` }}
    >
      {showTransitionGif && (
        <div className="fullscreen-gifs">
          {gifs.map((gif) => (
            <img
              key={gif.id}
              src="https://steamuserimages-a.akamaihd.net/ugc/306611658795769283/C5E263FF20139A61EAC57FA4C228AADFC34E8EF7/?imw=512&imh=299&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
              alt="Transition"
              className="transition-gif"
              style={{ top: gif.top, left: gif.left }}
            />
          ))}
        </div>
      )}
      <button className="glitch" onClick={handleButtonClick}>
        ENTER PARADISE
      </button>
    </div>
  );
};

export default LandingPage;
