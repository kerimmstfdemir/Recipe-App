import React from 'react'
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
  return (
    <>
    <div>Details</div>
    <button onClick={()=>navigate(-1)}>geri</button>
    </>
  )
}

export default Details;