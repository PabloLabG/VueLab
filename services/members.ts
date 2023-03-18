import { Member, MemberDetail } from '~~/types';

export const memberService = {
  async getMembers(organization: string) {
    const members: Member[] = await fetch(`https://api.github.com/orgs/${organization}/members`).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          return [];
        }
      }
    )

    return members as Member[]
  },

  async getMembersFetchNuxt(organization: string) {
    const members: Member[] = await $fetch<Member[]>(`https://api.github.com/orgs/${organization}/members`)

    return members as Member[]
  },

  async getMemberDetails(login: string) {
    const memberDetail: MemberDetail = await fetch(`https://api.github.com/users/${login}`).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      }
    )

    return memberDetail as MemberDetail
  },
}