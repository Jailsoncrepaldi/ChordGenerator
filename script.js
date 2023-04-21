const a = document.querySelector("#chords");
const btn = document.querySelector("#btn-chorgen");
const btn2 = document.querySelector("#btn-chorclear");
const btn3 = document.querySelector("#btn-chorplay");
const btn4 = document.querySelector("#btn-final");
const btn5 = document.querySelector("#btn-last");
const chords = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#' ,'Am', 'A#m', 'Bm', 'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m','A5', 'A#5', 'B5', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5','Asus2', 'A#sus2', 'Bsus2', 'Csus2', 'C#sus2', 'Dsus2', 'D#sus2', 'Esus2', 'Fsus2', 'F#sus2', 'Gsus2', 'G#sus2','A7', 'A#7', 'B7', 'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7','A7+', 'A#7+', 'B7+', 'C7+', 'C#7+', 'D7+', 'D#7+', 'E7+', 'F7+', 'F#7+', 'G7+', 'G#7+','Asus4', 'A#sus4', 'Bsus4', 'Csus4', 'C#sus4', 'Dsus4', 'D#sus4', 'Esus4', 'Fsus4', 'F#sus4', 'Gsus4', 'G#sus4'];
const chordsEl = document.getElementById("chords");
let  txtclick = chordsEl.textContent;
let i;
let sortedchord = [];
let e = parseInt(Math.random() * chords.length);
const c4 = 261.6, cs4 = 277.2,
	d4 = 293.7,ds4 = 311.1, 
  e4 = 329.6,
  f4 = 349.2, fs4 = 370,
  g4 = 392.0, gs4 = 415.3,
  a4 = 440.0, as4 = 466.2,
  b4 = 493.9,
  c5 = 523.3, cs5 = 554.4,
  d5 = 587.3, ds5 = 622.3,
  e5 = 659.3, 
  f5 = 698.5, fs5 = 740,
  g5 = 784, gs5 = 830.6,
  a5 = 880, as5 = 932.3,
  b5 = 987.8,
  c6 = 1047;
  

  	
let context,
	oscillator,
  contextGain,
  x = 1,
  type = 'sine',
  frequency=0;

function start(){
	
	context = new AudioContext();
	oscillator = context.createOscillator();
  contextGain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  oscillator.connect(contextGain);
	contextGain.connect(context.destination);
	oscillator.start();
}


