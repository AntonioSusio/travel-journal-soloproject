import React from "react";
import Header from "../components/Header";
import Location from "../components/Location";
import data from "./data";

export default function App() {
    const locations = data.map(item => {
        return (
            <Location
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Header />
            <main className="locations--container">
                {locations}
            </main>
        </div>
    )
}