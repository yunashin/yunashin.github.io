import { useEffect, useMemo } from 'react';
import JSConfetti from 'js-confetti';

import MenuBar from './MenuBar';
import ProfilePicture from '../profile.png';

const Home = () => {
  const jsConfetti = useMemo(() => new JSConfetti(), []);

  useEffect(() => {
    const confettiButton = document.querySelector('.confetti-button');
    // Listens for the 'DOMContentLoaded' event to ensure the HTML is fully loaded before running the script.
    confettiButton?.addEventListener('load', function () {
      console.log('loaded');
      // Adds an event listener for the 'click' event on the targeted button.
      confettiButton?.addEventListener('click', function () {
        // Retrieves the position and size of the button to calculate where the confetti should appear.
        const rect = confettiButton.getBoundingClientRect();

        // Calculates the horizontal (x) center of the button.
        const x = (rect.left + rect.right) / 2;

        // Calculates the vertical (y) center of the button.
        const y = (rect.top + rect.bottom) / 2;

        // Configures the settings for the confetti effect.
        const confettiSettings = {
          confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
            // added colors
            "#205f20", "#efc45f", "#e8a456", "#ac2222", "#cb89df", "#759672", "white"
          ],
          particleCount: 100, // Defines the number of confetti particles.
          spread: 70,         // Sets the spread angle of the confetti.
          // Specifies the origin point for the confetti effect based on the button's location.
          origin: { x: x / window.innerWidth, y: y / window.innerHeight }
        };

        // Triggers the confetti effect with the defined settings when the button is clicked.
        jsConfetti.addConfetti(confettiSettings);
      });
    });
  }, [jsConfetti]);

  return (
    <div>
      <MenuBar />
      <div className="App-body home">
        <h1>• yunaversal studios •</h1>
        <div id="animate" />
        <img src={ProfilePicture} alt="profile" className="App-logo confetti-button" loading="lazy" />
        <div className="home-subtitle">
          <div>software engineer @ hubspot</div>
          <div>columbia university 2019</div>
          <div>nyc • boston</div>
        </div>
      </div>
    </div>
  );
};

export default Home;