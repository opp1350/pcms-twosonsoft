import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/login.vue";
import notWorking from "../components/notWorking.vue"; // 잘못된 경로
import PCMS from "../components/PCMS.vue"; // 틀
import M01 from "../components/M01.vue"; // 상품목록조회 레이아웃
import M02 from "../components/M02.vue"; // 상품등록 및 결재요청 레이아웃
import M03 from "../components/M03.vue"; // 검수(결재)내역 관리 레이아웃
import ADM001 from "../components/ADM001.vue"; //PCMS_ADM_001
import ADM002 from "../components/ADM002.vue"; //PCMS_ADM_002
import ADM003 from "../components/ADM003.vue"; //PCMS_ADM_003
import ADM004 from "../components/ADM004.vue"; //PCMS_ADM_004
import ADM005 from "../components/ADM005.vue"; //PCMS_ADM_005
import ADM006 from "../components/ADM006.vue"; //PCMS_ADM_006
import ADM007 from "../components/ADM007.vue"; //PCMS_ADM_007
import ADM008 from "../components/ADM008.vue"; //PCMS_ADM_008
import ADM009 from "../components/ADM009.vue"; //PCMS_ADM_009
import ADM010 from "../components/ADM010.vue"; //PCMS_ADM_010
import ADM011 from "../components/ADM011.vue"; //PCMS_ADM_011
import ADM012 from "../components/ADM012.vue"; //PCMS_ADM_012
import ADM013 from "../components/ADM013.vue"; //PCMS_ADM_013
Vue.use(VueRouter);

const routes = [
  // 시작페이지
  {
    path: "*",
    name: "notWorking",
    component: notWorking
  },
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/PCMS",
    name: "PCMS",
    component: PCMS,
    children: [
      // {
      //   path: "",
      //   name: "ADM001",
      //   component: ADM001
      // },
      {
        path: "M01",
        name: "M01",
        component: M01,
        children: [
          {
            path: "ADM001",
            name: "ADM001",
            component: ADM001
          },
          {
            path: "ADM002",
            name: "ADM002",
            component: ADM002
          },
          {
            path: "ADM003",
            name: "ADM003",
            component: ADM003
          },
          {
            path: "ADM004",
            name: "ADM004",
            component: ADM004
          },
          {
            path: "ADM005",
            name: "ADM005",
            component: ADM005
          }
        ]
      },
      {
        path: "M02",
        name: "M02",
        component: M02,
        children: [
          {
            path: "ADM006",
            name: "ADM006",
            component: ADM006
          },
          {
            path: "ADM007",
            name: "ADM007",
            component: ADM007
          },
          {
            path: "ADM008",
            name: "ADM008",
            component: ADM008
          },
          {
            path: "ADM009",
            name: "ADM009",
            component: ADM009
          }
        ]
      },
      {
        path: "M03",
        name: "M03",
        component: M03,
        children: [
          {
            path: "ADM010",
            name: "ADM010",
            component: ADM010
          },
          {
            path: "ADM011",
            name: "ADM011",
            component: ADM011
          },
          {
            path: "ADM012",
            name: "ADM012",
            component: ADM012
          },
          {
            path: "ADM013",
            name: "ADM013",
            component: ADM013
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
