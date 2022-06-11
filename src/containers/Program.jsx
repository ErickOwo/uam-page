import Info from "@components/Info"
import Image from "next/image"

const Program = ({ id, title, imgURL, info  }) => {

  return <div className="bg-white p-8" id={id}>
      <h2 className="bg-green-500 text-center text-3xl p-2 mb-8">
        {title}
      </h2>
      <Image src={imgURL} width="1300px" height="700px" />
      <div className="flex flex-col gap-2 text-green-800 font-semibold md:text-justify">
        {
          info.map((item, index)=>{
            const obj = JSON.parse(item)
            return(  
              <Info 
              key={index}
              subtitle={obj.subtitle}
              type={obj.type}
              parrafs={obj.text} />
            ) 
        })
        }
      </div>
    </div>;
}

export default Program