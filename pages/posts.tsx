import MainLayout from "../components/MainLayout";
import {useEffect, useState} from "react";
import Link from "next/link";
import {MyPost} from "../interfaces/post";

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts }): PostsPageProps {

    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts')
    //         const json = await response.json()
    //         setPosts(json)
    //         }
    //
    //         load()
    //     }, [])



    return (
     <MainLayout title={'Posts'}>
        <h1>Posts Page</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
     </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts: MyPost[] = await response.json()

    return {
        posts: posts
    }
}
