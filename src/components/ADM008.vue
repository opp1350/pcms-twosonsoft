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
    </v-data-table>
    </div>

  </div>
</template>
<script>
import searchFilter from '../components/ui/searchFilter.vue'
import pageTitle from '../components/ui/pageTitle.vue'

export default {
  components: {
    searchFilter,
    pageTitle
  },
  methods: {
  },
  data: () => ({
    pageTitle: {
      pageTitleText: "개인화약관 발송내역",
      infoPathList: [
        {text: "홈"},
        {text: "문서제공 관리"},
        {text: "개인화약관 발송내역"}
      ]
    },
    searchFilterVal: {
      date: ["2020-10-10", "2020-12-20"], // 기본 날짜
      datePicker: false, // date picker show
      selectItems: [
        "전체",
        "요청증권코드",
        "상품코드",
        "상품명",
        "주계약",
        "상품상태"
      ],
      selectBoxValue: "요청증권코드",
      search: ""
    },
    headers: [
      {
        text: '구분',
        sortable: false,
        value: 'data00',
        align: 'center',
        width: '60px',
        class: ''
      },
      { 
        text: '요청증권', 
        sortable: false,
        value: 'data01',
        align: 'center',
        width: '108px',
        class: ''
      },
      { 
        text: '상품코드', 
        sortable: false,
        value: 'data02',
        align: 'center',
        width: '70px',
        class: ''
      },
      { 
        text: '상품명', 
        sortable: false,
        value: 'data03',
        align: 'center',
        width: '360px',
        class: ''
      },
      { 
        text: '주계약코드',
        sortable: false,
        value: 'data04' ,
        align: 'center',
        width: '80px',
        class: ''
      },
      { 
        text: '발송요청', 
        sortable: false,
        value: 'data05' ,
        align: 'center',
        width: '120px',
        class: ''
      },
      { 
        text: '발송', 
        sortable: false,
        value: 'data06' ,
        align: 'center',
        width: '120px',
        class: ''
      },
      { 
        text: '상태', 
        sortable: false,
        value: 'data07' ,
        align: 'center',
        width: '90px',
        class: ''
      }
    ],
    tableData: [
      {
        data00: '110',
        data01: 'A121231234b',
        data02: '12345',
        data03: '희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)',
        data04: '12355',
        data05: '2020.09.21.11.30',
        data06: '2020.09.21.11.30',
        data07: '발송완료'
      },
      {
        data00: '112',
        data01: 'A121231234b',
        data02: '12345',
        data03: '희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)',
        data04: '12355',
        data05: '2020.09.21.11.30',
        data06: '2020.09.21.11.30',
        data07: '발송완료'
      },
      {
        data00: '114',
        data01: 'A121231234b',
        data02: '12345',
        data03: '희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)',
        data04: '12355',
        data05: '2020.09.21.11.30',
        data06: '2020.09.21.11.30',
        data07: '발송완료'
      },
      {
        data00: '116',
        data01: 'A121231234b',
        data02: '12345',
        data03: '희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)',
        data04: '12355',
        data05: '2020.09.21.11.30',
        data06: '2020.09.21.11.30',
        data07: '발송완료'
      },
      {
        data00: '186',
        data01: 'A121231234b',
        data02: '12345',
        data03: '희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)',
        data04: '12355',
        data05: '2020.09.21.11.30',
        data06: '2020.09.21.11.30',
        data07: '발송완료'
      }
    ]
  }),
  watch: {
    selected: {
      handler: function () {
        if(this.selected.length > 0) {
          this.modelBtnDisabled = false
        } else {
          this.modelBtnDisabled = true
        }
      }
    }
  }
}
</script>