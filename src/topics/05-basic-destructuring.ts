//~ Destructuring of objects

interface AudioVolume {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;

}

const audioPlayer: AudioVolume = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { audioVolume: volume, songDuration: duration,details: detailsAudioPlayer } = audioPlayer;
const { author } = detailsAudioPlayer;


// console.log("Details:" , volume);
// console.log("Duration:" , duration);
// console.log("Duration:" , author);

//! Destructuring of arrays

const [,,trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];
console.error(trunks);

export {}