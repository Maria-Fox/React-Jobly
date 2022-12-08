import {useState, useEffect} from "react"
// used to track token throughout the app. Behaves as state w/ localstorage features.

function useLocalStorage(key , firstValue = null){
  const initialValue = localStorage.getItem(key) || firstValue;

  let [item, setItem] = useState(initialValue);

  useEffect(function setKeyInLocalStorage() {
    if(item){
      window.localStorage.set(key, item)
    } else {
      window.localStorage.removeItem(key);
    }
  }, [key, item])

  return [item, setItem]
}
export default useLocalStorage;

// jobly_token = key.... passed in from App.js