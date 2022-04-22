/**
 * Hacker News API service
 *
 * <https://hn.algolia.com/api>
 */

import axios from 'axios'

// Sets baseURL and uses for the other fetches url
axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

/**
 * Execute a HTTP request
 * 
 * @param {string} endpoint 
 * @returns 
 */

const get = async (endpoint) => {
  const response = await axios.get(endpoint)
  return response.data
}

/**
 * Search Hacker News stories
 * 
 * @param {string} query Search query to search for
 * @param {number} page Page of search results to get
 * @returns promise
 */

// Takes a query (what the search is) and a page
export const search = async (query, page) => {
  return get(`/search?query=${query}&tags=story&page=${page}`)
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search,
}