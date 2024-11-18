document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
        "You have to dream before your dreams can come true.",
        "If you want to shine like a sun, first burn like a sun.",
        "Excellence is a continuous process and not an accident."
    ];
    const quoteElement = document.getElementById("dynamic-quote");

    setInterval(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    }, 5000);
});
