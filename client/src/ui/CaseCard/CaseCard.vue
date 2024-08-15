<script setup lang="ts">
    import CaseAPI from '../../helpers/api/CasesAPI';
    const CaseAPIInstance = new CaseAPI();
    const caseList = CaseAPIInstance.getAllCases();
    console.log(caseList);
</script>

<template>
    <div class="case_card">
        <div class="case_card__cover"></div>
    </div>
</template>

<style scoped lang="css">

</style>