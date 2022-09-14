console.log('JS OK!');


const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);


const app = new Vue({
    el: '#app',
    data: {
        activeIndex: 0,
        slides,
        IntervalId: undefined,
    },
    methods: {
        showPreviousImage: function () {
            console.log('showPreviousImage');
            if (this.activeIndex > 0) {
                this.activeIndex--;
            } else {
                this.activeIndex = this.slides.length - 1;
            }
        },
        showNextImage() {
            console.log('showNextImage');
            if (this.activeIndex === this.slides.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },

        selectImage(newActiveIndex) {
            console.log('Indice immagine cliccata: ', newActiveIndex);
            console.log('Indice immagine attiva: ', this.activeIndex);

            this.activeIndex = newActiveIndex;
        },
        createInterval() {
            this.IntervalId = setInterval(this.showNextImage, 3000)
        },
        deleteInterval() {
            if (this.IntervalId) {
                clearInterval(this.IntervalId)
            }
        },
        onNextClick() {
            this.showNextImage();
            this.deleteInterval();
            this.createInterval();
        },
        onPreviousClick() {
            this.showPreviousImage();
            this.deleteInterval();
            this.createInterval();
        },

    },
    /*
    created: function () {
        console.log('Created');
    },
    */
    mounted() {
        console.log('Mounted!');
        this.createInterval();
    }


})
