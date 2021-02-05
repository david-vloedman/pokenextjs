import { useState } from "react"

export default function ResultsScroll({initState}){

  const [state, setState] = initState || useState({
    cards: [],
    loading: false,
    page: 0,
    previousY: 0
  });
  

  return (
    <div>

    </div>
  )
}