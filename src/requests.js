

const requests = {
    fetchTrending: '/trending/all/week?api_key=2ec91f0aef0d39c15ad846131b403871&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=2ec91f0aef0d39c15ad846131b403871&with_networks=213',
    fetchTopRated: '/movie/top_rated/?api_key=2ec91f0aef0d39c15ad846131b403871&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=2ec91f0aef0d39c15ad846131b403871&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=2ec91f0aef0d39c15ad846131b403871&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=2ec91f0aef0d39c15ad846131b403871}&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=2ec91f0aef0d39c15ad846131b403871&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=2ec91f0aef0d39c15ad846131b403871&with_genres=99',
}

//const API_KEY = "2ec91f0aef0d39c15ad846131b403871";

export default requests;