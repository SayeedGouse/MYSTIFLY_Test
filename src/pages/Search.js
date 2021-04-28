import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { search_result } from '../data/search_result'
import { airlines } from '../data/airline'
import { useFilterContext } from '../context/filter_context'
import Flight from '../components/Flight'
import Filter from '../components/Filter'
const Search = () => {
  const { loading, filtered, filter } = useFilterContext()
  console.log(filtered)
  if (loading) {
    return (
      <section className='section-center'>
        <h3>Loading</h3>
      </section>
    )
  }
  return (
    <div className='section-center wrapper main'>
      <Filter filter={filter} />
      {!filtered.length ? (
        <section>
          <h2> No Flights are available.!</h2>
        </section>
      ) : (
        <section className='flight-details'>
          {filtered.map((item, index) => {
            return <Flight key={index} {...item} />
          })}
        </section>
      )}
    </div>
  )
}

export default Search
