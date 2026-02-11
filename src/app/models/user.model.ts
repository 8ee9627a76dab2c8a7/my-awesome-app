export class User
{
    readonly id: string;
    name: string;
    email: string;

    constructor(options:{
        id?: string;
        name?: string;
        email?: string;
    } = {}){
        this.id = options.id || '';
        this.name = options.name || '';
        this.email = options.email || '';
    }
}