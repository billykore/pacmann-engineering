export const Navbar = () => {
  const url = 'https://github.com/billykore'

  return (
    <nav className="flex justify-between item-center px-4 py-5 border-b border-gray-200">
      <h1 className="md:text-xl">Demo App</h1>
      <div>
        <a href={url}>
          <img className="fill-current text-gray-500" src="github.svg" alt="github" height={10} />
        </a>
      </div>
    </nav>
  )
}