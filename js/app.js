
(function() {

  const thesarus = "https://www.thesaurus.com/browse/"
  const words = [
    "heather",
    "mundane",
    "somber",
    "crowded",
    "wine",
    "free",
    "song",
    "soul",
    "flesh",
    "cigarette",
    "decay",
    "old",
    "clouds",
    "heart",
    "gnashing",
    "undertow",
  ]


  function handleNewWord()
  {
    var num = Math.floor(Math.random() * words.length)
    var word = document.getElementById("word")
    word.innerHTML = words[num]
  }

  function initUI()
  {
    const newWord = document.getElementById("gen-button")
    newWord.addEventListener("click", handleNewWord);
    handleNewWord()
  }

  initUI()

})()
