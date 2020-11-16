<template>
    <div id="Navbar">
        <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/img/Logo.jpg"
                    alt="Logo"
                    id="Logo"
                >
            </b-navbar-item>
        </template>
        <template slot="end" id="Navbar_right">
          <b-navbar-item href="#">
                SOBRE MI
            </b-navbar-item>
            <b-navbar-item href="#">
                TERAPIAS
            </b-navbar-item>
            <b-navbar-item href="#">
               REFERENCIAS
            </b-navbar-item>
            <b-navbar-item href="#">
                CONTACTO
            </b-navbar-item>
        </template>
    </b-navbar>  
    </div>
</template>
<script>
export default {
    name:'Navbar'
}
</script>

<style lang="scss" >
#Logo{
    width: 120px;
    
}
#Navbar_right{
    margin: auto auto;
}
#Navbar{
    background-color: transparent;
}
.navbar-item img{
    max-height: none!important;
    text-align: center;
}
.navbar-burger{
    height: 8rem!important;
    padding-right: 30px;
}
.navbar-item{
   text-align: center; 
   font-family: 'Helvetica 65 Medium Bold', sans-serif;
   color: #333333;
   letter-spacing: 2px;
}
.navbar{
    position: static;
}
@media screen and (min-width:1023px){
    .navbar-item:last-of-type{
    padding-right:40px ;
}}

@media screen and (max-width:1023px)
{a.navbar-item:hover{
    background-color:#4DAFFF ;
    color: white;
}}
a:hover{
    color: #4DAFFF;
}
.navbar-burger:hover{
    background-color: white;
}

@font-face {
font-family: 'Helvetica 65 Medium Bold';
font-style: normal;
font-weight: normal;
src: local('Helvetica 65 Medium Bold'), url('/src/assets/fonts/Helvetica85Heavy_22449.ttf') ;
}
</style>