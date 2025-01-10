import React from 'react'

const Menu = (
    {items}
) => {
  return (
    <div>
        <h1>select your items</h1>
        {items.map((item,index)=>(
            <h1>{item}</h1>
        ))}

    </div>
  )
}

export default Menu