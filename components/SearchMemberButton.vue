<template>
    <input type="text" v-model="myOrganization" />
    <button class="button" type="button" @click="searchOrganization">
        Search Organization
    </button>
</template>

<script setup lang="ts">
import { memberService } from '@/services/members'
import { storeToRefs } from 'pinia';
import { Member } from '~~/types';

/*
const props = withDefaults(defineProps<{
    organization: string
}>(), {
    organization: 'Lemoncode'
})
*/
//const myOrganization = ref('LemonCode');
const store = useSearchOrganizationStore();
const { myOrganization } = storeToRefs(store)

const $emit = defineEmits(['search-organization'])

const searchOrganization = async () => {
    //let memberList = <Member[]>[];
    let memberList: Member[] = []

    if (!myOrganization.value) {
        $emit('search-organization', memberList)
        return;
    }

    memberList = await memberService.getMembers(myOrganization.value);
    $emit('search-organization', memberList)
}
</script>
