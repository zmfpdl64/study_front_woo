import Body from '../components/Body'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Fragment } from 'react'

export default function Home() {
    return (
        <Fragment>
            <Navbar />
            <Body />
            <Footer />
        </Fragment>
    )
}