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

                                        <div class="category-item">
                                            <button class="btn btn-warning">
                                                <span class="btn__icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                    <path d="M23.6174 18.5334L14.444 2.64455C13.9339 1.76105 13.0203 1.23352 12 1.23352C10.9798 1.23352 10.0661 1.76105 9.55597 2.64455L0.382605 18.5333C-0.127535 19.4169 -0.127535 20.4719 0.382605 21.3554C0.892744 22.239 1.80634 22.7664 2.82662 22.7664H21.1734C22.1936 22.7664 23.1072 22.2389 23.6174 21.3555C24.1276 20.4719 24.1276 19.4169 23.6174 18.5334ZM22.3997 20.6524C22.1437 21.0958 21.6853 21.3604 21.1734 21.3604H2.82662C2.31465 21.3604 1.85621 21.0958 1.60027 20.6524C1.34434 20.2091 1.34434 19.6798 1.60027 19.2364L10.7737 3.34763C11.0297 2.90428 11.4881 2.63963 12 2.63963C12.5119 2.63963 12.9704 2.90428 13.2263 3.34763L22.3997 19.2364C22.6556 19.6798 22.6556 20.2091 22.3997 20.6524Z" fill="black"/>
                                                    <path d="M12.7029 8.25049H11.2969V15.2809H12.7029V8.25049Z" fill="black"/>
                                                    <path d="M12 16.687C11.4831 16.687 11.0626 17.1075 11.0626 17.6244C11.0626 18.1413 11.4831 18.5618 12 18.5618C12.5169 18.5618 12.9374 18.1413 12.9374 17.6244C12.9374 17.1075 12.5169 16.687 12 16.687Z" fill="black"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                </span>
                                                <span class="btn__text">
                                                    Вызвать мастера
                                                </span>
                                            </button>
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
                        to: '/items/' + this.$route.params.categoryId + '/manual/exploitation/index'
                    },
                    {
                        title: 'Открыть руководство по устранению неполадок оборудования',
                        desc: 'В данном разделе содержатся типовые неисправности данного оборудования. В случае, если неполадка не устранена, вы должны вызвать мастера.',
                        class: 'manual-link__purple',
                        iconClass: 'manual-link__icon-alert',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/index'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.category-item {
    margin-top: 44px;
    display: flex;
    justify-content: center;
}

.category-item .btn {
    width: 280px;
}
</style>