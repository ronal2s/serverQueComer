const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const Axios = require("axios")
const { restaurantsSantoDomingoData,
  santoDomingoRestaurants,
  restaurantsSantiagoData,
  santiagoRestaurants,
  lavegaRestaurants,
  restaurantsLaVegaData,
  sfcoMacorisRestaurants,
  restaurantsSfcoMacorisData

} = require("./data/restaurants");
const {routesArray} = require("./routes");
let miCache = {}


app.get("/wakeup",(req,res) => {
    miCache = {}
    res.send("ok")
})

app.get("/santiagotitles", (req, res) => {
  res.send(santiagoRestaurants)
  
})

app.get("/santodomingotitles", (req, res) => {
  res.send(santoDomingoRestaurants)
  
})
app.get("/lavegatitles", (req, res) => {
  res.send(lavegaRestaurants)
  
})
app.get("/sfcomacoristitles", (req, res) => {
  res.send(sfcoMacorisRestaurants)
  
})


app.get("/santiagoRestaurantsInfo", (req, res) => {
  res.send(restaurantsSantiagoData);
})
app.get("/santoDomingoRestaurantsInfo", (req, res) => {
  res.send(restaurantsSantoDomingoData);
})
app.get("/sfcoMacorisRestaurantsInfo", (req, res) => {
  res.send(restaurantsSfcoMacorisData);
})
app.get("/laVegaRestaurantsInfo", (req, res) => {
  res.send(restaurantsLaVegaData);
})


async function instagramPhotos(url, cantPhotos) {
  // It will contain our photos' links
  
  console.time("[START]")
  if(miCache[url]){
    console.timeEnd("[START]")
    return miCache[url]
  }
  const data = []
  //no manda na'
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
      data.push({ img: urlParts[0] })
      //console.log(res)
    }
  } catch (e) {
    console.error('Unable to retrieve photos. Reason: ' + e.toString())
  }
  
  console.timeEnd("[START]")
  
  miCache[url] = data;
  return data
}//wtf

for(const route of routesArray){
  app.get(route.route, async (req,res) =>{
    try{
     const data = await instagramPhotos(route.instagramUrl, 10)
     return res.send({ data: data })
    }catch(err){
      console.log(err)
      return res.send({ error: err.message })
    }
  })
}
//Incluso, en mi instagram app, no puedo seguir a nadie me dice que tengo la acción bloqueada

app.listen(port, () => console.log("Listen on port" + port));
//parece que exploto