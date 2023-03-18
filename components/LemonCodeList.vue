<template>
  <div>
    <h1>
      <p>Listado de GitHub.</p>
    </h1>
    <SearchMemberButton @search-organization="$event => searchOrg($event)" />

    <ul class="member-list">
      <div v-if="myMemberList?.length == 0">NO hay datos.</div>

      <li v-for="member in myMemberList" :key="member.id">
        <NuxtLink :to="`/member/${member.login}`">
          <div class="card">
            <img :src="member.avatar_url" alt="Avatar" style="width:100%">
            <div class="container">
              <h4><b>{{ member.login }}</b></h4>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { memberService } from '@/services/members'
import { Member } from '~~/types';
import { storeToRefs } from 'pinia';

const memberList = ref<Member[]>([]);
memberList.value = await memberService.getMembersFetchNuxt('LemonCode');
//const memberList = ref<Member[]>([]);

const store = useMemberListStore();
const { myMemberList } = storeToRefs(store)

const searchOrg = (organization: Member[]) => {

  if (!organization) return [];
  myMemberList.value = organization
}

</script>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.member-list {
  padding: 0;
  width: 250px;

  li {
    margin-bottom: 2em;
  }
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
