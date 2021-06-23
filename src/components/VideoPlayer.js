export const VideoPlayer = ({ currentVideo }) => {
  return (
    <div className="border-b border-gray-200 md:border-none md:col-span-2">
      <iframe
        src={currentVideo.url + '?autoplay=1'}
        title="Video Player"
        className="w-full h-52 sm:h-96 md:h-80 lg:h-video"
        allowFullScreen="allowFullScreen"
      />
      <h1 className="my-3 md:text-xl ml-2">{currentVideo.title}</h1>
    </div>
  )
}
