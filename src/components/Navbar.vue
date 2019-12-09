<template>

    <div id="nav-style" class="py-4">

        <b-navbar toggleable="sm" type="light">

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" class="m-1 ml-4 navbar-list" is-nav>

                <b-navbar-nav class="navbar-item">

                    

                        <b-nav-item v-on:click="goHome" class="nav-element box-shadow m-2" active>

                            <span>

                                Home

                            </span>

                        </b-nav-item>


                        <b-nav-item v-on:click="goHome" class="nav-element box-shadow m-2" active>

                            <span>

                                About Us

                            </span>

                        </b-nav-item>


                </b-navbar-nav>
                <div class="navbar-item">
                    <b-navbar-brand class="brand box-shadow">Reproductor</b-navbar-brand>
                    <img height="70" width="70" src="../assets/pineapple.png" alt="Reproductor">
                </div>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="navbar-item">

                        <SignupButton v-if="actionButton === 'signup'"/>
                        <LoginButton v-if="actionButton === 'login'"/>
                        <LogoutButton v-if="actionButton === 'logout'"/>

                        <b-nav-item-dropdown text="Lang" right>

                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>

                        </b-nav-item-dropdown>

                </b-navbar-nav>

            </b-collapse>

        </b-navbar>

    </div>

</template>

<script>
    import LoginButton from './Login/LoginButton.vue'
    import SignupButton from './Signup/SignupButton.vue'
    import LogoutButton from './Logout/LogoutButton.vue'
    import router from '../router'

    export default {
        components: {
            SignupButton,
            LoginButton,
            LogoutButton
        },
        name : 'Navbar',
        props: ['actionButton'],
        methods: {
            goHome() {

                let now = new Date();
            
                if ((new Date(localStorage.getItem("time")) <= now) || !(localStorage.getItem("name"))) {
                    if (localStorage.getItem("name")){
                        alert("Session expired");
                    }
                    localStorage.clear();
                    router.push("/")
                }
                else {
                    router.push("/dashboard")
                }
            }
        }
    }
</script>>

<style scoped>

    #nav-style {
        background-image: url("../assets/musical-notes.png");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 80%;
        background-color: #0eedd3;
    }
    .brand {
        background-color: #ffff00;
        padding: 0.5em;
        margin-right: 0%;
        border-radius: 10%;
        font-weight: bold;
    }
    .nav-element {
        background-color: #feffb3;
        border-width: 0.2em;
        border-radius: 10%;
        font-weight: bold;
        color: black;
    }
    .nav-element:nth-child(1) {
        height: 40px;
    }
    .box-shadow {
        box-shadow: 3px 3px 5px grey;
    }
    .navbar-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .navbar-item  {
        width: 33%;
    }
</style>