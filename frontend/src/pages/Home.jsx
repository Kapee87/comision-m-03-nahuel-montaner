// import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostHandler } from '../hooks/usePostHandler'
import TopPostsCarrousel from '../components/TopPostsCarrousel'
import PostsGallery from '../components/PostsGallery'

function Home() {
    const navigate = useNavigate()
    const [postsArray, setPostsArray] = useState(null)
    const { getPosts } = usePostHandler()

    useEffect(() => {
        const { posts } = getPosts()
            .then(res => setPostsArray([...res]))
    }, [])

    const handleClick = async () => {
        try {
            /* const newUSer = await axios.post("https://epicjourney.onrender.com/auth/register", {
                "username": "Lionel Stallone",
                "email": "liostallone@mail.com",
                "password": "123qwe",
                "avatarUrl": "https://fotos.perfil.com/2022/12/13/trim/987/555/lionel-messi-con-la-albiceleste-1471882.jpeg"
            }) */
            navigate('/nuevoPost')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            <TopPostsCarrousel posts={postsArray} />
            <PostsGallery posts={postsArray} />
            {/* <button className='absolute top-20 btn btn-outline' onClick={() => console.log(posts.map(p => p.title))}>prueba</button> */}
        </>
    )
}

export default Home
