import axios from "axios"
import { apiUrl } from "../utils/urlStore"
import Swal from "sweetalert2"

export function usePostHandler() {


    const getPosts = async () => {
        const { data } = await axios(`${apiUrl}/post/all`)
        // console.log(data);
        return data.posts
    }
    const getPostbYiD = async (id) => {
        const { data } = await axios(`${apiUrl}/post/${id}`)
        // console.log(data);
        return data.post
    }
    const createPost = async (post) => {
        console.log(post);
        try {
            const { data } = await axios.post(`${apiUrl}/post`, post)
            Swal.fire('Felicidades', data.message, 'success')
        } catch (error) {
            console.log(error);
        }
    }

    return { getPosts, getPostbYiD, createPost }
}