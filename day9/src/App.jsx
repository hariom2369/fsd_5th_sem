import React from 'react'

const App = () => {
  const images = [
    "https://i.pinimg.com/736x/2b/87/68/2b87683335860091e87af1c2c179060c.jpg",
    "https://i.pinimg.com/1200x/ee/49/aa/ee49aaa76cebc821d16d8427dfca092f.jpg",
    "https://i.pinimg.com/1200x/0c/3f/ae/0c3faef53f736577f6b76a6216c2be8f.jpg",
    "https://i.pinimg.com/1200x/94/95/0d/94950da78cd126f2a0f08d9b4ceaf0e9.jpg",
    "https://i.pinimg.com/1200x/0f/4c/89/0f4c89744131406408f0e23e4f697ed8.jpg"
  ]

  return (
    <div>
      <h1 style={{ backgroundColor: "white" }}>Image Slider</h1>
      <img src={images[0]} alt="" />
      <button>Left</button>
      <button>Right</button>
    </div>
  )
}

export default App