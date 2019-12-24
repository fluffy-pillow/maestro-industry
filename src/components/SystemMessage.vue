<template>
    <div class="system-message-wrapper" :class="{show: bShow}">
        <div class="system-message" @click="close" :class="type">
            <div class="text">
                <strong v-if="type === 'error'">Ошибка!</strong> {{message}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "SystemMessage",
        data () {
            return  {
                timerId: null
            }
        },
        methods: {
            close () {
                if (this.timerId) clearTimeout(this.timerId)
                this.hide()
            },
            ...mapActions({
                hide: 'systemMessage/hide'
            })
        },
        computed: {
            ...mapGetters({
                bShow: 'systemMessage/isShow',
                message: 'systemMessage/getMessage',
                type: 'systemMessage/getType',
                duration: 'systemMessage/getDuration',
            })
        },
        watch: {
            bShow: function (newValue) {
                if (newValue === true) {
                    if (this.timerId) clearTimeout(this.timerId)
                    this.timerId = setTimeout(() => {
                        this.close()
                    }, this.duration)
                }
            }
        }
    }
</script>

<style scoped>
    .system-message-wrapper {
        display: flex;
        position: absolute;
        z-index: 99999999;
        width: 100%;
        transform: translateY(-30vh);
        margin-top: constant(safe-area-inset-top);
        margin-top: env(safe-area-inset-top);
        transition: transform 0.2s ease-in-out;
        justify-content: center;
    }
    .system-message {
        border-radius: 16px;
        width: 780px;
        margin-left: 16px;
        margin-right: 16px;
    }
    .system-message.error {
        background-color: #FC5A5A;
        box-shadow: 0px 4px 20px rgba(252, 90, 90, 0.25);
    }
    .system-message.success {
        background: #2EBB83;
        box-shadow: 0px 4px 20px rgba(46, 187, 131, 0.25);
    }
    .text {
        padding: 20px;
        text-align: center;
        color: #ffffff;
        font-size: 16px;
        line-height: 20px;
    }
    .system-message-wrapper.show {
        transform: translateY(8px);
    }
</style>