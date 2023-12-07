// 308523269291-1q6ul4je7gvaqr36uea6jrtn3teat7ev.apps.googleusercontent.com
//YOUR_GOOGLE_API_KEY = AIzaSyBXGXoHoqpe4FObvTud5hhkQIuhAJUb9g0
function performSearch() {
     var searchQuery = document.getElementById('inputs').value;
     var searchResultsContainer = document.getElementById('search-results');

     // Replace 'YOUR_GOOGLE_API_KEY' with your actual Google API key
     var apiKey = 'AIzaSyBXGXoHoqpe4FObvTud5hhkQIuhAJUb9g0';
     var cx = '308523269291-1q6ul4je7gvaqr36uea6jrtn3teat7ev.apps.googleusercontent.com';

     var apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&key=${apiKey}&cx=${cx}`;

     // Clear previous search results
     searchResultsContainer.innerHTML = '';

     // Make API request
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             // Display search results
             data.items.forEach(item => {
                 var resultItem = document.createElement('div');
                 resultItem.innerHTML = `<p><a href="${item.link}" target="_blank">${item.title}</a></p>`;
                 searchResultsContainer.appendChild(resultItem);
             });
         })
         .catch(error => console.error('Error fetching search results:', error));
 }