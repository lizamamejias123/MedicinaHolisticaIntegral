 <template>
 <div>
     <!-- Carousel de terapias -->
     <h1>TERAPIAS</h1>
    <b-carousel
    class="container"
    id="carrusel"
        :autoplay="false"
        with-carousel-list
        :indicator="false"
        :overlay="gallery">
        <b-carousel-item v-for="(item, i) in items" :key="i">
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
        <template slot="list" slot-scope="props">
            <b-carousel-list
                v-model="props.active"
                :data="items"
                :config="al"
                :repeat="repeat"
                :refresh="gallery"
                @switch="props.switch($event, false)"
                as-indicator />
        </template>
    </b-carousel>
    </div>
</template> 

<script>
export default {
    name:'',
     data() {
        return {
            gallery: false,
            repeat: true,
            al: {
                itemsToShow: 2,
                breakpoints: {
                    300: {
                        itemsToShow: 2
                    },
                    768: {
                        itemsToShow: 3
                    },
                    960: {
                        itemsToShow: 4
                    }
                }
            },
            items: [
                {
                    title: 'Slide 1',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F9.jpg?alt=media&token=c7fca321-69d5-42cc-87fc-95d549b26c6d',
                    texto:'La quiropraxia esta orientada a evaluar los factores causantes de los desordenes biomecamicos y estructurales de la columna vertebral, siendo capaces de afectar el sistema nervioso y los mecanismos naturales de defensa del cuerpo.'
                },
                {
                    title: 'Slide 2',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F2.jpg?alt=media&token=ea5ba87f-dc21-43d4-a48c-4d70ea00fa70'
                },
                {
                    title: 'Slide 3',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F3.jpg?alt=media&token=cde64358-1b16-4f36-837e-0a8430313d82'
                },
                {
                    title: 'Slide 4',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F4.jpg?alt=media&token=3896ca68-5d87-4fc6-afc4-1e7effd2ba92'
                },
                {
                    title: 'Slide 5',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F5.jpg?alt=media&token=6c65ed93-785f-4623-8a2c-9a468d306123'
                },
                {
                    title: 'Slide 6',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F6.jpg?alt=media&token=fb3cd71a-3171-4d8d-84df-9ca3b6ca87fa'
                },
                {
                    title: 'Slide 7',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F7.jpg?alt=media&token=4b3d2c7d-7061-40a2-8371-a36820715b8b'
                },
                {
                    title: 'Slide 8',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F8.jpg?alt=media&token=f9f677b1-73b4-4b96-a54e-1cb9e8a58474'
                },
                {
                    title: 'Slide 9',
                     image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F1.jpg?alt=media&token=2d489a23-11af-4800-9b9a-14d8a2fb5570' },
                {
                    title: 'Slide 10',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F10.jpg?alt=media&token=a24ab4b7-4f89-4497-9d0d-4c2e9d24c4f2'
                },
                {
                    title: 'Slide 11',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F11.jpg?alt=media&token=d94d5748-f0e3-4993-8681-803d374e01c1'
                },
                {
                    title: 'Slide 12',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F12.jpg?alt=media&token=f5f931ed-0ac4-48fe-bae7-eeadc7cbe3e7'
                },
                {
                    title: 'Slide 13',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F13.jpg?alt=media&token=8e9a66b6-c347-4f21-b472-e5ce5e800e99'
                },
                {
                    title: 'Slide 14',
                    image: 'https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F14.jpg?alt=media&token=821d0021-07d9-43f8-b097-134e3cf3cb64'
                }
            ]
        }
    },
    methods: {
        switchGallery(value) {
            this.gallery = value
            if (value) {
                return document.documentElement.classList.add('is-clipped')
            } else {
                return document.documentElement.classList.remove('is-clipped')
            }
        }
    }

}
</script>
<style lang="scss" >
#carrusel{
    padding:20px 40px 40px 40px ; 
}
#carousel_text{
    width: 80%;
    margin: auto;
    font-size: 20px;
}

@media screen and (max-width:600px){
    #carrusel{
    padding: 15px 40px ;
}}
h1{
  font-family: 'Helvetica 45 Light Regular', sans-serif;
  letter-spacing: 2px;
  font-size: 40px;
  text-align: center;
  padding: 40PX ;
}

@font-face {
font-family: 'Helvetica 45 Light Regular';
font-style: normal;
font-weight: normal;
src: local('Helvetica 45 Light Regular'), url('/src/assets/fonts/Helvetica45Light_22437.woff') format('woff');
}
    
</style>