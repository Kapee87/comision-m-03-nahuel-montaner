import React from 'react'
import { NavLink } from 'react-router-dom';

function TopPostsCarrousel({ posts }) {
    return (
        <>
            <div className='navbar justify-center border-t-2 border-zinc-700'>
                <h2 className='font-extrabold text-2xl'>Experiencias recientes</h2>
            </div>
            <div className="carousel w-full mb-20">
                {
                    posts?.length > 0 ? posts?.map((post, index) => {
                        // console.log(index);
                        return (
                            <div id={post._id} className="carousel-item w-full h-[74vh] md:h-[78vh] relative text-amber-100" key={post._id}>
                                <img src={post.imageUrl} className="w-full object-contain" />
                                <span className='absolute w-full bg-black bg-opacity-50 h-20 md:h-14 text-center drop-shadow-2xl text-base md:text-lg pt-4 md:pt3 font-bold'>
                                    {post.title}
                                </span>
                                <div className='absolute w-full h-16 md:h-10 text-center drop-shadow-2xl text-base md:text-lg bottom-0 font-bold 
                                bg-opacity-60 bg-black hue-rotate-180 flex justify-center gap-3'>
                                    <NavLink to={`/post/${post._id}`} className='btn-ghost rounded-xl p-1 hover:bg-sky-500 transition-all duration-700 ' >
                                        Ver Experiencia
                                    </NavLink>
                                    <div className='border'></div>
                                    <NavLink to={'/nuevoPost'} className='btn-ghost rounded-xl p-1 hover:bg-sky-500 transition-all duration-700' >
                                        Crear una Experiencia
                                    </NavLink>

                                </div>
                            </div>
                        )
                    })
                        : <div className="flex flex-col gap-4 w-full p-20">
                            <div className="skeleton h-96 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                }

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    posts?.length > 0 ? posts?.map((post, index) => {

                        if (index > 10) return

                        return (
                            <a href={`#${post._id}`} className="btn btn-xs" key={post._id}>{index} </a>
                        )

                    })
                        : ''
                }
            </div>
        </>
    )
}

export default TopPostsCarrousel