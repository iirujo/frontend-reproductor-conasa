
<template>
        <b-list-group class="mb-4 p-2">

                <b-list-group-item variant="success" class="titleListItem d-flex align-items-center"
                v-b-tooltip.hover :title="completeAlbumName">
                    {{albumName}}
                </b-list-group-item>

                <img src="../../assets/noImg.jpg" v-if="!albumImg">

                <img :src="albumImg" v-else>

                <b-list-group-item variant="info" class="light-font comunListItem">
                    Authors: {{authors}}
                </b-list-group-item>

                <b-list-group-item variant="info" class="light-font comunListItem">
                    Release date: {{releaseDate}}
                </b-list-group-item>

                <b-list-group-item variant="info" class="light-font comunListItem">
                    Total tracks: {{totalTracks}}
                </b-list-group-item>

                <b-list-group-item variant="info" class="light-font">

                    <b-button v-on:click="passPlayerData(), passTitle()" v-b-modal.player>
                        Play me!
                    </b-button>

                </b-list-group-item>
            </b-list-group>
</template>

<script>
import Shorten from '../Services/Shorten.js';
const shorten = new Shorten();
export default {
    name: 'Album',
    components: {
        Shorten
    },
    props: ['albumValue', 'indexOfElement'] ,
    data() {
        
        let concreteAlbum = this.albumValue.albums.items[(this.indexOfElement - 1)];
        let completeAlbumName = concreteAlbum.name;
        let releaseDate = concreteAlbum.release_date;
        let totalTracks = concreteAlbum.total_tracks;
        let authors = [];
        let albumImg;

        let albumName = shorten.checkAndShortString(completeAlbumName);

        let splittedAlbumUri = concreteAlbum.uri.split(":");
        let typeUri = splittedAlbumUri[1];
        let codeUri = splittedAlbumUri[2];
        let albumSrc = "https://open.spotify.com/embed/" + typeUri + "/" + codeUri;

        for (let i = 0; i < concreteAlbum.artists.length; i++) {
           authors.push(concreteAlbum.artists[i].name);
        }

        authors = authors.toString();
        authors = authors.split(',').join(', ');

        if (concreteAlbum.images.length == 0) {
            albumImg = false;
        }
        else {
            albumImg = concreteAlbum.images[0].url;
        }

        return {
            albumName: albumName,
            completeAlbumName: completeAlbumName,
            releaseDate: releaseDate,
            albumImg: albumImg,
            totalTracks: totalTracks,
            authors: authors,
            albumSrc: albumSrc
        }
    },
    methods: {
        passPlayerData() {
            this.$emit('passPlayerData', this.albumSrc)
        },
        passTitle() {
            this.$emit('passTitle', this.albumName)
        }
    }   
}
</script>

<style scoped>
    div {
        color: white;
    }

    img {
        height: 197.72px;
        width: 100%;
    }

    span {
        color: black;
        text-shadow: 2px 2px 4px grey;
    }

    .titleListItem {
        color: #048a54;
        text-align: center;
        height: 100px;
        width: 100%;
        text-shadow: 3px 3px 5px grey;
        font-size: 1.3em;
    }

    .comunListItem {
        height: 130px;
    }

    .light-font {
        color: #06a163;
    }
</style>