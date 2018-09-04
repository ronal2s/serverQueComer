const express = require("express");
const app = express();
const rp = require("request-promise");
const cheerio = require("cheerio");
const port = process.env.PORT || 5000;
const Axios = require("axios")

const path = require("path");
/*
app.use(express.static(path.resolve(__dirname,"build")))

app.get("/", (req, res) => {
    res.send(path.resolve(__dirname,"build", "index.html"))
})
*/
var options = {
  uri: "http://www.papajohns.com.do/promos.html",
  transform: function (body) {
    return cheerio.load(body);
  }
}
//Santiago
var imgPapajohns = [],  imgFridays=[], imgDominos = [], imgVictorina = [], imgBurgerKing = [], 
imgTuQuipe=[], imgLacar=[], imgPizzarelli=[];
var instagramURL = "";

var santiagoRestaurants = ["Square One","Papa Johns", "Dominos", "Pizzarelli", "NY Pizza", "Burger king","McDonalds", "Victorina", "Fridays", "KFC","Taco bell", "Subway","Tu quipe","Lacar"]
var restaurantsSantiagoData = {
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

var santoDomingoRestaurants = ["Papa Johns", "Dominos", "Pizzarelli", "Burger king", "McDonalds","Victorina", "Fridays", "KFC","Taco bell", "Subway"]
var restaurantsSantoDomingoData = {
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

app.get("/santiagotitles", (req, res) =>
{
  res.send(santiagoRestaurants)
  console.log(santiagoRestaurants)
})

app.get("/santodomingotitles", (req, res) =>
{
  res.send(santoDomingoRestaurants)
  console.log(santoDomingoRestaurants)
})


app.get("/santiagoRestaurantsInfo", (req, res) =>
{
  res.send(restaurantsSantiagoData);
})
app.get("/santoDomingoRestaurantsInfo", (req, res) =>
{
  res.send(restaurantsSantoDomingoData);
})

//Papajohns
// rp(options)
//   .then(($) => {
//     //console.log($)
//     $("img").each((i, elem) => {
//       if (elem.attribs.src.match(/promo/g)) {
//         imgPapajohns.push({img: ("http://www.papajohns.com.do/" + elem.attribs.src) });
//       }

//     })

//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //console.log(imgPapajohns)
// app.get("/papajohns", (req, res) => {
//   res.send({ data: imgPapajohns })
// })

//Dominos
options.uri = "http://dominos.com.do.hypestat.com/"
rp(options)
  .then(($) => {
    $("code").each((i, elem) => {
      
      if(elem.children[0].data.match(/promo/g))
      {//Hacer esto fue un lio, ni sé por qué o cómo funciona
  //      console.log(elem.children[0].data)
        imgDominos.push({img: elem.children[0].data})
      }
  })
  })
  .catch((err) => console.log(err))
 
app.get("/dominos", (req, res) => {
  res.send({data: imgDominos})
})
//Pollo Victorina
options.uri = "http://pollosvictorina.com.do/#nofertas"
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      if(elem.attribs.src.match(/Ofertas/g))
      {
        //console.log(elem.attribs.src)
        imgVictorina.push({img: "http://pollosvictorina.com.do/"+ elem.attribs.src})
      }
      
    })
  })
  .catch(err => console.log("Error getting kfc" + err))
  app.get("/victorina", (req, res) => {
    res.send({data: imgVictorina})
  })

//Burger king
options.uri = "http://www.burgerking.com.do/offers";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      if(elem.attribs.src.match(/burgerking.com.do/g))
      {
        //console.log(elem.attribs.src)
        imgBurgerKing.push({img: elem.attribs.src})
      }
    })
  })
  .catch(err => console.log(err))
  app.get("/burgerking", (req, res) => {
    res.send({data: imgBurgerKing})
  })

