<template>
    <b-list-group class="mb-4 p-2">


                <b-list-group-item variant="success"  class="titleListItem d-flex align-items-center"
                v-b-tooltip.hover :title="completeTrackName">
                    {{trackName}}
                </b-list-group-item>

                <img src="../../assets/noImg.jpg" v-if="!albumImg">

                <img :src="albumImg" v-else>

                <b-list-group-item variant="info" class="light-font comunListItem">
                    Popularity: {{trackPopularity}}
                </b-list-group-item>

                <b-list-group-item variant="info" class="light-font comunListItem">
                    Track Number: {{trackNumber}}
                </b-list-group-item>

                <b-list-group-item variant="info" class="light-font comunListItem">
                    Authors: {{authors}}
                </b-list-group-item>

                <b-list-group-item variant="info" class="light-font comunListItem">

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
    name: 'Track',
    components: {
        Shorten
    },
    props: ['trackValue', 'indexOfElement'] ,
    data() {
        
        let concreteTrack = this.trackValue.tracks.items[(this.indexOfElement - 1)];
        
        let completeTrackName = concreteTrack.name;
        let trackPopularity = concreteTrack.popularity;
        let trackNumber = concreteTrack.track_number;
        let authors = [];
        let albumImg;

        let trackName = shorten.checkAndShortString(completeTrackName);

        let splittedTrackUri = concreteTrack.uri.split(":");
        let typeUri = splittedTrackUri[1];
        let codeUri = splittedTrackUri[2];
        let trackSrc = "https://open.spotify.com/embed/" + typeUri + "/" + codeUri;



        for (let i = 0; i < concreteTrack.artists.length; i++) {
           authors.push(concreteTrack.artists[i].name);
        }

        authors = authors.toString();
        authors = authors.split(',').join(', ');

        if (concreteTrack.album.images.length == 0) {
            albumImg = false;
        }
        else {
            albumImg = concreteTrack.album.images[1].url;
        }

        return {
            trackName: trackName,
            completeTrackName: completeTrackName,
            trackPopularity: trackPopularity,
            trackNumber: trackNumber,
            albumImg: albumImg,
            authors: authors,
            trackSrc: trackSrc
        }
    },
    methods: {
        passPlayerData() {
            this.$emit('passPlayerData', this.trackSrc)
        },
        passTitle() {
            this.$emit('passTitle', this.trackName)
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