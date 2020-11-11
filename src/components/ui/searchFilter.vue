<template>
    <!--검색필터 -->
    <form class="search-filter">
      <dl class="search-filter__item date-picker">
        <dt class="search-filter__item__title">기간 선택</dt>
        <dd class="search-filter__item__contents">
          <v-menu
          v-model="searchFilter.datePicker"
          ref="datePicker"
          :close-on-content-click="false"
          :return-value.sync="searchFilter.date"
          transition="scale-transition"
          offset-y
          color="primary"
          max-width="323px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              prepend-icon="mdi-calendar"
              readonly
              hide-details
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="searchFilter.date"
            :no-title="true"
            selectedItemsText=""
            range
          >
          <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="searchFilter.datePicker = false"
            >
              취소
            </v-btn>
            <v-btn
              text
              color="blueGrey"
              @click="$refs.datePicker.save(searchFilter.date)"
            >
              확인
            </v-btn>
          </v-date-picker>
          </v-menu>
        </dd>
      </dl>
      <dl class="search-filter__item enter-search-keyword">
        <dt class="search-filter__item__title">검색조건 입력</dt>
        <dd class="search-filter__item__contents">
          <v-select
            :items="searchFilter.selectItems"
            :value="searchFilter.selectBoxValue"
            dense
            outlined
            hide-details
            background-color="white"
            class="search-filter__select ellipsis"
          ></v-select>
          <v-text-field
            v-model="searchFilter.search"
            hide-details
            dense
            outlined
            append-icon="mdi-magnify"
            background-color="white"
            class="search-filter__input"
            placeholder="검색어를 입력해주세요."
          ></v-text-field>
        </dd>
      </dl>
      <div class="search-filter__item btn-wrap">
        <!-- <v-btn
          dark
          depressed
          color="primary"
          class=""
        >확인</v-btn> -->
        <v-btn
          dark
          depressed
          color="blueGrey"
          class=""
          height="40px"
          @click="searchFilter.search=''"
        >초기화</v-btn>
      </div>
    </form>
</template>

<script>
export default {
  name: "searchFilter",
  data: () => ({
  }),
  computed: {
    dateRangeText () {
      return this.searchFilter.date.join(" ~ ")
    }
  },
  methods: {
  },
  props: {
    searchFilter : {
      type: Object,
			default: function () {
        return {
          date: ["2020-09-10", "2020-09-20"],
          datePicker: false,
          selectItems: 
          [
            "전체",
            "상품코드"
          ],
          selectBoxValue: "전체",
          search: ""
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/default.scss";
.search-filter {
    display: flex;
    align-items: center;
    padding: 30px 30px;
    background-color: $light-grey;
    &__item {
        display: flex;
        align-items: center;
        &__title {
            width: 120px;
            font-weight: 500;
        }
        &__contents {
            width: calc(100% - 120px);
        }
        &.date-picker {
            width: 350px;
            margin-right: 30px;
        }
        &.enter-search-keyword {
            // width: calc(100% - 380px - 150px);
            width: calc(100% - 380px - 81px);
            .search-filter__item__contents {
                display: flex;
              .search-filter__select {
                  width: 140px;
                  margin-right: 5px;
                }
                .search-filter__input {
                    width: calc(100% - 145px);
                }
            }
        }
        &.btn-wrap {
            // width: 145px;
            width: 76px;
            margin-left: 5px;
            .v-btn {
                &:last-child {
                  &:not(:only-child){
                    margin-left: 5px;
                  }
                }
            }
        }
    }
}
</style>