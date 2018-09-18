const sanjuanRestaurants = ["Dominos", "Pizza Hut", "Papa Johns", "McDonalds", "Burger King", "Subway", "Taco Bell", "Dennys", "Wendys"]
const restaurantsSanJuanData = {
  dominos: {
    startHour: 11,
    finalHour: 23,
    telephone: "787-750-3030",
    officialPage: "https://www.instagram.com/dominospizzapr/",
    location: {latitude: 18.405814, longitude: -65.965515, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  pizzahut: {
    startHour: 10,//10:30
    finalHour: 21,
    telephone: "+1 787-748-7474",
    officialPage: "https://www.instagram.com/pizzahutpr/",
    location: {latitude: 18.391642, longitude: -65.975278, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  papajohns: {
    startHour: 11,
    finalHour: 22,
    telephone: "+1 787-776-7272",
    officialPage: "https://www.instagram.com/papajohnspr/",
    location: {latitude: 18.396232, longitude: -65.997391, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  mcdonalds: {
    startHour: 0,
    finalHour: 24,
    telephone: "+1 787-748-8200",
    officialPage: "https://www.instagram.com/mcdonaldspr/",
    location: {latitude: 18.396983, longitude: -66.005739, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  burgerking: {
    startHour: 6,
    finalHour: 23,
    telephone: "+1 787-765-6658",
    officialPage: "https://www.instagram.com/burgerkingpr/",
    location: {latitude: 18.401994, longitude: -66.052900, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  subway: {
    startHour: 6,
    finalHour: 23,
    telephone: "+1 787-751-9361",
    officialPage: "https://www.instagram.com/subway/", 
    location: {latitude: 18.400652, longitude: -66.074056, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  tacobell: {
    startHour: 6,
    finalHour: 23,
    telephone: "+1 787-774-9780",
    officialPage: "https://www.instagram.com/tacobellpr/",
    location: {latitude: 18.405943, longitude: -66.084528, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  dennys: {
    startHour: 0,
    finalHour: 23,
    telephone: "+1 787-751-3495",
    officialPage: "https://www.instagram.com/dennys_pr/",
    location: {latitude: 18.402353, longitude: -66.056890, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  wendys: {
    startHour: 6,
    finalHour: 23,//24
    telephone: "+1 787-792-2001",
    officialPage: "https://www.instagram.com/wendyspuertorico/",
    location: {latitude: 18.415051, longitude: -66.082983, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
}

module.exports  = {
    sanjuanRestaurants,
    restaurantsSanJuanData
}