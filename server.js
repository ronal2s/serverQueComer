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

var santiagoRestaurants = ["Square One","Papa Johns", "Dominos", "Pizzarelli", "Burger king", "Victorina", "Fridays","Tu quipe","Lacar"]
var restaurantsSantiagoData = {
  squareone: {
    startHour: 1,
    finalHour: 23,
    telephone: "(809)-241-5384",
    officialPage: "https://www.square1rd.com/"
   },
  papajohns: {
   startHour: 11,
   finalHour: 23,
   telephone: "(809)-489-7272",
   officialPage: "http://www.papajohns.com.do/"
  },
  dominos: {
    startHour: 11,
    finalHour: 23,
    telephone: "(809)-948-4848",
    officialPage: "https://www.dominos.com.do/"
  },
  pizzarelli: {
    startHour: 11,
    finalHour: 23, 
    telephone: "(809)-581-8444", 
    officialPage: "http://www.pizzarelli.com.do/"
  },
  victorina: {
    startHour: 10, 
    finalHour: 23,
    telephone: "(809)-581-0404", 
    officialPage: "https://www.pollosvictorina.com.do/"
  },
  burgerking: {
    startHour: 7, 
    finalHour: 23,
    telephone: "(809)-582-2652", 
    officialPage: "https://www.burgerking.com.do/"
  },
  fridays: {
    startHour: 12, 
    finalHour: 23, 
    telephone: "(809)-971-8443", 
    officialPage: "http://fridaysdr.com.do/santiago/"
  },
  tuquipe: {
    startHour: 16, 
    finalHour: 23, 
    telephone: "(809)-734-5304", 
    officialPage: "http://www.tuquipe.com/"
  },
  lacar: {
    startHour: 8, 
    finalHour: 18, 
    telephone: "(809)-581-4260", 
    officialPage: "https://www.lacarbuffets.com/"
  }
}
var santoDomingoRestaurants = ["Papa Johns", "Dominos", "Pizzarelli", "Burger king", "Victorina", "Fridays"]
var restaurantsSantoDomingoData = {
  papajohns: {
   startHour: 11,
   finalHour: 23,
   telephone: "(809)-489-7272",
   officialPage: "http://www.papajohns.com.do/"
  },
  dominos: {
    startHour: 11,
    finalHour: 23,
    telephone: "(809)-948-4848",
    officialPage: "https://www.dominos.com.do/"
  },
  pizzarelli: {
    startHour: 12,
    finalHour: 23, 
    telephone: "(809)-544-1111", 
    officialPage: "http://www.pizzarelli.com.do/"
  },
  victorina: {
    startHour: 10, 
    finalHour: 23,
    telephone: "(809)-222-9221", 
    officialPage: "https://www.pollosvictorina.com.do/"
  },
  burgerking: {
    startHour: 7, 
    finalHour: 23,
    telephone: "(809)-732-0800", 
    officialPage: "https://www.burgerking.com.do/"
  },
  fridays: {
    startHour: 12, 
    finalHour: 23, 
    telephone: "(809)-955-8443", 
    officialPage: "http://fridaysdr.com.do/santiago/"
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
rp(options)
  .then(($) => {
    //console.log($)
    $("img").each((i, elem) => {
      if (elem.attribs.src.match(/promo/g)) {
        imgPapajohns.push({img: ("http://www.papajohns.com.do/" + elem.attribs.src) });
      }

    })

  })
  .catch((err) => {
    console.log(err);
  });

//console.log(imgPapajohns)
app.get("/papajohns", (req, res) => {
  res.send({ data: imgPapajohns })
})

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
 options.uri = "http://www.pizzarelli.com.do/ofertas/";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      if(elem.attribs.src.match(/ofertas/g))
      {
        //console.log(elem.attribs.src)
        imgPizzarelli.push({img: elem.attribs.src})
      }
    })
  })
  .catch(err => console.log(err))
  app.get("/pizzarelli", (req, res) => {
    res.send({data: imgPizzarelli})
  })
 //Fridays 1
//  options.uri = "http://fridaysdr.com.do/santiago/promociones/cena-para-2";
// rp(options)
//   .then(($) => {
//     $("img").each((i, elem) => {
//       if(elem.attribs.src.match(/promociones/g))
//       {
//         //console.log("http://fridaysdr.com.do" + elem.attribs.src)
//         imgFridays.push({img: "http://fridaysdr.com.do" + elem.attribs.src})
//       }
//     })
//   })
//   .catch(err => console.log(err))
//   //2
//   options.uri = "http://fridaysdr.com.do/santiago/promociones/menu-lunch";
//   rp(options)
//     .then(($) => {
//       $("img").each((i, elem) => {
//         if(elem.attribs.src.match(/Web-Lunch/g))
//         {
//           //console.log("http://fridaysdr.com.do" + elem.attribs.src)
//           imgFridays.push({img: "http://fridaysdr.com.do" + elem.attribs.src})
//         }
//       })
//     })
//     .catch(err => console.log(err))
//   //3
//   options.uri = "http://fridaysdr.com.do/santiago/promociones/happy-hour";
//   rp(options)
//     .then(($) => {
//       $("img").each((i, elem) => {
//         if(elem.attribs.src.match(/promociones/g))
//         {
//           //console.log("http://fridaysdr.com.do" + elem.attribs.src)
//           imgFridays.push({img: "http://fridaysdr.com.do" + elem.attribs.src})
//         }
//       })
//     })
//     .catch(err => console.log(err))
  

//   app.get("/fridays", (req, res) => {
//     res.send({data: imgFridays})
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
app.get("/212nypizza", (req, res) => {
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

app.listen(port, () => console.log("Listen on fucking port " + port));
