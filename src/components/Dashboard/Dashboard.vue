<template>
    <div class="p-5">
        <b-card
          tag="article"
          class="mb-2 cardStyle box-shadow-big"
        >
          <b-card-text class="cardTitleStyle mx-auto">
              Exodia the Forbidden One
          </b-card-text>
          <img src="./../../assets/exodia.jpg" class="responsive">
          <br>
          <br>
          <b-card-text class="cardTextStyle">
            If you have "Right Leg of the Forbidden One", "Left Leg of the Forbidden One", 
            "Right Arm of the Forbidden One" and "Left Arm of the Forbidden One" in addition to this card in 
            your hand, you win the Duel.
          </b-card-text>
            
          <b-button v-on:click="goToChange" variant="primary" size="lg" class="box-shadow">Modify user</b-button>
          <br> <br>
          <b-button v-on:click="goToSearch" variant="primary" size="lg" class="box-shadow">Search</b-button>
        </b-card>
    </div>
</template>

<script>


import router from '../../router'
export default {
    name: 'Dashboard',
    methods: {
        goToChange() {
            let now = new Date();

            if (new Date(localStorage.getItem("time")) <= now) {
                localStorage.clear();
                alert("Session expired");
                router.push("/");
            }
            else {
                router.push("/change")
            }
        },
        goToSearch() {
            let now = new Date();
            
            if (new Date(localStorage.getItem("time")) <= now) {
                localStorage.clear();
                alert("Session expired");
                router.push("/");
            }
            else {
                router.push("/search")
            }
        }
    }
}
</script>

<style scoped>
    
    div {
        text-align: center;
    }
    
    .box-shadow {
        box-shadow: 5px 5px 12px grey;
    }
    .box-shadow-big {
        box-shadow: 10px 10px 14px grey;
    }
    .cardStyle {
      background-color: #0eedd3;
    }
    .cardTextStyle {
        background-color: #feffb3;
        box-shadow: 0px 0px 14px #303338;
        border-radius: 0.5em/0.5em;
        border-width: 0.2em;
        border-color: #3b4544;
    }
    .cardTitleStyle {
        background-color: #ffff00;
        width: 60%;
        height: auto;
        border-radius: 0.3em/0.3em;
        box-shadow: 3px 3px 10px #a7b2c5;
        border-width: thick;
        border-color: #576664;
    }
    .responsive {
        width: 40%;
        height: auto;
    }

    @media only screen and (min-width: 20.063em) and (max-width: 30em) {
        .cardTitleStyle {
            font-size: 1.2em;
            font-weight: bold;
        }
        .cardTextStyle {
            font-size: 1.1em;
        }
    }

    @media only screen and (min-width: 30.063em) and (max-width: 50em) {
        .cardTitleStyle {
            font-size: 1.5em;
            font-weight: bold;
        }
        .cardTextStyle {
            font-size: 1.4em;
        }
    }

    @media only screen and (min-width: 50.063em) {
        .cardTitleStyle {
            font-size: 2em;
            font-weight: bold;
        }
        .cardTextStyle {
            font-size: 1.8em;
        }
    }
</style>