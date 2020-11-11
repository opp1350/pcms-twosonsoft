<template>
  <div class="contents-wrap">
    <!-- page title -->
    <pageTitle
      :pageTitle="pageTitle"
    ></pageTitle>

    <!-- table -->
    <div class="table-wrap mt-5">
      <div class="table-wrap__top-area">
        <v-btn
          color="primary"
          depressed
          class="table-wrap__top-area__item"
          @click.stop="dialog = true"
        >
          출력순서 저장
        </v-btn>
        <div class="sub-text table-wrap__top-area__item">총 {{ this.tableData.length }}건</div>
      </div>
      <v-data-table
      :headers="headers"
      :items="tableData"
      class="grey-line-table"
      :footer-props='{
        showFirstLastPage: false,
        showCurrentPage: true,
        itemsPerPageText: "페이지 당 상품의 개수",
        itemsPerPageAllText: "전체",
        class: "text-left"
      }'
    >
      <template v-slot:body="props">
        <draggable
          :list="props.items"
          tag="tbody"
          handle=".handle"
        >
          <tr
            v-for="(item, index) in props.items"
            :key="index"
          >
            <td class="handle">
              <v-icon
                small
                class="page__grab-icon"
              >
                mdi-arrow-all
              </v-icon>
            </td>
            <td class="text-center">{{ item.data00 }}</td>
            <td class="text-center">{{ item.data01 }}</td>
            <td><span class="ellipsis d-block text-left font-weight-medium" style="width: 515px;">{{ item.data02 }}</span></td>
            <td class="text-center">{{ item.data03 }}</td>
            <td class="text-center">{{ item.data04 }}</td>
            <td class="text-center">{{ index + 1 }}</td>
          </tr>
        </draggable>
      </template>
    </v-data-table>
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
          to="/PCMS/M03/ADM011"
        >
          문서신규등록
        </v-btn>
      </div>
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
            출력순서 저장
          </v-card-title>
          <v-card-text>
            출력순서를 저장하시겠습니까?
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
import pageTitle from "../components/ui/pageTitle.vue"
import Draggable from 'vuedraggable';

export default {
  components: {
    pageTitle,
    Draggable
  },
  methods: {
  },
  data: () => ({
    dialog: false,
    dragging: false,
    pageTitle: {
      pageTitleText: "문서목록관리",
      infoPathList: [
        {text: "홈"},
        {text: "문서시스템관리"},
        {text: "문서목록관리"}
      ]
    },
    headers: [
      {
        text: "",
        sortable: false,
        align: "center",
        value: "handler",
        width: "45px",
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
        width: "545px",
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
  // cursor: -webkit-grabbing !important;
}
</style>