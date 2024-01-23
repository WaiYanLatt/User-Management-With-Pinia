import { defineStore } from 'pinia';

const userStore = defineStore( 'user' , {
    state : () => {
        return {
            users: [
                //Lisa
                {
                  id: 1,
                  name: "Lalisa Manobal",
                  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_xCd5OC2uq0uVRxZvZCFrBVkor2Ia1HQZw&usqp=CAU",
                  email: "lisa@gmail.com",
                  phone: "+82 010-78-198",
                  address: " Korea,Seoul.",
                  site: "https://www.lisa.com",
                  birthday: "1997-03-27",
                  isActive : false,
                },
                //Rose
                {
                  id: 2,
                  name: "Rosean Park",
                  avatar: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/x/1/1/medium-pefkt11007-rose-blackpink-matte-finish-poster-butcute-original-imaghxpyvfmrrsmh.jpeg?q=90&crop=false",
                  email: "rose@gmail.com",
                  phone: "+82 903-56-977",
                  address: " Korea,Seoul.",
                  site: "https://www.rose.com",
                  birthday: "1997-02-11",
                  isActive : true,
                },
                //Jisso
                {
                  id: 3,
                  name: "Kim Jisso",
                  avatar: "https://hips.hearstapps.com/hmg-prod/images/1671676800994.jpg?crop=1.00xw:0.985xh;0,0.0148xh&resize=980:*",
                  email: "jisso@gmail.com",
                  phone: "+82 903-89-977",
                  address: " Korea,Seoul.",
                  site: "https://www.jisso.com",
                  birthday: "1995-01-03",
                  isActive : true,
                },
              ],
             activeUserOnly : false,
        }
    },
    getters : {
        activeUser() {
            if(this.activeUserOnly === true){
                 return this.users.filter(user => user.isActive === true)
            }

            return this.users;
        }
    },
    actions : {
        createUser(user){
            this.users.push(user);
        },
        updateUser(updatedUser){
            const userIndex = this.users.findIndex((u) => u.id === updatedUser.id);
            this.users[userIndex] = updatedUser;
        },
        deleteUser(id) {
            const index = this.users.findIndex((user) => user.id === id )
            this.users.splice(index , 1)
        }
    }
})

export default userStore;
