

//   const userObj = {
//     name: "Alice",
//     lastName: "Joy",
//     renderFullName() {
//         console.log(`${this.name} ${this.lastName}`)
//     }
//   }
  
//   userObj.renderFullName();


  const userAlice = {
    id: 999999999,
    name: "Alice",
    lastName: "Joy",
    renderFullName() {
        console.log(`${this.name} ${this.lastName}`)
    }
  }
  
  const userMike = {
    id: 222222222,
    name: "Mike",
    lastName: "Burn",
    renderId() {
        console.log(`${this.id}`)
    }
  }
  
  
  userAlice.renderFullName();
  userMike.renderId();

  const renderFullNameOfMike = userAlice.renderFullName.bind(userMike)
  renderFullNameOfMike();

  
  const funcOfUsers = {
    renderFullName() {
        console.log(`${this.name} ${this.lastName}`)
    },
    renderId() {
        console.log(`${this.id}`)
    }
  }
  
  const renderNameMike = funcOfUsers.renderFullName.bind(userMike);
  renderNameMike();


//   const userData = {
//     name: "Alice",
  //   hello() {
  //     console.log(this.name);
  //   }
  //   hello: function() {
  //     console.log(this.name);
  //   }
  //   hello: () => {
  //         console.log(this.name);
  //   }
//   }

//   const userData = {
//     name: "Alice",
  //   hello() {
  //     console.log(this.name);
  //   }
  //   hello: function() {
  //     console.log(this.name);
  //   }
  //   hello: () => {
  //         console.log(this.name);
  //   }
//   }
  // function sum() {}
  // const sum = function() {}
  // const sum = () => {}
  
//   const userData = {
//     name: "",
//     sum: () => {
//       console.log(this); // window
//     }
//   }
   
//   Starta Institute 1 – Все (18 сент. 2023 г., 21:13)
//   // function sum() {}
//   // const sum = function() {}
//   // const sum = () => {}
  
//   const userData = {
//     name: "",
//     hello: () => {
//       console.log('hello');
//     }
//   }
  
//   userData.sum()


// this

const user = {
    name: "Alice",
  }
  
  
  const func = {
    renderName() {
      console.log(this.name);
    }
  }
  
  const renderUserName = func.renderName.bind(user);
  
  
  renderUserName()