import { jwtDecode } from 'jwt-decode';

export interface IObjectClaims {
    Name: string;
    Email: string;
    TipoUsuario: string;
    Role: string | string[];
}

export const decoderTokenToClaims = (token: string): Partial<IObjectClaims> | null => {
    if (token) {
        try {
            const decodedToken = jwtDecode(token) as any;
            // Acesse as claims
            const userRoles = decodedToken.Role;
            return {
                Name: decodedToken.name,
                Email: decodedToken.email,
                TipoUsuario: decodedToken.TipoUsuario,
                Role: userRoles,
            };
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    } else {
        console.log('Token não encontrado foda-se');
        return null;
    }
}
