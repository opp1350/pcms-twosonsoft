<template>
  <div class="contents-wrap">
    <!-- page title -->
    <pageTitle
      :pageTitle="pageTitle"
    ></pageTitle>

    <!--검색필터 -->
    <searchFilter
      :searchFilter="searchFilterVal"
    ></searchFilter>
    <!-- table -->
    <div class="table-wrap mt-5">
      <div class="table-wrap__top-area">
        <v-btn
          color="primary"
          depressed
          class="table-wrap__top-area__item"
          to="/PCMS/M02/ADM009"
        >
          이전통약관생성
        </v-btn>
        <div class="sub-text table-wrap__top-area__item">총 {{ this.tableData.length }}건</div>
      </div>
      <v-data-table
      :headers="headers"
      :search="searchFilterVal.search"
      :items="tableData"
      item-key="data00"
      no-results-text="검색 결과가 없습니다."
      class="grey-line-table"
      :footer-props="{
        showFirstLastPage: false,
        showCurrentPage: true,
        itemsPerPageText: '페이지 당 상품의 개수',
        itemsPerPageAllText: '전체',
        class: 'text-left'
      }"
    >
      <template v-slot:item.data02="{ item }">
        <router-link to="/PCMS/M02/ADM007" class="ellipsis d-block text-left" style="width: 290px;">{{ item.data02 }}</router-link>
      </template>
      <template v-slot:item.data06="{ item }">
        <span v-if="item.created" >O</span>
        <span v-if="!item.created" >X</span>
      </template>
      <template v-slot:item.data07="{ item }">
        <div v-if="item.created" >생성완료</div>
        <v-btn
          v-else
          color="secondary"
          depressed
          class="table-inner-btn"
          :width="80"
          :height="28"
        >생성
        </v-btn>
      </template>
    </v-data-table>
    </div>

  </div>
</template>
<script>
import searchFilter from "../components/ui/searchFilter.vue"
import pageTitle from "../components/ui/pageTitle.vue"

export default {
  components: {
    searchFilter,
    pageTitle
  },
  methods: {
  },
  data: () => ({
    pageTitle: {
      pageTitleText: "통약관 관리",
      infoPathList: [
        {text: "홈"},
        {text: "문서제공 관리"},
        {text: "통약관 관리"}
      ]
    },
    searchFilterVal: {
      date: ["2020-10-10", "2020-12-20"], // 기본 날짜
      datePicker: false, // date picker show
      selectItems: [
        "전체",
        "상품코드",
        "상품명",
        "주계약",
        "상품상태"
      ],
      selectBoxValue: "전체",
      search: ""
    },
    headers: [
      {
        text: "구분",
        sortable: false,
        value: "data00",
        align: "center",
        width: "60px",
        class: ""
      },
      { 
        text: "상품코드", 
        sortable: false,
        value: "data01",
        align: "center",
        width: "80px",
        class: ""
      },
      { 
        text: "상품명", 
        sortable: false,
        value: "data02",
        align: "center",
        width: "310px",
        class: ""
      },
      { 
        text: "주계약코드",
        sortable: false,
        value: "data03" ,
        align: "center",
        width: "80px",
        class: ""
      },
      { 
        text: "판매기간", 
        sortable: false,
        value: "data04" ,
        align: "center",
        width: "130px",
        class: ""
      },
      { 
        text: "상품상태", 
        sortable: false,
        value: "data05" ,
        align: "center",
        width: "70px",
        class: ""
      },
      { 
        text: "파일유무", 
        sortable: false,
        value: "data06" ,
        align: "center",
        width: "70px",
        class: ""
      },
      { 
        text: "상태", 
        sortable: false,
        value: "data07" ,
        align: "center",
        width: "100px",
        class: ""
      },
      { 
        text: "구분", 
        sortable: false,
        value: "data08" ,
        align: "center",
        width: "88px",
        class: ""
      }
    ],
    tableData: [
      {
        data00: "110",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "등록완료",
        created: false, // 파일 생성안됨
        data08: "구통약관"
      },
      {
        data00: "112",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "등록완료",
        created : true, // 파일 생성완료
        data08: ""
      },
      {
        data00: "114",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "등록완료",
        created : true, // 파일 생성완료
        data08: ""
      },
      {
        data00: "113",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "등록완료",
        created : false, // 파일 생성완료
        data08: ""
      }
    ]
  })
}
</script>