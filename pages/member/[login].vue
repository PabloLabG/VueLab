<template>
    <NuxtLink to="/" class="back">⬅️ Go back</NuxtLink>
    <article>
        <div>
            <img :src="memberDetail?.avatar_url" alt="" />
        </div>
        <div v-if="memberDetail">
            <h1>{{ memberDetail.name }}</h1>
            <h1>{{ memberDetail.company }}</h1>
        </div>
    </article>
</template>
<script setup lang="ts">
import { memberService } from '~~/services/members'
import { MemberDetail } from '~~/types'

const route = useRoute()
const login = route.params.login as string

const { data: memberDetail } = useAsyncData<MemberDetail>(() =>
    memberService.getMemberDetails(login)
)
</script>
<style scoped>
.back {
    display: block;
    margin: 1rem 0;
}
</style>