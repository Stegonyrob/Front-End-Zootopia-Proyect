import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore('Auth', ()=>{

    const user = reactive(
        {
            username: 'admin@zootopia.es',
            password: '1234',
            isAuthenticated: false
        }
    )
    return {user}
})
