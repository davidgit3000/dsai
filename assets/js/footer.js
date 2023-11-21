fetch('/assets/templates/footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('page-footer').innerHTML = data;
})
.catch(error => console.error('Error fetching footer:', error));