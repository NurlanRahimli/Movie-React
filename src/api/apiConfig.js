const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '95bb8c779ca09e49dc77e8c04e245da7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;