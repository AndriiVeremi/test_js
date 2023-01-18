// // методи обєкта

// const playlist = {
//     name: "asd",
//     rating: 5,
//     tracks: ['aaa1', 'ddd2', 'sss2'],
//     tracksCount: 3,
//     getName: function () { // старий запис це метод обєкту
//     getName() {                 // це метод обєкту, вибористовуються для роботи з властивостями обєкта
//         console.log('Ага це getName');
//     }
// };

// playlist.getName();


const playlist = {
    name: "asd",
    rating: 5,
    tracks: ['aaa1', 'ddd2', 'sss2'],
    tracksCount: 3,   
    
    changeName(newName) {                
        this.name = newName; // ( this ) це те що його визвало(імя обєкта) playlist.changeName
    }
    
    addTrack(track) {
        this.tracks.push(track); // додав новий трек
        this.tracksCount = this.tracks.length; // (старий варіант) обновив кількість треків в tracksCount
    }
    getTrackCount() {
        return this.tracks.length; // обновив кількість треків в tracksCount
    }
    
    udateRating(newRating) {
        this.rating = newRating;
    }
};

playlist.changeName('aassdd');
playlist.addTrack('новий трек');
playlist.udateRating(7);






function countProps(object) {
    // Change code below this line
    let propCount = 0;
    let obKey = Object.keys(object)

    for (const key of obKey) {
        if (object.hasOwnProperty(key)) {
            propCount += 1;
        }
    }

    return propCount;
    // Change code above this line
}
