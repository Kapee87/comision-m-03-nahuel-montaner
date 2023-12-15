import React, { useContext, useRef } from 'react'
import { usePostHandler } from '../hooks/usePostHandler'
import { UserContext } from '../context/UserContext'
import { useIsLogged } from '../hooks/useIslogged'
import { useNavigate } from 'react-router-dom'

function NewPost() {
    const { userData } = useContext(UserContext)
    const { token } = useIsLogged()
    const { createPost } = usePostHandler()
    const navigate = useNavigate()
    console.log(userData);


    const inputRef = {
        titleForm: useRef(null),
        descriptionForm: useRef(null),
        imageUrlForm: useRef(null)
    }

    const handleCreatePost = async (e) => {
        e.preventDefault()
        try {
            const res = await createPost({
                title: inputRef.titleForm.current.value,
                description: inputRef.descriptionForm.current.value,
                imageUrl: inputRef.imageUrlForm.current.value,
                autor: userData._id,
                token: token
            })
            navigate('/', { replace: true })
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='min-h-screen bg-primary' style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay flex flex-col items-center gap-12 min-h-screen">
                <h2 className='text-lg md:text-3xl mt-5 self-center bg-black bg-opacity-60 rounded-2xl p-4 '>Crear una nueva experiencia</h2>
                <div className='bg-black bg-opacity-80 border-2 border-orange-400 border-opacity-60 py-10 px-10 md:px-36 rounded-lg [&_input]:rounded-md [&_input]:ms-3 [&_input]:p-2 [&_textarea]:rounded-md shadow-xl shadow-slate-700'>
                    <form className='flex flex-col items-baseline [&_label]:flex [&_label]:justify-between [&_label]:w-full [&_label]:gap-5 [&_label]:mt-2 [&_label]:flex-col [&_label]:md:flex-row ' onSubmit={handleCreatePost} >
                        <label htmlFor="" className='text-xs md:text-base'>Título : <input type="text" ref={inputRef.titleForm} /></label>
                        <label htmlFor="" className='text-xs md:text-base'>Experiencia : <textarea name="" rows={10} cols={25} ref={inputRef.descriptionForm} ></textarea></label>
                        <label htmlFor="" className='text-xs md:text-base'>Imagen (Url) : <input type="url" ref={inputRef.imageUrlForm} /></label>
                        <div className='flex justify-end w-full mt-5'>
                            <button type="submit" className='btn btn-ghost btn-outline'>Crear experiencia</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default NewPost