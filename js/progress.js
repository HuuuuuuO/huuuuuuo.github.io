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
      fetch('https://v1.hitokoto.cn')
          .then(response => response.json())
          .then(data => {
              document.getElementById('quote').textContent = data.hitokoto;
              document.getElementById('source').textContent = '—— ' + data.from;
          })
          .catch(error => console.error('Error:', error));
  });
  
