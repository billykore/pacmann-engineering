import { useState, useEffect } from 'react'
import { VideoPlayer } from './VideoPlayer'
import { VideoList } from './VideoList'

export const VideoContainer = ({ playlists }) => {
  const [currentVideo, setCurrentVideo] = useState({})

  useEffect(() => {
    const previousVideo = JSON.parse(localStorage.getItem('previous-video'))
    setCurrentVideo(previousVideo)
  }, [])

  useEffect(() => {
    localStorage.setItem('previous-video', JSON.stringify(currentVideo))
  })

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6 mt-6">
      {currentVideo ?
        <VideoPlayer currentVideo={currentVideo} /> :
        <div className="md:col-span-2 flex justify-center items-center border border-gray-200">
          <h1 className="text-4xl text-gray-300">
            No Video is Playing
          </h1>
        </div>
      }
      <VideoList playlists={playlists} setCurrentVideo={setCurrentVideo} />
    </div>
  )
}
