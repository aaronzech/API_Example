
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJoke = async() => {
	const jokeText = await getDadJoke();
	const newLI = document.createElement('LI');
	newLI.append(jokeText);
	jokes.append(newLI);
}



// AXIOS example with headers
const getDadJoke = async() =>{
	try{
		const config = { headers: { Accept: 'application/json'}}
		const res6 = await axios.get('https://icanhazdadjoke.com/',config);
		return res6.data.joke;
	}catch(e){
		return "No Jokes Available";
	}

}

button.addEventListener('click', addNewJoke   );