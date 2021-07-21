import React, { Fragment } from 'react'

const HomePage = (props) => {
  let homeJsx = ''
  if (props.user) {
    homeJsx = <div className="after-sign-in-home-page">
      <h1>Welcome Back!</h1>
      <h2>Happy Creating :)</h2>
    </div>
  } else {
    homeJsx = <div className="home-page">
      <h2>Your: Lyrics, Melodies, Chord Progressions</h2>
      <h1>All In One Place</h1>
    </div>
  }
  return (
    <Fragment>
      {homeJsx}
    </Fragment>
  )
}

export default HomePage
