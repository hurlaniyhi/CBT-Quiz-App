<template>
   <intro>
       <div class="quiz-board" slot="board-side">
           <div class="logo-label">
               <img src="../assets/nues 1.png" class="dept-logo">
               <div class="dept-label"><p>Faculty Of Engineering And Technology</p></div>
            </div>
            <div class="test-info">
                <p class="start-time">Start Time :: <span style="color: #FFDF5A; font-weight: 600">{{startTime}}</span></p>
                <p class="stop-time">Start Time :: <span style="color: #FFDF5A; font-weight: 600">{{stopTime}}</span></p>
                <p class="test-course">COMPUTER PROGRAMING</p>
                <p class="test-type">HTML AND JAVASCRIPT</p>
                <p class="end-button" @click="end">End Test</p>
            </div>
       </div>
       <div slot="content-side" class="quiz-question">
            <p class="time-left-text">Time-left: <span class="time-left-minutes">{{timeLeft}} min(s)</span></p>
            <div class="question-count">
                <p style="font-size: 2.5rem; padding-right: 2rem; color: rgba(0, 0, 0, 0.4); font-weight: 600">Question</p>
                <p style="font-size: 1.8rem; font-weight: 500">
                   <span style="color: #91519D; padding-bottom: 6rem; font-weight: 600; font-size: 2rem">{{count}}</span>
                   <span style="color: #C582D5; font-weight: 600">/</span>20</p>
            </div>
            <p class="question-instruction">
               Choose any of the options that seems to be the answer to the current question asked.
            </p>
            <p style="font-size: 2rem; font-weight: bold; align-self: flex-start; margin: 0">{{count}}.</p>
            
            <p class="question-box">{{currentQuestion.question}}</p>
            <div class="option-box">
                <button  v-bind:class="{eachOption: true, first: first}"  @click="verifyAnswer(currentQuestion.options.a, 'a')">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.a}}
                </button>
                <button v-bind:class="{eachOption: true, second: second}" @click="verifyAnswer(currentQuestion.options.b, 'b')">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.b}}
                </button>
                <button v-bind:class="{eachOption: true, third: third}" @click="verifyAnswer(currentQuestion.options.c, 'c')">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.c}}
                </button>
                <button v-bind:class="{eachOption: true, fourth: fourth}" @click="verifyAnswer(currentQuestion.options.d, 'd')">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.d}}
                </button>
            </div>

            <div class="navi-question">
                <button class="navi-button prev-button" @click="next(-1)" ref="prev">Prev</button>
                <button class="navi-button" @click="next(1)" ref="next">Next</button>
            </div>

            <div class="number-container">
                <div class="each-number dir-arrow" @click="toggleNumbers('prev')">
                    <chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
                </div>

                <div class="each-number" :key="question.No" v-for="question in showNumbers">
                    <p v-if="question.chosen" class="solved-number">{{question.No}}</p>
                    <p v-else>{{question.No}}</p>
                </div>

                <div class="each-number dir-arrow" @click="toggleNumbers('next')">
                    <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                </div>
            </div>
       </div>
   </intro>
</template>

<script>
import Intro from './reusable/Intro'
import boardView from './reusable/boardView'
import { mainQuestions } from '../functions/mainQuestions'
import {answeredQuestions, quizTime} from '../functions/otherHelpers'
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'

export default {
    components: {
        "intro": Intro,
        'chevron-left-icon': ChevronLeftIcon,
        'chevron-right-icon': ChevronRightIcon
    },
    created(){
        this.currentQuestion = this.userQuestions[0]
        this.showNumbers = [...this.userQuestions.slice(0, 11)]
        //alert(quizTime().stopTime)
        this.timeData()
    },
    data(){
        return{
            userQuestions: mainQuestions(),
            currentQuestion: {},
            count: 1,
            score: 0,
            nav: "prev",
            showNumbers: [],
            startTime: quizTime().startTime,
            stopTime: quizTime().stopTime,
            timeLeft: 20,
            timer: null,
            col: true,
            first: false, 
            second: false, 
            third: false, 
            fourth: false,
            user: this.$route.params.username
           
        }
    },
    methods: {
        timeData: function() {
            this.timer = setInterval(() => {
                this.timeLeft = this.timeLeft - 1
                if(this.timeLeft === 0){
                    clearInterval(this.timer)
                    this.end()
                }
            }, 60000)
	    },
        toggleNumbers: function(check){
            if(check === "next"){
                this.nav = "next"
                this.showNumbers = [...this.userQuestions.slice(11, this.userQuestions.length)]
            }
            else if(check === "prev"){
                this.nav = "prev"
                this.showNumbers = [...this.userQuestions.slice(0, 11)]
            }
        },
        end: function(){
            clearInterval(this.timer)
            localStorage.setItem("token2", "ridwan1234")
            var answered = answeredQuestions(this.userQuestions)
            var userScore = Math.trunc((this.score/200) * 100)
            var timeSpent = 20 - this.timeLeft
            this.$router.push(`/congrats/${this.user}/${userScore}/${timeSpent}/${answered}`)
        },
        selectedOption: function(){
           
            this.first = false
            this.second = false
            this.third = false
            this.fourth = false
            
            if(this.userQuestions[this.count - 1].optionLetter == "a"){
                this.first = true 
            }
            else if(this.userQuestions[this.count - 1].optionLetter == "b"){
                this.second = true 
            }
            else if(this.userQuestions[this.count - 1].optionLetter == "c"){
                this.third = true 
            }
            else if(this.userQuestions[this.count - 1].optionLetter == "d"){
                this.fourth = true 
            }
        },
        next: function(info){
            this.count = this.count + info
            this.currentQuestion = this.userQuestions[this.count-1]

            if(this.count === this.userQuestions.length){
                this.$refs.next.style.visibility = "hidden"
            }
            else{
                this.$refs.next.style.visibility = "visible"
            }

            if(this.count === 1){
                this.$refs.prev.style.visibility = "hidden"
            }
            else{
                this.$refs.prev.style.visibility = "visible"
            }

            if(this.count > 11){
                this.toggleNumbers("next")
            }
            else{
                this.toggleNumbers("prev")
            }
            // SELECTED OPTION SCOPE
            this.selectedOption()
            
        },
        verifyAnswer: function(option, info){  
            if(this.userQuestions[this.count-1].correct === "yes"){
                this.score = this.score - 10
            }

            if(this.userQuestions[this.count-1].answer === option){
                this.score = this.score + 10
                this.userQuestions[this.count - 1] = {...this.userQuestions[this.count - 1], correct: "yes", chosen: true, optionLetter: info}
            }
            else{
                this.userQuestions[this.count - 1] = {...this.userQuestions[this.count - 1], correct: "no", chosen: true, optionLetter: info}
            }
            
            // UPDATE SOLVED NUMBERS
            if(this.nav === "next"){
                this.showNumbers = [...this.userQuestions.slice(11, this.userQuestions.length)]
            }
            else if(this.nav === "prev"){
                this.showNumbers = [...this.userQuestions.slice(0, 11)]
            }
            
            // SELECTED OPTION SCOPE
             this.selectedOption() 
        },
       
    },
    destroyed(){
        localStorage.setItem("token1", "")
    }
  
}
</script>

<style lang="scss" src="../styles/QuizPage.scss" scoped>

</style>