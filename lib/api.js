import axios from "axios";

const api = axios.create({
    baseURL: "https://ifutures.store/api",
    withCredentials: true,
    timeout: 10000,
});

const getCsrfToken = () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; csrf_token=`);
    return parts.length === 2 ? parts.pop().split(";").shift() : null;
};

api.interceptors.request.use((config) => {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
        config.headers["X-CSRF-Token"] = csrfToken;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        let errorMessage = "Network Error";
        let status = null;
        let url = "unknown endpoint";

        if (error.response) {
            status = error.response.status;
            url = error.response.config.url || url;
            errorMessage =
                error.response.data?.error ||
                error.response.statusText ||
                `HTTP Error ${status}`;
        } else if (error.request) {
            url = error.request.responseURL || url;
            errorMessage = "No response from server";
        }

        console.error(`API Error [${status}]: ${url} - ${errorMessage}`);

        if (status === 401 && !url.includes("/auth/")) {
            window.location.href = "/confirm_phrase";
        }

        return Promise.reject({
            message: errorMessage,
            status,
            url,
            data: error.response?.data,
        });
    }
);

export default api;
