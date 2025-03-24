import Body from '../components/Body'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Fragment } from 'react'

export default function Notfound() {
    return (
        <Fragment>
            <Navbar />
            <h2>Not Found</h2>
            <Footer />
        </Fragment>
    )
}