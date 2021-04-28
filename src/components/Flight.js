import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { Link } from 'react-router-dom'
import { DateFormate, getHoursMinutes, timeDiffCalc } from '../utils/helper'
const Flight = ({
  AirItineraryPricingInfo,
  OriginDestinationOptions,
  name,
}) => {
  const { bookFlight } = useFilterContext()

  return (
    <article>
      <div>{name}</div>
      <div className='departure-location-details'>
        <h6>
          {getHoursMinutes(
            OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
          )}
        </h6>
        <h5>
          <strong>
            {
              OriginDestinationOptions[0].FlightSegments[0]
                .DepartureAirportLocationCode
            }
          </strong>
        </h5>
        <h6>
          {DateFormate(
            OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
          )
            .split('.')
            .join('')}
        </h6>
      </div>
      <div className='time'>
        <h6>
          {timeDiffCalc(
            new Date(
              OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
            ),
            new Date(
              OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime
            )
          )}
        </h6>
        <h6>1 stops</h6>
      </div>
      <div className='arrival-location-details'>
        <h6>
          {getHoursMinutes(
            OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime
          )}
        </h6>
        <h5>
          <strong>
            {
              OriginDestinationOptions[0].FlightSegments[0]
                .ArrivalAirportLocationCode
            }
          </strong>
        </h5>
        <h6>
          {DateFormate(
            OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime
          )
            .split('.')
            .join('')}
        </h6>
      </div>
      <Link
        to='/success'
        className='book-flight'
        onClick={() => bookFlight(OriginDestinationOptions, name)}
      >
        <p>Book Flight</p>
        <p>
          USD <b>{AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount}</b>
        </p>
      </Link>
    </article>
  )
}

export default Flight
