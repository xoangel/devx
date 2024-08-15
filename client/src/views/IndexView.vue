<script setup lang="ts">
    
</script>

<template>
    <main class="home">
        <div class="home__background">
            <video class="home__video" src="/intro.mp4" muted loop autoplay></video>
        </div>
    </main>
</template>

<style lang="css">
    .home{
        height: 100%;
        border-radius: 16px;
    }

    .home__video{
        width: 400px;
    }

    .home__background{
        background-color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-radius: 16px;
    }

    @media screen and (max-width: 640px) {
        .home__video{
            width: 300px;
        }
    }    
</style>