
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
  ]


  function handleNewWord()
  {
    var num = Math.round(Math.random() * words.length-1)
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
