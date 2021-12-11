to_convert = document.getElementById("text").value;
console.log(to_convert);
let voiceonstart = new SpeechSynthesisUtterance("Welcome to text to speech converter! By-Alpha");
speechSynthesis.speak(voiceonstart);


function convertText(text){
    let voice = new SpeechSynthesisUtterance(text);

    if(to_convert === "Type Here..."){
        let dfault_voice = new SpeechSynthesisUtterance("Soory, but you have not typed anything in the box; you can eather type it or paste it.");
        speechSynthesis.speak(dfault_voice);
    }
    else{
        speechSynthesis.speak(voice);
    }
}

function clicked(){
    to_convert = document.getElementById("text").value;
    convertText(to_convert);
    len = document.getElementById("text").value;
    len_main = len.length;
    console.log(len_main);
    doc = document.getElementById("num").innerHTML = `${len_main}`;
}


function del(){
    document.getElementById("text").innerHTML = 'Type Here...';
    console.log(document.getElementById("text").value);
}

Voices = [
    {
      "name": "Alex",
      "lang": "en-US"
    },
    {
      "name": "Alice",
      "lang": "it-IT"
    },
    {
      "name": "Alva",
      "lang": "sv-SE"
    },
    {
      "name": "Amelie",
      "lang": "fr-CA"
    },
    {
      "name": "Anna",
      "lang": "de-DE"
    },
    {
      "name": "Carmit",
      "lang": "he-IL"
    },
    {
      "name": "Damayanti",
      "lang": "id-ID"
    },
    {
      "name": "Daniel",
      "lang": "en-GB"
    },
    {
      "name": "Diego",
      "lang": "es-AR"
    },
    {
      "name": "Ellen",
      "lang": "nl-BE"
    },
    {
      "name": "Fiona",
      "lang": "en"
    },
    {
      "name": "Fred",
      "lang": "en-US"
    },
    {
      "name": "Ioana",
      "lang": "ro-RO"
    },
    {
      "name": "Joana",
      "lang": "pt-PT"
    },
    {
      "name": "Jorge",
      "lang": "es-ES"
    },
    {
      "name": "Juan",
      "lang": "es-MX"
    },
    {
      "name": "Kanya",
      "lang": "th-TH"
    },
    {
      "name": "Karen",
      "lang": "en-AU"
    },
    {
      "name": "Kyoko",
      "lang": "ja-JP"
    },
    {
      "name": "Laura",
      "lang": "sk-SK"
    },
    {
      "name": "Lekha",
      "lang": "hi-IN"
    },
    {
      "name": "Luca",
      "lang": "it-IT"
    },
    {
      "name": "Luciana",
      "lang": "pt-BR"
    },
    {
      "name": "Maged",
      "lang": "ar-SA"
    },
    {
      "name": "Mariska",
      "lang": "hu-HU"
    },
    {
      "name": "Mei-Jia",
      "lang": "zh-TW"
    },
    {
      "name": "Melina",
      "lang": "el-GR"
    },
    {
      "name": "Milena",
      "lang": "ru-RU"
    },
    {
      "name": "Moira",
      "lang": "en-IE"
    },
    {
      "name": "Monica",
      "lang": "es-ES"
    },
    {
      "name": "Nora",
      "lang": "nb-NO"
    },
    {
      "name": "Paulina",
      "lang": "es-MX"
    },
    {
      "name": "Samantha",
      "lang": "en-US"
    },
    {
      "name": "Sara",
      "lang": "da-DK"
    },
    {
      "name": "Satu",
      "lang": "fi-FI"
    },
    {
      "name": "Sin-ji",
      "lang": "zh-HK"
    },
    {
      "name": "Tessa",
      "lang": "en-ZA"
    },
    {
      "name": "Thomas",
      "lang": "fr-FR"
    },
    {
      "name": "Ting-Ting",
      "lang": "zh-CN"
    },
    {
      "name": "Veena",
      "lang": "en-IN"
    },
    {
      "name": "Victoria",
      "lang": "en-US"
    },
    {
      "name": "Xander",
      "lang": "nl-NL"
    },
    {
      "name": "Yelda",
      "lang": "tr-TR"
    },
    {
      "name": "Yuna",
      "lang": "ko-KR"
    },
    {
      "name": "Yuri",
      "lang": "ru-RU"
    },
    {
      "name": "Zosia",
      "lang": "pl-PL"
    },
    {
      "name": "Zuzana",
      "lang": "cs-CZ"
    }
  ];
