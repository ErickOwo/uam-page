import React from 'react'

const Info = ({ span ,parrafs }) => {
  if(parrafs) return (
    <> 
      <span>
        { span }
      </span>
      {
        parrafs.split('\n').map(parraf =>(
        <p>
          { parraf }
        </p>
        ))
      }
    </>
  )
}

export default Info