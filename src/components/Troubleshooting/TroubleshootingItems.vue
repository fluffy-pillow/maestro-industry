<template>
    <div class="troubleshooting-items">
        <div class="troubleshooting-item"
             v-for="(item, key) of computedItems"
             :key="key"
             :class="{'troubleshooting-item-completed': key < instructionStepId - 1}"
        >
            <div class="troubleshooting-item__title">
                {{item.title}}
            </div>
            <video class="troubleshooting-item__video"
                   v-if="item.video"
                   :src="item.video"
                   width="100%" height="100%" controls="controls"
                   type="video/mp4"
            >
            </video>
            <p class="troubleshooting-item__text" v-if="item.text">
                {{item.text}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TroubleshootingItems",
        props: {
            items: Array,
            instructionStepId: Number,
            lastStep: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            computedItems () {
                let count = (!this.lastStep) ? this.instructionStepId : this.items.length
                let ret = []
                for (let i = 0; i < count; i++) {
                    ret.push(this.items[i])
                }
                return ret
            }
        },
    }
</script>

<style scoped>
    .troubleshooting-item {
        margin-bottom: 16px;
        position: relative;
    }

    .troubleshooting-item.troubleshooting-item-completed:before {
        background-color: #3DD498;
        background-image: url(../../assets/images/completed.svg);
    }

    .troubleshooting-item:before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #FBBD1C;
        top: 9px;
        left: -32px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .troubleshooting-item:first-child {
        margin-top: 12px;
    }

    .troubleshooting-item__title {
        color: #4B4B4B;
        font-size: 16px;
        line-height: 32px;
        font-weight: 500;
    }
</style>