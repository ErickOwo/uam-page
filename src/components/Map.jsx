import { useJsApiLoader, GoogleMap, Marker, } from '@react-google-maps/api';
import { useState } from 'react';

const Map = () =>{
  const [ load, setLoad ] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAjR3m4FPLzRV8y0ef_7wpBAZ9lhMU-zGc'
  })

  if(!isLoaded) return <p>Cargando</p>
  
  
  const center = { lat: 14.82976570462832, lng: -91.51233970144668 }

  return(
    <GoogleMap 
      mapContainerClassName='h-[500px] w-[550px]'
      zoom={17}
      center={center}
      onLoad={map => setLoad(true) }
        >
      { 
        load ? <Marker 
        position={center}  />
        : console.log('cargando')
      }
    </GoogleMap>
  )
}

export default Map