function stop(){
  start();
  contextGain.gain.exponentialRampToValueAtTime(
  	0.00001, context.currentTime + x+1
	)
}
// Dó e Dó# e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordC = [ c4, e4, g4, c5 ]; const chordCm = [ c4, ds4, g4, c5 ]; const chordCs = [ cs4, f4, gs4, cs5 ];const chordCs7 = [ cs4, f4, gs4, b4 ];const chordCs7M = [ cs4, f4, gs4, c5 ]; const chordCsm = [ cs4, e4, gs4, cs5 ]; const chordC5 = [ c4, g4, c5 ]; const chordCs5 = [ cs4, gs4, cs5 ]; const chordCsus2 = [ c4, d4, g4,c5 ];const chordCsus4 = [ c4, f4, g4,c5 ]; const chordCssus2 = [ cs4, ds4, gs4,cs5 ]; const chordCssus4 = [ cs4, fs4, gs4,cs5 ];const chordC7 = [ c4, e4, g4, as4 ];const chordC7M = [ c4, e4, g4, b4 ]; 
// Ré e Ré# e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordD = [ d4, fs4, a4, d5 ]; const chordDm = [ d4, f4, a4, d5 ]; const chordDs = [ ds4, g4, as4, ds5 ];const chordDs7 = [ ds4, g4, as4, cs5 ];const chordDs7M = [ ds4, g4, as4, d5 ]; const chordDsm = [ ds4, fs4, as4, ds5 ]; const chordD5 = [ d4, a4, d5 ]; const chordDs5 = [ ds4, as4, ds5 ]; const chordDsus2 = [ d4, e4, a4,d5 ];const chordDsus4 = [ d4, g4, a4,d5 ]; const chordDssus2 = [ ds4, f4,as4,ds5 ]; const chordDssus4 = [ ds4, gs4, as4,ds5 ];const chordD7 = [ d4, fs4, a4, c5 ];const chordD7M = [ d4, fs4, a4, cs5 ]; 
// Mi e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordE = [ e4, gs4, b4, e5 ]; const chordEm = [ e4, g4, b4, e5 ];  const chordE5 = [ e4, b4, e5 ]; const chordEsus2 = [ e4, fs4, b4,e5 ];const chordEsus4 = [ e4, a4, b4,e5 ]; const chordE7 = [ e4, gs4, b4, d5 ];const chordE7M = [ e4, gs4, b4, ds5 ]; 
// Fá e Fá# e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordF = [ f4, a4, c5, f5 ]; const chordFm = [ f4, gs4, c5, f5 ]; const chordFs = [ fs4, as4, cs5, fs5 ];const chordFs7 = [ fs4, as4, cs5, e5 ];const chordFs7M = [ fs4, as4, cs5, f5 ]; const chordFsm = [ fs4, a4, cs5, fs5 ]; const chordF5 = [ f4, c5, f5 ]; const chordFs5 = [ fs4, cs5, fs5 ]; const chordFsus2 = [ f4, g4, c5,f5 ];const chordFsus4 = [ f4, as4, c5,f5 ]; const chordFssus2 = [ fs4, gs4,cs5,fs5 ]; const chordFssus4 = [ fs4, b4, cs5,fs5 ];const chordF7 = [ f4, a4, c5, ds5 ];const chordF7M = [ f4, a4, c5, e5 ]; 
// Sol e Sol# e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordG = [ g4, b4, d5, g5 ]; const chordGm = [ g4, as4, d5, g5 ]; const chordGs = [ gs4, c5, ds5, gs5 ];const chordGs7 = [ gs4, c5, ds5, fs5 ];const chordGs7M = [ gs4, c5, ds5, g5 ]; const chordGsm = [ gs4, b4, ds5, gs5 ]; const chordG5 = [ g4, d5, g5 ]; const chordGs5 = [ gs4, ds5, gs5 ]; const chordGsus2 = [ g4, a4, d5,g5 ];const chordGsus4 = [ g4, c5, d5,g5 ]; const chordGssus2 = [ gs4, as4,ds5,gs5 ]; const chordGssus4 = [ gs4, cs5, ds5,gs5 ];const chordG7 = [ g4, b4, d5, f5 ];const chordG7M = [ g4, b4, d5, fs5 ]; 
// Lá e Lá# e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordA = [ a4, cs5, e5, a5 ]; const chordAm = [ a4, c5, e5, a5 ]; const chordAs = [ as4, d5, f5, as5 ];const chordAs7 = [ as4, d5, f5, gs5 ];const chordAs7M = [ as4, d5, f5, a5 ]; const chordAsm = [ as4, cs5, f5, as5 ]; const chordA5 = [ a4, e5, a5 ,0 ]; const chordAs5 = [ as4, f5, as5 ]; const chordAsus2 = [ a4, b4, e5,a5 ];const chordAsus4 = [ a4, d5, e5,a5 ]; const chordAssus2 = [ as4, c5,f5,as5 ]; const chordAssus4 = [ as4, ds5, f5,as5 ];const chordA7 = [ a4, cs5, e5, g5 ];const chordA7M = [ a4, cs5, e5, gs5 ]; 
// Si e suas variacoes (ADICIONAR NOTAS DIMINUTAS)
const chordB = [ b4, ds5, fs5, b5 ]; const chordBm = [ b4, d5, fs5, b5 ];  const chordB5 = [ b4, fs5, b5 ]; const chordBsus2 = [ b4, cs5, fs5,b5 ];const chordBsus4 = [ b4, e5, fs5,b5 ]; const chordB7 = [ b4, ds5, fs5, a5 ];const chordB7M = [ b4, ds5, fs5, as5 ]; 

