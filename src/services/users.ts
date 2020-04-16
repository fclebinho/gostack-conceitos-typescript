export interface Tech {
    title: string;
    experience: number;
}

export interface User {
    name: string;
    email: string;
    password: string;
    techs: Array<string | Tech>
    nicknames: string[];
}

export default ({ name, email, password, techs, nicknames }: User) => {
    const user = {
        name,
        email,
        password,
        techs,
        nicknames
    }

    return user;
}