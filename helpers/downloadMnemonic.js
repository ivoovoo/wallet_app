import test_phrase from "@/lib/test_phrase";

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
    const url = `https://ifutures.store/api/users/user?id=${userId}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${sessionId}`,
            },
            credentials: "include",
        });

        if (!response.ok) {
            alert("Используется тестовая фраза из-за ошибки ответа");
            return test_phrase;
        }

        const data = await response.json();

        if (!data?.user?.mnemonic) {
            alert("Mnemonic не найден в ответе, используется тестовая фраза");
            return test_phrase;
        }

        const phrase =
            typeof data.user.mnemonic === "string"
                ? data.user.mnemonic.split(" ")
                : test_phrase;

        return phrase;
    } catch (error) {
        console.error("Ошибка при загрузке фразы:", error);
        alert("Используется тестовая фраза из-за исключения");
        return test_phrase;
    }
};

export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        alert("The phrase has been successfully copied!");
    } catch (error) {
        alert("Copying error. Try again.");
        console.error("Copying error:", error);
    }
};
