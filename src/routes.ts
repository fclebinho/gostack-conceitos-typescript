import { Request, Response } from 'express';

import createUser from './services/users';

export const hello = (request: Request, response: Response) => {
    const user = createUser({
        name: 'Cleber', 
        email: 'cleber@mail.com', 
        password: '123456',
        techs: ['NodeJS', { title: 'ReactJS', experience: 2 }],
        nicknames: ['hello']
    });

    return response.json(user);
}