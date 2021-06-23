import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import { VideoContainer } from './components/VideoContainer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get('https://s3-ap-southeast-1.amazonaws.com/pacmannai.com/static/json/playlist.json')
      const data = await response.data

      setPlaylists(data.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Navbar />
      <VideoContainer playlists={playlists} />
    </Container>
  )
}
