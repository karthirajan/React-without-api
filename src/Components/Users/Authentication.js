
class Authentication{

    storeRegisteredUser(username){
        sessionStorage.setItem('authenticatedUser',username);
    }

    isUserLoggedIn(){
       let user = sessionStorage.getItem('authenticatedUser');
       if(user === null){
           return false;
       }else{
           return true;
       }
    }

    getLoggedUser(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return null;
        }else{
            return user;
        }
     }

    removeRegisteredUser(){
        sessionStorage.removeItem('authenticatedUser');
    }

}

export default new Authentication();