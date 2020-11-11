<template>
  <!-- table -->
  <div class="table-wrap mt-5">
    <h5 class="emphasis-text mb-2">{{ table.name }}</h5>
    <table class="grey-line-table--no-thead default-info-table" :class="{ 'grey-line-table--no-thead--read-only' : table.readOnly }">
      <colgroup>
        <col style="width:auto">
        <col :style="table.readOnly ? 'width:930px;' : 'width:339px;'">
        <col v-if="!table.readOnly" style="width:590px;">
      </colgroup>
      <tbody>
        <tr>
          <th class="text-left">{{ table.mainProductName.title }}</th>
          <td :colspan="colspanNum">
            <span v-if="table.readOnly">{{ table.mainProductName.name}}</span>
            <v-text-field
              v-if="!table.readOnly"
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
          <td :colspan="colspanNum">
            <span class="default-info-table__item">코드 : </span>
            <v-text-field
              v-model="table.mainProductCode.code"
              :readonly="table.readOnly"
              hide-details
              dense
              outlined
              class="default-info-table__item"
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <th class="text-left">판매일</th>
          <td :colspan="colspanNum">
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
                :readonly="table.readOnly"
                range
              >
                <v-spacer></v-spacer>
                <div v-if="!table.readOnly">
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
                </div>
                <v-btn
                  text
                  color="primary"
                  @click="table.mainProductSalesPeriod.datePickerShow = false"
                  v-if="table.readOnly"
                >
                  닫기
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-checkbox
              v-model="checkbox"
              label="종료일 미정시 체크"
              :disabled="table.readOnly"
              hide-details
              dense
              class="d-inline-flex default-info-table__item mt-0"
            ></v-checkbox>
          </td>
        </tr>
        <template v-for="item in table.tr">
          <tr :key="item.items">
            <th 
            :rowspan="item.multipleRowShow ? item.multipleRow.length + 1 : '1' "
            class="text-left">{{ item.th }}</th>
            <td>
              <span class="default-info-table__item">코드 : </span>
              <v-text-field
                v-model="item.inputVal"
                :readonly="table.readOnly"
                hide-details
                dense
                outlined
                class=" d-inline-block default-info-table__item"
              ></v-text-field>
              <span v-if="table.readOnly" class="sub-text ellipsis-text doc-name default-info-table__item">{{ item.docName }}</span>
            </td>
            <td v-if="!table.readOnly">
              <v-file-input
                v-model="item.files"
                color="primary"
                counter
                label=""
                placeholder="등록된 파일이 없습니다."
                outlined
                dense
                hide-details
                :show-size="1000"
              ></v-file-input>
            </td>
          </tr>
          <template v-if="item.multipleRowShow">
            <tr v-for="item in item.multipleRow" :key="item.items">
              <td :key="item.items">
                <span class="default-info-table__item">코드 : </span>
                <v-text-field
                  v-model="item.inputVal"
                  :readonly="table.readOnly"
                  hide-details
                  dense
                  outlined
                  class=" d-inline-block default-info-table__item"
                ></v-text-field>
                <span v-if="table.readOnly" class="sub-text ellipsis-text doc-name default-info-table__item">{{ item.docName }}</span>
              </td>
              <td v-if="!table.readOnly">
                <v-file-input
                  v-model="item.files"
                  color="primary"
                  counter
                  label=""
                  placeholder="등록된 파일이 없습니다."
                  outlined
                  dense
                  hide-details
                  :show-size="1000"
                ></v-file-input>
              </td>
            </tr>
          </template>
        </template>
        <tr v-if="!table.readOnly">
          <th class="text-left"
            rowspan="2"
          >검수요청</th>
          <td :colspan="colspanNum">
            <v-btn
              color="primary"
              depressed
              class="table-inner-btn"
              :width="104"
              :height="28"
              @click.stop="inspectorDialog.dialog = true"
              >
              <span v-if="!inspectorDialog.showMem">검수자 선택</span>
              <span v-else>검수자 재선택</span>
            </v-btn>
          </td>
        </tr>
        <tr v-if="!table.readOnly">
          <td :colspan="colspanNum">
            <div v-if="inspectorDialog.showMem">
              <span class="selected-member" v-for="item in inspectorDialog.selectedMember" :key="item.items">{{ item.name }} {{ item.rank }}</span>
            </div>
            <div v-else>
              선택된 검수자가 없습니다. 검수자를 선택해주세요.
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- dialog : 검수자 선택 -->
    <v-row justify="center">
      <v-dialog
        v-model="inspectorDialog.dialog"
        persistent
        max-width="620"
      >
        <v-card class="default-dialog">
          <!-- title -->
          <v-card-title>
            검수자 선택
          </v-card-title>
          <v-divider></v-divider>
          <!-- contents -->
          <v-card-text>
            <div class="select-inspector-wrapper">
              <div class="search-filter">
                <v-select
                  :items="inspectorDialog.searchFilter.selectItems"
                  :value="inspectorDialog.searchFilter.selectBoxValue"
                  dense
                  outlined
                  hide-details
                  background-color="white"
                  class="search-filter__item ellipsis"
                ></v-select>
                <v-text-field
                  v-model="inspectorDialog.searchFilter.search"
                  hide-details
                  dense
                  outlined
                  append-icon="mdi-magnify"
                  background-color="white"
                  class="search-filter__item"
                  placeholder="검색어를 입력해주세요."
                ></v-text-field>
                <v-btn
                  depressed
                  color="primary"
                  class="search-filter__item"
                  height="40"
                >검색</v-btn>
              </div>
              <v-card
                outlined
                class="select-inspector"
              >
                <v-list
                  class="select-inspector__item select-inspector__item--select-department"
                >
                  <v-list-group
                    :value="false"
                    v-for="item in inspectorDialog.departmentList" :key="item.items"
                  >
                    <template v-slot:activator>
                      <v-list-item-title
                      :class="{'icon-none' : item.subTeamList.length <= 0 }"
                      >{{ item.teamName }}</v-list-item-title>
                    </template>
                      <v-list-item
                        v-for="(item, index) in item.subTeamList"
                        :key="index"
                        link
                      >
                        <v-list-item-title v-text="item">
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                  </v-list-group>
                </v-list>
                <v-list
                  class="select-inspector__item select-inspector__item--select-member"
                >
                  <v-list-item-group
                    v-model="inspectorDialog.selectedMember"
                    multiple
                    dense
                  >
                    <v-list-item
                      v-for="item in inspectorDialog.memberList" :key="item.value"
                      :value="item"
                      link
                    >
                      <template v-slot:default="{ active }"
                      >
                        <v-list-item-action>
                          <v-checkbox
                            :input-value="active"
                            color="primary"
                          ></v-checkbox>
                        </v-list-item-action>
            
                        <v-list-item-content>
                          <v-list-item-title>{{ item.name }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                  </v-list-item-group>
                </v-list>
              </v-card>
            </div>
          </v-card-text>
          <!-- bottom Area -->
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              depressed
              :width="100"
              @click.stop="inspectorDialog.dialog = false, showSelectedMember()"
            >
              선택
            </v-btn>
            <v-btn
              color="blueGrey"
              dark
              depressed
              :width="100"
              @click="inspectorDialog.dialog = false"
            >
              취소
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "productInfoTable",
  data: () => ({
    // 검색 필터
    searchFilter: {
      selectItems: [
        "전체",
        "부서",
        "이름"
      ],
      selectBoxValue: "전체",
      search: "",
    },
    // 검수자 선택 팝업 (props로 옮기면 데이터를 각 컴포넌트에서 변경 가능)
    inspectorDialog: {
      dialog: false, // show
      // 검색 필터
      searchFilter: {
        selectItems: [
          "전체",
          "부서",
          "이름"
        ],
        selectBoxValue: "전체",
        search: "",
      },
      // 선택된 검수자 array
      selectedMember: [
      ],
      showMem: false,
      departmentList: [
        {
          teamName: "SI사업본부",
          subTeamList: [
            "SI 1팀",
            "SI 2팀",
            "SI 3팀"
          ]
        },
        {
          teamName: "전략기획본부",
          subTeamList: [
          ]
        },
        {
          teamName: "영업팀",
          subTeamList: [
            "영업 1팀",
            "영업 2팀"
          ]
        },
        {
          teamName: "디자인팀",
          subTeamList: [
            "BX팀","UI/UX팀"
          ]
        }
      ],
      memberList: [
        {
          name: "홍길동",
          rank: "책임"
        },
        {
          name: "김철수",
          rank: "책임"
        },
        {
          name: "이길동",
          rank: "책임"
        },
        {
          name: "김길동",
          rank: "책임"
        },
        {
          name: "박철수",
          rank: "책임"
        }
      ],
    },
    // table 관련
    colspanNum: 2,
    checkbox: true, // 종료일 미정시 체크
  }),
  computed: {
    dateRangeText () {
      return this.table.mainProductSalesPeriod.date.join(" ~ ")
    }
  },
  methods: {
    showSelectedMember() {
      if(this.inspectorDialog.selectedMember.length <= 0) {
        this.inspectorDialog.showMem = false
      } else {
        this.inspectorDialog.showMem = true
      }
    }
  },
  watch: {
    colspanNum: {
      handler: function () {
        if(!this.table.readOnly) {
          this.colspanNum === 2
        } else {
          this.colspanNum === 1
        }
      }
    }
  },
  props: {
    table : {
      type: Object,
			default: function () {
        return {
          readOnly: false,
          name: "테이블 이름",
          mainProductName: {
            title: "상품명",
            name: "상품명이 들어갑니다."
          },
          mainProductCode: {
            title: "상품코드",
            code: "코드가 들어갑니다."
          },
          mainProductSalesPeriod : {
            date: ["2020-09-10", "2020-09-20"],
            datePickerShow: false
          },
          tr: [
            {
              th: "문서제목이 들어갑니다.",
              inputVal: "input value",
              docName: "문서 파일 이름",
              files:[],
              multipleRowShow: false,
              multipleRow: [
                {
                  inputVal: "123",
                  docName: "문서 파일 이름",
                  files:[]
                }
              ]
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.default-info-table {
    .sales-period-date-picker {
        width: 230px;
    }
    .doc-name {
        display: inline-block;
        width: 630px;
        vertical-align: sub;
    }
    &__item {
        &--document-code {
            width: 170px;
        }
    }
}
.default-dialog {
  .search-filter {
    display: flex;
    margin-bottom: 10px;
    &__item {
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
      &.v-select {
        width: 140px;
      }
      &.v-select {
        width: 140px;
      }
      &.v-text-field:not(.v-select) {
        width: 296px;
      }
    }
  }
  .select-inspector-wrapper {
    .select-inspector {
      display: flex;
      height: 275px;
      &__item {
        padding: 0;
        height: 273px;
        overflow-y: auto;
        &--select-department {
          width: 200px;
          background: $light-grey;
          border-right: 1px solid rgba(0, 0, 0, 0.12);
          border-top-left-radius: unset;
          border-top-right-radius: unset;
          .v-list-group {
            &__items {
              .v-list-item {
                padding: 0 24px;
                &__title {
                  font-size: 14px;
                }
              }
            }
            &.v-list-group--active {
              background: #EAF0FA;
              .v-list-group__items {
                .v-list-item {
                  background: #fff;
                }
              }
            }
          }
        }
        &--select-member {
          width: calc(100% - 200px);
          .v-list-item--active {
            color: $blue;
          }
        }
      }
    }
  }
}
// 검수자
.selected-member {
  display: inline-block;
  & + .selected-member {
    &::before {
      content:',';
      margin-right: 4px;
    }
  }
  & + .table-inner-btn {
    margin-left:10px;
  }
}
</style>