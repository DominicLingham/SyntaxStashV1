export default defineNuxtRouteMiddleware( async (to, from) => {
    const authStore = useAuthStore();
    
    // if( !authStore.loggedIn ) {
    //     if( to.path === '/dashboard' ) {
    //         return navigateTo('/');
    //     }
    // } else {
    //     if( to.path === '/login' || to.path === '/register' ) {
    //         return navigateTo('/dashboard');
    //     }
    // }
} );