<script setup lang="ts">
//import { onMounted } from 'vue';
import Case from '../../helpers/types/typeCase';
    const props = defineProps<{
        case: Case
    }>()
    // onMounted(()=>{
    // const card = document.querySelector('.case_card');
    // let bounds: any;

    //     function rotateToMouse(e: any) {
    //         const mouseX = e.clientX;
    //         const mouseY = e.clientY;
    //         const leftX = mouseX - bounds.x;
    //         const topY = mouseY - bounds.y;
    //         const center = {
    //             x: leftX - bounds.width / 2,
    //             y: topY - bounds.height / 2
    //         }

        
    //         const distance = Math.sqrt(center.x**2 + center.y**2);
    //         card.style.transform = `
    //             scale3d(1.01, 1.01, 1.01)
    //             rotate3d(
    //             ${center.y / 100},
    //             ${-center.x / 100},
    //             0,
    //             ${Math.log(distance)* 2}deg
    //             )
    //         `;
    //     }

    //     card.addEventListener('mouseenter', () => {
    //         bounds = card.getBoundingClientRect();
    //         document.addEventListener('mousemove', rotateToMouse);
    //     });

    //     card.addEventListener('mouseleave', () => {
    //         document.removeEventListener('mousemove', rotateToMouse);
    //         card.style.transform = '';
    //         card.style.background = '';
    //     });
    // })
</script>

<template>
    <article class="case_card">
        <div class="case_card__cover" :style="`background: top center / cover no-repeat url(http://localhost:1337${props.case.attributes.screenshots.data[0].attributes.url})`"></div>
        <div class="case_card__service">
            <p>{{ props.case.attributes.service }}</p>
        </div>
        <h1 class="case_card__title arimo">
            {{ props.case.attributes.company_name }}
        </h1>
        <div class="case_card__description">
            <p>{{ props.case.attributes.company_type }}</p>
        </div>
        <img src="/icons/click.svg" alt="" class="case_card__icon">
    </article>
</template>

<style scoped lang="css">
    .case_card{
        position: relative;
        width: 512px;
        height: 100%;
        border-radius: 12px;
        background-color: var(--dark-grey-color);
        cursor: pointer;
        transition-duration: 300ms;
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        transform: rotate3d(0);
    }

    .case_card__cover{
        width: 100%;
        height: 40%;
        border-radius: 12px;
    }

    .case_card__service{
        margin-top: 8px;
        width: 100%;
        height: 42px;
        background-color: var(--grey-color);
        display: flex;
        align-items: center;
        padding: 0 16px;
    }

    .case_card__title{
        color: var(--white-color);
        text-transform: uppercase;
        font-weight: 400;
        margin: 24px 16px 12px;
    }

    .case_card__description{
        padding: 0 16px 16px 16px;
        height: 100%;
    }

    .case_card__description>p{
        line-height: 132%;
        text-overflow: ellipsis;
    }

    .case_card__icon{
        height: 48px;
        position: absolute;
        bottom: 16px;
        right: 16px;
    }

    .case_card:hover {
        transition-duration: 150ms;
        box-shadow: 0 5px 20px 5px #00000044;
    }

</style>