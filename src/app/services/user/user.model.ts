export interface User {
    email?: string;
    isGuest: boolean;
    isLoggedIn: boolean;

    marked1: Set<string>;
    marked2: Set<string>;
}