
//UserService has been exported with export default, so we dont need {}
import UserService from './services/user.service'

function main() {
    let { findAll } = new UserService();
    // console.log(userService.findAll())
    findAll().forEach(user => {
        console.log(`User Name : ${user.username} email : ${user.email}`)
    })

}

main()