import React, { useState } from 'react';

const Matrix = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [colour, setColour] = useState([])
  const [orange, setOrange] = useState(false)

  const handleclick = (m) => {
    setColour([...colour,m])
    if(m === 9){
        setOrange(true)
    }
  }
  console.log(colour)

  return (
    <div>
      {
        matrix.map((mat,index)=>(
            <div key={index} className='flex flex-row'>
                {
                mat.map((m,index)=>(
                    <span key={index}
                    className={`p-2 mt-12 w-16 h-16 text-white border-2 border-gray-300 ${
                        orange
                          ? 'bg-orange-500': colour.includes(m)
                          ? 'bg-green-500': 'bg-black'
                      }`}
                    onClick={()=>handleclick(m)}
            
                    >{m}</span>
                ))
                }
            </div>
        ))
      }
    </div>
  );
};

export default Matrix;
