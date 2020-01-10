<template>
    <v-ons-page class="troubleshooting-page">
        <div class="grid">
            <Header>
                <v-ons-back-button slot="headerLeft">Назад</v-ons-back-button>
                <div class="header__controls" slot="headerRight">
                    <button class="btn btn-purple" @click="$router.push('/items/1')">
                        <span class="btn__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.81 1.26001C10.81 0.98376 10.5863 0.76001 10.31 0.76001H1.26001C0.98376 0.76001 0.76001 0.98376 0.76001 1.26001V10.31C0.76001 10.5863 0.98376 10.81 1.26001 10.81H10.31C10.5863 10.81 10.81 10.5863 10.81 10.31V1.26001ZM9.81001 9.81001H1.76001V1.76001H9.81001V9.81001Z" fill="white"/>
                            <path d="M23.26 1.26001C23.26 0.98376 23.0362 0.76001 22.76 0.76001H13.71C13.4337 0.76001 13.21 0.98376 13.21 1.26001V10.31C13.21 10.5863 13.4337 10.81 13.71 10.81H22.76C23.0362 10.81 23.26 10.5863 23.26 10.31V1.26001ZM22.26 9.81001H14.21V1.76001H22.26V9.81001Z" fill="white"/>
                            <path d="M10.81 13.71C10.81 13.4337 10.5863 13.21 10.31 13.21H1.26001C0.98376 13.21 0.76001 13.4337 0.76001 13.71V22.76C0.76001 23.0362 0.98376 23.26 1.26001 23.26H10.31C10.5863 23.26 10.81 23.0362 10.81 22.76V13.71ZM9.81001 22.21H1.76001V14.21H9.81001V22.21Z" fill="white"/>
                            <path d="M23.26 13.71C23.26 13.4337 23.0362 13.21 22.76 13.21H13.71C13.4337 13.21 13.21 13.4337 13.21 13.71V22.76C13.21 23.0362 13.4337 23.26 13.71 23.26H22.76C23.0362 23.26 23.26 23.0362 23.26 22.76V13.71ZM22.26 22.21H14.21V14.21H22.26V22.21Z" fill="white"/>
                            </svg>
                        </span>
                        <span class="btn__text">
                            Список оборудования
                        </span>
                    </button>
                    <button class="btn btn-success" @click="$router.push('/items/1/manual/exploitation/index')">
                        <span class="btn__icon">
                            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.321198 3.0485V19.9942C0.321198 21.6752 1.68874 23.0427 3.3697 23.0427H4.66462V26L7.45906 24.7425L10.2535 26V23.0428H19.6789V0H3.3697C1.68874 0 0.321198 1.36754 0.321198 3.0485ZM8.73021 23.644L7.45911 23.0721L6.18806 23.644V21.5182H8.73021V23.644ZM18.1555 21.5194H10.2536V19.9948H4.66462V21.5194H3.3697C2.52871 21.5194 1.84453 20.8352 1.84453 19.9942C1.84453 19.1532 2.52876 18.469 3.3697 18.469H18.1555V21.5194ZM18.1555 16.9457H3.3697C2.81425 16.9457 2.29349 17.0958 1.84453 17.3564V3.0485C1.84453 2.20751 2.52876 1.52334 3.3697 1.52334H18.1555V16.9457Z" fill="white"/>
                            <path d="M15.0795 9.99614V8.47281H13.9271C13.8229 7.93498 13.6115 7.43494 13.3148 6.99685L14.1303 6.18135L13.0532 5.10418L12.2377 5.91968C11.7995 5.62296 11.2995 5.41156 10.7617 5.30746V4.15503H9.23837V5.30746C8.70055 5.41161 8.2005 5.62301 7.76241 5.91968L6.94692 5.10418L5.86975 6.18135L6.68524 6.99685C6.38853 7.43494 6.17712 7.93498 6.07302 8.47281H4.92059V9.99614H6.07302C6.17712 10.534 6.38858 11.034 6.68524 11.4721L5.86975 12.2876L6.94692 13.3648L7.76241 12.5493C8.20055 12.846 8.70055 13.0574 9.23837 13.1615V14.3139H10.7617V13.1615C11.2995 13.0573 11.7996 12.8459 12.2377 12.5493L13.0532 13.3648L14.1303 12.2876L13.3148 11.4721C13.6116 11.034 13.823 10.534 13.9271 9.99614H15.0795ZM9.99999 11.7118C8.63402 11.7118 7.52268 10.6004 7.52268 9.23447C7.52268 7.86851 8.63402 6.75716 9.99999 6.75716C11.366 6.75716 12.4773 7.86851 12.4773 9.23447C12.4773 10.6004 11.366 11.7118 9.99999 11.7118Z" fill="white"/>
                            </svg>
                        </span>
                        <span class="btn__text">
                            Руководство эксплуатации
                        </span>
                    </button>
                </div>
            </Header>
            <main class="main-container">
                <div class="grid-item__row">
                    <Aside :title="'Типовые поломки оборудования и методы устранения'">
                        <AsideMenu :links="asideLinks" :links-color="'orange'"></AsideMenu>
                    </Aside>
                    <div class="grid-item__col">
                        <div class="portlet">
                            <div class="portlet-container scrollable-y scrollable-hide-scroll" ref="scrollableBlock">

                                <template v-if="$route.params.manualSlug === 'index'">
                                    <div class="portlet--empty">
                                        <div class="portlet--empty__message">
                                            <div class="portlet--empty__message-icon-wrapper">
                                                <div class="portlet--empty__message-icon"
                                                     :style="{
                                                        backgroundImage: 'url(' + require('@/assets/images/alert-1.svg') + ')'
                                                    }"
                                                >

                                                </div>
                                            </div>
                                            <div class="portlet--empty__message-text">
                                                Выберите интересующий вас раздел слева
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="portlet-header">
                                        <h2>Поломка блока управления серии eX. Окна экрана ЧПУ</h2>
                                    </div>
                                    <div class="portlet-body">
                                        <section class="portlet-section">
                                            <div class="portlet-offset">
                                                <TroubleshootingItems
                                                    :instruction="recordedInstruction"
                                                    :instruction-item-key="instructionItemKey"
                                                    :end="end"
                                                >
                                                </TroubleshootingItems>
                                                <div class="message message-success" v-if="end">
                                                    Устранение неисправности завершено. В случае, если неисправность осталась - вызовите мастера.
                                                </div>
                                               <TroubleshootingControls
                                                  :has-previous-recorded-item="recordedInstruction.length > 1"
                                                  :instruction="recordedInstruction"
                                                  :current-instruction-item="currentInstructionItem"
                                                  :instruction-item-key.sync="instructionItemKey"
                                                  :end.sync="end"
                                                  @flipThrough="onFlipThrough"
                                                >
                                                </TroubleshootingControls>
                                            </div>
                                        </section>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </v-ons-page>
