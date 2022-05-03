import Link from 'next/link'

const Header = () => {
    return ( 
        <div>
            <nav>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/people/list'><a>People List</a></Link>
            </nav>
           
        </div>
     );
}
 
export default Header;