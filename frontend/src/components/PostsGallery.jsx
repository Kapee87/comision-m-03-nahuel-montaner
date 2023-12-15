import React from 'react'
import { NavLink } from 'react-router-dom'
import { useIsLogged } from '../hooks/useIslogged';

function PostsGallery({ posts }) {
    const { token } = useIsLogged()

    return (
        <div className='m-10 mb-20 flex flex-wrap gap-5 justify-center' id='postsGallery'>


            {posts?.map((post, index) => {
                const newDescription = post.description.substring(0, 100);
                return <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl" key={post._id}>
                    <div className="h-96 w-72">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={post.imageUrl} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <NavLink to={`/post/${post._id}`} className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 pb-14">
                        <h2 className="font-dmserif text-lg font-bold text-white">{post.title} </h2>
                        <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{newDescription}</p>
                        <span to={`/post/${post._id}`} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Ver Más</span>
                    </NavLink>
                </div>
            })
            }

        </div >
    )
}

export default PostsGallery


/* 
return <div className="card w-1/4 bg-base-100 shadow-xl image-full z-0" key={post._id}>
                    <figure><img src={post.imageUrl} alt="post image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{post.title} </h2>
                        <hr />
                        <p>{newDescription + '...'} </p>
                        <div className="card-actions justify-end">
                            <NavLink to={`/post/${post._id}`} className="btn btn-primary">Ver más</NavLink>
                        </div>
                    </div>
                </div>
*/