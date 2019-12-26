<template>
    <v-ons-page class="items-page">
        <div class="grid">
            <Header>
                <Logo slot="headerCenter"></Logo>
            </Header>
            <main class="main-container">
                <div class="grid-item__row">
                    <div class="grid-item__col">
                        <div class="portlet">
                            <div class="portlet-container scrollable-y scrollable-hide-scroll">
                                <div class="portlet-header">
                                    <h2>Выберите оборудование</h2>
                                </div>
                                <div class="portlet-body">
                                    <section class="portlet-section">
                                        <div class="portlet-section-header">
                                            <h3>Оборудование для обработки листового металла</h3>
                                        </div>
                                        <div class="portlet-section-body">
                                            <div class="flexible-table flexible-table__horizontal-items">
                                                <div class="flexible-table-content">
                                                    <div class="flexible-table__col" v-for="(item, key) of items" :key="key">
                                                        <div class="flexible-table__col-content">
                                                            <div class="flexible-table__image">
                                                                <img :src="require('@/assets/uploads/item.png')">
                                                            </div>
                                                            <div class="flexible-table__title">
                                                                {{item.title}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="portlet-section">
                                        <div class="portlet-section-header">
                                            <h3>Оборудование для обработки металла резанием</h3>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </v-ons-page>
</template>

<script>
    import Header from "@/components/Header";
    import Logo from "@/components/Logo";
    export default {
        name: "Items",
        components: {Logo, Header},
        data () {
            return {
                items: [
                    {
                        title: 'Координатно-пробивные прессы'
                    },
                    {
                        title: 'Листогибочные прессы'
                    },
                    {
                        title: 'Гильотины'
                    },
                    {
                        title: 'Валковые машины'
                    },
                    {
                        title: 'Раскрой листового металла'
                    },
                    {
                        title: 'Гибка листового металла'
                    },
                    {
                        title: 'Токарные станки'
                    },
                    {
                        title: 'Штамповочные прессы'
                    },
                    {
                        title: 'Отрезные станки'
                    },
                    {
                        title: 'Установки гиброабразивной резки'
                    },
                    {
                        title: 'Станки БУ'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>