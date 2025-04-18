"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { checkAuth, login, logout } from "@/lib/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    // список страниц, где не нужно проверять авторизацию
    const publicRoutes = [
        "/",
        "/signup",
        "/onboarding2",
        "/onboarding3",
        "/backup-phrase",
        "/copy-phrase",
        "/confirm-phrase",
        "/confirm-phrase-handle",
        "/create-password",
        "/create-login",
        "/enter-password",
    ];

    const isPublicPage = publicRoutes.includes(pathname);

    const refreshAuth = async () => {
        if (isPublicPage) {
            setIsLoading(false);
            return;
        }

        try {
            const authData = await checkAuth();
            console.log("Auth success:", authData);
            alert("Auth success!");
            setUser(authData);
        } catch (error) {
            console.log("Auth failed:", error);
            setUser(null);
            if (
                !isPublicPage &&
                !window.location.pathname.startsWith("/confirm-phrase-handle")
            ) {
                window.location.href = "/confirm-phrase-handle";
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshAuth();
    }, [pathname]);

    const value = {
        user,
        isLoading,
        login: async (word, password) => {
            const userData = await login({ word, password });
            setUser(userData);
            return userData;
        },
        logout: async () => {
            await logout();
            setUser(null);
        },
        refreshAuth,
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
