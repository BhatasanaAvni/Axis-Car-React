import React from 'react'
import "./Cantent.css"
const Cantent = ({Dataprops}) => {
  return (
    <>
      {Dataprops.map((Datamap)=>(
        <div key={Datamap.id} className='collection-data'>
            <h3>{Datamap.heading}</h3>
            <p>{Datamap.content}</p>
        </div>
      ))}
    </>
  )
}




export default Cantent
