import { GiphyFetch } from '@giphy/js-fetch-api'

// API KEY
export const API_KEY = 'qIrMYcTRUsp9Be8IgSOq95HheltlmCHu'

// New instance of GIPHY fetch API
const giphyFetch = new GiphyFetch(API_KEY)

// Get Trending GIFS
export const getTrendingGifs = async () => {
    const { data:gifs } = await giphyFetch.trending()
    return gifs
}

// Get related gifs by ID
export const getRelatedGifs = async ({ id, limit=10 }) => {
    const { data: gifs } = await giphyFetch.related(id, { limit })
    return gifs
}

// Get emojis
export const getEmoji = async () => {
    const { data: gifs } = await giphyFetch.emoji()

    return gifs;
}

// Fetch Random GIF based on tag, type
export const getRandomGif = async ({ tag, type }) => {
    const { data: gif } = await giphyFetch.random({ tag, type })
    return gif;
}

// Fetch a gif by ID
export const getGifsById = async (id) => {
    const { data: gifs } = await giphyFetch.gifs([id])

    return gifs;
}

export const search = async ({ query }) => {
    const { data: gifs } = await giphyFetch.search(query, { sort: 'relevant', limit: 25, lang: 'en', type: 'gifs' })

    return gifs
}
