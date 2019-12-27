<template>
    <div class="aside-menu">
        <router-link class="aside-menu__link link"
           :class="'aside-menu__link--' + linksColor"
           v-for="(link, key) of links"
           :key="key"
           :to="link.to"
        >
            {{link.title}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "AsideMenu",
        props: {
            links: Array,
            linksColor: {
                type: String,
                default: 'blue'
            }
        }
    }
</script>

<style scoped>
.aside-menu__link {
    padding: 20px;
    display: block;
    margin-top: 10px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 4px;
    border-top-left-radius: 12px;
    font-size: 16px;
    line-height: 24px;
    margin-left: 10px;
    margin-right: 4px;
    position: relative;

}

.aside-menu__link.router-link-active {
    background: #EDE7E3;
    color: #000000;
}

.aside-menu__link.router-link-active:before {
    content: "";
    position: absolute;
    height: 40px;
    width: 4px;
    background: #4068EC;
    border-radius: 100px;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
}

.aside-menu__link--blue {
    background: #4068EC;
    color: #ffffff;
}

.aside-menu__link--orange {
    background: #FBBD1C;
    color: #000000;
}
</style>