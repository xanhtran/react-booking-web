import Header from '@components/Header'
import Navbar from '@components/Navbar'
import './list.scss'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format, setDate } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '@components/SearchItem'

const List = () => {
   const location = useLocation()

   const [destination, setDestination] = useState(location.state.destination)
   const [dateRange, setDateRange] = useState(location.state.dateRange)
   const [options, setOptions] = useState(location.state.options)
   const [openDate, setOpenDate] = useState(false)

   return (
      <div>
         <Navbar />
         <Header type="list" />
         <div className="listContainer">
            <div className="listWrapper">
               <div className="listSearch">
                  <h1 className="listTitle">Search</h1>
                  <div className="listItem">
                     <label htmlFor="Destination" className="listItemLabel">
                        Destination
                     </label>
                     <input
                        type="text"
                        name=""
                        id=""
                        placeholder={destination}
                     />
                  </div>
                  <div className="listItem">
                     <label htmlFor="Destination" className="listItemLabel">
                        Check in Date
                     </label>
                     <span onClick={() => setOpenDate(!openDate)}>
                        {`${format(
                           dateRange[0].startDate,
                           'MM/dd/yyyy',
                        )} to ${format(dateRange[0].endDate, 'MM/dd/yyyy')}`}
                     </span>
                     {openDate && (
                        <DateRange
                           onChange={(item) => setDateRange(item.selection)}
                           minDate={new Date()}
                           ranges={dateRange}
                        />
                     )}
                  </div>

                  <div className="listItem">
                     <label htmlFor="" className="listItemLabel">
                        Options
                     </label>

                     <div className="listOptions">
                        <div className="listOptionItem">
                           <span className="listOptionText">
                              Min price per night
                           </span>
                           <input
                              type="number"
                              name=""
                              id=""
                              className="listOptionInput"
                           />
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">
                              Max price per night
                           </span>
                           <input
                              type="number"
                              name=""
                              id=""
                              className="listOptionInput"
                           />
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Adult</span>
                           <input
                              type="number"
                              name=""
                              id=""
                              className="listOptionInput"
                              placeholder={options.adult}
                           />
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Children</span>

                           <input
                              type="number"
                              name=""
                              id=""
                              className="listOptionInput"
                              placeholder={options.children}
                           />
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Room</span>
                           <input
                              type="number"
                              name=""
                              id=""
                              className="listOptionInput"
                              placeholder={options.room}
                           />
                        </div>
                     </div>
                  </div>
                  <button className="btnSearch">Search</button>
               </div>
               <div className="listResult">
                  <SearchItem />
               </div>
            </div>
         </div>
      </div>
   )
}

export default List
