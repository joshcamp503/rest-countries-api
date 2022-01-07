import { useState, useEffect } from 'react'

export const useFetch = (url, dispatchFunc) => {
  // second parameter here is a dispatch function
  // this is only necessary if you will be using context and setting it with async data using fetch
  // if not using context, second param is not necessary
  // just uncomment the line after this one and replace the dipatch function further below with setData(json)
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    
    const fetchData = async () => {
      setIsPending(true)

      try{
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const json = await res.json()

        setIsPending(false)
        setData(json)
        dispatchFunc(json)
        setError(null)
      } catch (err) {
        if(err.name === "AbortError") {
          console.log('The fetch was aborted')
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }

    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}
