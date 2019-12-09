export default class FormService {
    getHeaders() {
        let headers = {
            "Content-Type": "application/json",
            Authorization: "Basic " + process.env.VUE_APP_USER_TOKEN,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"
        };
        return headers;
    }
}