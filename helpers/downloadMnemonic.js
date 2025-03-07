export async function downloadMnemonic(sessionid, userId) {
    try {
        const response = await fetch(
            `https://ifutures.store/api/users/download_mnemonic/${userId}/`,
            {
                method: "GET",
                // headers: {
                //     Authorization: `Bearer ${sessionid}`,
                //     Accept: "application/json",
                // },
                // credentials: "include",
            }
        );

        if (!response.ok) throw new Error("Ошибка при загрузке файла");

        const text = await response.text();

        const blob = new Blob([text], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `mnemonic_${userId}.txt`;
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
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
