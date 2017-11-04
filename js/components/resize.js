export default (frame, image) => {
  const imageRatio = image.width / image.height;
  const frameRatio = frame.width / frame.height;

  const newImage = {
    width: 0,
    height: 0
  };

  if (imageRatio < frameRatio) {
    newImage.width = Math.floor(frame.height * imageRatio);
    newImage.height = frame.height;
  } else {
    newImage.width = frame.width;
    newImage.height = Math.floor(frame.width / imageRatio);
  }

  return newImage;
};
