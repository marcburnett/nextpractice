import Link from 'next/link'

const Footer = () => {
    return ( 
        <div>
            <footer>            
            <p> Copyright 2022 People Listing</p>
            <p>Return to <Link href='/'><a>Home</a></Link></p>
            </footer>
        </div>
     );
}
 
export default Footer;