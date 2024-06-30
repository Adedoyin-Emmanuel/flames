const randomImage = () => {
  const imageArray = [
    "/assets/giving-flowers.jpg",
    "/assets/valentine2.jpg",
    "/assets/valentine3.jpg",
    "/assets/valentine4.jpg",
    "/assets/valentine.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * imageArray.length);

  return imageArray[randomIndex];
};

export default randomImage;
