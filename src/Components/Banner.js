import React from 'react'
import styled from 'styled-components'

export default function Banner({title,subtitle,children}) {
    return (
        <BannerWrapper className="card text-capitalize mx-5">
      <div className="d-flex justify-content-center ">
        <div >
         <h5 style={{fontFamily:"Galada, cursive",fontSize:"2rem",letterSpacing:"0.1rem"}}>{title}</h5>
         <div className="mt-3">
            <p style={{textAlign:"center",fontSize:"0.8rem"}}>{subtitle}</p>
            {children}
        </div>
            
        </div>  
        </div> 
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
position:absolute;
top:40%;
left:45%;
transform:translate(-50%,-50%);
background: rgba(0,0,0,0.5);
color:var(--mainWhite);
width:25rem;




`;
