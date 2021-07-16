import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPost = (user, data) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/posts/`,
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      post: data
      // post: {
      //   owner: '',
      //   title: post.title,
      //   content: post.content,
      //   tags: post.tags
      // }
    }
  })
}

export const getPost = (id, user) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/posts/${id}/`,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
export const getAllPosts = (user) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/posts/`,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const updatePost = (id, user) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/posts/${id}/`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      post: {
        owner: '',
        title: user.post.title,
        content: user.post.content,
        tags: user.post.tags
      }
    }
  })
}