//TuQuipe
options.uri = "http://tuquipe.com/";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      if(elem.attribs.src.match(/promo/g))
      {
        //console.log(elem.attribs.src)
        imgTuQuipe.push({img: elem.attribs.src})
      }
    })
  })
  .catch(err => console.log(err))
  app.get("/tuquipe", (req, res) => {
    res.send({data: imgTuQuipe})
  })
 //Lacar
 options.uri = "https://www.lacarbuffets.com/";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      if(elem.attribs.src.match(/menu-del-dia/g))
      {
        //console.log(elem.attribs.src)
        imgLacar.push({img: "https://www.lacarbuffets.com/" +elem.attribs.src})
      }
    })
  })
  .catch(err => console.log(err))
  app.get("/lacar", (req, res) => {
    res.send({data: imgLacar})
  })
 //Pizzarelli
//  options.uri = "http://www.pizzarelli.com.do/ofertas/";
// rp(options)
//   .then(($) => {
//     $("img").each((i, elem) => {
//       if(elem.attribs.src.match(/ofertas/g))
//       {
//         //console.log(elem.attribs.src)
//         imgPizzarelli.push({img: elem.attribs.src})
//       }
//     })
//   })
//   .catch(err => console.log(err))
//   app.get("/pizzarelli", (req, res) => {
//     res.send({data: imgPizzarelli})
//   })

//Quiznos
options.uri = "https://www.quiznos.com.do";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      //console.log(elem.children)
      if(elem.attribs.src != undefined)
      {
        if(elem.attribs.src.match(/media/g))
        {
          //console.log(elem.attribs.src)
          //imgPizzarelli.push({img: elem.attribs.src})
        }//inovación 
        //en la presentación se habla con un negocio ya establecido, pero si es innovador? Algo que no se ha hecho, que se necesita para ser exitoso?
      }      
    })
  })
  .catch(err => console.log(err))
  app.get("/quiznos", (req, res) => {
    res.send({data: imgPizzarelli})
  })
//Square One
async function instagramPhotos (url, cantPhotos) {
  // It will contain our photos' links
  const data = []
  
  try {
      const userInfoSource = await Axios.get(url)

      // userInfoSource.data contains the HTML from Axios
      const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

      const userInfo = JSON.parse(jsonObject)
      // Retrieve only the first 10 results
      const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, cantPhotos)
      for (let media of mediaArray) {
          const node = media.node
          
          // Process only if is an image
          if ((node.__typename && node.__typename !== 'GraphImage')) {
              continue
          }

          // Push the thumbnail src in the array
          urlParts = node.thumbnail_src.split("%")
          //console.log(urlParts[0])
          data.push({img: urlParts[0]})
          //console.log(res)
      }
  } catch (e) {
      console.error('Unable to retrieve photos. Reason: ' + e.toString())
  }
  
  return data
}
app.get("/squareone", (req, res) => {
  instagramPhotos('https://www.instagram.com/squareonecafe/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})

//KFC
app.get("/kfc", (req, res) => {
  instagramPhotos('https://www.instagram.com/kfcrepdom/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})

//212NYPizza
app.get("/nypizza", (req, res) => {
  instagramPhotos('https://www.instagram.com/212nypizza/',5)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})

//Fridays
app.get("/fridays", (req, res) => {
  instagramPhotos('https://www.instagram.com/fridaysrd/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
//Taco Bell
app.get("/tacobell", (req, res) => {
  instagramPhotos('https://www.instagram.com/tacobellrd/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
//Pizzarelli
app.get("/pizzarelli", (req, res) => {
  instagramPhotos('https://www.instagram.com/pizzarellido/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
//Subway
app.get("/subway", (req, res) => {
  instagramPhotos('https://www.instagram.com/subwayrepublicadominicana/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
//Mcdonalds
app.get("/mcdonalds", (req, res) => {
  instagramPhotos('https://www.instagram.com/mcdonaldsrd/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
//Platanitos
app.get("/platanitos", (req, res) => {
  instagramPhotos('https://www.instagram.com/platanitos_santiago/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
//Papajohns
app.get("/papajohns", (req, res) => {
  instagramPhotos('https://www.instagram.com/papajohnsrd/',10)
  .then(function(data) {
    res.send({data: data})
  })
  .catch(err => console.log(err))
})
app.listen(port, () => console.log("Listen on fucking port " + port));
