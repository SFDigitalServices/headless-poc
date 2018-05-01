<template>
  <div>
  This is a service start page
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    data() {
      return {
        nodeQuery: {},
      }
    },
    apollo: {
      nodeById: gql`query {
        nodeById(
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
    name: "servicePage"
  }
</script>

<style scoped>
</style>
