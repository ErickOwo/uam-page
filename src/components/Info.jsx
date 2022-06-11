
const Info = ({ subtitle , parrafs, type }) => {

  if(parrafs) return (
    <> 
      <span className="font-bold">
        { subtitle }
      </span>
      {  
        type == "parraf" ? <>
          {
            JSON.parse(parrafs).parrafs?.map(parraf =>(
              <p>
                { parraf }
              </p>
            ))
          }
        </> : null
      }
    </>
  )
}

export default Info