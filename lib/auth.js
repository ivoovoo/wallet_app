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

export const login = async ({ keyPhrase, password }) => {
    try {
        const response = await api.post("/users/auth/", {
            key_phrase: keyPhrase,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.data || { error: "Invalid credentials" };
    }
};

export const checkAuth = async () => {
    try {
        const response = await api.get("/users/user");
        return response.data;
    } catch (error) {
        throw error.data || { error: "Not authenticated" };
    }
};

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
