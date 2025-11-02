
import type { User } from '../types';

const SESSION_USER_KEY = 'enterprise-horizon-session';

// --- Session Management ---

export const setSessionUser = (user: User): void => {
    try {
        // Store the entire user object for the session
        localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    } catch (e) {
        console.error("Could not set session user in localStorage", e);
    }
};

export const getSessionUser = (): User | null => {
    try {
        const sessionJson = localStorage.getItem(SESSION_USER_KEY);
        if (!sessionJson) return null;
        
        // The full user object is stored, so just parse and return
        return JSON.parse(sessionJson) as User;

    } catch (e) {
        console.error("Could not get session user from localStorage", e);
        return null;
    }
};

export const clearSessionUser = (): void => {
    try {
        localStorage.removeItem(SESSION_USER_KEY);
    } catch (e) {
        console.error("Could not clear session user from localStorage", e);
    }
};