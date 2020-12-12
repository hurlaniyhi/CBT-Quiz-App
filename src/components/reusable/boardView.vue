<template>
        <div class="slot-board">
            <img src="../../assets/nues 1.png" class="board-user">
            <p class="faculty">Faculty of Engineering And Technology</p>
            <p class="topic-button">QUIZ APP</p>
            <img src="../../assets/Vector.png" class="shape7" slot="arrow-down">
            <img src="../../assets/Vector 5.png" class="shape8">
            <img src="../../assets/Vector 6.png" class="shape9">
            <img src="../../assets/Vector 3.png" class="shape10">
            <img src="../../assets/Vector 4.png" class="shape11">
            <img src="../../assets/Vector 2.png" class="shape12">
        </div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.slot-board{
    width: 100%;
    height: 100%;
    padding-top: 3.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 700px){
       //display: block;
    }
}
.board-user{
    width: 17rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 6.5rem;
    
    @media (max-width: 700px){
        margin-bottom: 1rem;
        width: 12rem;
    }
}
.faculty{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 4.2rem;
    text-align: center;
    color: #FFFFFF;
    padding-bottom: 2.5rem;

    @media (max-width: 700px){
        padding: 0 2rem;
    }
}
.topic-button{
  
    background: #612D6B;
    width: 20rem;
    border-radius: 100px;
    padding: .8rem 1.5rem;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 3.7rem;
    text-align: center;
    color: #FFD731;
    margin-bottom: 3rem;

     @media (max-width: 700px){
        padding: 0;
        margin: 0;
        //background: none;
    }
}
.shape7{
    width: 1.2rem;
    position: absolute;
    bottom: 2.5rem;
    right: .2rem;
    display: none
}
.shape8{
    width: 3.5rem;
    position: absolute;
    top: 3rem;
    right: -1.5rem;
}
.shape9{
    width: 3.5rem;
    position: absolute;
    top: 20rem;
    right: 1.5rem;
}
.shape10{
    width: 3.5rem;
    position: absolute;
    top: 25rem;
    right: 12rem;
}
.shape11{
    width: 3.5rem;
    position: absolute;
    top: 20rem;
    left: 1.5rem;
}
.shape12{
    width: 2rem;
    position: absolute;
    top: 6rem;
    left: -.8rem;
}
</style>