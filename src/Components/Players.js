import React from 'react'

function Players({player1, player2}) {

    return (
        <div className='d-flex justify-content-between'>
            <span>Player1 : {player1}</span>
            <span>Player2 : {player2}</span>
        </div>
    )
}

export default Players
