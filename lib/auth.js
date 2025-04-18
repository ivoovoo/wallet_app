import api from "./api";

export const register = async ({ username, password, confirm_password }) => {
    try {
        const response = await api.post("/users/app_user_register/", {
            username,
            password,
            confirm_password,
        });

        return response.data;
    } catch (error) {
        const errorData = error.data || {
            error: "Registration failed",
            fields: {
                username: [],
                password: [],
                confirm_password: [],
            },
        };
        throw errorData;
    }
};

export const login = async ({ word, password }) => {
    try {
        const response = await api.post("/users/auth/", {
            word: word,
            password,
        });
        console.log(response);

        sessionStorage.setItem("access_token", response.data.access);
        sessionStorage.setItem("refresh_token", response.data.refresh);
        return response.data;
    } catch (error) {
        throw error.data || { error: "Invalid credentials" };
    }
};

export const checkAuth = async () => {
    const accessToken =
        getCookie("access_token") || sessionStorage.getItem("access_token");
    console.log(accessToken);

    if (!accessToken) {
        throw new Error("Токен отсутствует");
    }
    return {
        isAuthenticated: true,
        token: accessToken,
    };
};

function getCookie(name) {
    const matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
        )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const logout = async () => {
    try {
        await api.post("/users/logout/");
    } finally {
        sessionStorage.clear();
    }
};

export const getMnemonicPhrase = async () => {
    let phrase = sessionStorage.getItem("mnemonic_phrase");

    if (phrase) {
        return phrase.split(" ");
    }

    try {
        const response = await api.get("/users/user");
        if (response?.mnemonic_phrase) {
            sessionStorage.setItem("mnemonic_phrase", response.mnemonic_phrase);
            return response.mnemonic_phrase.split(" ");
        } else {
            console.warn("No mnemonic_phrase in server response");
            return [];
        }
    } catch (error) {
        console.error("Failed to fetch mnemonic from server:", error);
        return [];
    }
};
