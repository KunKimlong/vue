import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
    state: ()=>({
        firstName: "",
        lastName: "",
    }),
    getters:{
        fullName: (state)=>state.firstName+" "+state.lastName
    },
    actions:{
        fetchUser(){
            this.firstName = "Kim"
            this.lastName = "Long"
        },
        setUser(fname:string,lname:string){
            this.firstName = fname
            this.lastName = lname
        }
    }
})