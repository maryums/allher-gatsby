import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import daygrid from "@fullcalendar/daygrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Loadable from "react-loadable";
import '../styles/events.css'

const Events = () => {

    const LoadableCalendar = Loadable({
        loader: () => import('@fullcalendar/react'),
        loading: () => <div>Loading...</div>,
        render(loaded, props) {
            let Cal = loaded.default;
            return <Cal {...props} />
        }
    })


    return (
        <section className="section events">

            <LoadableCalendar
                plugins={[daygrid, googleCalendarPlugin]}
                // headerToolbar={{
                //     left: 'prev,next today',
                //     center: 'title',
                //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
                // }}
                googleCalendarApiKey={process.env.GATSBY_API_URL}
                events={{ googleCalendarId: 'v91g62mmvh6v2o925vvdj74edg@group.calendar.google.com' }}

            />
        </section>
    )
}

export default Events