import axios from 'axios'

/**
 * Find a movie from IMDB
 * For more info look here: https://www.omdbapi.com/
 * @param {string} search Movie title
 * @returns {JSON} JSON result
 */
const find = async (search) => {
    let result = null;
    try {
        result = await axios('http://www.omdbapi.com', {
			params: {
				s: search,
				apikey: process.env.VUE_APP_OMDB_KEY
			}
		});
    } catch (e) {
        console.log(e);
		return {
			error: e.response.data.Error
		};
    }

    return result.data;
}

const get = async (imdbID) => {
    let result = null;
    try {
        result = await axios('http://www.omdbapi.com', {
			params: {
				i: imdbID,
				apikey: process.env.VUE_APP_OMDB_KEY
			}
		});
    } catch (e) {
        console.log(e);
		return {
			error: e.response.data.Error
		};
    }

    return result.data;
}

export default {
	find: find,
	get: get
}