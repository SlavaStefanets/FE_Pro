function userProfileCard(user, arayOfUsers) {

    const findUsersOfEmail = arayOfUsers.filter((elem) => elem.email === user.email)
    const objUsers = findUsersOfEmail[0]
  
    const userProfileDisplay = document.querySelector('.user-profileCard')
  
      userProfileDisplay.style.display = 'block';
    
    let p_id = document.querySelector('#id_profile').innerText = `ID : ` + objUsers.id;
    let p_name = document.querySelector('#name_profile').innerText = `Name : ` + objUsers.name;
    let p_username = document.querySelector('#username_profile').innerText = `Username : ` + objUsers.username;
    let p_email = document.querySelector('#email_profile').innerText = `Email : ` + objUsers.email;
    let p_phone = document.querySelector('#phone_profile').innerText = `Phone : ` + objUsers.phone;
    let p_website = document.querySelector('#website_profile').innerText = objUsers.website;
  
    }
  
    let p_website = document.querySelector('#website_profile')
    let changeWebsite = document.querySelector('.websiteButton')
    let inputOfWebsite = document.querySelector('.inputOfWebsite')
    let saveChanges = document.querySelector('.saveChanges')
  
    
  
    changeWebsite.addEventListener("click", () => {
      inputOfWebsite.value = p_website.textContent;
      p_website.innerHTML = "";
      inputOfWebsite.style.display = "block";
      changeWebsite.style.display = "none";
      saveChanges.style.display = "block";
    
      saveChanges.addEventListener("click", () => {
        p_website.innerHTML = inputOfWebsite.value;
        changeWebsite.style.display = "block";
        inputOfWebsite.style.display = "none";
        saveChanges.style.display = "none";
      });
    });

    export {userProfileCard}