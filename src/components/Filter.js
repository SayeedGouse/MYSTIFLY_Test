import React, { useEffect } from 'react'
import { useFilterContext } from '../context/filter_context'
const Filter = ({ filter }) => {
  const { unique_airline, flight, handleChange } = useFilterContext()

  return (
    <section className='filter'>
      <h5>Filter by airlines</h5>
      {unique_airline.map((name, index) => {
        return (
          <div className='form-control' key={index}>
            <input
              type='checkbox'
              name={name.replace(/ /g, '_')}
              data-set={name}
              className='filter'
              onChange={handleChange}
              checked={filter[name.replace(/ /g, '_')]}
            />
            <label htmlFor='filter'>{name}</label>
          </div>
        )
      })}
    </section>
  )
}

export default Filter
