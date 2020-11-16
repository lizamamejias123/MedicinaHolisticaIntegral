<template>
    <div>
       <Navbar></Navbar>
       <Hero></Hero>
       <SobreMi></SobreMi>
       <CarruselTerapias></CarruselTerapias>
       <Terapias></Terapias>
       <Referencias></Referencias>
       <Contacto></Contacto>
       <Footer></Footer>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import SobreMi from '@/components/SobreMi.vue'
import CarruselTerapias from '@/components/CarruselTerapias.vue'
import Terapias from '@/components/Terapias.vue'
import axios from "axios";
export default {
    name:'SinglePage',
    components:{
        Navbar,Hero,SobreMi,CarruselTerapias,Terapias,
    },
}
</script>
<style lang="scss">
h1{
  font-family: 'Helvetica 45 Light Regular', sans-serif!important;
  letter-spacing: 2px;
  font-size: 40px;
}

@font-face {
font-family: 'Helvetica 45 Light Regular';
font-style: normal;
font-weight: normal;
src: local('Helvetica 45 Light Regular'), url('/src/assets/fonts/Helvetica45Light_22437.woff') format('woff');
}
</style>