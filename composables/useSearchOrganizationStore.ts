import { defineStore } from 'pinia'

export const useSearchOrganizationStore = defineStore('memberStore', () => {
    const myOrganization = ref('LemonCode')
    return { myOrganization }
})