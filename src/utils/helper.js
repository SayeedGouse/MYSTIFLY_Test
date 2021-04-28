export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const DateFormate = (data) => {
  const event = new Date(data)
  return event.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
export const getHoursMinutes = (data) => {
  const event = new Date(data)
  return event.getHours() + ':' + event.getMinutes()
}
export const timeDiffCalc = (dateFuture, dateNow) => {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400)
  diffInMilliSeconds -= days * 86400
  console.log('calculated days', days)

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24
  diffInMilliSeconds -= hours * 3600
  console.log('calculated hours', hours)

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60
  diffInMilliSeconds -= minutes * 60
  console.log('minutes', minutes)

  let difference = ''
  if (days > 0) {
    difference += days === 1 ? `${days} Day ` : `${days} Days `
  }

  difference += hours === 0 || hours === 1 ? `${hours} Hr ` : `${hours} Hrs `

  difference +=
    minutes === 0 || hours === 1 ? `${minutes} Min` : `${minutes} Mins`

  return difference
}

//console.log(
//timeDiffCalc(new Date('2019/10/1 04:10:00'), new Date('2019/10/2 18:20:00'))
//)