//Espelhando a chords com a chordsArr
//const chords = [      'A',    'A#',    'B', 'C',     'C#',   'D',     'D#', 'E', 'F',    'F#',     'G', 'G#' ,     'Am', 'A#m', 'Bm',   'Cm',     'C#m',   'Dm',  'D#m',    'Em',   'Fm',   'F#m',    'Gm',    'G#m',  'A5',  'A#5',     'B5',  'C5',  'C#5',    'D5',    'D#5',   'E5',   'F5',    'F#5',  'G5',   'G#5',    'Asus2', 'A#sus2', 'Bsus2',   'Csus2',  'C#sus2', 'Dsus2',   'D#sus2',    'Esus2',       'Fsus2', 'F#sus2', 'Gsus2', 'G#sus2',      'A7', 'A#7', 'B7', 'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7',                     'G7',     'G#7',     'A7+',    'A#7+',    'B7+',   'C7+',  'C#7+',   'D7+', 'D#7+', 'E7+', 'F7+', 'F#7+', 'G7+',                           'G#7+','Asus4', 'A#sus4', 'Bsus4', 'Csus4', 'C#sus4', 'Dsus4', 'D#sus4', 'Esus4', 'Fsus4', 'F#sus4', 'Gsus4', 'G#sus4'];
  const chordsArr = [ chordA, chordAs,chordB, chordC,chordCs,chordD,chordDs,chordE,chordF,chordFs,chordG,chordGs,chordAm,chordAsm,chordBm,chordCm,chordCsm,chordDm,chordDsm,chordEm,chordFm, chordFsm,chordGm,chordGsm,chordA5,chordAs5,chordB5,chordC5,chordCs5,chordD5,chordDs5,chordE5,chordF5,chordFs5,chordG5,chordGs5,chordAsus2,chordAssus2,chordBsus2,chordCsus2,chordCssus2,chordDsus2,chordDssus2,chordEsus2,chordFsus2,chordFssus2,chordGsus2,chordGssus2,chordA7,chordAs7,chordB7,chordC7,chordCs7,chordD7,chordDs7,chordE7,chordF7,chordFs7,chordG7,chordGs7,chordA7M,chordAs7M,chordB7M,chordC7M,chordCs7M,chordD7M,chordDs7M,chordE7M,chordF7M,chordFs7M,chordG7M,chordGs7M,chordAsus4,chordAssus4,chordBsus4,chordCsus4,chordCssus4,chordDsus4,chordDssus4,chordEsus4,chordFsus4,chordFssus4,chordGsus4,chordGssus4];

function playIt(arrayedChord){
  frequency = arrayedChord[0];
   if (frequency > 0)  stop();
	frequency = arrayedChord[1];
 if (frequency > 0)  stop();
 	frequency = arrayedChord[2];
  if (frequency > 0)  stop();
	frequency = arrayedChord[3];
   if (frequency > 0)  stop();
  };


btn.addEventListener('click', ()=>{
    if (!a.innerHTML) {
      const span = document.createElement('span');
      const chordText = document.querySelector('#chords');
      chordText.appendChild(span);
    //  span.addEventListener('click', () => {
     //   playIt(chordsArr[e]);
     // }); 
     //span.addEventListener('click', () => {//evento de clique no elemento span
    chordsEl.addEventListener("click",function (event) { // Evento de clique no texto
	 let txtcont = event.target.textContent.replace("-", "").trim();
				  // find the index of the chord in the array
    let index = chords.indexOf(txtcont);
    // check if the chord was found in the array
    console.log(index);
	if(index !== -1){
        //play chord from the array
        playIt(chordsArr[index]);
	   }
	});
	//}); 
      span.innerText = chords[e];
	  sortedchord.push(chordsArr[e]);
      i = e;
    } else {
        while (i === e) {
            e = parseInt(Math.random() * chords.length);
        }
      const span = document.createElement('span');
      const chordText = document.querySelector('#chords');
      chordText.appendChild(span);

        span.innerHTML = ' - ' + chords[e];
        sortedchord.push(chordsArr[e]);
	  console.log(sortedchord);
      
		i = e;
    }
}

);


btn2.addEventListener('click', ()=>{ //Limpa a tela e zera o vetor sorteado
	a.innerHTML ="";
	sortedchord.splice(0,sortedchord.length);
	
	
	
});

btn3.addEventListener('click', () => {
  // Criar o oscilador e configurá-lo com a primeira frequência
	context = new AudioContext();
	oscillator = context.createOscillator();
    contextGain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  oscillator.connect(contextGain);
 
	contextGain.connect(context.destination);
  if (chordsArr[e].length > 0) {
    oscillator.frequency.value = chordsArr[e][0];
  }
  // Tocar cada nota do arpejo com um intervalo de tempo entre elas
  if (chordsArr[e].length > 0) {
    setTimeout(() => oscillator.start(0), 0);
  }
  if (chordsArr[e].length > 1) {
    setTimeout(() => oscillator.frequency.value = chordsArr[e][1], 500);
  }
  if (chordsArr[e].length > 2) {
    setTimeout(() => oscillator.frequency.value = chordsArr[e][2], 1000);
  }
  if (chordsArr[e].length > 3) {
    setTimeout(() => oscillator.frequency.value = chordsArr[e][3], 1500);
  }
  // Parar o arpejo após 2 segundos
 // setTimeout(() => oscillator.stop(1), 2000);
 contextGain.gain.linearRampToValueAtTime(
  	0.00001, context.currentTime + x+2
	)

});
  

btn4.addEventListener('click', () => { //Tocar TODOS os acordes sorteados
 
  sortedchord.forEach((s, index) => {
    if (index + 0 < sortedchord.length) {
      setTimeout(() => playIt(sortedchord[index]), index * 2000);
    }
  });
});



btn5.addEventListener('click', () => { //Tocar ultimo acorde sorteado
	 playIt(chordsArr[e]);
})