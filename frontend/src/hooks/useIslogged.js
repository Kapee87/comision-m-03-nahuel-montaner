export function useIsLogged() {
    const token = sessionStorage.getItem('token')
    return { token }
}