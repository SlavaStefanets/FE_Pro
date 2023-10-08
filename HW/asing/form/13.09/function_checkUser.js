import { alert } from "./Main.js"

 function checkUser(newUser, arrayOfNewUsers){   //проверка юзера на существуемость for email and username//
      const isExsist = arrayOfNewUsers.find((elem) => (elem.email === newUser.email) && (elem.username === newUser.username))
      alert(isExsist)
    }

    export {checkUser};