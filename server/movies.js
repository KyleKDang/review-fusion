import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const movieTitles = [
    'Inception', 'The Dark Knight', 'The Matrix', 'The Shawshank Redemption', 'The Godfather',
    "Schindler's List", 'The Godfather Part II', 'Pulp Fiction', 'Lord of the Rings: The Return of the King', 'Interstellar',
    'Fight Club', 'Saving Private Ryan', 'Parasite', '12 Angry Men', 'Goodfellas',
    'The Good, The Bad, and the Ugly', 'Whiplash', 'The Silence of the Lambs', 'The Green Mile', 'Terminator 2: Judgment Day'
]

const fetchData = async (title) => {
    const encodedTitle = encodeURIComponent(title)

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=e55e93dd&t=${encodedTitle}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

const fetchMovies = async () => {
    const moviePromises = movieTitles.map(async (title, i) => {
        const data = await fetchData(title)
        return {
            id: i + 1,
            title: data.Title,
            genre: data.Genre,
            rating: data.imdbRating,
            releaseDate: data.Released,
            poster: data.Poster
        }
    })
    
    const movieData = await Promise.all(moviePromises)
    return movieData
}

const getMovies = async () => {
    const movies = await fetchMovies()
    return movies
}

export default getMovies
