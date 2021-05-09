import axios from 'axios'

/**
 * Submit a response to the backend API
 * @param {JSON} searchResponse A object containing the search terms and response
 * @returns {JSON} JSON result
 */
const postActivity = async (searchResponse) => {
    let result = null;
    try {
        result = await axios.post(`activity`, {
            search: searchResponse.search,
            results: searchResponse.results,
            message: searchResponse.message
        });
    } catch (e) {
        console.log(e);
		return {
			error: e.message
		};
    }

    return result.data;
}

export default {
	postActivity: postActivity
}