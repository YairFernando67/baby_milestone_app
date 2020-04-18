
const getLocalStorate = (data) => {
  return JSON.parse(localStorage.getItem(data))
}

const setLocalStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data))
}

export { getLocalStorate, setLocalStorage }