document.addEventListener('DOMContentLoaded', function () {
    var winHeight = window.innerHeight,
          docHeight = document.documentElement.scrollHeight,
          progressBar = document.querySelector('#content_progress');
    progressBar.max = docHeight - winHeight;
    progressBar.value = window.scrollY;

    document.addEventListener('scroll', function () {
          progressBar.max = document.documentElement.scrollHeight - window.innerHeight;
          progressBar.value = window.scrollY;
    });
});


document.addEventListener('DOMContentLoaded', function() {
      fetch('/data/douban/quote.csv')
          .then(response => response.text())
          .then(data => {
              const lines = data.split('\n');
              const quotes = lines.slice(1).map(line => line.split(','));
              const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
              document.getElementById('quote').textContent = randomQuote[0];
              document.getElementById('source').textContent = randomQuote[1] ? '——' + randomQuote[1] : '';

              
              console.log(randomQuote[0],randomQuote[1]);

          });
  });
  