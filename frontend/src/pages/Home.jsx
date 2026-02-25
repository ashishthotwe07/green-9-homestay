import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from './About'
import Pricing from './Pricing'
import Amenities from './Amenities'
import Gallery from './Gallery'
import Location from './Location'
import FinalCTA from './FinalCTA'
import Restaurant from './Restaurant'

export default function Home() {
    return (
        <>
            <Navbar />

            <main>

                {/* PRIMARY SEO HEADING — MOST IMPORTANT */}
                <h1 className="sr-only">
                    Best Homestay in Wagholi Pune | AC Rooms Near Kesnand Road | Green9 Homestay
                </h1>

                {/* HERO SECTION */}
                <section id="home">
                    <Hero />
                </section>

                {/* ABOUT */}
                <section id="about">
                    <About />
                </section>

                {/* PRICING / ROOMS */}
                <section id="pricing">
                    <Pricing />
                </section>

                {/* AMENITIES */}
                <section id="amenities">
                    <Amenities />
                </section>

                {/* AMENITIES */}
                <section id="restaurant">
                    <Restaurant />
                </section>

                {/* GALLERY */}
                <section id="gallery">
                    <Gallery />
                </section>

                {/* LOCATION */}
                <section id="location">
                    <Location />
                </section>

                {/* FINAL CTA */}
                <section id="contact">
                    <FinalCTA />
                </section>

            </main>
        </>
    )
}