import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: 'At our 5-star bar you can find all of the best cocktails ever made.'
            },
            {
                icon: <FaHiking />,
                title: "Endless hiking",
                info: 'Love Hiking? at our hiking site you can hike to the most beautiful views the world have to provide.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'We have a free shuttle service, so that you can remain lazy.'
            },
            {
                icon: <FaBeer />,
                title: "Strongest beer ",
                info: 'Beer lover? You have come to the right place. Come and try the world "Strogest beer".'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
