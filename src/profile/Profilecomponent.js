import React from 'react'

const Profilecomponent = ({ Name , bio , pro ,handlename,children}) => {
    return (
        <div>
        <h1>{Name}</h1>
        <h2>{bio}</h2>
        <h3>{pro}</h3>
        <button onClick={()=>handlename(Name)}>click here</button>
        {children}
        </div>
    )
}

export default Profilecomponent
