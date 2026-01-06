import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

interface AuthContextType {
    user: string | null;
    password: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const login = useCallback((username: string, pwd: string) => {
        setUser(username);
        setPassword(pwd);
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setPassword(null);
    }, []);

    const value = useMemo(() => ({ user, password, login, logout }), [user, password, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}