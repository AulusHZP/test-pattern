import { User } from '../../src/domain/User.js';

// Object Mother: fornece usuários "prontos" e fixos.
// Usuário é uma entidade simples, com poucas variações (PADRAO / PREMIUM),
// então não faz sentido montar um builder inteiro para ela.
export class UserMother {
    static umUsuarioPadrao() {
        return new User(1, 'João Padrão', 'padrao@email.com', 'PADRAO');
    }

    static umUsuarioPremium() {
        return new User(2, 'Maria Premium', 'premium@email.com', 'PREMIUM');
    }
}
