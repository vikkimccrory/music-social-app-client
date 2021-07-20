import React, { Fragment } from 'react'

const HomePage = (props) => {
  let homeJsx = ''
  if (props.user) {
    homeJsx = <h1>Welcome back!</h1>
  } else {
    homeJsx = <div className="home-page">
      <h1>All of your song ideas, all in one place</h1>
      <h3>A safe place for your lyrics, progressions, and voice memos</h3>
    </div>
  }
  return (
    <Fragment>
      {homeJsx}
    </Fragment>
  )
}

export default HomePage
