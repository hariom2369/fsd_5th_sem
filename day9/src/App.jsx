import React, { useState } from "react";

const App = () => {
  const images = [
    "https://i.pinimg.com/736x/2b/87/68/2b87683335860091e87af1c2c179060c.jpg",
    "https://i.pinimg.com/1200x/ee/49/aa/ee49aaa76cebc821d16d8427dfca092f.jpg",
    "https://i.pinimg.com/1200x/0c/3f/ae/0c3faef53f736577f6b76a6216c2be8f.jpg",
    "https://i.pinimg.com/1200x/94/95/0d/94950da78cd126f2a0f08d9b4ceaf0e9.jpg",
    "https://i.pinimg.com/1200x/0f/4c/89/0f4c89744131406408f0e23e4f697ed8.jpg"
  ];

  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const previousImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const rotateLeft = () => {
    setRotation(rotation - 90);
  };

  const rotateRight = () => {
    setRotation(rotation + 90);
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>Image Slider</h1>

      <div style={styles.sliderBox}>
        <img
          src={images[index]}
          alt="slider"
          style={styles.sliderImage}
        />
      </div>

      <div style={styles.buttons}>
        <button onClick={previousImage}>Left</button>
        <button onClick={nextImage}>Right</button>
      </div>

      <h1 style={styles.heading}>Rotate Image</h1>

      <div style={styles.rotateBox}>
        <img
          src={images[0]}
          alt="rotate"
          style={{
            ...styles.rotateImage,
            transform: `rotate(${rotation}deg)`
          }}
        />
      </div>

      <div style={styles.buttons}>
        <button onClick={rotateLeft}>Left</button>
        <button onClick={rotateRight}>Right</button>
      </div>

    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#ffffff"
  },

  heading: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    margin: "20px 0"
  },

  sliderBox: {
    width: "500px",
    height: "300px",
    margin: "30px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#eeeeee"
  },

  sliderImage: {
    width: "500px",
    height: "300px",
    objectFit: "contain"
  },

  rotateBox: {
    width: "500px",
    height: "300px",
    margin: "30px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#eeeeee"
  },

  rotateImage: {
    width: "500px",
    height: "300px",
    objectFit: "contain",
    transition: "transform 0.5s"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px"
  }
};

export default App;