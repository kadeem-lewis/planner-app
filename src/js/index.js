import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollGridPlugin from '@fullcalendar/scrollgrid';

import "../css/styles.scss";
document.addEventListener("DOMContentLoaded",(event) => {

    let mainCalendar = document.getElementById("calendar");

    let calendar = new Calendar(mainCalendar, {
        plugins: [ dayGridPlugin, interactionPlugin, scrollGridPlugin ],
        initialView: 'dayGridWeek',
        headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridDay,dayGridWeek,dayGridMonth'
        },
        views: {
            dayGridMonth: {

            },
            dayGridWeek: {

            },
            dayGridDay: {
                
            }
        }
    });

    calendar.render()

});