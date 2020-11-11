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
          <!-- <v-btn
            color="primary"
            depressed
            class="table-wrap__top-area__item"
            to="/PCMS/M01/ADM004"
          >
            상품등록
          </v-btn> -->
        <div class="sub-text table-wrap__top-area__item">총 {{ this.tableData.length }}건</div>
      </div>
      <v-data-table
      :headers="headers"
      :search="searchFilterVal.search"
      :items="tableData"
      item-key="data00"
      no-results-text="검색 결과가 없습니다."
      class="grey-line-table"
      :footer-props='{
        showFirstLastPage: false,
        showCurrentPage: true,
        itemsPerPageText: "페이지 당 상품의 개수",
        itemsPerPageAllText: "전체",
        class: "text-left"
      }'
    >
      <template v-slot:item.data06="{ item }">
        <div v-if="item.state === 1">
          <div class="table-inner-btn--text">문서재등록완료</div>
          <v-btn
            color="error"
            depressed
            class="table-inner-btn"
            :width="104"
            :height="28"
            @click.stop="dialog = true"
          >재검수반려
          </v-btn>
        </div>
        <div v-if="item.state === 2">
          <div class="table-inner-btn--text">문서등록완료</div>
          <v-btn
            color="error"
            depressed
            class="table-inner-btn"
            :width="104"
            :height="28"
            @click.stop="dialog = true"
          >검수반려
          </v-btn>
        </div>
        <div v-if="item.state === 3">
          <div class="table-inner-btn--text">문서등록완료</div>
          <div class="table-inner-btn--text">검수완료</div>
        </div>
        <div v-if="item.state === 4">
          <div class="table-inner-btn--text">문서재등록완료</div>
          <div class="table-inner-btn--text">재검수완료</div>
        </div>
      </template>
    </v-data-table>
    </div>

    <!-- dialog : 검수 반려 확인 -->
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="620"
      >
        <v-card class="default-dialog">
          <v-card-title>
            검수자 반려 내용 확인
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="inspector-reply">
              <dl class="item">
                <dt class="item__title">검수자</dt>
                <dd class="item__contents">
                  <span class="inspector-name" v-for="item in inspectorList" :key="item.items">{{ item.name }}</span>
                </dd>
              </dl>
              <dl class="item">
                <dt class="item__title item__title--full-width">반려사유</dt>
                <dd class="item__contents reply-wrapper">
                  <div v-for="item in inspectorList" :key="item.items">{{ item.reply }}</div>
                </dd>
              </dl>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              depressed
              :width="100"
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
      pageTitleText: "검수(결재)내역 관리",
      infoPathList: [
        {text: "홈"},
        {text: "상품관리"},
        {text: "검수(결재)내역 관리"}
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
    dialog: false, // dialog show
    singleSelect: false, // tableSelect
    selected: [], // 선택한 테이블 row
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
        width: "90px",
        class: ""
      },
      { 
        text: "상품명",
        sortable: false,
        value: "data02" ,
        align: "center",
        width: "360px",
        class: ""
      },
      { 
        text: "주계약코드", 
        sortable: false,
        value: "data03" ,
        align: "center",
        width: "90px",
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
        width: "87px",
        class: ""
      },
      { 
        text: "진행상태", 
        sortable: false,
        value: "data06" ,
        align: "center",
        width: "211px",
        class: ""
      }
    ],
    tableData: [
      {
        data00: "110",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)테스트",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "판매예정",
        state: 2
      },
      {
        data00: "111",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)테스트",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "판매예정",
        state: 1
      },
      {
        data00: "131",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)테스트",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "판매예정",
        state: 3
      },
      {
        data00: "132",
        data01: "12345",
        data02: "희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)테스트",
        data03: "12355",
        data04: "2020-05-14 ~ 현재",
        data05: "판매예정",
        state: 4
      }
    ],
    inspectorList: [
      {
        department00: "기획부",
        department01: "기획1팀",
        name: "홍길동 책임",
        reply: "특약1.doc 파일이 다름."
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