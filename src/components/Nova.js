import React from 'react'

function Nova({foodData, index}) {


  return (
    <div className='nova'>
        NOVA score is {foodData && foodData[index].nova_group}

    </div>
  )
}

export default Nova

