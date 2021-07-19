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

  componentDidMount (id) {
    const { match } = this.props
    console.log(this.props)
    console.log(match)
    getPost(match.params.id, this.props.user)
      .then(res => {
        console.log(res)
        return res
      })
      .then(res => this.setState({ post: res.data.post }))
      .catch(console.error)
  }

  render () {
    const post = this.state
    if (!post) {
      return <p>Loading...</p>
    } else {
      return (
        <Fragment>
          <div key={post.id} className="post-container">
            {console.log(post)}
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
