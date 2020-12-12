<template>
    <div class="intro-container">
        <img src="../../assets/Vector 8.png" class="shape1">
        <img src="../../assets/Vector 7.png" class="shape2">
         <img src="../../assets/Ellipse 12.png" class="shape5">
          <img src="../../assets/Ellipse 13.png" class="shape6">
       
        <img src="" alt="">
        <img src="" alt="">
 
        <div class="sub-container">
             <img src="../../assets/Ellipse3.png" class="shape3">

            <div class="board">
                <img src="../../assets/Ellipse 2.png" class="shape4">
                <slot name="board-side"></slot>
                 <slot name="arrow-down"></slot>
            </div>
            <div class="content">
                <slot name="content-side"></slot>
            </div>
           
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" src="../../styles/Intro.scss" scoped>

</style>