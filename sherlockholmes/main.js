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
  { part: 0,	author: "games and adaptations class", description: "an adaptation of Guy Ritchi's 2009 Sherlock Holmes, made in decker" },
  { part: 1,	author: "Courteney", description: "sherlock & watson stop lord blackwood from sacrificing the lady" },
  { part: 2,	author: "Yan", description: "sherlock meets watson's fiance at dinner, makes deductions about her, she gets mad at him" },
  { part: 3,	author: "Harper", description: "Shen	boxing fight, sees irene and decides to destroy the other guy" },
  { part: 4,	author: "Shah", description: "sherlock meets with lord blackwood, who says weird things are going to happen; lord blackwood is hung; watson pronounces him dead" },
  { part: 5,	author: "Reef", description: "irene gives sherlock a job to track down a missing person (no slurs please and thank you), follows her and sort-of-meets moriarty" },
  { part: 6,	author: "matthew", description: "blackwood resurrects from the dead, find reordan (missing person) in coffin" },
  { part: 7,	author: "d", description: "go to reordan's lab, fight with large french man" },
  { part: 8,	author: "James", description: "sherlock meets with Sir Thomas Rotheram (lord blackwood's dad), they ask sherlock to stop blackwood, Rotheram dies in the bathtub" },
  { part: 9,	author: "TJ", description: "the order calls a meeting where Blackwood is nominated to lead, Standish says \"no way,\" tries to shoot Blackwood but burns and dies" },
  { part: 10,	author: "Ellie", description: "sherlock & watson go through river to meat factory, irene is tied up, building explodes and sherlock flees" },
  { part: 11,	author: "moochi", description: "sherlock meets with lord coward in handcuffs, fills room with smoke, confirms he wants to kill parliament guys, jumps out window" },
  { part: 12,	author: "Han", description: "lord blackwood tells parliament that they should follow him or die; sherlock, irene, and watson fight henchmen and big french guy; irene steals the gas canisters" },
  { part: 13,	author: "fiona", description: "irene and sherlock face to face; blackwood throws irene off bridge (sort of); fight; blackwood dies" },
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
    ? `Sherlock Holmes`
    : `Sherlock Holmes adaptation part ${padded}`
  $author.innerHTML = part.author
  $description.innerHTML = part.description
}

$button.addEventListener("click", () => GoToNextPart(currPart))
GoToNextPart()
