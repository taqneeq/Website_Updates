import React from 'react'
import { properties } from "../constants/data";
import Card from "../components/Card"

export default function Event()
{
    return (
        <div>
            <div className="properties mt-10">
                {properties.map((item) => (
                    <Card data={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}
