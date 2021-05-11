import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Hero value="homeServ">
            <Banner title="luxurious room" subtitle="Beautiful rooms for VIP's">
                <Link to ="/rooms">
                     <button style={{backgroundColor:"#004e92",display:"flex",marginLeft:"25%"}} >Room Page</button>
                </Link>

            </Banner>
        </Hero>
    )
}
