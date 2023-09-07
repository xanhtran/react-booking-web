import Featured from '@components/Featured'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import './home.scss'
import PropertyList from '@components/PropertyList'
import FeaturedProperties from '@components/FeaturedProperties'
import MailList from '@components/MailList'
import Footer from '@components/Footer'

const Home = () => {
   return (
      <>
         <div>
            <Navbar />
         </div>
         <div>
            <Header />
         </div>

         <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList />
            <h1 className="homeTitle ">Homes guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
         </div>
      </>
   )
}

export default Home
