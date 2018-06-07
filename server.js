const express = require("express");
const app = express();
const rp = require("request-promise");
const cheerio = require("cheerio");
const port = process.env.PORT || 5000;

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
var imgPapajohns = [], imgFridays=[], imgDominos = [], imgVictorina = [], imgBurgerKing = [], 
imgTuQuipe=[], imgLacar=[], imgPizzarelli=[];


var santiagoRestaurants = ["Papa Johns", "Dominos", "Pizzarelli", "Burger king", "Victorina", "Fridays","Tu quipe","Lacar"]
var restaurantsSantiagoData = {
  papajohns: {
   startHour: 11,
   finalHour: 23,
   telephone: "(809)-489-7272",
   url: "http://www.papajohns.com.do/"
  },
  dominos: {
    startHour: 11,
    finalHour: 23,
    telephone: "(809)-948-4848",
    url: "https://www.dominos.com.do/"
  },
  pizzarelli: {
    startHour: 11,
    finalHour: 23, 
    telephone: "(809)-581-8444", 
    officialPage: "http://www.pizzarelli.com.do/";
  },
  victorina: {
    startHour: 10, 
    finalHour: 23,
    telephone: "(809)-581-0404", 
    officialPage: "https://www.pollosvictorina.com.do/";
  },
  burgerking: {
    startHour: 7, 
    finalHour: 23,
    telephone: "(809)-732-0800", 
    officialPage: "https://www.burgerking.com.do/";
  },
  fridays: {
    startHour: 12, 
    finalHour: 23, 
    telephone: "(809)-971-8443", 
    officialPage: "http://fridaysdr.com.do/santiago/";
  },
  tuQuipe: {
    startHour: 16, 
    finalHour: 23, 
    telephone: "(809)-734-5304", 
    officialPage = "http://www.tuquipe.com/";
  },
  lacar: {
    startHour: 8, 
    finalHour: 18, 
    telephone: "(809)-581-4260", 
    officialPage: "https://www.lacarbuffets.com/";
  }
}

app.get("/santiagotitles", (req, res) =>
{
  res.send(santiagoRestaurants)
  console.log(santiagoRestaurants)
})

app.get("/santiagoRestaurantsInfo", (req, res) =>
{
  res.send(restaurantsSantiagoData);
})

//Papajohns
rp(options)
  .then(($) => {
    //console.log($)
    $("img").each((i, elem) => {
      if (elem.attribs.src.match(/promo/g)) {
        imgPapajohns.push({ img: ("http://www.papajohns.com.do/" + elem.attribs.src) });
      }

    })

  })
  .catch((err) => {
    console.log(err);
  });


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
 options.uri = "http://fridaysdr.com.do/santiago/promociones/cena-para-2";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      if(elem.attribs.src.match(/promociones/g))
      {
        //console.log("http://fridaysdr.com.do" + elem.attribs.src)
        imgFridays.push({img: "http://fridaysdr.com.do" + elem.attribs.src})
      }
    })
  })
  .catch(err => console.log(err))
  //2
  options.uri = "http://fridaysdr.com.do/santiago/promociones/menu-lunch";
  rp(options)
    .then(($) => {
      $("img").each((i, elem) => {
        if(elem.attribs.src.match(/Web-Lunch/g))
        {
          //console.log("http://fridaysdr.com.do" + elem.attribs.src)
          imgFridays.push({img: "http://fridaysdr.com.do" + elem.attribs.src})
        }
      })
    })
    .catch(err => console.log(err))
  //3
  options.uri = "http://fridaysdr.com.do/santiago/promociones/happy-hour";
  rp(options)
    .then(($) => {
      $("img").each((i, elem) => {
        if(elem.attribs.src.match(/promociones/g))
        {
          //console.log("http://fridaysdr.com.do" + elem.attribs.src)
          imgFridays.push({img: "http://fridaysdr.com.do" + elem.attribs.src})
        }
      })
    })
    .catch(err => console.log(err))
  

  app.get("/fridays", (req, res) => {
    res.send({data: imgFridays})
  })
//Quiznos
options.uri = "https://www.quiznos.com.do";
rp(options)
  .then(($) => {
    $("img").each((i, elem) => {
      console.log(elem.children)
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

app.listen(port, () => console.log("Listen on fucking port " + port));
