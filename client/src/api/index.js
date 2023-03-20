import axios from 'axios'

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {
    try {
        axios.get(url)
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (newPost) => {
    try {
        axios.post(url, newPost);
    } catch (error) {
        console.log(error)
    }
} 