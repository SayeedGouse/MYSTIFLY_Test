import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducer/filter_reducer'
import { search_result } from '../data/search_result'
import { airlines } from '../data/airline'
import { useHistory } from 'react-router-dom'

const initialState = {
  all_products: [],
  all_airlines: [],
  search_result: [],
  unique_airline: [],
  filtered: [],
  success: {},
  loading: true,
  success_loading: true,
  filter: {
    Air_India: true,
    Malmo_Aviation: true,
    Turkish_Airlines: true,
    Austral_Lineas_Aereas: true,
    British_Airways: true,
    American_Airlines: true,
    Etihad_Airways: true,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: search_result })
    dispatch({ type: 'LOAD_AIRLINES', payload: airlines })
    dispatch({ type: 'GET_SEARCH_RESULT' })
    dispatch({ type: 'GET_UNIQUE_AIRLINE' })
  }, [])
  useEffect(() => {
    dispatch({ type: 'SORT_FLIGHT' })
  }, [state.filter])
  //handleChange
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.checked
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { name, value },
    })
  }
  const history = useHistory()
  const bookFlight = (destination, name) => {
    debugger
    dispatch({ type: 'BOOKING_SUCCESS', payload: { destination, name } })
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleChange,
        bookFlight,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
