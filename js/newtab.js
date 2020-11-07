"use strict"

const getDate = () => {
    var date = new Date();
    var reps = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    $('.date h2').text(new Date().toLocaleDateString('en-GB', reps));
    return date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

//display time [12 hr format]
// function for getting 12 hr time 
const get12HoursTime = (timeHours) => {

    //if time is greater then 12. i.e. 13+
    if (timeHours > 12) {
        let time0 = timeHours - 12;
        if (time0 < 10) {
            return "0" + time0;
        } else {
            return time0;
        }
    } else {
        return timeHours;
    }
}

// minutes with a preceeding 0 if the number is a single digit 
const getMinutes = (minutes) => {
    if (minutes < 10) {
        return "0" + minutes;
    } else {
        return minutes;
    }
}


// function for determinig AM/PM 
const getAmPm = (timeHours) => {
    if (timeHours >= 12) {
        return "PM";
    } else {
        return "AM";
    }
}

// blinking dots 
// UPDATE: made static temporarily 
const getBlinkingDots = (timeSeconds) => {
    if (timeSeconds % 2 === 0) {
        return ":";
    } else {
        return ":";
    }
}

const clock = () => {
    time = new Date();
    timeHours = time.getHours();
    timeHours12 = get12HoursTime(timeHours);        // refer to function
    timeMinutes = getMinutes(time.getMinutes());
    timeSeconds = time.getSeconds();
    amPM = getAmPm(timeHours);
    blinkingDots = getBlinkingDots(timeSeconds);
    let clockTime = timeHours12 + blinkingDots + timeMinutes + " " + amPM;
    var reps = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    var date = new Date().toLocaleDateString('en-GB', reps);

    document.getElementById("local-time").innerHTML = clockTime;
    document.getElementById("local-date").innerHTML = date;

}

let time = new Date();
let timeHours = time.getHours();
let timeHours12 = get12HoursTime(timeHours);        // refer to function
let timeMinutes = getMinutes(time.getMinutes());
let timeSeconds = time.getSeconds();
let amPM = getAmPm(timeHours);
let blinkingDots = getBlinkingDots(timeSeconds);

const getTopSites = () => {
    chrome.topSites.get((arr) => {
        console.log(arr);
    });
    var title;
    chrome.topSites.get((arr) => {
       for (title in arr) {
           document.getElementById("topSites").innerHTML = title;
       }
    });

}

const listEl = document.querySelector('.topSitesContainer');
const getTopSites2 = () => {
    chrome.topSites.get(topSites => {
        listEl.innerHTML = '';
        if (topSites && Array.isArray(topSites) && topSites.length > 0) {
            let html = '';
            topSites.forEach(site => {
                html += `<div class="topSites">
                <a href="${site.url}" title="${site.title}" id="urlDetails"><img src="chrome://favicon/${site.url}"/></a>
            </div>`;
            });
            listEl.innerHTML = html;
        }
    });
}


getTopSites2();

clock();
setInterval(clock, 1000);
