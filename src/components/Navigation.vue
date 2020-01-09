<template>
    <v-ons-navigator
                     :page-stack="pageStack"
                     :pop-page="goBack"
    ></v-ons-navigator>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Navigation",
        methods: {
            goBack() {
                this.$router.push(this.$route.matched[this.$route.matched.length - 2].path)
            }
        },
        computed: {
            ...mapGetters({
                pageStack: 'router/getPageStack'
            })
        },
        created() {
            // TODO: редирект на нужную страницу в зависимости от токена
//            this.$router.push('/login').catch(err => {})
            this.$router.push('/items').catch(err => {})
        }
    }
</script>

<style scoped>
</style>