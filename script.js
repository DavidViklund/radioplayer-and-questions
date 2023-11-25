// Hämtar data från Sveriges Radios API
fetch("http://api.sr.se/api/v2/channels?format=json&size=100")
  // Konvertera responsen till JSON-format:
  .then((response) => response.json())
  .then((data) => {
    // Hämtar kanaler från den hämtade JSON-data
    const channels = data.channels;
    const radioChannelsDiv = document.getElementById("radioChannels");

    // Loopar igenom varje kanal och skapa HTML-element för varje
    channels.forEach((channel, index) => {
      const channelDiv = document.createElement("div");
      channelDiv.classList.add("channel");
      // Skapa HTML-innehåll för varje kanal med namn, bild och ljudspelare
      channelDiv.innerHTML = `
    
      <img src="${channel.image}" alt="${channel.name}">
      <audio controls>
        <source src="${channel.liveaudio.url}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `;
      // Lägger till skapad kanal-div i den överordnade div'en "radioChannels"
      radioChannelsDiv.appendChild(channelDiv);
    });
  })
  // Hantera eventuella fel under fetch-anropet och logga dem till konsolen
  .catch((error) => console.log("Error fetching data:", error));
