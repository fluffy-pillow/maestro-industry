<template>
    <v-ons-page class="manual-page">
        <div class="grid">
            <Header>
                <v-ons-back-button slot="headerLeft">Назад</v-ons-back-button>
                <Logo slot="headerCenter"></Logo>
            </Header>
            <main class="main-container">
                <div class="grid-item__row">
                    <Aside :title="'Вальцешлифовальный станок Hercules 3413M CNC'">
                        <div class="default-image">
                            <img :src="require('@/assets/uploads/image.png')">
                        </div>
                        <p class="desc-title">Информация</p>
                        <p class="desc">
                            Высокая надежность оборудования в сочетании относительно-низкой ценой делает данное оборудование оптимальным в своём ассортименте.
                            Данная комплектация состоит из следующих узлов: Данная комплектация состоит из следующих узлов:1-й калибрующий вал для калибрования заготовки (со стальным спиральным валом); 2-й шлифующий вал для более деликатной обработки; 3-й шлифующий комбинированный узел; финишная шлифовка панелей из массива.
                            Комбинированный барабан используется тремя способами: рейка внизу, рейка наверху, рейка на уровне барабана.
                            Контактный барабан может использоваться от грубой шлифовки с зернистостью абразива 36-80 до средней шлифовки с зернистостью абразива 120-150.
                            Вулканизированный и динамически сбалансированный контактный ролик.
                            Фотоэлемент для контроля положения шлифовальной ленты.
                            Аварийный концевой выключатель.
                            Переменная скорость подачи ленточного конвейера.
                            Автоматическая остановка станка при недостатке воздуха и разрыва шлифовальной ленты.
                        </p>
                    </Aside>
                    <div class="grid-item__col">
                        <div class="portlet">
                            <div class="portlet-container scrollable-y scrollable-hide-scroll">
                                <div class="portlet-header">
                                    <h2>Что вы хотите сделать?</h2>
                                </div>
                                <div class="portlet-body">
                                    <section class="portlet-section">
                                        <ManualLinks :links="links"></ManualLinks>
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
    import Aside from "@/components/Aside";
    import ManualLinks from "@/components/Manual/ManualLinks";
    export default {
        name: "Index",
        components: {ManualLinks, Aside, Header, Logo},
        data () {
            return {
                links: [
                    {
                        title: 'Посмотреть руководство по эксплуатации оборудования',
                        desc: 'В данном разделе содержатся текстовые и видеоматериалы, как правильно работать с оборудованием.',
                        class: 'manual-link__blue',
                        iconClass: 'manual-link__icon-instruction',
                        to: ''
                    },
                    {
                        title: 'Открыть руководство по устранению неполадок оборудования',
                        desc: 'В данном разделе содержатся типовые неисправности данного оборудования. В случае, если неполадка не устранена, вы должны вызвать мастера.',
                        class: 'manual-link__purple',
                        iconClass: 'manual-link__icon-alert',
                        to: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>