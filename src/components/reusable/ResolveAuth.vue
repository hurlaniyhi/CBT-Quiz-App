<template>
    <div></div>
</template>

<script>
export default {
    created(){
        this.resolveAuth()
    },
    data(){
        return{
            user: this.$route.params.username
        }
    },
    methods: {
        resolveAuth: function(){
            this.$router.push(`instruction/${this.user}`) 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>