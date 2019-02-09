<template>
        <img
          :src="idItem"
          height="100%" width="100%">
</template>
<script type="text/javascript">
export default {
  name: 'AppCard',
  data: () => ({}),
  props: {
    idItem: {
      type: String,
      default: () => ('')
    },
  computed: {}
  }
}
</script>