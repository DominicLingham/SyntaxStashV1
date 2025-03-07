import { defineStore } from "pinia";
import { useSession } from "~/lib/auth-client";
import type { User } from "better-auth/types";

export const useAuthStore = defineStore("authStore", () => {
    
    const session = useSession();
    
    const loggedIn = computed<boolean>(() => !!session.value.data);
    const user = computed<User | null>(() => session.value.data?.user || null ); 
    
    return {
        loggedIn,
        user
    }
})