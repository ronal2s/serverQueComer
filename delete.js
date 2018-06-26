const Axios = require("axios")
var res2 = [];
var urlParts = [];
 async function instagramPhotos () {
    // It will contain our photos' links
    const res = []
    
    try {
        const userInfoSource = await Axios.get('https://www.instagram.com/platanitos_santiago/')

        // userInfoSource.data contains the HTML from Axios
        //console.log(userInfoSource.data)
        const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

        const userInfo = JSON.parse(jsonObject)
        // Retrieve only the first 10 results
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
        for (let media of mediaArray) {
            const node = media.node
            
            // Process only if is an image
            if ((node.__typename && node.__typename !== 'GraphImage')) {
                continue
            }

            // Push the thumbnail src in the array
            urlParts = node.thumbnail_src.split("%")
            //console.log(urlParts[0])
            res.push(urlParts[0])
            //console.log(res)
        }
    } catch (e) {
        console.error('Unable to retrieve photos. Reason: ' + e.toString())
    }
    
    return res
}
instagramPhotos();

instagramPhotos()
.then(function(res) {
    console.log(res)
})
.catch(err => console.log(err))