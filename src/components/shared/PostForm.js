import React from 'react'
import { Link } from 'react-router-dom'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Title"
      value={post.title}
      name="title"
      onChange={handleChange}
    />

    <label>Content</label>
    <input
      placeholder="Content"
      value={post.content}
      name="content"
      onChange={handleChange}
    />

    <label>Tags</label>
    <input
      placeholder="Tags"
      value={post.tags}
      name="tags"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PostForm
