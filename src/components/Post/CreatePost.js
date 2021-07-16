import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { createPost } from '../../api/posts'
import PostForm from '../shared/PostForm'

class CreatePost extends Component {
  constructor () {
    super()

    this.state = {
      post: {
        title: '',
        content: '',
        tags: ''
      },
      createdId: null
    }
  }

  handleChange = (event) => {
    event.persist()
    this.setState((prevState) => {
      const name = event.target.name
      const value = event.target.value
      const updatedValue = { [name]: value }
      return { post: { ...prevState.post, ...updatedValue } }
    })
  }

handleSubmit = event => {
  event.preventDefault()
  createPost(this.props.user, this.state.post)
    .then(res => this.setState({ createdPostId: res.data.post._id }))
    .catch(console.error)
}

render () {
  const { post, createdId } = this.state
  const { handleChange, handleSubmit } = this

  if (createdId) {
    return <Redirect to={`/posts/${createdId}`} />
  }
  return (
    <Fragment>
      <PostForm
        post={post}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancelPath={'/posts'}
      />
    </Fragment>
  )
}
}

export default CreatePost
