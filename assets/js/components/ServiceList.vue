<template>
  <div>
    <p>This is the service list vue component</p>
    <div>
      <ul>
        <li v-for="entity in nodeQuery.entities">
          <router-link :to="{
            name: 'ServicePage',
            params: {id: entity.entityId} }">{{ entity.entityLabel }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    apollo: {
      nodeQuery: gql`query {
        nodeQuery(
          filter:{
            conditions:{
              field: "type",
              value: "service_page"
            }
          }
        ) {
          count,
          entities {
            entityLabel
            entityUuid
            entityChanged
            entityId
            entityCreated
          }
        }
      }`
    },
    data() {
      return {
        nodeQuery: {},
      }
    },
    name: "serviceList"
  }
</script>

<style scoped>
  p {
    background-color: #aaa;
  }
</style>
