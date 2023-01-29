/* JS for score calculation */

function calculate_score()
{
	event.preventDefault(); // to cancel form submit

	let score = 0;
	let quiz_form = document.getElementById("quiz");

	for(question in answer_key)
	{
		if(answer_key[question] == quiz_form.elements[question].value) score++;
	}

	document.getElementById("score").innerHTML = score;
}