import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const {state:detailsFood} = useLocation();
  console.log(detailsFood)
  return (
    <>
    <div>Details</div>
    <button onClick={()=>navigate(-1)}>geri</button>
    </>
  )
}

export default Details;