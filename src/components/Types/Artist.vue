
<template>
        <b-list-group class="mb-4 p-2">

            <b-list-group-item variant="success" class="titleListItem d-flex align-items-center"
            v-b-tooltip.hover :title="completeArtistName">
                {{artistName}}
            </b-list-group-item>

            <img src="../../assets/noImg.jpg" v-if="!artistImg">

            <img :src="artistImg" v-else>
            
            <b-list-group-item variant="info" class="light-font comunListItem">
                <span>Total followers:</span> {{totalFollowers}}
            </b-list-group-item>

            <b-list-group-item variant="info" class="light-font genresListItem
            justify-content-between">
                <span>Genres:</span> {{artistGenres}}
            </b-list-group-item>

            <b-list-group-item variant="info" class="light-font comunListItem">
                <span>Artist popularity:</span>{{artistPopularity}}
            </b-list-group-item>
            
        </b-list-group>
</template>

<script>
import Shorten from '../Services/Shorten.js';
const shorten = new Shorten();
export default {
    name: 'Artist',
    components: {
        Shorten
    },
    props: ['artistValue', 'indexOfElement'],
    data() {

        let concreteArtist = this.artistValue.artists.items[(this.indexOfElement - 1)];
        
        let completeArtistName = concreteArtist.name;
        let totalFollowers = concreteArtist.followers["total"];
        let artistPopularity = concreteArtist.popularity;
        let artistGenres = concreteArtist.genres.toString();
        let artistImg;

        let artistName = shorten.checkAndShortString(completeArtistName);

        if (artistGenres == ""){
                artistGenres = "Undefined"
        }

        artistGenres = artistGenres.split(',').join(', ');

        if (concreteArtist.images.length == 0) {
            artistImg = false;
        }
        else {
            artistImg = concreteArtist.images[1].url;
        }
        
        return {
            artistName: artistName,
            completeArtistName: completeArtistName,
            totalFollowers: totalFollowers,
            artistGenres: artistGenres,
            artistPopularity: artistPopularity,
            artistImg: artistImg,
            concreteArtist: concreteArtist
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

    .genresListItem {
        height: 200px;
        display: inline-block;
    }

    .comunListItem {
        height: 130px;
    }

    .light-font {
        color: #06a163;
    }

    
</style>