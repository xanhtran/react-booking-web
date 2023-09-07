import './searchItem.scss'

const SearchItem = () => {
   return (
      <div className="searchItem">
         <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
         />
         <div className="siDesc">
            <h1 className="siTitle">Lord Residence</h1>
            <span className="siAddress">06. Terézváros, Budapest</span>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>

            <span className="siSubtitle">
               Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
               Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
               You can cancel later, so lock in this great price today
            </span>
         </div>
         <div className="siDetails">
            <div className="siRating">
               <span>Excellent</span>
               <button className="numberRating">8.3</button>
            </div>
            <div className="siDetailTexts">
               <span className="siPrice">$200</span>
               <span className="siTaxOp">Includes taxes and fees</span>
               <button className="siCheckBtn">See availabity</button>
            </div>
         </div>
      </div>
   )
}

export default SearchItem
