<template>
    <intro>
        <board-view slot="board-side"></board-view>

        <div class="congrat-content" slot="content-side">
           <img src="../assets/congrat.png" class="congrat-image">
           <p class="congrat-text">
               {{username}}, you answered {{answered}}/20 questions in {{timeSpent}} minute(s) and you score {{score}}%.
            </p>
           <div class="close-button">
               <img src="../assets/cancel.png" class="close-icon">
               <p class="close-text" v-on:click="close">Close</p>
            </div>
        </div>  
    </intro>
</template>

<script>
import Intro from './reusable/Intro'
import boardView from './reusable/boardView'
import {bus} from '../main'
export default {
    components: {
        "intro": Intro,
        "board-view": boardView
    },
    data(){
        return{
           score: this.$route.params.score,
           timeSpent: this.$route.params.time,
           answered: this.$route.params.answered,
           username: this.$route.params.username
        }
    },
    created(){
        localStorage.clear()
    },
    methods: {
        close: function(){
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss" src="../styles/CongratPage.scss" scoped>

</style>