const filter_reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return {
      ...state,
      all_products: [...action.payload.Data.PricedItineraries],
      loading: false,
    }
  }
  if (action.type === 'LOAD_AIRLINES') {
    return {
      ...state,
      all_airlines: [...action.payload],
      loading: false,
    }
  }
  if (action.type === 'GET_UNIQUE_AIRLINE') {
    let temArray = [...state.all_products].map((product) => {
      return [...state.all_airlines].find((flight) => {
        return product.ValidatingAirlineCode === flight.iata
      })
    })
    temArray = [...new Set(temArray)].map((item) => item.name)
    console.log(temArray)
    return {
      ...state,
      unique_airline: temArray,
    }
  }
  if (action.type === 'GET_SEARCH_RESULT') {
    let temFlight = [...state.all_products].map((product) => {
      return [...state.all_airlines].find((flight) => {
        if (product.ValidatingAirlineCode === flight.iata) {
          product.name = flight.name
        }
      })
    })
    //temArray = [...new Set(temArray)].map((item) => item.name)
    temFlight = [...state.all_products]
    return {
      ...state,
      all_products: [...state.all_products],
      search_result: [...state.all_products],
    }
  }
  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload
    return {
      ...state,
      filter: {
        ...state.filter,
        [name]: value,
      },
    }
  }
  if (action.type === 'SORT_FLIGHT') {
    let obj = state.filter

    let temFiltered = [...state.search_result]
    Object.entries(obj).forEach(([key, value]) => {
      if (!obj[key]) {
        debugger
        temFiltered = temFiltered.filter((item) => {
          return item.name !== key.split('_').join(' ')
        })
      }
    })
    return {
      ...state,
      filtered: temFiltered,
    }
  }
  if (action.type === 'BOOKING_SUCCESS') {
    // const {destination, name} = action.payload
    return {
      ...state,
      success: { ...state.sucess, ...action.payload },
      success_loading: false,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
