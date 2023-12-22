
console.log("json is lost. where is json? bless")
console.log("oh lordy, lordy.")



fetch('datadata.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(jsonData => {
        // Iterate through the array using a forEach 
        jsonData.forEach(record => {
            // Display fields to the console
            console.log('Name:', record.name);
            console.log('Age:', record.age);
            console.log('City:', record.city);
            console.log('---');  
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
    });

    