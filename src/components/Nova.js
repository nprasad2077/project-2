import React from 'react'

function Nova({foodData}) {


  return (
    <div className='nova'>
        NOVA score is {foodData && foodData[0].nova_group}

    </div>
  )
}

export default Nova