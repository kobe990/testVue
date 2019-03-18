<template>
  <div @click="dialog" class="parent"
  >
    <div class="sub">
     58
    </div>
  </div>
</template>
<script>

export default {
  name: 'test',

  methods: {
    dialog () {
      alert('test')
    },
  },
}
</script>

<style lang="less">
.parent {
  background: yellow;
  height: 600px;
}
.sub {
  background: red;
  height: 200px;
}
</style>
