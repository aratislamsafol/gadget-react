import { useLoaderData } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

export default function Home() {
  const datum = useLoaderData();
  return (
    <div>
      <Banner/>
      <Products datum={datum}/>
    </div>
  )
}
