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
            @click.stop="dialog = true"
            :disabled="modelBtnDisabled"
          >
            상품문서다운로드
          </v-btn>
        <div class="sub-text table-wrap__top-area__item">총 {{ this.tableData.length }}건</div>
      </div>
      <v-data-table
      v-model="selected"
      :single-select="singleSelect"
      :headers="headers"
      :search="searchFilterVal.search"
      :items="tableData"
      item-key="data00"
      show-select
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
        <router-link to="/PCMS/M01/ADM002">{{ item.data02 }}</router-link>
      </template>
    </v-data-table>
    </div>

    <!-- dialog -->
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="350"
      >
        <v-card>
          <v-card-title class="headline">
            상품문서다운로드
          </v-card-title>
          <v-card-text>
            선택하신 문서 {{ this.selected.length }}개를 다운로드 받으시겠습니까?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="bluegrey"
              text
              @click="dialog = false"
            >
              취소
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
    modelBtnDisabled: true, // 문서다운로드버튼 disable, false 시 클릭 가능
    pageTitle: {
      pageTitleText: "상품관리",
      infoPathList: [
        {text: "홈"},
        {text: "상품관리"},
        {text: "상품목록 조회"}
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
        "상품상태",
        "텍스트가 길어질 경우 말줄임"
      ],
      selectBoxValue: "전체",
      search: ""
    },
    dialog: false, // dialog show
    singleSelect: false, // tableSelect
    selected: [], // 선택한 테이블 row
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
        text: '상품코드', 
        sortable: false,
        value: 'data01',
        align: 'center',
        width: '90px',
        class: ''
      },
      { 
        text: '상품명',
        sortable: false,
        value: 'data02' ,
        align: 'center',
        width: '450px',
        class: ''
      },
      { 
        text: '주계약코드', 
        sortable: false,
        value: 'data03' ,
        align: 'center',
        width: '90px',
        class: ''
      },
      { 
        text: '판매기간', 
        sortable: false,
        value: 'data04' ,
        align: 'center',
        width: '198px',
        class: ''
      },
      { 
        text: '상품상태', 
        sortable: false,
        value: 'data05' ,
        align: 'center',
        width: '90px',
        class: ''
      },
    ],
    tableData: [
      {
        data00: '110',
        data01: '12345',
        data02: '희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)테스트',
        data03: '12355',
        data04: '2020-05-14 ~ 현재',
        data05: '판매예정',
      },
      {
        data00: '112',
        data01: '12346',
        data02: '희망사랑 암보험5.0(무배당)랄랄',
        data03: '12335',
        data04: '2020-11-14 ~ 현재',
        data05: '판매예정',
      },
      {
        data00: '114',
        data01: '12346',
        data02: '희망사랑 암dd보험5.0(무배당)마테차',
        data03: '12335',
        data04: '2020-11-14 ~ 현재',
        data05: '판매예정',
      },
      {
        data00: '117',
        data01: '12346',
        data02: '희망사랑 암dd보험5.0(무배당)계란',
        data03: '12335',
        data04: '2020-11-14 ~ 현재',
        data05: '판매예정',
      },
      {
        data00: '118',
        data01: '12346',
        data02: '희망사랑 암dd보험5.0(무배당)계란',
        data03: '12335',
        data04: '2020-11-14 ~ 현재',
        data05: '판매예정',
      },
      {
        data00: '119',
        data01: '12346',
        data02: '희망사랑 암dd보험5.0(무배당)계란',
        data03: '12335',
        data04: '2020-11-14 ~ 현재',
        data05: '판매예정',
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