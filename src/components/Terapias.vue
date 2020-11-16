<template>
    <div id="terapia">   
<!-- PRIMER#row_1 TERAPIA -->  
    <div id="row">
        <div id="row_1">
            <div id="row_texto">
                <h3> La Quiropraxia</h3>
                <p >La quiropraxia esta orientada a evaluar los factores causantes de los desordenes biomecamicos y estructurales de la columna vertebral, siendo capaces de afectar el sistema nervioso y los mecanismos naturales de defensa del cuerpo.</p>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F9.jpg?alt=media&token=c7fca321-69d5-42cc-87fc-95d549b26c6d" id="row_img">
       </div>
    </div>

<!-- SEGUNDA TERAPIA -->
 <div id="row">
        <div id="row_1">
            <div id="row_texto">
                <h3> La Quiropraxia</h3>
                <p >La quiropraxia esta orientada a evaluar los factores causantes de los desordenes biomecamicos y estructurales de la columna vertebral, siendo capaces de afectar el sistema nervioso y los mecanismos naturales de defensa del cuerpo.</p>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F9.jpg?alt=media&token=c7fca321-69d5-42cc-87fc-95d549b26c6d" id="row_img">
       </div>
    </div>
<!-- TERCERA TERAPIA -->
 <div id="row">
        <div id="row_1">
            <div id="row_texto">
                <h3> La Quiropraxia</h3>
                <p >La quiropraxia esta orientada a evaluar los factores causantes de los desordenes biomecamicos y estructurales de la columna vertebral, siendo capaces de afectar el sistema nervioso y los mecanismos naturales de defensa del cuerpo.</p>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F9.jpg?alt=media&token=c7fca321-69d5-42cc-87fc-95d549b26c6d" id="row_img">
       </div>
    </div>
<!-- SCUARTA TERAPIA -->
 <div id="row">
        <div id="row_1">
            <div id="row_texto">
                <h3> La Quiropraxia</h3>
                <p >La quiropraxia esta orientada a evaluar los factores causantes de los desordenes biomecamicos y estructurales de la columna vertebral, siendo capaces de afectar el sistema nervioso y los mecanismos naturales de defensa del cuerpo.</p>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F9.jpg?alt=media&token=c7fca321-69d5-42cc-87fc-95d549b26c6d" id="row_img">
       </div>
    </div>
<!-- QUINTA TERAPIA -->
 <div id="row">
        <div id="row_1">
            <div id="row_texto">
                <h3> La Quiropraxia</h3>
                <p >La quiropraxia esta orientada a evaluar los factores causantes de los desordenes biomecamicos y estructurales de la columna vertebral, siendo capaces de afectar el sistema nervioso y los mecanismos naturales de defensa del cuerpo.</p>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/paginawebmhi.appspot.com/o/img%2F9.jpg?alt=media&token=c7fca321-69d5-42cc-87fc-95d549b26c6d" id="row_img">
       </div>
    </div>
<!-- SEXTA TERAPIA -->

<!-- SEPTIMA TERAPIA -->

<!-- OCTAVA TERAPIA -->

<!-- NOVENA TERAPIA -->

<!-- DECIMA PRIMERA TERAPIA -->

<!-- DECIMA SEGUNDA TERAPIA -->

<!-- DECIMA TERCERA TERAPIA -->

<!-- DECIMA CUARTA TERAPIA -->


    </div>
</template>
<script>
export default {
    name:'Terapias'
}
</script>
<style lang="scss">
#terapia{
    background-color: rgb(248, 182, 168, 0.5) ;
    display: flex;
    justify-content: center;
    flex-direction:row;
    flex-wrap:wrap;
    padding: 20px 0px 20px 0px
}
p{
    font-size: 14px;
    margin: auto;
}

h3{
    font-size: 30px;
    text-align: center;
    padding: 0px 0px 15px 0px;
}

#row_img{
    width: 450px;
    padding: 40px 0px 40px 40px;
    margin: auto;
    border-radius: 20px;
}

#row{
    padding: 10px;
    width: 33%;
}

#row_texto1{
    margin: auto;
    padding: 20px 40px 20px 0px; 
}
#row_texto{
   padding: 40px;text-align: justify
}
#row {
  display: flex;
  justify-content: center;
    flex-direction:row;
    flex-wrap:wrap;
    
}

#row #row_1 {
  position: relative;
  display: block;
  overflow: hidden;
  
}

#row #row_1 #row_img {
  transition: transform 0.4s ease-out;
}

#row #row_1 #row_img {
  display: inline-block;
  padding: 10px;
}

#row #row_1 #row_texto {
  position: absolute;
  transform: translateY(-100%);
}

#row i {
  font-size: 30px;
}

#row #row_1:hover #row_img {
  transform: translateY(100%);
}

#row #row_1:hover #row_texto,
#row[data-animation] #row_1:hover #row_texto {
  transform: none;
}

/* ANIMATIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
#row[data-animation="to-top"] #row_1 #row_texto {
  transform: translateY(100%);
}


@media screen and (max-width:600px){
    #terapia{
    padding: 10px 0px 10px 0px
}
p{
    font-size: 12px;
    margin: auto;
}
h3{
    font-size: 20px;
    text-align: center;
    padding: 0px 0px 8px 0px;
}
#row_img{
    width: 100%;
    margin: auto;
    border-radius: 20px;
}
#row{
    width: 100%;
}

}
@media (min-width:601px) and (max-width:900px){
    #terapia{
    padding: 10px 0px 10px 0px
}
p{
    font-size: 12px;
    margin: auto;
}
h3{
    font-size: 20px;
    text-align: center;
    padding: 0px 0px 8px 0px;
}
#row_img{
    width: 100%;
    margin: auto;
    border-radius: 20px;
}
#row{
    width: 50%;
}
#row_texto{
    padding: 20px;
    
}
}
@media (min-width:901px) and (max-width:1100px){
    #terapia{
    padding: 10px 0px 10px 0px
}
p{
    font-size: 16px;
    margin: auto;
}
h3{
    font-size: 25px;
    text-align: center;
    padding: 0px 0px 8px 0px;
}
#row_img{
    width: 100%;
    margin: auto;
    border-radius: 20px;
}
#row{
    width: 50%;
}
#row_texto{
    padding: 20px;
    
}
}
    
</style>