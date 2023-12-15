import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePostHandler } from '../hooks/usePostHandler';
import UserAvatar from '../components/UserAvatar';
import { useIsLogged } from '../hooks/useIslogged';
import Swal from 'sweetalert2';
import { useUserHandler } from '../hooks/useUserHandler';
import { UserContext } from '../context/UserContext';
import { apiUrl } from '../utils/urlStore';

function PostDetail() {
    const { isLogged } = useUserHandler()
    const { userData } = useContext(UserContext)
    const { id } = useParams("id")
    const { getPostbYiD } = usePostHandler()
    const [post, setPost] = useState(null)
    useEffect(() => {
        getPostbYiD(id)
            .then(res => setPost(res))
    }, [])

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        !isLogged() ? Swal.fire({
            title: "No iniciaste sesión"
        })
            :
            console.log(isLogged());
    }
    const prueba = async () => {
        const res = await axios.post(`${apiUrl}/auth/profile`)
        console.log(res)
    }

    return (
        <>
            {/* debuggin */}
            {/* <button className='btn absolute right-5 z-50' onClick={prueba}>prueba</button > */}

            <section className='hero relative'>

                {/* Para implementar más adelante, que cada usuario pueda borrar el post si es el autor */}
                {/* {isLogged() ? <div className='h-14 w-fit btn absolute p-2 top-5 tooltip flex overflow-hidden' data-tip='Eliminar'>
                    <span>❌</span> <span className='translate-y-'>Eliminar Post</span>
                </div> : ''} */}

                {
                    post ?
                        <article className='py-20 flex flex-col justify-center items-center gap-5'>
                            <h2 className='md:text-2xl px-16'>{post.title} </h2>
                            <div className='rounded-2xl overflow-hidden hover:[&_img]:scale-125 hover:[&_img]:transition-all hover:[&_img]:duration-500 [&_img]:duration-500'>
                                <img src={post.imageUrl} alt={`imagen descriptiva sobre ${post.title}`} className='w-[60vw] h-[50vh] object-cover' />
                            </div>
                            <div className='w-2/3 border-2 rounded-2xl p-5 border-slate-600 border-opacity-40 flex flex-col gap-10 shadow-inner shadow-amber-700'>
                                <p > {post.description}
                                </p>
                                <div className='flex items-center gap-2 justify-end'>
                                    <span>{post.autor.username} </span>
                                    <UserAvatar picSrc={post.autor.avatarUrl} size={'w-12'} />
                                </div>
                            </div>

                            {post?.comments?.map(comment => {
                                const fechaObjeto = new Date(comment.createdAt)
                                const fechaFormateada = fechaObjeto.toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric"
                                })
                                return <div className="chat chat-start w-full md:ps-44" key={comment._id}>
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS chat bubble component" src={comment.autor.avatarUrl} />
                                        </div>
                                    </div>
                                    <div className="chat-header flex gap-3 ps-3">
                                        {comment.autor.username}
                                        <time className='text-xs opacity-50'>{fechaFormateada}</time>
                                    </div>

                                    <div className="chat-bubble">{comment.description}</div>
                                </div>
                            })}
                            <div className="chat chat-end w-full">
                                <form method="post" className='w-full flex flex-col items-end md:pe-48 gap-2' onSubmit={handleCommentSubmit}>
                                    <textarea className="chat-bubble self-end min-h-[4rem] w-1/2 " placeholder='Opinar sobre la experiencia...' />
                                    <button type="submit" className='btn '>Enviar</button>
                                </form>
                            </div>

                        </article>

                        :
                        <h3>cargando...</h3>
                }

            </section>
        </>
    )
}

export default PostDetail