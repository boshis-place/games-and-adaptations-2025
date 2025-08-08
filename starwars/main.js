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
  { part: 0,	author: "games and adaptations class", description: "an adaptation of 1977 Star Wars: A New Hope, made in twine" },
  { part: 1,	author: "james", description: "R2 & C-3PO escape, Leia records message" },
  { part: 2,	author: "Courteney", description: "robots wander desert, and are imprisoed by jawas" },
  { part: 3,	author: "moochi", description: "luke buys robots, finds message for obi-wan, r2 escapes" },
  { part: 4,	author: "Ellie", description: "track down r2, get attacked by sand people, meet obi-wan, parents dead :(" },
  { part: 5,	author: "Harper & Han", description: "Shen	mos eisley, meet han solo, leave planet" },
  { part: 6,	author: "matthew", description: "leia forced to watch alderaan be destroyed, obi-wan feels disturbance in force, millenium falcon finds asteroid field and gets pulled into death star" },
  { part: 7,	author: "d", description: "luke & co hide in millenium falcon, sneak out, locate leia" },
  { part: 8,	author: "Shah", description: "luke, han, and chewie sneak out to save leia, get trapped" },
  { part: 9,	author: "fiona", description: "luke & co esccape down garbage shoot, get trapped, obi-wan turns off tractor beam, 3-PO & R2 come in clutch and save garbage shoot victims" },
  { part: 10,	author: "Han", description: "luke & co escape to millenium falcon, obi-wan and vader duel, luke sad :(" },
  { part: 11,	author: "Yan", description: "rebel base goes over plans for death star assault, luke volunteers his pilot skills, han leaves (all he cares about is money, sad)" },
  { part: 12,	author: "Reef", description: "death star approach, luke trusts the force (thanks obi-wan), han saves luke and blasts vader into outer space, death star destroyed" },
  { part: 13,	author: "TJ", description: "luke returns to yavin 4 to cheers. somewhat awkward medal ceremony" },
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
    ? `Star Wars`
    : `Star Wars adaptation part ${padded}`
  $author.innerHTML = part.author
  $description.innerHTML = part.description
}

$button.addEventListener("click", () => GoToNextPart(currPart))
GoToNextPart()
