export async function downloadMnemonic(sessionid, userId) {
    try {
        const response = await fetch(
            `https://ifutures.store/api/users/download_mnemonic/${userId}/`,
            {
                method: "GET",
            }
        );

        if (!response.ok) throw new Error("Ошибка при загрузке файла");

        const blob = await response.blob();

        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, `SECURITY_${userId}.txt`);
        } else {
            const url = window.URL.createObjectURL(blob);

            if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                const reader = new FileReader();
                reader.onload = function () {
                    const link = document.createElement("a");
                    link.href = reader.result;
                    link.download = `SECURITY_${userId}.txt`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };
                reader.readAsDataURL(blob);
            } else {
                // Для десктопа: просто скачиваем файл
                const a = document.createElement("a");
                a.href = url;
                a.download = `SECURITY_${userId}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }

            window.URL.revokeObjectURL(url);
        }
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
