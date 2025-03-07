import {auth} from "../../utils/auth";
import {defineEventHandler, toWebRequest} from 'h3';

export default defineEventHandler((event) => {
    console.log(event)
    return auth.handler(toWebRequest(event));
});