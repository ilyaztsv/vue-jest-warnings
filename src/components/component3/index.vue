<template>
  <div class="my-component">
    <p>{{views}}</p>
    <p>{{comments}}</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    views: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/variables';
@import '~styles/mixins';

.my-component {
  display: flex;
}
</style>
