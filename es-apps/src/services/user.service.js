import { USERS } from "../mock-data/user";

// export default class UserService {

// }
class UserService {
    constructor() {
        console.log('init-User Service')
    }
    findAll() {
        return USERS
    }
}


export default UserService;