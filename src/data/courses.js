const getRandomImage = () => {
  // 300보다 크거나 같고, 1200보다 작은 길이
  const width = Math.floor(Math.random() * (12 - 3) + 3) * 100;
  // 300보다 크거나 같고, 900보다 작은 높이
  const height = Math.floor(Math.random() * (9 - 3) + 3) * 100;
  return `https://via.placeholder.com/${width}x${height}`;
};

let id = 0;
const courses = (cnt) => {
  const result = Array.from({ length: cnt || 20 }, (undefined, i) => ({
    id: i + 1 + id,
    title: `Lorem ipsum dolor sit amet ${i + 1 + id}`,
    imageURL: getRandomImage(),
  }));
  id += cnt || 20;
  return result;
};

export default courses;
