<template>
    <outro>
      <h1>Outro</h1>
      <h3>{{ title }}</h3>
      <ul>
        <li>Jean</li>
        <li>Karlo</li>
        <li>Nobre</li>

      
      </ul>
      </outro>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String
    }
  },
  data: () => ({}),
  computed: {},
  methods: {}
}
</script>