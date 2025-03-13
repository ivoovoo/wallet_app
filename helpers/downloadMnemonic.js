export async function downloadMnemonic(sessionid, userId) {
    try {
        const response = await fetch(
            `https://ifutures.store/api/users/download_mnemonic/${userId}/`,
            { method: "GET" }
        );

        if (!response.ok) throw new Error("Ошибка при загрузке файла");

        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = function () {
            const a = document.createElement("a");
            a.href = reader.result;
            a.download = `SECURITY_${userId}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        reader.readAsDataURL(blob);
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
