import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getAllPosts } from '../../api/posts'

class IndexPosts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    getAllPosts(this.props.user)
      .then(res => this.setState({ posts: res.data.posts }))
      .catch(console.error)
  }

  render () {
    const posts = this.state.posts.map(post => (
      <div key={post.id} className="post-container">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.tags}</p>
        <Button variant="primary"><Link className="button-link" to={`/posts/${post.id}`}>Show Post</Link></Button>
      </div>
      // <Link to={`/posts/${post.id}`}>{post.title}</Link>

    ))

    return (
      <Fragment>
        <h4>Posts</h4>
        <ul>
          {posts}
        </ul>
      </Fragment>
    )
  }
}

export default IndexPosts
