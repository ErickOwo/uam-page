import Image from "next/image"

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
        </> : <ul className="list-disc pl-6">
          {
            JSON.parse(parrafs).parrafs?.map(parraf =>(
              <li>
                { parraf }
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

export default Info