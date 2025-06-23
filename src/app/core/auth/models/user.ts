export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    role: 'parent' | 'child';
    createdAt: Date;
    updatedAt: Date;
}