export const Card = ({ video, setCurrentVideo }) => {
  return (
    <div
      key={video.id} className="w-full overflow-hidden sm:flex px-4 py-3 mb-4 cursor-pointer border
        border-gray-200 rounded hover:bg-gray-200 hover:border-gray-300"
      onClick={() => setCurrentVideo(video)}
    >
      <div className="flex-1">
        <h4 className="ml-2 font-semibold tracking-tight text-gray-800 text-sm md:text-base">{video.title}</h4>
      </div>
    </div>
  )
}