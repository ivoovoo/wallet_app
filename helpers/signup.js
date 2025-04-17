export const registerUser = async (userData) => {
    try {
        const response = await fetch(
            "https://ifutures.store/api/users/app_user_register/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    username: userData.username,
                    password: userData.password,
                    confirm_password: userData.confirm_password,
                }),
            }
        );

        
        const contentType = response.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
            const text = await response.text();
            throw new Error(
                `Server returned ${response.status}: ${text.slice(0, 100)}...`
            );
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data?.message ||
                    data?.detail ||
                    `Registration failed with status ${response.status}`
            );
        }

        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw new Error(
            "Registration service is temporarily unavailable. Please try later."
        );
    }
};
