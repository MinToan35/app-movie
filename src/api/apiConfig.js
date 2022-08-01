const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "3c20312e30b4a9679a980938aef0a741",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
