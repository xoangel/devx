<script setup lang="ts">
    defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="service_tip px-6 py-1 rounded-full flex items-center h-9" style="background-color: #E54927;">
        <p>{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 1900px) {
    .service_tip{
        height: 42px;
    }
}
</style>