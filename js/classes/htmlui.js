class HtmlUi {

    displayActivities() {
        // predefined activities
        const activities = [
            {
                activity: 'schlafen',
                example: 'z.B. Krankenhaus',
                palmin: 0.95,
                palmax: 0.95,
            },
            {
                activity: 'sitzend/liegend',
                example: 'bettlägrig, gebrechlich',
                palmin: 1.2,
                palmax: 1.2,
            },
            {
                activity: 'sitzend/kaum körperliche Aktivität',
                example: 'hauptsächlich Büroarbeit',
                palmin: 1.4,
                palmax: 1.5,
            },
            {
                activity: 'überwiegend sitzend/ wenig körperliche Aktivität',
                example: 'Student, Schüler, Taxifahrer',
                palmin: 1.6,
                palmax: 1.7,
            },
            {
                activity: 'überwiegend stehende/gehende Tätigkeiten',
                example: 'Sportler, Handwerker, Kellner, Verkäufer',
                palmin: 1.8,
                palmax: 1.9,
            },
            {
                activity: 'körperlich anstrengende Tätigkeiten',
                example: 'Landwirt, Hochleistungssportler,',
                palmin: 2.0,
                palmax: 2.4,
            }];

        // generate list with activities
        const selectActivity = document.getElementById('activity');

        // loop through activities and generate optionselect
        activities.map((i, c) => {
            const option = document.createElement('option');
            option.value = parseInt(c);
            option.textContent = i.activity;
            // print the activities
            selectActivity.appendChild(option);
        });
    };

    displayErrors(message) {
        //create a div
        const div = document.createElement('div');
        div.classList = 'error';

        //insert the message
        div.innerHTML = '<p>' + message + '</p>';
        form.insertBefore(div, document.querySelector('.form-group'));

        //remove the error
        setTimeout(function() {
            document.querySelector('.error').remove();
        }, 3000);
    };

    showResults(human, rate) {
        console.log(rate);
        const result = document.getElementById('result');
        const div = document.createElement('div');


        div.innerHTML = '<p class="header">Summary</p>' +
            '<p>As a ' + human.gender + '</p>' +
            '<p>with ' + human.activity + '</p>' +
            '<p>and ' + human.age + ' years </p>' +
            '<p class="total">You need between ' + rate.totalmin + ' and '+rate.totalmax+' calories per day</p>';

        const spinner = document.querySelector('#loading img');
        spinner.style.display = 'block';

        setTimeout(function() {
            spinner.style.display = 'none';
            result.appendChild(div);
        }, 3000);
    }
}