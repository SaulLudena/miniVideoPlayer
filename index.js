const container = document.getElementById("container")
const videoContainer = document.getElementById("videoContainer")

const metodoMostrarEnlace = async() =>{
	BASE_URL_TADB_TRACKS= 'https://theaudiodb.com/api/v1/json/2/mvid.php?i=112026';
	container.innerHTML= ""
	const fetchSongs = await fetch(BASE_URL_TADB_TRACKS)
	const data = await fetchSongs.json()
	console.log(data.mvids[0].strTrack)
	for(var i=0;i<data.mvids.length;i++){
		const button = document.createElement("button")
		button.innerHTML=`${i+1} ${data.mvids[i].strMusicVid}`
		button.classList.add("disable")
		function reproducir(index){
			button.addEventListener("click",function(){
				const youTubeVideoCode = data.mvids[index].strMusicVid.substr(data.mvids[index].strMusicVid.length - 11)
				const youtubeVideo = data.mvids[index].strMusicVid
				const youtubeUrlEmbed = `https://www.youtube.com/embed/${youTubeVideoCode}`
				console.log(`reproduciendo ${youtubeUrlEmbed}`)
				videoContainer.innerHTML=`<h1>Reproduciendo ${index+1} <a href="${youtubeVideo} " target="_blank">${data.mvids[index].strTrack}</a></h1><br>
								
										<iframe width="420" height="315"
										src="${youtubeUrlEmbed}?autoplay=1&mute=1" frameborder=”0″>
										</iframe>`
			})
		}
		reproducir(i)
		container.appendChild(button)
	}
	/*data.mvids.map((cancion) =>{
		const youTubeVideoCode = cancion.strMusicVid.substr(cancion.strMusicVid.length - 11)
		const youtubeUrlEmbed = `https://www.youtube.com/embed/${youTubeVideoCode}`
		container.innerHTML += `<button type="button" id="enlace" class="button">${youtubeUrlEmbed} <i class="fa-solid fa-circle-play"></i></button>`
	})*/
};


metodoMostrarEnlace();

/*const metodoMostrarEnlace = async() =>{
	const container = document.getElementById("container")
	BASE_URL_TADB_TRACKS= 'https://theaudiodb.com/api/v1/json/2/mvid.php?i=112026';
	container.innerHTML= ""
	const fetchSongs = await fetch(BASE_URL_TADB_TRACKS)
	const data = await fetchSongs.json()
	data.mvids.map((cancion) =>{
		const youTubeVideoCode = cancion.strMusicVid.substr(cancion.strMusicVid.length - 11)
		const youtubeUrlEmbed = `https://www.youtube.com/embed/${youTubeVideoCode}`
		container.innerHTML += `<button type="button" id="enlace" class="button">${youtubeUrlEmbed} <i class="fa-solid fa-circle-play"></i></button>`
	})
};*/


/*
const mostrarVideo = () =>{
	if(videoContainer.style.backgroundColor === "red"){
		videoContainer.style.backgroundColor="blue"
		videoContainer.innerHTML=`<h1>has clickeado</h1>`
	}else if(videoContainer.style.backgroundColor === "blue"){
		videoContainer.style.backgroundColor="red"
		videoContainer.innerHTML=`<h1>has clickeado otra vez</h1>`
	}
}*/


