class Video {
    1//
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }


    2//
    watch() {
        console.log('${this.uploader} watched all ${this.time} of ${this.title}!')
    }

}


3//

const videoTwo = new Video('The Godfather, Scorsze, 60')
videoTwo.watch()


4//
const videoThree = new Video('The Revenanat, D-caprio, 90')

5//

const videoData = [
    ['a', 'h', 1],
    ['b', 'i', 2],
    ['c', 'j', 3],
    ['d', 'k', 4],
    ['e', 'l', 5],
]

6//

for (const data of videoData) {
    console.log(new Video(...data))
}
