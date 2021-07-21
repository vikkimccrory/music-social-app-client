import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getPost, deletePost } from '../../api/posts'
import { withRouter } from 'react-router'
import messages from '../AutoDismissAlert/messages'

class ShowPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {},
      deleted: false
    }
  }

  componentDidMount () {
    const { match } = this.props
    getPost(match.params.id, this.props.user)
      .then(res => this.setState({ post: res.data.post }))
      .catch(console.error)
  }

  destroy = () => {
    const { match, msgAlert } = this.props
    deletePost(match.params.id, this.props.user)
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Post Deleted',
        message: messages.deleteSuccess,
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Post Delete Failure',
        message: messages.deleleFailure,
        variant: 'danger'
      }))
  }

  render () {
    const { post, deleted } = this.state
    if (!post) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={'/posts/'} />
    }
    return (
      <Fragment>
        <div key={post.id} className="show-post-container">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.tags}</p>
          <Link className="button-link" to={`/posts/${this.props.match.params.id}/edit`}><Button className="edit-button">Edit Post</Button></Link>
          <Button className="delete-button" onClick={this.destroy}>Delete Post</Button>
        </div>
        <Link className="back-to-index-link" to='/posts'>Back to all posts</Link>
      </Fragment>
    )
  }
}

export default withRouter(ShowPost)
