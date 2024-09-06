import React from 'react'

const Cantent = ({Dataprops}) => {
  return (
    <div style={Data}>
      {Dataprops.map((Datamap)=>(
        <div key={Datamap.id}>
            <h3 style={heading}>{Datamap.heading}</h3>
            <p style={Cantentpag}>{Datamap.content}</p>
        </div>
      ))}
    </div>
  )
}
const heading = {
    fontSize: "14px",
    lineHeight: "15.97px",
    fontWeight: 300,
    color: '#ABA6A6',
    paddingTop: "33.36px",
    
}
const Cantentpag = {
    fontSize: "13.67px",
    lineHeight: "15.97px",
    fontWeight: 300,
    color: '#ABA6A6',
  
    
}

const Data ={
    marginTop:"55px"
}
export default Cantent
