// http://api.weatherapi.com/v1/current.json?key=a47c34c33eda4a189d3225814241802&q=Eluru&aqi=no


const temperatureFeild = document.querySelector('.temp')
const locationFeild = document.querySelector('.time_location p')
const dataFeild = document.querySelector('.time_location span')
const weatherFeild = document.querySelector('.condition p')
const searchFeild = document.querySelector('.serach_area')
const form = document.querySelector('form')

form.addEventListener('submit', searchforLocation)

let target = "vijayawada"

const fetchResult = async (targetlocation) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=a47c34c33eda4a189d3225814241802&q=${targetlocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName = data.location.name

    let time = data.location.localtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text

    updateDetails(temp, time, locationName, condition)

    // console.log(locationName)
    // console.log(time)
    // console.log(temp)
    // console.log(condition)

}

function updateDetails(temp, time, locationName, condition) {

    let splitData = time.split(" ")[0]
    let splitTime = time.split(" ")[1]

    let currentDay = getDayName(new Date(splitData).getDay())

    temperatureFeild.innerText = temp
    locationFeild.innerText = locationName
    dataFeild.innerText = `${splitTime} - ${currentDay} ${splitData}`
    weatherFeild.innerText = condition

}

function searchforLocation(e) {
    e.preventDefault()

    target = searchFeild.value

    fetchResult(target)

}

function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thrusday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}

