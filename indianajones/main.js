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
  { part: 0,	author: "games and adaptations class", description: "an adaptation of Indiana Jones and the Raiders of the Lost Ark, made in downpour" },
  { part: 1,	author: "d", description: "indy goes into temple, sneaks through traps, gets the idol, runs, boulder, loses idol" },
  { part: 2,	author: "Ellie", description: "indy teaching class; meets with boring government guys; tells them about the ark; gets the job; packs to leave" },
  { part: 3,	author: "Duncan", description: "marianne drinking contest; indy asks about the medallion; no dice, Indy" },
  { part: 4,	author: "moochi", description: "nazi guy asks about the medallion; indy comes back; fight scene; marianne joins indy" },
  { part: 5,	author: "matthew", description: "in cario; chased by nazis in market; marianne goes in basket; indy chases baskets; car with marianne blows up" },
  { part: 6,	author: "Courteney", description: "medallion is translated; belloc is digging in the wrong spot; bad dates" },
  { part: 7,	author: "fiona", description: "indy and sallah sneak into nazi camp; climb down hole; put staff in slot; big light; find real spot where ark is buried" },
  { part: 8,	author: "Reef", description: "indy and sallah find ark; haul it up; uh oh nazis! marianne thrown down with indy; uh oh snakes! break the wall and escape" },
  { part: 9,	author: "TJ", description: "fight around the planes" },
  { part: 10,	author: "Yan", description: "indy horse chase ark; fights guys on car; does the scary thing where he goes under the car; he wins!" },
  { part: 11,	author: "James", description: "gets on boat with ark; boarded by nazis; indy swims over to submarine; hurray!" },
  { part: 12,	author: "Harper", description: "indy steals nazi disguise; follows them through desert; threatens to blow up the ark with rocket launcher, but he can't :(" },
  { part: 13,	author: "Han", description: "they open the ark! everyone dies except indy and marianne" },
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
    ? `Indiana Jones`
    : `Indiana Jones adaptation part ${padded}`
  $author.innerHTML = part.author
  $description.innerHTML = part.description
}

$button.addEventListener("click", () => GoToNextPart(currPart))
GoToNextPart()
