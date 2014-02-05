function listApps(){
  var url = 'http://hive-app-registry.herokuapp.com/index.json'
  bitcoin.makeRequest(url, {
    success: function(apps) {
      console.log("success: ", apps)
      apps.forEach(function(app){
        displayApp(app)
      })
    },
    error: function(){
      console.error("error", arguments)
    }
  })
}

function displayApp(manifest){
  var item = document.createElement("a")
  item.setAttribute("class", "list-group-item media")

  var imageContainer = document.createElement("div")
  imageContainer.setAttribute("class", "pull-left")

  var img = document.createElement("img");
  img.setAttribute('class', "media-object");
  img.setAttribute('height', '64px');
  img.setAttribute('width', '64px');

  var textContainer = document.createElement("div")
  textContainer.setAttribute("class", "media-body")

  var heading = document.createElement("h4")
  textContainer.setAttribute("class", "media-heading")
  heading.innerHTML = manifest.name

  var paragraph = document.createTextNode(manifest.author)

  imageContainer.appendChild(img)
  item.appendChild(imageContainer)

  textContainer.appendChild(heading)
  textContainer.appendChild(paragraph)
  item.appendChild(textContainer)

  document.querySelector(".list-group").appendChild(item)
}

listApps()

