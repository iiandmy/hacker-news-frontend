export const getFormattedDate = (date) => {
  let day = ('0' + date.getDay()).slice(-2)
  let month = ('0' + date.getMonth()).slice(-2)
  let year = date.getFullYear()
  let hours = ('0' + date.getHours()).slice(-2)
  let minutes = ('0' + date.getMinutes()).slice(-2)

  return `${hours}:${minutes} ${day}.${month}.${year}`
}

export const loadingCircleFormat = {
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center', 
  marginTop: "2rem"
}