<template>
    <aside class="aside">
        <div class="aside-content scrollable-y">
            <div class="aside-head">
                <h3>
                    {{title}}
                </h3>
            </div>
            <div class="aside-body">
                <slot></slot>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "Aside",
        props: {
            title: String
        }
    }
</script>

<style scoped>
.aside-head h3 {
    color: #ffffff;
}

.aside {
    width: 384px;
    min-width: 384px;
    display: flex;
}

.aside-content {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    padding-bottom: 20px;
}

.aside-body {
    margin-top: 20px;
}

.aside .desc-title {
    margin-top: 20px;
    opacity: 0.5;
    color: #ffffff;
}

.aside .desc {
    margin-top: 20px;
    color: #ffffff;
}
</style>