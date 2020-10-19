import store from '@/store'
import axios from 'axios'

store.subscribe((mutation)=>{
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                //Initialze axios request with headers that contain jwt token.
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                //Add token in localstorage to get it if the user refresh the page.
                localStorage.setItem('token', mutation.payload)
            } else{
                //Delete token if the user not signed in
                axios.defaults.headers.common['Authorization'] = null
                //Delete token from localstorage.
                localStorage.removeItem('token')
            }
            break;
    }
})