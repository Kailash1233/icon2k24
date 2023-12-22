import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/events">Events</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/contact">Register Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
