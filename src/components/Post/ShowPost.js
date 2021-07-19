import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getPost, deletePost } from '../../api/posts'
import { withRouter } from 'react-router'

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
    const { match } = this.props
    deletePost(match.params.id, this.props.user)
      .then(() => this.setState({ delete: true }))
      .catch(console.error)
  }

  render () {
    const { post } = this.state
    if (!post) {
      return <p>Loading...</p>
    } else {
      return (
        <Fragment>
          <div key={post.id} className="post-container">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>{post.tags}</p>
            <Button onClick={this.destroy}>Delete Post</Button>
            <Link to='/posts'>Back to all posts</Link>
          </div>
        </Fragment>
      )
    }
  }
}

export default withRouter(ShowPost)
