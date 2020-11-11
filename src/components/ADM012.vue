<template>
  <div class="contents-wrap">
    <!-- page title -->
    <pageTitle
      :pageTitle="pageTitle"
    ></pageTitle>

    <!-- table -->
    <div class="table-wrap mt-5">
      <div class="table-wrap__top-area">
        <div class="sub-text table-wrap__top-area__item">총 {{ this.tableData.length }}건</div>
      </div>
      <v-data-table
      :headers="headers"
      :items="tableData"
      class="grey-line-table"
      :footer-props='{
        showFirstLastPage: false,
        showCurrentPage: true,
        itemsPerPageText: "페이지 당 상품의 개수",
        itemsPerPageAllText: "전체",
        class: "text-left"
      }'
    >
      <template v-slot:item.data02="{ item }">
        <span class="ellipsis d-block text-left font-weight-medium" style="width: 630px;">{{ item.data02 }}</span>
      </template>
    </v-data-table>
    </div>

    <!-- btn area -->
    <div class="confirm-btn-area text-center">
      <div class="confirm-btn-area__item">
        <v-btn
          color="accent"
          large
          depressed
          class="font-weight-bold"
          width="130px"
          to="/PCMS/M03/ADM013"
        >
          코드신규등록
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import pageTitle from "../components/ui/pageTitle.vue"

export default {
  components: {
    pageTitle
  },
  methods: {
  },
  data: () => ({
    dragging: false,
    pageTitle: {
      pageTitleText: "코드 관리",
      infoPathList: [
        {text: "홈"},
        {text: "문서시스템관리"},
        {text: "코드 관리"}
      ]
    },
    headers: [
      {
        text: "구분",
        sortable: false,
        value: "data00",
        align: "center",
        width: "120px",
        class: ""
      },
      { 
        text: "구분코드", 
        sortable: false,
        value: "data01",
        align: "center",
        width: "130px",
        class: ""
      },
      { 
        text: "상품명", 
        sortable: false,
        value: "data02",
        align: "center",
        width: "668px",
        class: ""
      },
      { 
        text: "등록일", 
        sortable: false,
        value: "data03" ,
        align: "center",
        width: "170px",
        class: ""
      }
    ],
    tableData: [
      {
        data00: "110",
        data01: "12345",
        data02: "표지",
        data03: "2020.12.10"
      },
      {
        data00: "111",
        data01: "12345",
        data02: "목차",
        data03: "2020.12.10"
      },
      {
        data00: "112",
        data01: "12345",
        data02: "감사의 글",
        data03: "2020.12.10"
      },
      {
        data00: "113",
        data01: "12345",
        data02: "한눈에보는 가입부터 지급까지",
        data03: "2020.12.10"
      }
    ]
  })
}
</script>