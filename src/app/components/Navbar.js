import Link from "next/link"
const Navbar = () =>{
  return(
    <div>
      <nav className='nav'>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/about">about</Link>
        </li>
        <li>
          <Link href="/pages/event">Events</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/pages/contact">Register Now</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
export default Navbar