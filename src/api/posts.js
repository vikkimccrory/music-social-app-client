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

export const updatePost = (id, user, post) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/posts/${id}/`,
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      post: {
        owner: '',
        title: post.title,
        content: post.content,
        tags: post.tags
      }
    }
  })
}

export const deletePost = (id, user) => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/posts/${id}/`,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