</template>

<script>
    import AsideMenu from "@/components/AsideMenu";
    import Aside from "@/components/Aside";
    import Header from "@/components/Header";
    import TroubleshootingItems from "@/components/Troubleshooting/TroubleshootingItems";
    import TroubleshootingControls from "../../../../../../components/Troubleshooting/TroubleshootingControls";
    export default {
        name: "Index",
        components: {TroubleshootingControls, TroubleshootingItems, Header, Aside, AsideMenu},
        data () {
            return {
                instructionItemKey: 'key_1',
                recordedInstruction: [],
                direction: 'forward',
                end: false,
                asideLinks: [
                    {
                        title: 'Головка ЧПУ перестала работать во время производства',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/manual-1'
                    },
                    {
                        title: 'Поломка блока управления серии eX. Окна экрана ЧПУ',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/manual-2'
                    },
                    {
                        title: 'Выход из строя автоматической системы смены паллет',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/manual-3'
                    },
                    {
                        title: 'Отказ обрабатывающей головки с автоматической предварительной фокусировкой (PH-XS). Причины отказа и устранение',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/manual-4'
                    },
                    {
                        title: 'Выход из строя магнитного устройства защиты от повреждений.',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/manual-5'
                    },
                    {
                        title: 'Руководство по предпусковой подготовке 3413M CBC',
                        to: '/items/' + this.$route.params.categoryId + '/manual/troubleshooting/manual-6'
                    }
                ],
                instructions: [
                    {
                        link: 'manual-1',
                        instruction: [
                            {
                                key: 'key_1',
                                title: 'Проверьте модули монтажной панели',
                                text: 'На дверце шкафа размещены элементы управления и индикации, обслуживающие их модули ввода-вывода и гнездо для подключения устройства Минипульт Ex.\n' +
                                'Кабель внешнего питания (230В/127В/36В) следует подводить к нижней стенке шкафа, пропускать через кабельный ввод шкафа, закреплять от выдергивания имеющимися зажимами и подключать на клеммник внешней вводной короб- ки.',
                                to: 'key_2'
                            },
                            {
                                key: 'key_2',
                                title: 'Проверьте целостность кабелей',
                                text: 'Кабели вводятся в шкаф со стороны нижней стенки шкафа через кабельные вводы и закрепляются от выдергивания имеющимися на терминальных кассетах зажимами. Конструкция шкафа позволяет отсоединять кабели вместе с за- крепленными на них терминальными кассетами.',
                                to: 'key_3'
                            },
                            {
                                key: 'key_3',
                                title: 'Проверьте питание источников',
                                text: 'Шкаф может получать питание от источников искробезопасного питания (ExUPS-PW, ExRPW), устанавливаемых в непосредственной близости.',
                                video: {
                                    src: 'http://techslides.com/demos/sample-videos/small.mp4',
                                    poster: 'https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-luminence-key-a-int.jpg'
                                },
                                last: true
                            }
                        ]
                    },
                    {
                        link: 'manual-2',
                        instruction: [
                            {
                                key: 'key_1',
                                title: 'Проверьте модули монтажной панели',
                                text: 'На дверце шкафа размещены элементы управления и индикации, обслуживающие их модули ввода-вывода и гнездо для подключения устройства Минипульт Ex.\n' +
                                'Кабель внешнего питания (230В/127В/36В) следует подводить к нижней стенке шкафа, пропускать через кабельный ввод шкафа, закреплять от выдергивания имеющимися зажимами и подключать на клеммник внешней вводной короб- ки.',
                                to: 'key_2'
                            },
                            {
                                key: 'key_2',
                                title: 'Красная лампочка горит на панели?',
                                dialog: {
                                    no: {text: 'Нет, не горит', key: 'key_4'},
                                    yes: {text: 'Да, горит', key: 'key_3'}
                                },
                            },
                            {
                                title: 'Лампочка горит, отлично',
                                text: 'Проверка завершена успешно',
                                key: 'key_3'
                            },
                            {
                                title: 'Лампочка не горит',
                                text: 'Замените лампочку',
                                key: 'key_4'
                            }
                        ]
                    },
                    {
                        link: 'manual-3',
                        instruction: [
                            {
                                key: 'key_1',
                                title: 'Проверьте модули монтажной панели',
                                text: 'На дверце шкафа размещены элементы управления и индикации, обслуживающие их модули ввода-вывода и гнездо для подключения устройства Минипульт Ex.\n' +
                                'Кабель внешнего питания (230В/127В/36В) следует подводить к нижней стенке шкафа, пропускать через кабельный ввод шкафа, закреплять от выдергивания имеющимися зажимами и подключать на клеммник внешней вводной короб- ки.',
                                to: 'key_2'
                            },
                            {
                                key: 'key_2',
                                title: 'Проверьте целостность кабелей',
                                text: 'Кабели вводятся в шкаф со стороны нижней стенки шкафа через кабельные вводы и закрепляются от выдергивания имеющимися на терминальных кассетах зажимами. Конструкция шкафа позволяет отсоединять кабели вместе с за- крепленными на них терминальными кассетами.',
                                to: 'key_3'
                            },
                            {
                                key: 'key_3',
                                title: 'Проверьте питание источников',
                                text: 'Шкаф может получать питание от источников искробезопасного питания (ExUPS-PW, ExRPW), устанавливаемых в непосредственной близости.',
                                video: {
                                    src: 'http://techslides.com/demos/sample-videos/small.mp4',
                                    poster: 'https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-luminence-key-a-int.jpg'
                                },
                                last: true
                            }
                        ]
                    },
                    {
                        link: 'manual-4',
                        instruction: [
                            {
                                key: 'key_1',
                                title: 'Проверьте модули монтажной панели',
                                text: 'На дверце шкафа размещены элементы управления и индикации, обслуживающие их модули ввода-вывода и гнездо для подключения устройства Минипульт Ex.\n' +
                                'Кабель внешнего питания (230В/127В/36В) следует подводить к нижней стенке шкафа, пропускать через кабельный ввод шкафа, закреплять от выдергивания имеющимися зажимами и подключать на клеммник внешней вводной короб- ки.',
                                to: 'key_2'
                            },
                            {
                                key: 'key_2',
                                title: 'Проверьте целостность кабелей',
                                text: 'Кабели вводятся в шкаф со стороны нижней стенки шкафа через кабельные вводы и закрепляются от выдергивания имеющимися на терминальных кассетах зажимами. Конструкция шкафа позволяет отсоединять кабели вместе с за- крепленными на них терминальными кассетами.',
                                to: 'key_3'
                            },
                            {
                                key: 'key_3',
                                title: 'Проверьте питание источников',
                                text: 'Шкаф может получать питание от источников искробезопасного питания (ExUPS-PW, ExRPW), устанавливаемых в непосредственной близости.',
                                video: {
                                    src: 'http://techslides.com/demos/sample-videos/small.mp4',
                                    poster: 'https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-luminence-key-a-int.jpg'
                                },
                                last: true
                            }
                        ]
                    },
                    {
                        link: 'manual-5',
                        instruction: [
                            {
                                key: 'key_1',
                                title: 'Проверьте модули монтажной панели',
                                text: 'На дверце шкафа размещены элементы управления и индикации, обслуживающие их модули ввода-вывода и гнездо для подключения устройства Минипульт Ex.\n' +
                                'Кабель внешнего питания (230В/127В/36В) следует подводить к нижней стенке шкафа, пропускать через кабельный ввод шкафа, закреплять от выдергивания имеющимися зажимами и подключать на клеммник внешней вводной короб- ки.',
                                to: 'key_2'
                            },
                            {
                                key: 'key_2',
                                title: 'Проверьте целостность кабелей',
                                text: 'Кабели вводятся в шкаф со стороны нижней стенки шкафа через кабельные вводы и закрепляются от выдергивания имеющимися на терминальных кассетах зажимами. Конструкция шкафа позволяет отсоединять кабели вместе с за- крепленными на них терминальными кассетами.',
                                to: 'key_3'
                            },
                            {
                                key: 'key_3',
                                title: 'Проверьте питание источников',
                                text: 'Шкаф может получать питание от источников искробезопасного питания (ExUPS-PW, ExRPW), устанавливаемых в непосредственной близости.',
                                video: {
                                    src: 'http://techslides.com/demos/sample-videos/small.mp4',
                                    poster: 'https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-luminence-key-a-int.jpg'
                                },
                                last: true
                            }
                        ]
                    },
                    {
                        link: 'manual-6',
                        instruction: [
                            {
                                key: 'key_1',
                                title: 'Проверьте модули монтажной панели',
                                text: 'На дверце шкафа размещены элементы управления и индикации, обслуживающие их модули ввода-вывода и гнездо для подключения устройства Минипульт Ex.\n' +
                                'Кабель внешнего питания (230В/127В/36В) следует подводить к нижней стенке шкафа, пропускать через кабельный ввод шкафа, закреплять от выдергивания имеющимися зажимами и подключать на клеммник внешней вводной короб- ки.',
                                to: 'key_2'
                            },
                            {
                                key: 'key_2',
                                title: 'Проверьте целостность кабелей',
                                text: 'Кабели вводятся в шкаф со стороны нижней стенки шкафа через кабельные вводы и закрепляются от выдергивания имеющимися на терминальных кассетах зажимами. Конструкция шкафа позволяет отсоединять кабели вместе с за- крепленными на них терминальными кассетами.',
                                to: 'key_3'
                            },
                            {
                                key: 'key_3',
                                title: 'Проверьте питание источников',
                                text: 'Шкаф может получать питание от источников искробезопасного питания (ExUPS-PW, ExRPW), устанавливаемых в непосредственной близости.',
                                video: {
                                    src: 'http://techslides.com/demos/sample-videos/small.mp4',
                                    poster: 'https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-luminence-key-a-int.jpg'
                                },
                                last: true
                            }
                        ]
                    },
                ]
            }
        },
        watch: {
            '$route': function (newValue) {
                this.instructionItemKey = 'key_1'
                this.end = false
                this.clear()
                this.record()
                this.$refs.scrollableBlock.scrollTop = 0
            },
            instructionItemKey: function (newValue, oldValue) {
                this.$refs.scrollableBlock.scrollTop = this.$refs.scrollableBlock.scrollHeight
            }
        },
        methods: {
           record () {
               this.recordedInstruction.push(this.currentInstructionItem)
           },
           clear () {
               this.recordedInstruction = []
           },
           cancel () {
               this.recordedInstruction.pop()
           },
           onFlipThrough (args) {
               if (args.direction === 'forward') {
                   this.instructionItemKey = args.to
                   this.direction = args.direction
                   this.record()
               } else {
                   this.cancel()
                   this.instructionItemKey = this.recordedInstruction[this.recordedInstruction.length - 1].key
                   this.direction = args.direction
               }

           }
        },
        computed: {
            currentInstruction () {
                let step = this.instructions.filter(item =>  this.$route.params.manualSlug === item.link)
                return (step.length > 0) ? step[0].instruction : []
            },
            currentInstructionItem () {
                return this.currentInstruction.filter(item => this.instructionItemKey === item.key)[0]
            }
        }
     }
</script>

<style scoped>


</style>