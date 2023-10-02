function checkUser(newUser, arrayOfNewUsers){   //проверка юзера на существуемость for email and username
    const isExsist = arrayOfNewUsers.find((elem) => elem.email & elem.username === newUser.email & newUser.username)
        
    alert(isExsist)
  }
  
  export {checkUser};