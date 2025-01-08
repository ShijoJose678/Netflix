import axios from "axios";
import {Base_URL} from './ConsistentURLs/BasicURLs'

const instentce = axios.create({
    baseURL:Base_URL
})

export default instentce;