const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const quotes = [
    {
        quote: "When you have faults, do not feart o abandon them.",
        author: "Confucius"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno"
    },
    {
        quote: "Being happy never goes out of style. ",
        author: "Lilly Pulitzer"
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure.",
        author: "Mark Twain"
    },
    {
        quote: "Nothing in more despicable than respect based on fear.",
        author: "Albert camus"
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    }
    
]



const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;