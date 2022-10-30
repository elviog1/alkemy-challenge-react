import React from 'react'

export default function Resultados() {
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get("movie-title")

  return (
    <div>
        <h2>{movieID}</h2>
    </div>
  )
}
