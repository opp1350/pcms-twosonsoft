<template>
  <!-- page title -->
  <div class="page-title">
    <h1 class="page-title__title">{{ pageTitle.pageTitleText }}</h1>
    <ul class="page-title__info-path">
      <li v-for="item in pageTitle.infoPathList" :key="item.items">{{ item. text }}</li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'pageTitle',
  components: {
  },
  methods: {
  },
  props: {
    pageTitle: {
      type: Object,
      default: function () {
        return {
          pageTitleText: "메인타이틀",
          infoPathList: [
            {
              text: "경로1"
            },
            {
              text: "경로2"
            },
            {
              text: "경로3"
            }
          ]
        }
      }
    }
  },
  data: () => ({
  })
}
</script>