var xhr = new XMLHttpRequest();
xhr.open("GET", "https://tegzxy.github.io/website-about-me/");
xhr.responseType = "json";
xhr.onload = function() {
  document.querySelector('.footer-title').innerHTML = 'Total Visitor : ' + this.response.value;
}
xhr.send();
