// variables
const form = document.getElementById('calculation');
const html = new HtmlUi();

// event listener
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        // create activities for selecting
        html.displayActivities();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // read the values from the form
        const activity = document.getElementById('activity').value;
        const age = document.getElementById('age').value;

        // check if at least on radio button is selected
        const genderRadio = document.querySelector(
            'input[name="gender"]:checked');

        // if is save the value gender
        if (genderRadio !== null ) {
            const gender = genderRadio.value;
        }

        // check that all fields have something
        if (genderRadio==null || activity === '' || age === '') {
            html.displayErrors('All fields are mandatory');
        } else {
            // clear the previous calculation
            const prevResults = document.querySelector('#result div');
            if (prevResults != null) {
                prevResults.remove();
            }
            const human = {activity:2,palMin:1.4,palMax:1.4};
            // make the calculation
            const rateCalculator = new RateCalculator(human);
            const rate = rateCalculator.calculate(human);

            // print the result via htmlui
            html.showResults(human, rate);
        }
    });
}




