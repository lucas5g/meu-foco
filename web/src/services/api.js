export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Wrapper for fetching from the backend API
 * @param {string} endpoint - The API endpoint (e.g. '/projects')
 * @param {RequestInit} options - Fetch options
 */
export async function apiFetch(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erro na requisição à API');
    }

    return response.json();
}
