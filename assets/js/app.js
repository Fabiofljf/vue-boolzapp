const app = new Vue({
    el: '#app',
    data: {
        //selectDate: dayjs().format('HH: mm'),
        i: 0,
        textUser: '',
        search: '',
        sms: '',
        messageToView: 'Ultimo accesso oggi, alle 12:00',
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        randomMessage: ['Dai che ce la puoi fare', 'A volte mi sorprendo da solo', 'Odio la struttura dati', 'Cercherò di sorprenderti'],
    },
    methods: {
        getNewIndexAndConversation(index) {
            //console.log('ciao');
            this.i = index;
        },
        // gethours(i) { // Aggiungo una nuova libreria in HTML Dayjs
        //     const hours = new Date("July 21, 1983 01:15:00")
        //     let hour = hours.getHours()
        //     hour = selectDate

        // },
        getMessage() {
            if (this.textUser.length !== 0) {
                //console.log(this.textUser);
                //this.newMessage[this.i].message = this.textUser // non posso inserire una nuova array perché il ciclo v-for non la legge poiché ha un altro nome. pusho direttamente il contenuto dentro
                //console.log(this.newMessage[this.i].message);
                this.contacts[this.i].messages.push({
                    date: dayjs().format('HH:mm'),
                    message: this.textUser,
                    status: 'sent'
                })
                this.textUser = '';
                this.getRandomMessage()
                setTimeout(() => {
                    this.contacts[this.i].messages.push({
                        date: dayjs().format('HH:mm'),
                        message: this.sms,
                        status: 'received'
                    })
                    this.messageToView = 'Il pc sta scrivendo...'
                }, 1000)
                setTimeout(() => {
                    this.messageToView = 'Online'
                }, 2000)
                setTimeout(() => {
                    this.messageToView = `Ultimo accesso alle:${dayjs().format('HH:mm')}`
                }, 4000)

            }
        },
        getRandomMessage() {
            const messageRandom = this.randomMessage[Math.floor(Math.random() * this.randomMessage.length)];
            this.sms = messageRandom
            console.log(this.sms);
        },
        deleteMessage(index) {
            //console.log(index);
            //console.log(this.contacts[this.i].messages[index].message);
            //console.log(this.contacts[this.i].messages);
            let array = this.contacts[this.i].messages
            array.splice(index, 1)

        },
        deleteConversation() {
            //console.log('ciao');
            console.log(this.contacts[this.i]);
            console.log(this.contacts[this.i].visible);
            console.log(this.contacts[this.i].messages.length);
            console.log(this.contacts[this.i].messages);
            if (this.contacts[this.i].messages.length = 0) {
                this.contacts[this.i].visible = false
            } else {
                this.contacts[this.i].visible = true
            }
        },
    }
})