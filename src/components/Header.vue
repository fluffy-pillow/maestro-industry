<template>
    <header class="header">
        <div class="header-container">
            <div class="header-left">
                <slot name="headerLeft">
                </slot>
            </div>
            <div class="header-center">
                <slot name="headerCenter">
                </slot>
            </div>
            <div class="header-right">
                <slot name="headerRight">
                </slot>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    height: 50px;
    padding-top: 24px;
}

.header-container {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    width: 100%;
}

.header-left {
    display: flex;
    align-items: center;
    flex: 1;
}

.header-center {
    display: flex;
    align-items: center;
    flex: 1;
}

.header-right {
    display: flex;
    align-items: center;
    flex: 1;
}

.header__controls {
    display: flex;
}

.header__controls .btn {
    width: 280px;
    margin-left: 20px;
    font-size: 16px;
    line-height: 14px;
}
</style>