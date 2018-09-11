const santiagoRestaurants = ["Square One","Papa Johns", "Dominos", "Pizzarelli", "Pizza Hut","NY Pizza", "Arte Pizza","Burger king","McDonalds", "Victorina", "Quiznos", "Jade Teriyaki", "Fridays", "KFC","Taco bell", "Subway","Nori Sushi" , "Dogos", "Puchos Mofongo","Cosita Rica","Tu quipe","Lacar"]
const restaurantsSantiagoData = {
  cositarica: {
    startHour: 11,
    finalHour: 19,
    telephone: "(809)-581-5830",
    officialPage: "https://www.instagram.com/cositaricadr/",  
    location: {latitude: 19.450489, longitude: -70.697117, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  puchosmofongo: {
    startHour: 12,
    finalHour: 23,
    telephone: "(809)-583-2000",
    officialPage: "https://www.instagram.com/puchosmofongo/", 
    location: {latitude: 19.464632, longitude: -70.692671, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  pizzahut: {
    startHour: 11,
    finalHour: 23,
    telephone: "829-200-2020",
    officialPage: "https://www.instagram.com/pizzahutrd/",
    location: {latitude: 19.458490, longitude: -70.680660, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  jadeteriyaki: {
    startHour: 8,
    finalHour: 23,
    telephone: "(809)-825-8888",
    officialPage: "https://www.instagram.com/jadeteriyakird/",
    location: {latitude: 19.458503, longitude: -70.680636, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  artepizza: {
    startHour: 18,
    finalHour: 23,
    telephone: "(809)-582-4868",
    officialPage: "https://www.instagram.com/artepizzard/",
    location: {latitude: 19.460828, longitude: -70.690971, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  dogos: {
    startHour: 6,
    finalHour: 23,//24
    telephone: "(829)-844-8962",
    officialPage: "https://www.instagram.com/dogosuf/",//
    location: {latitude: 19.456885, longitude: -70.663539, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  norisushi: {
    startHour: 18,
    finalHour: 23,//24
    telephone: "(849)-340-0748",
    officialPage: "https://www.instagram.com/norisushisti/",//
    location: {latitude: 19.461331, longitude: -70.682823, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  quiznos: {
    startHour: 10,
    finalHour: 23,//24
    telephone: "(809)-233-9483",
    officialPage: "https://www.instagram.com/quiznos_rd/",//,19.454067, -70.685462
    location: {latitude: 19.454067, longitude: -70.685462, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  platanitos: {
    startHour: 17,
    finalHour: 23,//24
    telephone: "(809)-806-8738",
    officialPage: "https://www.instagram.com/platanitos_santiago/",//19.463836, -70.690197,
    location: {latitude: 19.463836, longitude: -70.690197, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  mcdonalds: {
    startHour: 1,
    finalHour: 23,//24 horas
    telephone: "(829)-234-0007",
    officialPage: "https://www.instagram.com/mcdonaldsrd/",  
    location: {latitude: 19.461294, longitude: -70.685836, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  subway: {
    startHour: 8,
    finalHour: 23,
    telephone: "(809)-226-2663",
    officialPage: "https://www.instagram.com/subwayrepublicadominicana/",
    location: {latitude: 19.456203, longitude: -70.685116, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  nypizza: {
    startHour: 17,
    finalHour: 23,
    telephone: "(829)-581-1212",//19.446514, -70.674309
    officialPage: "https://www.instagram.com/212nypizza/",
    location: {latitude: 19.446514, longitude: -70.674309, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  tacobell: {
    startHour: 11,
    finalHour: 23,//Realmente cierra las 0 AM
    telephone: "(809)-247-4390",
    officialPage: "https://www.instagram.com/tacobellrd/",//19.457528, -70.691482
    location: {latitude: 19.457528, longitude: -70.691482, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  kfc: {
    startHour: 11,
    finalHour: 23,//Realmente cierra las 1 AM y 0 AM
    telephone: "(809)-226-0000",
    officialPage: "https://www.instagram.com/kfcrepdom",//19.461136, -70.686402
    location: {latitude: 19.461136, longitude: -70.686402, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  squareone: {
    startHour: 1,
    finalHour: 23,
    telephone: "(809)-241-5384",
    officialPage: "https://www.instagram.com/squareonecafe",//19.442452, -70.687657
    location: {latitude: 19.442452, longitude: -70.687657, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  papajohns: {
   startHour: 11,
   finalHour: 23,
   telephone: "(809)-489-7272",
   officialPage: "https://www.instagram.com/papajohnsrd",//19.457802, -70.684403
   location: {latitude: 19.457802, longitude: -70.684403, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  dominos: {
    startHour: 11,
    finalHour: 23,
    telephone: "(809)-948-4848",
    officialPage: "https://www.instagram.com/dominosrd",//19.458515, -70.680903
    location: {latitude: 19.458515, longitude: -70.680903, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  pizzarelli: {
    startHour: 11,
    finalHour: 23, 
    telephone: "(809)-581-8444", 
    officialPage: "https://www.instagram.com/pizzarellido/",//19.453774, -70.685951
    location: {latitude: 19.453774, longitude: -70.685951, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  victorina: {
    startHour: 10, 
    finalHour: 23,
    telephone: "(809)-581-0404", 
    officialPage: "https://www.instagram.com/p_victorina",//19.460577, -70.687076
    location: {latitude: 19.460577, longitude: -70.687076, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  burgerking: {
    startHour: 7, 
    finalHour: 23,
    telephone: "(809)-582-2652", 
    officialPage: "https://www.instagram.com/burgerkingrd",//19.458858, -70.686258
    location: {latitude: 19.458858, longitude: -70.686258, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  fridays: {
    startHour: 12, 
    finalHour: 23, 
    telephone: "(809)-971-8443", 
    officialPage: "https://www.instagram.com/fridaysrd",//19.466145, -70.687099
    location: {latitude: 19.466145, longitude: -70.687099, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  tuquipe: {
    startHour: 16, 
    finalHour: 23, 
    telephone: "(809)-734-5304", 
    officialPage: "https://www.instagram.com/tuquipe",//19.461817, -70.694560
    location: {latitude: 19.461817, longitude: -70.694560, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  lacar: {
    startHour: 8, 
    finalHour: 18, 
    telephone: "(809)-581-4260", 
    officialPage: "https://www.instagram.com/lacarbuffet",//19.459726, -70.694572
    location: {latitude: 19.459726, longitude: -70.694572, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  }
}

const santoDomingoRestaurants = ["Papa Johns", "Dominos", "Pizza Hut","Pizzarelli", "Burger king", "McDonalds","Victorina", "Quiznos", "Jade Teriyaki","Fridays", "KFC","Taco bell", "Subway","Loop Friends" ,"Don Tato", "La Markesina"]
const restaurantsSantoDomingoData = {
  pizzahut: {
    startHour: 11,
    finalHour: 23,
    telephone: "(809)-620-2020",
    officialPage: "https://www.instagram.com/pizzahutrd/", 
    location: {latitude: 18.480281, longitude: -69.927860, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  jadeteriyaki: {
    startHour: 8,
    finalHour: 23,//1:30 AM
    telephone: "(809)-682-8888",
    officialPage: "https://www.instagram.com/jadeteriyakird/",
    location: {latitude: 18.477909, longitude: -69.907570, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  lamarkesina: {
    startHour: 18,
    finalHour: 23,//1:30 AM
    telephone: "(809)-636-4543",
    officialPage: "https://www.instagram.com/lamarkesina/",
    location: {latitude: 18.477909, longitude: -69.907570, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  loopfriends: {
    startHour: 18,
    finalHour: 23,
    telephone: "(809)-937-3121",
    officialPage: "https://www.instagram.com/looprd/",
    location: {latitude: 18.448687, longitude: -69.959658, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  dontato: {
    startHour: 0,
    finalHour: 23,//24
    telephone: "(809)-262-0675",
    officialPage: "https://www.instagram.com/dontatord/",
    location: {latitude: 18.489120, longitude: -69.914530, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  quiznos: {
    startHour: 11,
    finalHour: 23,//24
    telephone: "(809)-987-7777",
    officialPage: "https://www.instagram.com/quiznos_rd/",
    location: {latitude: 18.477074, longitude: -69.933429, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  mcdonalds: {
    startHour: 7,
    finalHour: 23,//Cierra a las doce
    telephone: "(809)-567-0007",
    officialPage: "https://www.instagram.com/mcdonaldsrd/",//18.471035, -69.924911
    location: {latitude: 18.471035, longitude: -69.924911, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  subway: {
    startHour: 9,
    finalHour: 23,//Cierra a las doce
    telephone: "(809)-732-7000",
    officialPage: "https://www.instagram.com/subwayrepublicadominicana/",//, 
    location: {latitude: 18.466804, longitude: -69.926626, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  tacobell: {
    startHour: 10,
    finalHour: 23,
    telephone: "(809)-221-3263",
    officialPage: "https://www.instagram.com/tacobellrd/",//18.469520, -69.931501
    location: {latitude: 18.469520, longitude: -69.931501, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  kfc: {
    startHour: 11,
    finalHour: 23,//es a las 0 am y 1 am
    telephone: "(809)-508-0000",
    officialPage: "https://www.instagram.com/kfcrepdom",//, 
    location: {latitude: 18.474409, longitude: -69.926484, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
   },
  papajohns: {
   startHour: 11,
   finalHour: 23,
   telephone: "(809)-489-7272",
   officialPage: "https://www.instagram.com/papajohnsrd",//, 
   location: {latitude: 18.472553, longitude: -69.934395, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  dominos: {
    startHour: 11,
    finalHour: 23,
    telephone: "(809)-948-4848",
    officialPage: "https://www.instagram.com/dominosrd",//, 
   location: {latitude: 18.483763, longitude: -69.939818, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  pizzarelli: {
    startHour: 12,
    finalHour: 23, 
    telephone: "(809)-544-1111", 
    officialPage: "https://www.instagram.com/pizzarellido/",//
   location: {latitude: 18.487029, longitude: -69.942498, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  victorina: {
    startHour: 10, 
    finalHour: 23,
    telephone: "(809)-222-9221", 
    officialPage: "https://www.instagram.com/p_victorina",//, 
    location: {latitude: 18.472263, longitude: -69.941910, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  burgerking: {
    startHour: 7, 
    finalHour: 23,
    telephone: "(809)-732-0800", 
    officialPage: "https://www.instagram.com/burgerkingrd",//, 
    location: {latitude: 18.470234, longitude: -69.940560, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  },
  fridays: {
    startHour: 12, 
    finalHour: 23, 
    telephone: "(809)-955-8443", 
    officialPage: "https://www.instagram.com/fridaysrd",//, 
    location: {latitude: 18.469362, longitude: -69.939120, latitudeDelta: 0.002, longitudeDelta: 0.0000001}
  }
}

module.exports  = {
    santiagoRestaurants,
    restaurantsSantiagoData,
    santoDomingoRestaurants,
    restaurantsSantoDomingoData
}