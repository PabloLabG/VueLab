import { defineStore } from 'pinia'
import { Member } from '~~/types';

export const useMemberListStore = defineStore('memberListStore', () => {
    const myMemberList = ref(<Member[]>[])
    return { myMemberList }
})