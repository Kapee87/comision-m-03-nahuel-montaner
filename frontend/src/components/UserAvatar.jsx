import React from 'react'

function UserAvatar({ picSrc, size }) {
    return (
        <div className="avatar">
            <div className={`${size} rounded-full`}>
                <img src={picSrc} />
            </div>
        </div>
    )
}

export default UserAvatar