export async function downloadMnemonic(sessionid, userId) {
    try {
        const url = `https://ifutures.store/api/users/download_mnemonic/${userId}/`;

        // Создаем iframe
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = url;
        document.body.appendChild(iframe);

        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 1000);
    } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
    }
}

export const fetchMnemonic = async (userId, sessionId) => {
    try {
        const response = await fetch(
            `https://ifutures.store/api/users/user?id=${userId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${sessionId}`,
                },
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("Ошибка при получении фразы");
        }
        const data = await response.json();
        const phrase = data?.user?.mnemonic.split(" ");
        return phrase;
    } catch (error) {
        console.error("Ошибка при загрузке фразы:", error);
        return [];
    }
};
