import { useEffect } from "react";
import {useRouter} from 'next/router'
import Link from "next/link";

const ErrorPage = () => {

    const router = useRouter();

    useEffect( () => {
        setTimeout( () => {
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div>
            <h2>This page does not exist</h2>
            <h4>You will be redirected to the <Link href='/'><a>Homepage</a></Link></h4>
        </div>
     );
}
 
export default ErrorPage;