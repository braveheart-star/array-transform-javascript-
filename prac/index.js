let inputArray = []
function show () {
	let inputedTxt = $("#inputnumber").val()
	console.log(inputedTxt)
	var leiow = inputedTxt.split(" ");
	console.log(leiow)
	let count1 = parseInt(leiow[0])
	let count2 = parseInt(leiow[1])
    let inputString = "Inputed String : "
	for(let i = 1; i <= count1; i ++) { 
		inputString += i + ' '
		inputArray.push(i)
	}
	for(let k = 0; k < count2; k ++) {
		let removed = inputArray.shift()
		console.log(removed)
		inputArray.push(removed)
		console.log(inputArray)
	}
	let outputString = "Output String : "
	for(let j = 0; j < inputArray.length; j ++) {
		outputString += inputArray[j] + ' '
	}
	document.getElementById("printInput").innerHTML = inputString
	console.log(inputString)
	document.getElementById("printOutput").innerHTML = outputString



}

$("#btn1").click( function() {
	show()
})
$("#btn2").click( function() {
	window.location.reload()
})