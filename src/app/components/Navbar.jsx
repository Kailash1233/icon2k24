import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='menu-first'>
        <img src=" " alt="icon2k24 logo" />
      </div>

      <ul className='menu-center'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="menu-last">
      <button className='login'> Log in </button>
      <button className='signin'> Sign in </button>
      </div>
    </nav>
  );
};

export default Navbar;
