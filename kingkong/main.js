const $film = document.getElementById("film")
const $button = document.getElementById("button")
const $part = document.getElementById("part")
const $author = document.getElementById("author")
const $description = document.getElementById("description")
const $title = document.getElementById("title")

$film.hidden = true
$title.hidden = false
$button.innerHTML = "start movie"

const parts = [
  { part: 0,	author: "games and adaptations class", description: "an adaptation of 2005 Peter Jackson's King Kong made in flickgame" },
  { part: 1,	author: "matthew", description: "movie canceled; jack black casts naomi watts to start in the film" },
  { part: 2,	author: "d", description: "escape from new york" },
  { part: 3,	author: "TJ", description: "boat: mention skull island to jack; budding romance" },
  { part: 4,	author: "Shah", description: "captain learns of arrest warrant; turns home; goes into fog; comes upon skull island" },
  { part: 5,	author: "fiona", description: "crew goes to rescue ann; trek through jungle; fight huge insects" },
  { part: 6,	author: "James", description: "find dinos; film brief scene with dinos; stampede" },
  { part: 7,	author: "Reef", description: "ann & kong in home; tries to escape; does vaudeville acts to amuse kong; kong angry when she stops, then sad" },
  { part: 8,	author: "Yan", description: "king kong finds crews; brief fights; throws crew and log into ravine" },
  { part: 9,	author: "Ellie", description: "ann & king kong dino fight scene" },
  { part: 10,	author: "Han", description: "crew fights scary slugs and huge insects" },
  { part: 11,	author: "Courteney", description: "jack rescues ann (flies off on bats); crew catches kong" },
  { part: 12,	author: "Harper", description: "Shen	nyc -- kong grand opening; breaks from chains; chases jack" },
  { part: 13,	author: "moochi", description: "kong & ann meet, ice skate; climb up empire state building; planes" },
]

let currPart = -1

function GoToNextPart() {
  let nextPart = (currPart + 1) % parts.length
  if (nextPart === 0) {
    $film.hidden = true
    $title.hidden = false
    $button.innerHTML = "play"
  } else if (nextPart < parts.length - 1) {
    $button.innerHTML = "next"
    $film.hidden = false
    $title.hidden = true
  } else {
    $button.innerHTML = "rewind"
  }

  currPart = nextPart

  const part = parts[currPart]
  const padded = currPart.toString().padStart(2, "0")

  $film.src = `part${padded}.html`
  $part.innerHTML = currPart === 0
    ? `King Kong`
    : `King Kong adaptation part ${padded}`
  $author.innerHTML = part.author
  $description.innerHTML = part.description
}

$button.addEventListener("click", () => GoToNextPart(currPart))
GoToNextPart()
