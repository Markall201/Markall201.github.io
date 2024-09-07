// the Navbar component

function Navbar() {
  const title = "";

  return (
    
    <nav className='navbar'>
        <h1>{ title }</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    </nav>
  );
}

export default Navbar;
