import React, { Component } from 'react'
import styled from 'styled-components'

export default class Services extends Component {
    render() {
        return (
            (this.props.value === "home") ?
            <ServiceWrapper  >
                   <h2 className="text-center pt-5">Services</h2>
            <div className="d-flex justify-content-around mt-5" >
                <div className="card ">
                <i class="fas fa-phone-alt mx-auto"></i>
                  <h5 className="mt-4">services</h5>
                  <p>fdzdfzd</p>     
                
                </div>
              
                <div className="card">
                <i class="fas fa-phone-alt mx-auto"></i>
                    <h5 className="mt-4">services</h5>
                    <p>fdzdfzd</p>     
                
                </div>
                <div className="card">
                <i class="fas fa-phone-alt mx-auto"></i>
                    <h5 className="mt-4">serregvices</h5>
                    <p>fdzd6666fzd</p>
                </div>

                <div className="card">
                <i class="fas fa-phone-alt mx-auto"></i>
                    <h5 className="mt-4">se222rvices</h5>
                    <p>fdz2333dfzd</p>
                </div>
                </div>
            </ServiceWrapper>
            :
            <ServiceWrapper>
                
                <h2 className="text-center pt-5">Room Services</h2>
            </ServiceWrapper>

        )
    }
}
const ServiceWrapper = styled.div`
   background: #bfbfbf !important;
 .text-center{
    margin-bottom: 2rem;
    margin-bottom-color:var( --primaryColor) !important; 
}
   .card{
       background:transparent;
       border:none;
   }
`;