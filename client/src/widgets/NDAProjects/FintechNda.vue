<script setup lang="ts">

//@ts-ignore
const updateCursor = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor);

defineProps<{
    title: string;
    role: string;
    description: string;
}>();
</script>

<template>
    <article class="nda_card relative flex items-center justify-center gap-8 rounded-xl w-[755px] max-md:w-full max-md:flex-col h-full bg-[var(--dark-grey-color)] p-4 border border-solid border-gray-700">
        <slot name="icon"></slot>
        <div class="flex flex-col gap-8">
            <div class="flex flex-col  gap-2">
                <h3 class="text-2xl font-semibold text-gray-50">{{title}}</h3>
                <span class="text-gray-400 text-sm">{{role}}</span>
            </div>
            
            <p class="text-gray-200 text-base">
                {{description}}
            </p>
        </div>
    </article>
</template>

<style lang="scss">
.nda_card:hover {
    --active: 1;
}

.nda_card:after {
    content: "";
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), hsl(0 0% 100% / 0.15), transparent 15vmin);
    background-attachment: fixed;
    opacity: var(--active, 0);
    transition: opacity 0.2s;
    pointer-events: none;
}
</style>