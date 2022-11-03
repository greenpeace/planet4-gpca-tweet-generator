import React, { useState } from 'react'
import Form from './Form'

export default function Wrapper(props) {
  const { attributes } = props

  const [data, setData] = useState(attributes.data)

  return (
    <div data-mt-attributes={attributes}>
      <Form attributes={attributes} data={data} setData={setData} />
    </div>
  )
}
