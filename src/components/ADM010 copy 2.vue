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
      :items="tableData"
      :search="searchFilterVal.search"
      no-results-text="검색 결과가 없습니다."
      class="grey-line-table test-table"
      :footer-props='{
        showFirstLastPage: false,
        showCurrentPage: true,
        itemsPerPageText: "페이지 당 상품의 개수",
        itemsPerPageAllText: "전체",
        class: "text-left"
      }'
    >
      <template v-slot:item.handler>
        <span class="handle">::</span>
      </template>
      <template v-slot:item.data02="{ item }">
        <span class="ellipsis d-block text-left" style="width: 530px;">{{ item.data02 }}</span>
      </template>
    </v-data-table>
    </div>
  </div>
</template>
<script>
import searchFilter from "../components/ui/searchFilter.vue"
import pageTitle from "../components/ui/pageTitle.vue"
import Sortable from "sortablejs"

export default {
  order: 8,
  components: {
    searchFilter,
    pageTitle
  },
  methods: {
  },
  mounted() {
    let table = document.querySelector(".grey-line-table tbody");
    const _self = this;
    Sortable.create(table, {
      handle: ".handle",
      onEnd({ newIndex, oldIndex }) {
        const rowSelected = _self.tableData.splice(oldIndex, 1)[0];
        _self.tableData.splice(newIndex, 0, rowSelected);
      }
    })
  },
  data: () => ({
    dragging: false,
    pageTitle: {
      pageTitleText: "문서목록관리",
      infoPathList: [
        {text: "홈"},
        {text: "문서시스템관리"},
        {text: "문서목록관리"}
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
        text: "",
        sortable: false,
        align: "center",
        value: "handler",
        width: "30px",
        class: ""
      },
      {
        text: "구분",
        sortable: false,
        value: "data00",
        align: "center",
        width: "80px",
        class: ""
      },
      { 
        text: "구분코드", 
        sortable: false,
        value: "data01",
        align: "center",
        width: "120px",
        class: ""
      },
      { 
        text: "상품명", 
        sortable: false,
        value: "data02",
        align: "center",
        width: "560px",
        class: ""
      },
      { 
        text: "상품상태",
        sortable: false,
        value: "data03" ,
        align: "center",
        width: "100px",
        class: ""
      },
      { 
        text: "등록일", 
        sortable: false,
        value: "data04" ,
        align: "center",
        width: "170px",
        class: ""
      },
      { 
        text: "출력순서", 
        sortable: false,
        value: "data05" ,
        align: "center",
        width: "90px",
        class: ""
      }
    ],
    tableData: [
      {
        data00: "110",
        data01: "12345",
        data02: "표지",
        data03: "사용중",
        data04: "2020.12.10"
      },
      {
        data00: "112",
        data01: "12345",
        data02: "목차",
        data03: "사용중",
        data04: "2020.12.10"
      },
      {
        data00: "114",
        data01: "12345",
        data02: "개인(신용) 정보의 수집·이용, 조회 및 제공에 관한 고객권리안내문",
        data03: "사용중",
        data04: "2020.12.10"
      },
      {
        data00: "113",
        data01: "12345",
        data02: "주계약약관",
        data03: "사용중",
        data04: "2020.12.10"
      },
      {
        data00: "116",
        data01: "12345",
        data02: "특별약관",
        data03: "사용중",
        data04: "2020.12.10"
      },
      {
        data00: "115",
        data01: "12345",
        data02: "산출방법서",
        data03: "사용중",
        data04: "2020.12.10"
      }
    ]
  })
}
</script>
<style lang="scss">
.handle {
  cursor: move !important;
  cursor: -webkit-grabbing !important;
}
.test-table {
  tr {
    counter-increment: rowNumber;
  }
  tr {
    td {
      &:last-child {
        &::before {
          content: counter(rowNumber);
        }
      }
    }
  }
}
</style>