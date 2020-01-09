<template>
    <div class="popup-overlay" :class="{show: bShow}">
        <div class="popup">
            <div class="popup-icon" v-if="icon">
                <img :src="require('@/assets/images/' + icon)">
            </div>
            <div class="popup-text" v-if="text">
                {{text}}
            </div>
            <div class="popup-controls">
                <button class="btn btn-grey btn-grey-glow" @click="hide">
                    Закрыть
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Popup",
        computed: {
            ...mapGetters({
                bShow: 'popup/isShow',
                text: 'popup/getText',
                icon: 'popup/getIcon'
            })
        },
        methods: {
            ...mapActions({
                hide: 'popup/hide'
            })
        }
    }
</script>

<style scoped>
.popup-overlay {
    background-color: rgba(62,62,62, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    visibility: hidden;

}

.popup-overlay.show {
    opacity: 1;
    visibility: visible;
}

.popup-overlay.show .popup {
    transform: scale(1);
}

.popup {
    padding-left: 28px;
    width: 480px;
    padding-right: 28px;
    padding-bottom: 42px;
    padding-top: 32px;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
}

.popup-icon {
    display: flex;
    justify-content: center;
}

.popup-controls {
    justify-content: center;
    display: flex;
    margin-top: 28px;
}

.popup-controls .btn {
    width: 188px;
}

.popup-text {
    color: #4B4B4B;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin-top: 20px;
}
</style>