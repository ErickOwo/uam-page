import Butterflies from '@components/Butterflies'
import Nosotros from '@containers/Nosotros';
import History from '@containers/History';
import Gallery from '@components/Gallery';

export default function Home() {
  return (
    <>
      <Butterflies /> 
      <Nosotros />
      <Gallery />
      <History />
    </>
  )
}
