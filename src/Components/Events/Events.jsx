import React, { useState } from 'react';
import './Events.css';

const eventsData = [
    { id: 1, title: 'Harvest Festival', date: 'October 30, 2024', description: 'Join us for our annual harvest festival, celebrating the season’s bounty.' },
    { id: 2, title: 'Sustainable Agriculture Workshop', date: 'November 15, 2024', description: 'Learn about sustainable farming practices and how to implement them.' },
    { id: 3, title: 'Potato Fair', date: 'December 5, 2024', description: 'A fair dedicated to all things potato, including cooking demonstrations and tastings.' },
    { id: 4, title: 'End of Year Celebration', date: 'December 20, 2024', description: 'Celebrate the end of the year with us and reflect on our achievements.' },
];

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
    };

    const { title, date, description } = eventsData[currentIndex];

    return (
        <div className="events-container">
            <div className="events-header"></div>
            <div className="EVsliderContainer">
                <button className="EVbutton" onClick={prevEvent}>&lt;</button>
                <div className="EVcard">
                    <h2 className="EVtitle">{title}</h2>
                    <p className="EVdate">{date}</p>
                    <p className="EVdescription">{description}</p>
                </div>
                <button className="EVbutton" onClick={nextEvent}>&gt;</button>
            </div>
            <div className="events-footer"></div>
        </div>
    );
};

export default Events;
