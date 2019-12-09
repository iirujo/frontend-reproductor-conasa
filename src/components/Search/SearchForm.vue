<template>
    <div class="generalDiv">
        <b-card class="my-4 cardStyle box-shadow">
            <b-form @submit="onSubmit" v-if="show" style="text-align: center;">
                <b-form-group label="Search:">
                    <b-form-input
                        v-model="form.keyword"
                        required
                        placeholder="Keyword"
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Type:" >
                    <b-form-select
                        v-model="form.type"
                        :options="types"
                        required
                    ></b-form-select>
                </b-form-group>
                <b-row>
                    <b-col>
                        <DashboardButton />
                    </b-col>
                    <b-col>
                        <b-button type="submit" variant="warning" class="box-shadow">
                            <b-spinner v-show="showSpiner" small type="grow"></b-spinner>Search
                        </b-button>
                    </b-col>

                </b-row>
            </b-form>
        </b-card>
        
        <div v-if="showArtist" class="row">
            <Artist :artistValue="responseContent" v-for="index in totalElements" v-bind:key="index"
            :indexOfElement="index" class="col-12 col-sm-6 col-md-4 col-lg-3"/>
        </div>

        <div v-if="showAlbum" class="row">
            <Album :albumValue="responseContent" v-for="index in totalElements" v-bind:key="index"
            :indexOfElement="index" class="col-12 col-sm-6 col-md-4 col-lg-3"
            v-on:passPlayerData="receivePlayerData" v-on:passTitle="receivePlayerTitle"/>
        </div>

        <div v-if="showTrack" class="row">
            <Track :trackValue="responseContent" v-for="index in totalElements" v-bind:key="index"
            :indexOfElement="index" class="col-12 col-sm-6 col-md-4 col-lg-3"
            v-on:passPlayerData="receivePlayerData" v-on:passTitle="receivePlayerTitle"/>
        </div>

        <ModalPlayer v-if="playerData != false" :srcToPlay="playerData" :playerTitle="playerTitle"/>
    </div>
</template>

<script>
    import DashboardButton from '../Dashboard/DashboardButton.vue';
    import FormService from "../Services/FormService.js";
    import Album from "../Types/Album.vue";
    import Artist from "../Types/Artist.vue";
    import Track from "../Types/Track.vue";
    import ModalPlayer from "../Modals/ModalPlayer.vue";
    const formService = new FormService();
    export default {
        name: 'SearchForm',
        components: {
            DashboardButton,
            Album,
            Artist,
            Track,
            ModalPlayer
        },
        computed: {
        
            variableWidthStyle() {
                return {
                    "width": (100/this.rest) + "%"
                }
            }
        },
        mounted() {
            const url = process.env.VUE_APP_URL_API_TYPES;
            fetch(process.env.VUE_APP_URL_API + url, {
                method: "GET",
                headers: formService.getHeaders()
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.error) {
                    this.$bvToast.toast(data.error, {
                    title: "Error",
                    toaster: "b-toaster-bottom-full",
                    autoHideDelay: 5000,
                    variant: "danger"
                    })
                }
                else {
                    var i;
                    for (i = 0; i < data.types.length; i++) {
                        let type = data.types[i].charAt(0).toUpperCase() + data.types[i].slice(1);
                        this.types.push(type)
                    }
                }
            })
        },
        data() {
            return {
                form: {
                    keyword: '',
                    type: null
                },
                types: [{ text: 'Select One', value: null}],
                showSpiner: false,
                show: true,
                showAlbum: false,
                showArtist: false,
                showTrack: false,
                totalElements: 0,
                responseContent: "",
                playerData: false,
                playerTitle: false
            }
        },
        methods: 
        {
            receivePlayerData(value) {
                this.playerData = value
            },
            receivePlayerTitle(value) {
                this.playerTitle = value
            },
            onSubmit() {
                this.showAlbum = false;
                this.showArtist = false;
                this.showTrack = false;
                this.showSpiner = true;
                this.totalElements = 0;
                this.responseContent = "";

                const url = process.env.VUE_APP_URL_API_SEARCH;
                fetch(process.env.VUE_APP_URL_API + url, {
                    method: "POST",
                    headers: formService.getHeaders(),
                    body: JSON.stringify({
                        keyword: this.form.keyword,
                        type: this.form.type.toLowerCase()
                    })
                })
                .then(data => {
                    this.showSpiner = false;
                    const toast = this.$bvToast;
                    if (data.errors) {
                        let errors = data.errors;
                        let msge;
                        errors.forEach(function(element) {
                            msge = element.message;
                            toast.toast(msge, {
                                title: "Error",
                                autoHideDelay: 5000,
                                variant: "danger"
                            })
                        })
                    } 
                    else {
                        return data.json();
                    } 
                })
                .catch(err => {
                    console.log(err);
                })
                .then(myJson => {
                    this.responseContent=myJson;

                    if (this.form.type == this.types[1]) {
                        this.totalElements = myJson.albums.items.length;

                        this.showAlbum = true;
                    }

                    if (this.form.type == this.types[2]) {
                        this.totalElements = myJson.artists.items.length;
                        
                        this.showArtist = true;
                    }

                    if (this.form.type == this.types[3]) {
                        this.totalElements = myJson.tracks.items.length;

                        this.showTrack = true;
                    }
                })
            }
        }
    }
</script>

<style scoped>

    li {
        list-style-type: none;
    }

    .box-shadow {
        box-shadow: 10px 10px 14px grey;
    }
    .cardStyle {
      background-color: #7afff0;
    }

    .generalDiv {
        color: #048a54;
        font-weight: bold;
        font-size: 130%;
        width: 95%;
        margin: 0 auto;
    }

</style>