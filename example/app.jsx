import React, { Fragment } from 'react'
import { render } from 'react-dom'

import Image from '../test/image.svg'

const App = () => (
  <Fragment>
    <h1>parcel-plugin-react-svg</h1>
    <Image fill="blue" width={100} />
  </Fragment>
)

render(<App />, document.getElementById('root'))
