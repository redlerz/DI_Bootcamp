// let btn = document.getElementById('btn');
// let output = document.getElementById('output');
let objArray = [
       
    {id:0, author: "Oscar Wilde", quote:"Be yourself; everyone else is already taken", likes:0 },
    {id:1, author: "Marilyn Monroe", quote:"Im selfish, impatient and a little insecure. I make mistakes", likes: 0 },
    {id:2, author: "Albert Einstein", quote:"Two things are infinite: the universe and human stupidity; and Im not sure about the universe", likes: 0}
  
    ]

    let quoteRetriver = () => {
        let ids = objArray.map(e => e.id)
        let randomId = ids[Math.floor(Math.random() * ids.length)]
        let randomQuote = objArray.find(o => o.id === randomId);

        return randomQuote
    }
    
    let htmFeeder = (e) => {
        let quote = document.querySelector("quote")
        let author = document.querySelector("author")
        let randomQuote = quoteRetriver();
        [quote, author].forEach(element => element.textContent = randomQuote[element.id]);

        } 
    
        let quoteGen = document.querySelector("#quoteGen")
        quoteGen.addEventListener("click", htmFeeder)

    