import '@fullcalendar/core/vdom'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import listPlugin from '@fullcalendar/list';
import '../css/styles.scss'

console.log("hello world");

document.addEventListener("DOMContentLoaded",(event) => {

    let mainCalendar = document.getElementById("calendar");

    let calendar = new Calendar(mainCalendar, {
        plugins: [ dayGridPlugin, interactionPlugin, scrollGridPlugin, listPlugin ],
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
    router()

});


const router = async () => {
    const routes = [
        {   path: '/',view: ()=> console.log("Viewing home")},
        {   path: '/calendar',view: ()=> console.log("Viewing calendar")},
        {   path: '/tasks',view: ()=> console.log("Viewing tasks")}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: routes,
            isMatch: location.pathname === route.path

        }
    })
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) { //Replace this with custom defined 404
        match = {
            route: routes[0],
            isMatch: true
        };
    }
        
    console.log(match.route.view());
}

document.addEventListener("DOMContentLoaded",() => {
    router();
});