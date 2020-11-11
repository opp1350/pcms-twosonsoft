<template>
  <div class="contents-wrap">
    <!-- page title -->
    <pageTitle
      :pageTitle="pageTitle"
    ></pageTitle>
    <!-- table -->
    <div class="table-wrap mt-5">
      <h5 class="emphasis-text mb-2">{{ table.name }}</h5>
      <table class="grey-line-table--no-thead default-info-table">
        <colgroup>
          <col style="width:auto">
          <col style="width:930px">
        </colgroup>
        <tbody>
          <tr>
            <th class="text-left">{{ table.mainProductName.title }}</th>
            <td>
              <v-text-field
                v-model="table.mainProductName.name"
                hide-details
                dense
                outlined
                class="default-info-table__item default-info-table__item--full-width"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <th class="text-left">{{ table.mainProductCode.title }}</th>
            <td>
              <span class="default-info-table__item">코드 : </span>
              <v-text-field
                v-model="table.mainProductCode.code"
                hide-details
                dense
                outlined
                class="default-info-table__item"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <th class="text-left">판매일</th>
            <td>
              <v-menu
                v-model="table.mainProductSalesPeriod.datePickerShow"
                ref="datePicker"
                :close-on-content-click="false"
                :return-value.sync="table.mainProductSalesPeriod.date"
                transition="scale-transition"
                offset-y
                color="primary"
                max-width="323px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateRangeText"
                    prepend-icon="mdi-calendar"
                    hide-details
                    dense
                    v-bind="attrs"
                    v-on="on"
                    class="d-inline-flex sales-period-date-picker default-info-table__item mt-0"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="table.mainProductSalesPeriod.date"
                  :no-title="true"
                  selectedItemsText=""
                  range
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="blueGrey"
                    @click="table.mainProductSalesPeriod.datePickerShow = false"
                  >
                    취소
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.datePicker.save(table.mainProductSalesPeriod.date)"
                  >
                    확인
                  </v-btn>
                </v-date-picker>
              </v-menu>
              <v-checkbox
                v-model="checkbox"
                label="종료일 미정시 체크"
                hide-details
                dense
                class="d-inline-flex default-info-table__item mt-0"
              ></v-checkbox>
            </td>
          </tr>
          <tr>
            <th class="text-left">구분</th>
            <td>구 통약관</td>
          </tr>
          <tr>
            <th class="text-left">주계약약관코드</th>
            <td>
              <span class="default-info-table__item">코드 : </span>
              <v-text-field
                v-model="table.termsCode"
                hide-details
                dense
                outlined
                class="default-info-table__item"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <th class="text-left">특별약관코드</th>
            <td>
              <v-btn
                color="secondary"
                depressed
                class="table-inner-btn"
                :width="104"
                :height="28"
                @click.stop="addRow"
                >
                코드추가
              </v-btn>
              <span v-if="rows.length <= 0"
              class="d-inline-block ml-2"
              style="position:relative;top:2px;">등록된 코드가 없습니다.</span>
              <div class="multiple-code"
              v-if="!rows.length <= 0">
                <div class="multiple-code__item input-title">코드 :</div>
                <div class="multiple-code__item input-wrap">
                  <div 
                  class="multiple-item"
                  v-for="row in rows" :key="row.id">
                    <v-text-field
                      v-model="row.input"
                      hide-details
                      dense
                      outlined
                      class="default-info-table__item"
                    ></v-text-field>
                    <button class="delete-btn" @click="removeRow(row)">
                      <v-icon>mdi-close-circle</v-icon>
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th class="text-left">가입자 유의사항</th>
            <td>
              <v-file-input
                v-model="table.files"
                color="primary"
                counter
                label=""
                placeholder="파일을 선택해주세요. (선택 가능한 파일유형 : doc, jpg, png)"
                outlined
                dense
                hide-details
                :show-size="1000"
                class="terms-guide"
              ></v-file-input>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 테이블 하단 버튼 영역 -->
      <div class="table-bottom-area">
        <v-btn
          color="primary"
          depressed
          class="table-bottom-area__item"
          >
          통약관생성
        </v-btn>
      </div>
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
          @click="$router.go(-1)"
        >
          저장
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
    addRow: function() {
      this.rows.push({id: this.newId });
    },
    removeRow: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1)
    }
  },
  computed: {
    dateRangeText () {
      return this.table.mainProductSalesPeriod.date.join(" ~ ")
    },
    newId(){
      return this.rows.length == 0 ? 1 : Math.max(...this.rows.map(r => r.id)) + 1
    }
  },
  data: () => ({
    rows:[],
    pageTitle: {
      pageTitleText: "통약관 관리",
      infoPathList: [
        {text: "홈"},
        {text: "문서제공 관리"},
        {text: "통약관 관리"}
      ]
    },
    checkbox: true, // 종료일 미정시 체크
    table: {
      mainProductSalesPeriod : {
        date: ["2020-09-10", "2020-09-20"],
        datePickerShow: false
      },
      name: "기본정보",
      mainProductName: {
        title: "상품명",
        name: ""
      },
      mainProductCode: {
        title: "상품코드",
        code: ""
      },
      termsCode: "",
      files:[]
    }
  }),
  watch: {
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.default-info-table {
  &__item {
    &.sales-period-date-picker {
      width: 230px;
    }
  }
  .multiple-code {
    font-size:0;
    margin-top: 12px;
    &__item {
      font-size: 14px;
      &.input-title {
        width: 34px;
        margin-right: 8px;
        float: left;
        line-height: 40px;
      }
      &.input-wrap {
        width: calc(100% - 42px);
        float: right;
        .multiple-item {
          display: inline-block;
          margin-right: 14px;
          margin-bottom: 16px;
          &:last-child,
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:nth-last-child(-n+4) {
            margin-bottom: 0;;
          }
          .delete-btn {
            margin-left: 4px;
          }
        }
      }
    }
  }
}
</style>