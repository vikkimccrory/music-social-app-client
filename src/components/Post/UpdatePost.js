import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { updatePost } from '../../api/posts'
import PostForm from '../shared/PostForm'
import messages from '../AutoDismissAlert/messages'

class UpdatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        content: '',
        tags: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    const { match } = this.props
    updatePost(match.params.id, this.props.user, this.state.post)
      .then(res => this.setState({ post: res.data.post }))
      .catch(console.error)
  }

  handleChange = (event) => {
    event.persist()
    const updatedField = { [event.target.name]: event.target.value }
    const editedPost = Object.assign(this.state.post, updatedField)
    this.setState({ post: editedPost })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { match } = this.props
    updatePost(match.params.id, this.props.user, this.state.post)
      .then(() => this.setState({ updated: true }))
      .then(() => this.props.msgAlert({
        heading: 'Update success',
        message: messages.updateSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Update failure',
        message: messages.updateFailure,
        variant: 'danger'
      }))
      .catch(console.error)
  }
  render () {
    const { post, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    return (
      <Fragment>
        <h1>Edit Post</h1>
        <PostForm
          post={post}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancelPath={`/posts/${this.props.match.params.id}`}
        />
      </Fragment>
    )
  }
}

export default withRouter(UpdatePost)
