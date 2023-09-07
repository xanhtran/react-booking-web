import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'
import {
   faBed,
   faCalendarDays,
   faCar,
   faPerson,
   faPlane,
   faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRangeInterface } from './header.types'
import { useNavigate } from 'react-router-dom'

interface Option {
   adult: number
   children: number
   room: number
}

interface HeaderProps {
   type?: string
}

const Header = (props: HeaderProps) => {
   const { type } = props
   const [destination, setDestination] = useState('')
   const [openDate, setOpenDate] = useState<boolean>(false)
   const [openOptions, setOpenOptions] = useState<boolean>(false)
   const navigate = useNavigate()

   const [options, setOptions] = useState<Option>({
      adult: 1,
      children: 0,
      room: 1,
   })
   const [dateRange, setDateRange] = useState<DateRangeInterface[]>([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection',
      },
   ])

   const handleOptions = (name: keyof Option, operation: any) => {
      setOptions((prev) => {
         return {
            ...prev,
            [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
         }
      })
   }

   const handleSearch = () => {
      navigate('/hotels', { state: { destination, dateRange, options } })
   }

   return (
      <div className="header">
         <div
            className={
               type === 'list' ? 'headerContainer listMode' : 'headerContainer'
            }
         >
            <div className="headerList">
               <div className="headerListItem active">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car rentals</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Attractions</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport taxis</span>
               </div>
            </div>
            {type !== 'list' && (
               <>
                  <h1 className="headerTitle">
                     A lifetime of discounts? It's Genius.
                  </h1>
                  <p className="headerDesc">
                     Get rewarded for your travels - unlock instant savings of
                     10% or with a free GreenPeBooking account
                  </p>
                  <button className="headerBtn">Sign in/ Register</button>

                  <div className="headerSearch">
                     <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
                        <input
                           type="text"
                           name=" id="
                           placeholder="Where are you going?"
                           className="headerSearchInput"
                           onChange={(e) => setDestination(e.target.value)}
                        />
                     </div>
                     <div className="headerSearchItem">
                        <FontAwesomeIcon
                           icon={faCalendarDays}
                           className="headerIcon"
                        />
                        <span
                           onClick={() => setOpenDate(!openDate)}
                           className="headerSearchText"
                        >{`${format(
                           dateRange[0]?.startDate,
                           'MM/dd/yyyy',
                        )} to  ${format(
                           dateRange[0]?.endDate,
                           'MM/dd/yyyy',
                        )}`}</span>
                        {openDate && (
                           <DateRange
                              editableDateInputs={true}
                              onChange={(item) =>
                                 setDateRange([
                                    item.selection as DateRangeInterface,
                                 ])
                              }
                              moveRangeOnFirstSelection={false}
                              ranges={dateRange}
                              className="dateRange"
                              minDate={new Date()}
                           />
                        )}
                     </div>
                     <div className="headerSearchItem">
                        <FontAwesomeIcon
                           icon={faPerson}
                           className="headerIcon"
                        />
                        <span
                           onClick={() => setOpenOptions(!openOptions)}
                           className="headerSearchText"
                        >
                           {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                        </span>
                        {openOptions && (
                           <div className="options">
                              <div className="optionItem">
                                 <span className="optionText">Adult</span>
                                 <div className="optionCounter">
                                    <button
                                       className="optionCounterBtn"
                                       onClick={() => {
                                          handleOptions('adult', 'd')
                                       }}
                                       disabled={options.adult <= 1}
                                    >
                                       -
                                    </button>
                                    <span className="optionCounterNum">
                                       {options.adult}
                                    </span>
                                    <button
                                       className="optionCounterBtn"
                                       onClick={() => {
                                          handleOptions('adult', 'i')
                                       }}
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                              <div className="optionItem">
                                 <span className="optionText">Children</span>
                                 <div className="optionCounter">
                                    <button
                                       className="optionCounterBtn"
                                       onClick={() => {
                                          handleOptions('children', 'd')
                                       }}
                                       disabled={options.children <= 1}
                                    >
                                       -
                                    </button>
                                    <span className="optionCounterNum">
                                       {options.children}
                                    </span>
                                    <button
                                       className="optionCounterBtn"
                                       onClick={() => {
                                          handleOptions('children', 'i')
                                       }}
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                              <div className="optionItem">
                                 <span className="optionText">Room</span>
                                 <div className="optionCounter">
                                    <button
                                       className="optionCounterBtn"
                                       onClick={() => {
                                          handleOptions('room', 'd')
                                       }}
                                       disabled={options.room <= 1}
                                    >
                                       -
                                    </button>
                                    <span className="optionCounterNum">
                                       {options.room}
                                    </span>
                                    <button
                                       className="optionCounterBtn"
                                       onClick={() => {
                                          handleOptions('room', 'i')
                                       }}
                                    >
                                       +
                                    </button>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>
                           Search
                        </button>
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

export default Header
