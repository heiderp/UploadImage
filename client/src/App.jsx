import './App.css'
import React, { useState } from 'react'
import Container from './Components/Container'
import Card from './Components/Card'
import Loader from './Components/Loader'
import usePostImage from './hooks/usePostImage'
import Form from './Components/Form'
import Preview from './Components/Preview'
function App () {
  const [loading, setLoading] = useState(false)
  const [urlCompress, setUrlCompress] = useState(false)
  const handleLoading = data => setLoading(data)
  const handleUrlCompress = data => setUrlCompress(data)
  return (
    <div className='App'>
      <Container>
        <Card>
          {loading && <Loader />}
          {!loading &&
            <>
            {urlCompress
              ? <Preview urlCompress={urlCompress} handleUrlCompress={handleUrlCompress} />
              : <Form handleLoading={handleLoading} handleUrlCompress={handleUrlCompress} />}
           </>
           }
        </Card>
      </Container>
    </div>
  )
}

export default App
