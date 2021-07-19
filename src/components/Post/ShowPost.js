import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getPost } from '../../api/posts'
import { withRouter } from 'react-router'

class ShowPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {}
    }
  }

  componentDidMount () {
    const { match } = this.props
    getPost(match.params.id, this.props.user)
      .then(res => this.setState({ post: res.data.post }))
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
            <Link to='/posts'>Back to all posts</Link>
          </div>
        </Fragment>
      )
    }
  }
}

export default withRouter(ShowPost)
