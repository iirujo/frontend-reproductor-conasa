<template>
    <footer class="py-2">
        <ul class="footer-list">
            <li class="footer-item">
                <a href="">©2019 Reproductor</a>
            </li>
            <li class="footer-item">
                <a href="">Help center</a>
            </li>
            <li class="footer-item">
                <a href="">Privacy policies</a>
            </li>
            <li class="footer-item">
                <a href="">Developers</a>
            </li>
            <li class="footer-item">
                <a href="">Settings</a>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    footer {
        background-color: #c2fff8;
        position: fixed;
        width: 100%;
        height: 2.5rem;
        bottom: 0%;
        border-top: 3px solid black;
    }
    .lista {
        list-style:none;
    }
    ol, ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .footer-item {
    display: inline-block;
    padding: 0 9px 0 9px;
    }
    .footer-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    }
</style>