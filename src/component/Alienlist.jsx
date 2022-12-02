import React from 'react'
import Nftcard from './Nftcard'
import './Alienlist.css'

 function Alienlist({ alienListData, setSelectedAlien }) {
 

  return (
    <div className='alienList'>
        {alienListData.map(alien => (
            <div onClick={() => setSelectedAlien(alien.token_id)}>
              <Nftcard
                key={alien.token_id}
                id={alien.token_id}
                name={alien.name}
                traits={alien.traits}
                image={alien.image_url}
              />
            </div>
        ))}
    </div>
  )
}

export default Alienlist