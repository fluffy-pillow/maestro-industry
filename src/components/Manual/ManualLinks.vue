<template>
    <div class="manual-links">
        <router-link class="manual-link link"
            v-for="(link, key) of links"
            :key="key"
            :to="link.to"
            :class="link.class"
        >
            <div class="manual-link__top">
                <div class="manual-link__icon" :class="link.iconClass">
                </div>
                <div class="manual-link__title">
                    {{link.title}}
                </div>
            </div>
            <div class="manual-link__bottom">
                <div class="manual-link__desc">
                    {{link.desc}}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ManualLinks",
        props: {
            links: Array
        }
    }
</script>

<style scoped>
.manual-links {
    margin-top: 60px;
}

.manual-link {
    padding: 20px;
    display: flex;
    margin-top: 20px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 4px;
    flex-direction: column;
}

.manual-link__blue {
    background-color: #4068EC;
}

.manual-link__purple {
    background-color: #6E3AC1;
}

.manual-link__top {
    display: flex;
    align-items: center;
}

.manual-link__desc {
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
}

.manual-link__bottom {
    margin-top: 8px;
}

.manual-link__icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 12px;
    background-repeat: no-repeat;
    background-position: center center;
}

.manual-link__icon-instruction {
    background-image: url('../../assets/images/instruction.svg');
}

.manual-link__icon-alert {
    background-image: url('../../assets/images/alert.svg');
}

.manual-link__title {
    margin-left: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
}
</style>