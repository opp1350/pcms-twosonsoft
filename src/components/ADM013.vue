<template>
  <div class="contents-wrap">
    <!-- page title -->
    <pageTitle
      :pageTitle="pageTitle"
    ></pageTitle>
    <!-- table -->
    <div class="table-wrap mt-5">
      <h5 class="emphasis-text mb-2">{{ table.name }}</h5>
      <table class="grey-line-table--no-thead default-info-table" :class="{ 'grey-line-table--no-thead--read-only' : table.readOnly }">
        <colgroup>
          <col style="width:auto">
          <col style="width:930px">
        </colgroup>
        <tbody>
          <tr>
            <th class="text-left">{{ table.mainDocumentCode.title }}</th>
            <td>
              <span class="default-info-table__item">코드 : </span>
              <v-text-field
                v-model="table.mainDocumentCode.code"
                v-if="!table.readOnly"
                hide-details
                dense
                outlined
                class="default-info-table__item"
              ></v-text-field>
              <v-select
                v-if="table.readOnly"
                :items="searchFilterVal.selectItems"
                :value="searchFilterVal.selectBoxValue"
                dense
                outlined
                hide-details
                background-color="white"
                class="default-info-table__item ellipsis default-info-table__item--document-code d-inline-flex"
              ></v-select>
            </td>
          </tr>
          <tr>
            <th class="text-left">{{ table.mainDocumentName.title }}</th>
            <td>
              <span v-if="table.readOnly">{{ table.mainDocumentName.name }}</span>
              <v-text-field
                v-if="!table.readOnly"
                v-model="table.mainDocumentName.name"
                hide-details
                dense
                outlined
                class="default-info-table__item default-info-table__item--full-width"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <th class="text-left">등록일</th>
            <td>
              <v-menu
                v-model="table.mainDocRegistrationPeriod.datePickerShow"
                ref="datePicker"
                :close-on-content-click="false"
                :return-value.sync="table.mainDocRegistrationPeriod.date"
                transition="scale-transition"
                offset-y
                color="primary"
                max-width="323px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="table.mainDocRegistrationPeriod.date"
                    prepend-icon="mdi-calendar"
                    hide-details
                    dense
                    v-bind="attrs"
                    v-on="on"
                    class="d-inline-flex default-info-table__item registration-period-date-picker mt-0"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="table.mainDocRegistrationPeriod.date"
                  :readonly="table.readOnly"
                >
                  <v-spacer></v-spacer>
                  <div v-if="!table.readOnly">
                    <v-btn
                      text
                      color="blueGrey"
                      @click="table.mainDocRegistrationPeriod.datePickerShow = false"
                    >
                      취소
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.datePicker.save(table.mainDocRegistrationPeriod.date)"
                    >
                      확인
                    </v-btn>
                  </div>
                  <v-btn
                    text
                    color="primary"
                    @click="table.mainDocRegistrationPeriod.datePickerShow = false"
                    v-if="table.readOnly"
                  >
                    닫기
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </td>
          </tr>
          <tr>
            <th class="text-left">사용유무</th>
            <td>
              <v-radio-group
                v-model="table.radioGroup"
                :readonly="table.readOnly"
                row
                dense
                hide-details
                class="mt-0 default-info-table__item"
              >
                <v-radio
                  label="사용중"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="미사용"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>
            </td>
          </tr>
        </tbody>
      </table>
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
          등록
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
  computed: {
  },
  data: () => ({
    pageTitle: {
      pageTitleText: "코드 관리",
      infoPathList: [
        {text: "홈"},
        {text: "문서시스템관리"},
        {text: "코드 관리"}
      ]
    },
    searchFilterVal: {
      selectItems: [
        "112",
        "113",
        "114",
        "116",
        "117"
      ],
      selectBoxValue: "112",
    },
    table: {
      readOnly: false,
      name: "기본정보",
      mainDocumentName: {
        title: "문서명",
        name: "개인(신용) 정보의 수집·이용, 조회 및 제공에 관한 고객권리안내문"
      },
      mainDocumentCode: {
        title: "문서코드",
        code: "1234"
      },
      mainDocRegistrationPeriod : {
        date: new Date().toISOString().substr(0, 10),
        datePickerShow: false
      },
      radioGroup: "radio-1"
    }
  }),
  watch: {
  }
}
</script>