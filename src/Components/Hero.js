import React, { Component } from 'react'
import Services from './Services'
import styled from 'styled-components'

export default class Hero extends Component {
    render() {

        return (
                this.props.hero==="home" ?
                <div className="card">
                 <div className="img-container">
                    
                        <img clasName="img-fluid" src={require('../img/homeImg.jpg')} alt="homeImg" 
                          style={{height:"500px", width:"100%"}}/>
                              <div className="banner">
                          
                                  {this.props.children}
                                  </div>
                           
                           
                         
                    </div>
                    {(this.props.value==="homeServ") && <Services value="home"/>}
                 </div>
                :
                    <div className="img-conatiner pb-5">
                        <img clasName="img-fluid" src={require('../img/roomImg.jpg')} alt="homeImg" 
                          style={{height:"400px", width:"100%"}}/>
                          <Services value="rooms"/>
                         {/* <h5 className="text-center">Services</h5> */}
                    
                    </div>

        )
    }
}
Hero.defaultProps = {
    hero:"home"
    
}

const HeroWrapper = styled.div`
  .img-container{
      position:relative;
  }
  
`;
