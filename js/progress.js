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

// // 展示网络台词接口台词
// document.addEventListener('DOMContentLoaded', function() {
//       fetch('https://v1.hitokoto.cn')
//           .then(response => response.json())
//           .then(data => {
//               document.getElementById('quote').textContent = data.hitokoto;
//               document.getElementById('source').textContent = '—— ' + data.from;
//           })
//           .catch(error => console.error('Error:', error));
//   });
  
// // 展示本地csv文件台词
// document.addEventListener('DOMContentLoaded', function() {
//     fetch('/data/douban/quote.csv')
//         .then(response => response.text())
//         .then(data => {
//             const lines = data.split('\n');
//             const quotes = lines.slice(1).map(line => line.split(','));
//             const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//             document.getElementById('quote').textContent = randomQuote[0];
//             document.getElementById('source').textContent =  '—— ' + randomQuote[1];
//         });
// });
function getRandomQuote() {
    // 随机选择台词来源
    const sourceType = Math.random() < 0.5? 'network' : 'local';
    
    if (sourceType === 'network') {
        return fetch('https://v1.hitokoto.cn')
           .then(response => response.json())
           .then(data => ({
                quote: data.hitokoto,
                source: '—— ' + data.from
            }))
           .catch(error => console.error('Network Error:', error));
    } else {
        return fetch('/data/douban/quote.csv')
           .then(response => response.text())
           .then(data => {
                const lines = data.split('\n');
                const quotes = lines.slice(1).map(line => line.split(','));
                const randomIndex = Math.floor(Math.random() * quotes.length);
                return {
                    quote: quotes[randomIndex][0],
                    source: '—— ' + quotes[randomIndex][1]
                };
            })
           .catch(error => console.error('Local Error:', error));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getRandomQuote().then(result => {
        document.getElementById('quote').textContent = result.quote;
        document.getElementById('source').textContent = result.source;
    });
});
