import React from 'react'
import { useState } from 'react'

function Search() {
  const [form, setForm] = useState('');




  return (
    <div className='form'>
      <input value={form} onChange={e => setForm(e.target.value)}></input>
      <button>Search</button>
      <p>
        {form}
      </p>

    </div>
  )
}

export default Search