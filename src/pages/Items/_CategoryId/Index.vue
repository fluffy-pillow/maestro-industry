<template>
    <v-ons-page class="category-page">
        <div class="grid">
            <Header>
                <v-ons-back-button slot="headerLeft">Назад</v-ons-back-button>
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
                                        <div class="portlet-section-body">
                                            <div class="flexible-table flexible-table__vertical-items">
                                                <div class="flexible-table-content">
                                                    <router-link class="flexible-table__col link"
                                                                 v-for="(item, key) of items"
                                                                 :key="key"
                                                                 to="/items/1/manual"
                                                    >
                                                        <div class="flexible-table__col-content">
                                                            <div class="flexible-table__image">
                                                                <img :src="require('@/assets/uploads/item-2.png')">
                                                            </div>
                                                            <div class="flexible-table__title">
                                                                {{item.title}}
                                                            </div>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </div>
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
    import Logo from "@/components/Logo";
    import Header from "@/components/Header";
    export default {
        name: "Index",
        components: {Header, Logo},
        data () {
            return {
                items: [
                    {
                        title: 'Токарный обрабатывающий центр SPECTR. Серия TC-M country'
                    },
                    {
                        title: 'ФС130МФ3 вертикальный обрабатывающий центр'
                    },
                    {
                        title: 'ФС110МФ3 вертикальный обрабатывающий центр'
                    },
                    {
                        title: 'ФС85МФ3 вертикальный обрабатывающий центр'
                    },
                    {
                        title: 'ФС65МФ3 вертикальный обрабатывающий центр'
                    },
                    {
                        title: 'МФЦ650 пятиосевой обрабатывающий центр'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>