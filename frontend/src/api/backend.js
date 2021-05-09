import axios from 'axios'

/**
 * Submit a response to the backend API
 * @param {JSON} searchResponse A object containing the search terms and response
 * @returns {JSON} JSON result
 */
const postActivity = async (searchResponse) => {
    let result = null;
    try {
        result = await axios.post(`projects`, searchResponse);
    } catch (e) {
        console.log(e);
		return {
			error: e.message
		};
    }

    return result.message;
}

export default {
	postActivity: postActivity
}