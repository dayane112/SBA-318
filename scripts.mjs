// let doctorForm = getElementById('doctorForm');

// doctorForm.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const data = Object.fromEntries(new FormData(this));

//     fetch('/doctors', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert('New doctor added!');
//         this.reset(); 
//     })
//     .catch(error => {
//         const handleError = (error) => {
//             console.error('Error:', error);
//             alert('An error occurred: ' + error.message);
//         };
//         handleError(error);
//     });
// });