import { useState } from 'react'
import { Select } from './Select'
import { Card } from './Card'

export const VideoList = ({ playlists, setCurrentVideo }) => {
  const [select, setSelect] = useState('1')
  const [musics, tutorials] = playlists

  return (
    <div className="w-full">
      <Select playlists={playlists} setSelect={setSelect} />
      <div className="md:h-video md:overflow-scroll pl-1 pr-1 md:pl-0">
        {select === '1'
          ? musics.videos.map(video => (
            <Card key={video.id} video={video} setCurrentVideo={setCurrentVideo} />
          ))
          : tutorials.videos.map(video => (
            <Card  key={video.id} video={video} />
          ))}
      </div>
    </div>
  )
}
