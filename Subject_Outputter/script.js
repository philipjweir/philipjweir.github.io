function subjectOutputter() {
    document.getElementById("main").innerHTML = ""; 

    // Requests number of subjects
    var count = parseInt(prompt("How many subjects did you take?"));

    // Declares array
    let scores = [];

    // Collects scores
    for (var i = 0; i < count; i++) {
        let score = parseInt(prompt("Enter score for Subject " + (i + 1) + ":"));
        scores.push(score);
    }

    // Print each score + grade
    for (var i = 0; i < scores.length; i++) {

        let subjectScore = scores[i]; // get score from array

        document.getElementById("main").innerHTML +=
            "The score for Subject " + (i + 1) + " is " + subjectScore + "<br>";

        if (subjectScore >= 90 && subjectScore <= 100) {
            document.getElementById("main").innerHTML += "Grade: A<br><br>";
        }
        else if (subjectScore >= 80) {
            document.getElementById("main").innerHTML += "Grade: B<br><br>";
        }
        else if (subjectScore >= 70) {
            document.getElementById("main").innerHTML += "Grade: C<br><br>";
        }
        else if (subjectScore >= 60) {
            document.getElementById("main").innerHTML += "Grade: D<br><br>";
        }
        else {
            document.getElementById("main").innerHTML += "Grade: F<br><br>";
        }
    }
}
