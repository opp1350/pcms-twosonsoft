<template>
  <div class="contents-wrap ADM004">
    <!-- page title -->
    <pageTitle
      :pageTitle="pageTitle"
    ></pageTitle>

    <!-- table -->
    <productInfoTable
      :table="table"
    ></productInfoTable>
    <!-- 테이블 하단 버튼 영역 -->
    <div class="table-bottom-area">
      <v-btn
        color="primary"
        depressed
        outlined
        class="table-bottom-area__item"
        >
        임시저장
      </v-btn>
      <v-btn
        color="primary"
        depressed
        class="table-bottom-area__item"
        >
        파일 일괄 업로드
      </v-btn>
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
          height="50px"
          to="/PCMS/M01/ADM003"
        >
          확인
        </v-btn>
        <v-btn
          color="accent"
          large
          depressed
          class="font-weight-bold"
          width="130px"
          height="50px"
          to="/PCMS/M01/ADM003"
        >
          문서등록
        </v-btn>
        <v-btn
          color="accent"
          disabled
          large
          depressed
          class="font-weight-bold"
          width="130px"
          height="50px"
          to="/PCMS/M01/ADM003"
        >
          검수요청
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import pageTitle from '../components/ui/pageTitle.vue'
import productInfoTable from '../components/ui/productInfoTable.vue'

export default {
  components: {
    pageTitle,
    productInfoTable
  },
  methods: {
  },
  computed: {
  },
  data: () => ({
    pageTitle: {
      pageTitleText: "상품등록 및 결재요청",
      infoPathList: [
        {text: "홈"},
        {text: "상품관리"},
        {text: "상품등록 및 결재요청"}
      ]
    },
    table: {
      readOnly: false,
      name: "기본정보",
      mainProductName: {
        title: "상품명",
        name: "희망사랑 암보험5.0(무배당)희망사랑 암보험5.0(무배당)"
      },
      mainProductCode: {
        title: "상품코드",
        code: "1234"
      },
      mainProductSalesPeriod : {
        date: ["2020-09-10", "2020-09-20"],
        datePickerShow: false
      },
      tr: [
        {
          th: "감사의 글",
          inputVal: "11220",
          docName: "한눈에보는 가입부터 지급까지한눈에보는 가입부터 지급까지한눈에보는 가입부터 지급까지한눈에보는 가입부터 지급까지한눈에보는 가입부터 지급까지.doc",
          files:[]
        },
        {
          th: "보험약관 쉽게 이해하기",
          inputVal: "110",
          docName: "보험약관 쉽게 이해하기.doc",
          files:[]
        },
        {
          th: "가입자 유의사항",
          inputVal: "110",
          docName: "유의사항.doc",
          files:[]
        },
        {
          th: "주요 보험용어 해설",
          inputVal: "110",
          docName: "주요 보험용어 해설.doc",
          files:[]
        },
        {
          th: "한눈에보는 가입부터 지급까지",
          inputVal: "110",
          docName: "한눈에보는 가입부터 지급까지.doc",
          files:[]
        },
        {
          th: "주계약약관",
          inputVal: "110",
          docName: "약관이해.doc",
          files:[]
        },
        {
          th: "특별약관",
          inputVal: "12210",
          docName: "보장특약약관01.doc",
          files:[],
          multipleRowShow: true,
          multipleRow: [
            {
              inputVal: "1233213",
              docName: "보장특약약관02.doc",
              files:[]
            }
          ]
        },
        {
          th: "산출방법서",
          inputVal: "1810",
          docName: "산출방법서.doc",
          files:[]
        },
        {
          th: "사업방법서",
          inputVal: "15510",
          docName: "사업방법서.doc",
          files:[]
        },
        {
          th: "예규",
          inputVal: "1140",
          docName: "예규.doc",
          files:[]
        },
        {
          th: "요약서",
          inputVal: "1310",
          docName: "요약서.doc",
          files:[]
        },
        {
          th: "부록",
          inputVal: "1223110",
          docName: "부록.doc",
          files:[]
        }
      ]
    }
  }),
  watch: {
  }
}
</script>