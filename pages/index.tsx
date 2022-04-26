import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Index() {
    return (
        <MainLayout title={'Home'}>
            <h1 className='red'>My Church App</h1>
            <ul>
                <li><Link href={'/posts'}><a>Posts</a></Link></li>
                <li><Link href={'/about'}><a>About</a></Link></li>
            </ul>
        </MainLayout>
        )
}