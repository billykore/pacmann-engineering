export const Select = ({ playlists, setSelect }) => {
  return (
    <div className="relative inline-block w-full text-gray-700 mt-4 mb-2 md:mt-0 px-1 md:px-0">
      <select
        className="rounded w-full h-8 pl-3 pr-6 text-sm text-center placeholder-gray-600 border appearance-none"
        placeholder="Regular input"
        onChange={e => setSelect(e.target.value)}
      >
        {playlists.map(playlist => (
          <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd" fillRule="evenodd"/>
        </svg>
      </div>
    </div>
  )
}