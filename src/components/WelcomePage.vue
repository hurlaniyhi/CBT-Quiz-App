<template>
    <intro>
        <board-view slot="board-side"></board-view>

        <div class="slot-content" slot="content-side">
            <div class="user-block">
               <img src="../assets/user.png" class="user-icon">
               <p class="greeting">Welcome,</p>
               <p class="greeting">Please sign in to start your test</p>
           </div>
           <div class="instructions" ref="cancelled" @click="hideMe">
               <div class="cancel-instruction"><p class="cancel-text">x</p></div>
               <p class="instruction-note">Read Carefully !!!</p>
               <ul class="instruction-list">
                   <li class="each-list">There are 2 categories and a total of 20 questions to be 
                       answered. Please do not click submit or end test unless you are sure of submitting.
                    </li>
                    <li class="each-list">Your examination ID is <span style="color: #8A4B95">{{matricNo}}</span></li>
                    <li class="each-list">Any form of malpractice would render your test nullified, stick to the rules. GOOD LUCK !</li>
                    <li class="each-list">Exam duration :: <span style="font-weight: 600">20 minutes</span></li>
               </ul>
           </div>
            <input type="text" class="login-input" v-model="name" placeholder="Enter name" required>
            <input type="text" class="login-input" v-model="matricNo" placeholder="Enter matric No e.g MSQ100L20" required>
            <p class="start-button" @click="navigate">Start Test</p>
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
            instruction: false,
            name: "",
            matricNo: ""

        }
    },
    methods: {
        navigate: function(){
            if(this.instruction === true){
                this.instruction = false

                if(this.name){
                    localStorage.setItem("token1", "Rid12345")
                    this.$router.push(`instruction/${this.name}`)
                }
                else{
                    this.$refs.cancelled.style.display = "none"
                    alert("Kindly enter your name")
                    //this.$router.push(`instruction/Anonymous`)
                }
            }
            else{
                this.$refs.cancelled.style.display = "block"
                this.instruction = true
            }
        },
        hideMe: function(){
            this.instruction = false
            this.$refs.cancelled.style.display = "none"
        }
    }, 
   
}
</script>

<style lang="scss" src="../styles/WelcomePage.scss" scoped>

</style>