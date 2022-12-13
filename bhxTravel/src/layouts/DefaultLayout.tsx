import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type LayoutProps = {
    children: React.ReactNode
}

function DefaultLayout({children}: LayoutProps) {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default DefaultLayout