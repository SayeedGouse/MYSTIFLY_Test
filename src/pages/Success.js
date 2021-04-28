import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { DateFormate } from '../utils/helper'
import { Link } from 'react-router-dom'
const Success = () => {
  const { success, success_loading } = useFilterContext()
  console.log(success)
  if (Object.keys(success).length === 0) {
    return (
      <section className='main section-center'>
        <h3>Something went wrong..!</h3>
        <Link to='/search'>Go to Search result page</Link>
      </section>
    )
  }
  if (success_loading) {
    return (
      <section className='section-center'>
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className='flight-confirmation main'>
      <h1>Success</h1>
      <div>
        Your flight from{' '}
        <b>
          {
            success.destination[0].FlightSegments[0]
              .DepartureAirportLocationCode
          }
        </b>{' '}
        -{' '}
        <b>
          {success.destination[0].FlightSegments[0].ArrivalAirportLocationCode}
        </b>{' '}
        on{' '}
        <b>
          {DateFormate(
            success.destination[0].FlightSegments[0].DepartureDateTime
          )
            .split('.')
            .join('')}
        </b>
      </div>
      <div>is confirmed</div>
    </section>
  )
}

export default Success
