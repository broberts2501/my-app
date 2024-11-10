"use client";

import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

const PageComponentWeather: NextPage = () => {
    // Define the props interface for WeatherComponent
    interface WeatherProps {
        weather: string;
    }

    // WeatherComponent function with props
    const WeatherComponent: React.FC<WeatherProps> = (props) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setCount(1);
        }, []);

        return (
            <h1 onClick={() => setCount(count + 1)}>
                The weather is {props.weather}, and the counter shows {count}
            </h1>
        );
    };

    // Render WeatherComponent with weather prop
    return <WeatherComponent weather="sunny" />;
};

export default PageComponentWeather;
