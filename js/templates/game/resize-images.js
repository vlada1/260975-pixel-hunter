import resize from '../../components/resize';

export default (element) => {
  const images = element.querySelectorAll(`.game__option img`);

  images.forEach((img) => {
    img.onload = () => {
      const frameSize = {
        width: img.width,
        height: img.height
      };

      const imgSize = {
        width: img.naturalWidth,
        height: img.naturalHeight
      };

      const newSize = resize(frameSize, imgSize);
      img.width = newSize.width;
      img.height = newSize.height;
    };
  });
};
