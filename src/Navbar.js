// the Navbar component

// to do React routing, we need to import and use the Link component instead of standard hyperlinks.
// So instead of <a href="link">text</a> we have <Link to="link">text</Link>
// The Link object does compile these as anchor tags but they're specially controlled by any parent Router in the DOM.
import { Link } from 'react-router-dom';

function Navbar() {
  const title = "";

  return (
    
    <nav className='navbar'>
        <h1>{ title }</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  );
}

export default Navbar;
