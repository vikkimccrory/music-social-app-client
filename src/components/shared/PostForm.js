import React from 'react'
import { Link } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label className="form-label">Title</label>
    <input
      placeholder="Title"
      value={post.title}
      name="title"
      onChange={handleChange}
    />
    <label className="form-label">Content</label>
    <textarea
      placeholder="Content"
      value={post.content}
      name="content"
      onChange={handleChange}
    />
    <label className="form-label">Tags</label>
    <input
      placeholder="Tags"
      value={post.tags}
      name="tags"
      onChange={handleChange}
    />

    <Button className="submit-button" type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button className="cancel-button">Cancel</Button>
    </Link>
  </form>

  // <div className="row">
  //   <div className="col-sm-10 col-md-8 mx-auto mt-5">
  //     <h3>Create Post</h3>
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group controlId="title">
  //         <Form.Label>Title</Form.Label>
  //         <Form.Control
  //           required
  //           type="text"
  //           name="title"
  //           value={post.title}
  //           placeholder="Enter title"
  //           onChange={handleChange}
  //         />
  //       </Form.Group>
  //       <Form.Group controlId="content">
  //         <Form.Label>Content</Form.Label>
  //         <Form.Control
  //           required
  //           name="content"
  //           value={post.content}
  //           type="text"
  //           placeholder="Enter content"
  //           onChange={handleChange}
  //         />
  //       </Form.Group>
  //       <Form.Group controlId="tags">
  //         <Form.Label>Tags</Form.Label>
  //         <Form.Control
  //           required
  //           name="tags"
  //           value={post.tags}
  //           type="textarea"
  //           placeholder="Enter tags"
  //           onChange={handleChange}
  //         />
  //       </Form.Group>
  //       <Button
  //         variant="primary"
  //         type="submit"
  //       >
  //         Submit
  //       </Button>
  //       <Link to={cancelPath}>
  //         <Button>Cancel</Button>
  //       </Link>
  //     </Form>
  //   </div>
  // </div>
)

export default PostForm
