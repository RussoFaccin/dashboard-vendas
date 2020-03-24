<template>
  <div class="appRoot">
    <vue-pull-refresh :config="pullConfig" :on-refresh="getData">
      <!--
        ================================================================================
        HABIB'S
        ================================================================================
        -->
      <div class="appContent contentHabibs">
        <div class="boxLogo"></div>
        <!-- HOJE -->
        <div class="appSection section--hoje">
          <div class="infoRow">
            <div class="infoBox boxFat">
              <h1 class="boxHeading">
                Faturamento Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.hab.fat_now" />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTcNow">
              <h1 class="boxHeading">
                T.C. Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="false" :value="dadosFull.hab.tc_now" />
            </div>
            <div class="infoBox boxTcDiff">
              <h1 class="boxHeading">
                VS.
                <span class="boxHeading__light"
                  >- {{ pastDayFormated }}/{{ pastMonthFormated }}</span
                >
              </h1>
              <Counter
                :curr-symbol="false"
                :percent-symbol="true"
                :value="dadosFull.hab.percent_TC"
              />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTmNow">
              <h1 class="boxHeading">
                T.M. Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.hab.tm_now" />
            </div>
            <div class="infoBox boxTcDiff">
              <h1 class="boxHeading">
                VS.
                <span class="boxHeading__light"
                  >- {{ pastDayFormated }}/{{ pastMonthFormated }}</span
                >
              </h1>
              <Counter
                :curr-symbol="false"
                :percent-symbol="true"
                :value="dadosFull.hab.percent_TM"
              />
            </div>
          </div>
        </div>
        <!-- 7D -->
        <div class="appSection section--7d">
          <div class="infoRow">
            <div class="infoBox boxFat">
              <h1 class="boxHeading">
                faturamento semana anterior
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.hab.fat_7d" />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTc7d">
              <h1 class="boxHeading">
                T.C. semana anterior<br /><span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="false" :value="dadosFull.hab.tc_7d" />
            </div>
            <div class="infoBox boxTm7d">
              <h1 class="boxHeading">
                T.M. semana anterior<br /><span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.hab.tm_7d" />
            </div>
          </div>
        </div>
      </div>
      <!--
        ================================================================================
        Ragazzo
        ================================================================================
        -->
      <div class="appContent contentRagazzo">
        <div class="boxLogo"></div>
        <!-- HOJE -->
        <div class="appSection section--hoje">
          <div class="infoRow">
            <div class="infoBox boxFat">
              <h1 class="boxHeading">
                Faturamento Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rag.fat_now" />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTcNow">
              <h1 class="boxHeading">
                T.C. Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="false" :value="dadosFull.rag.tc_now" />
            </div>
            <div class="infoBox boxTcDiff">
              <h1 class="boxHeading">
                VS.
                <span class="boxHeading__light"
                  >- {{ pastDayFormated }}/{{ pastMonthFormated }}</span
                >
              </h1>
              <Counter
                :curr-symbol="false"
                :percent-symbol="true"
                :value="dadosFull.rag.percent_TC"
              />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTmNow">
              <h1 class="boxHeading">
                T.M. Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rag.tm_now" />
            </div>
            <div class="infoBox boxTcDiff">
              <h1 class="boxHeading">
                VS.
                <span class="boxHeading__light"
                  >- {{ pastDayFormated }}/{{ pastMonthFormated }}</span
                >
              </h1>
              <Counter
                :curr-symbol="false"
                :percent-symbol="true"
                :value="dadosFull.rag.percent_TM"
              />
            </div>
          </div>
        </div>
        <!-- 7D -->
        <div class="appSection section--7d">
          <div class="infoRow">
            <div class="infoBox boxFat">
              <h1 class="boxHeading">
                faturamento semana anterior
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rag.fat_7d" />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTc7d">
              <h1 class="boxHeading">
                T.C. semana anterior<br /><span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="false" :value="dadosFull.rag.tc_7d" />
            </div>
            <div class="infoBox boxTm7d">
              <h1 class="boxHeading">
                T.M. semana anterior<br /><span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rag.tm_7d" />
            </div>
          </div>
        </div>
      </div>
      <!--
        ================================================================================
        REX
        ================================================================================
        -->
      <div class="appContent contentRex">
        <div class="boxLogo"></div>
        <!-- HOJE -->
        <div class="appSection section--hoje">
          <div class="infoRow">
            <div class="infoBox boxFat">
              <h1 class="boxHeading">
                Faturamento Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rex.fat_now" />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTcNow">
              <h1 class="boxHeading">
                T.C. Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="false" :value="dadosFull.rex.tc_now" />
            </div>
            <div class="infoBox boxTcDiff">
              <h1 class="boxHeading">
                VS.
                <span class="boxHeading__light"
                  >- {{ pastDayFormated }}/{{ pastMonthFormated }}</span
                >
              </h1>
              <Counter
                :curr-symbol="false"
                :percent-symbol="true"
                :value="dadosFull.rex.percent_TC"
              />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTmNow">
              <h1 class="boxHeading">
                T.M. Hoje
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ dayFormated }}/{{ monthFormated }}</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rex.tm_now" />
            </div>
            <div class="infoBox boxTcDiff">
              <h1 class="boxHeading">
                VS.
                <span class="boxHeading__light"
                  >- {{ pastDayFormated }}/{{ pastMonthFormated }}</span
                >
              </h1>
              <Counter
                :curr-symbol="false"
                :percent-symbol="true"
                :value="dadosFull.rex.percent_TM"
              />
            </div>
          </div>
        </div>
        <!-- 7D -->
        <div class="appSection section--7d">
          <div class="infoRow">
            <div class="infoBox boxFat">
              <h1 class="boxHeading">
                faturamento semana anterior
                <span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rex.fat_7d" />
            </div>
          </div>
          <div class="infoRow">
            <div class="infoBox boxTc7d">
              <h1 class="boxHeading">
                T.C. semana anterior<br /><span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="false" :value="dadosFull.rex.tc_7d" />
            </div>
            <div class="infoBox boxTm7d">
              <h1 class="boxHeading">
                T.M. semana anterior<br /><span class="boxHeading__light"
                  >- {{ dayName }} {{ pastDayFormated }}/{{
                    pastMonthFormated
                  }}
                  - mesmo horário</span
                >
              </h1>
              <Counter :curr-symbol="true" :value="dadosFull.rex.tm_7d" />
            </div>
          </div>
        </div>
      </div>
    </vue-pull-refresh>
    <loading-dialog v-if="isLoading"></loading-dialog>
    <SnackBar
      :duration="2.5"
      message="Você está offline"
      ref="snackBar"
    ></SnackBar>
  </div>
</template>

<script>
// Week Offset
const WEEK_OFFSET = 604800000;
// Utils
import DateUtils from "../utils/DateUtils.js";
// Components
import Counter from "../components/Counter";
import VuePullRefresh from "vue-pull-refresh";
import LoadingDialog from "../components/LoadingDialog.vue";
import SnackBar from "../components/SnackBar.vue";
// Mock Data
import { data } from "../data/mock";

export default {
  name: "FaturamentoPage",
  components: {
    Counter,
    "vue-pull-refresh": VuePullRefresh,
    LoadingDialog,
    SnackBar
  },
  data() {
    return {
      pullConfig: {
        errorLabel: null,
        startLabel: null,
        readyLabel: null,
        loadingLabel: null
      },
      isLoading: false,
      requestTime: 10000,
      accessToken: null,
      today: new Date(),
      pastWeek: null,
      dadosFull: null
    };
  },
  computed: {
    isOnline() {
      return navigator.onLine;
    },
    dayName() {
      return DateUtils.getDayName(this.today.getDay());
    },
    dayFormated() {
      return String(this.today.getDate()).padStart(2, "0");
    },
    pastDayFormated() {
      return String(this.pastWeek.getDate()).padStart(2, "0");
    },
    monthFormated() {
      return DateUtils.getMonthName(this.today.getMonth()).slice(0, 3);
    },
    pastMonthFormated() {
      return DateUtils.getMonthName(this.pastWeek.getMonth()).slice(0, 3);
    },
    hourRound() {
      return this.today.getHours() + 1;
    }
  },
  created() {
    this.pastWeek = new Date(this.today.getTime() - WEEK_OFFSET);
    // Offline data
    const prevData = localStorage.getItem("prevData")
      ? JSON.parse(localStorage.getItem("prevData"))
      : data;
    this.dadosFull = prevData;
    // on/off line listener
    window.addEventListener("offline", this.checkOnline);
  },
  mounted() {
    // Check credentials
    const isLogged = localStorage.getItem("credentials") ? true : false;

    if (!isLogged) {
      this.$router.push("login");
      return false;
    }
    this.getData();
    // Check online
    this.checkOnline();
  },
  methods: {
    async getData() {
      if (!this.checkOnline()) {
        this.$refs.snackBar.show;
        return false;
      }

      this.isLoading = true;

      // Refresh date
      this.today = new Date();

      // Check token expiration
      if (this.isTokenExpired()) {
        this.accessToken = await this.getToken();
      } else {
        this.accessToken = localStorage.getItem('apiKey');
      }

      const dataHeaders = new Headers();
      dataHeaders.append("Content-Type", "application/json");
      dataHeaders.append("Authorization", `Bearer ${this.accessToken}`);

      const requestPromises = [
        // HABIB'S
        fetch('https://apivendas.alsaraiva.com.br/api/v1/TelaEsfirrometro?rede=hab',
          {
            method: 'GET',
            headers: dataHeaders,
            redirect: 'follow'
          }
        )
        .then((response) => {
          response.json()
          .then((data) => {
            if (data.fat_now) {
              this.dadosFull.hab = data;
            }
          })
        }),
        // RAGAZZO
        fetch('https://apivendas.alsaraiva.com.br/api/v1/TelaEsfirrometro?rede=rag',
          {
            method: 'GET',
            headers: dataHeaders,
            redirect: 'follow'
          }
        )
        .then((response) => {
          response.json()
          .then((data) => {
            if (data.fat_now) {
              this.dadosFull.rag = data;
            }
          })
        }),
        // REX
        fetch('https://apivendas.alsaraiva.com.br/api/v1/TelaEsfirrometro?rede=rex',
          {
            method: 'GET',
            headers: dataHeaders,
            redirect: 'follow'
          }
        )
        .then((response) => {
          response.json()
          .then((data) => {
            if (data.fat_now) {
              this.dadosFull.rex = data;
            }
          })
        })
      ];

      // All settled

      Promise.allSettled(requestPromises)
      .then(() => {
        this.isLoading = false;
        localStorage.setItem('prevData', JSON.stringify(this.dadosFull));
      });

    },
    formatNumber(numEntry = "", isCurrency = true) {
      const numTmp = Number(numEntry).toLocaleString(
        "pt-BR",
        isCurrency
          ? {
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }
          : ""
      );
      return String(numTmp);
    },
    checkOnline() {
      if (!navigator.onLine) {
        this.$refs.snackBar.show();
      }

      return navigator.onLine;
    },
    getToken() {
      return new Promise((resolve, reject) => {
        const currDate = Date.now();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: localStorage.getItem("credentials"),
          redirect: "follow"
        };

        // Get token
        fetch(
          "https://apivendas.alsaraiva.com.br/api/v1/login",
          requestOptions
        )
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem('expiresIn', currDate + (Number(result.data.expiresIn) * 1000));
          localStorage.setItem('apiKey', JSON.stringify(result.data.accessToken));
          resolve(result.data.accessToken);
        })
        .catch(error => reject(error));
      });
    },
    isTokenExpired() {
      const expiresIn = Number(localStorage.getItem('expiresIn'));
      const now = Date.now();
      return now > expiresIn;
    }
  }
};
</script>

<style scoped>
.appRoot {
  /* background-image: url('/img/trash.png'); */
  background-color: #666;
  background-size: 100% auto;
}

.boxLogo {
  background-image: var(--logoImage);
  z-index: 1;
}

.appSection {
  padding: 3.15vmin;
}

.appContent {
  border-bottom: 2px solid #fff;
}

.infoRow {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.infoRow:not(last-of-type) {
  margin-bottom: 3vmin;
}

.infoBox {
  width: 100%;
}

.counterBox {
  font-size: 7.25vmin;
  min-height: 10.18vmin;
}

.section--hoje {
  background-color: var(--mainColor);
}

.section--hoje .boxHeading {
  color: var(--headingColor);
}

.section--hoje .counterBox {
  color: var(--textColor);
}

.section--7d {
  background-color: var(--accentColor);
}

.section--7d .boxHeading {
  color: var(--textColor);
}

.section--7d .counterBox {
  color: var(--headingColor);
}

.boxHeading {
  text-align: center;
  text-transform: uppercase;
  font-size: 2.35vmin;
  letter-spacing: -0.05vmin;
}

.boxHeading__light {
  font-family: "Proxima Nova - Thin";
}

/* BOX FATURAMENTO */

.section--hoje .boxFat .boxHeading {
  font-size: 3vmin;
  margin-bottom: 3vmin;
}

.section--hoje .boxFat .counterBox {
  flex: 1;
  font-size: 11.75vmin;
}

/* BOX TC HOJE */
.boxTcNow {
  flex-basis: 274%;
}

/* BOX TM HOJE */
.boxTmNow {
  flex-basis: 274%;
}

/* BOX TC 7D */
.boxTc7d {
  margin-right: 2.7vmin;
}
</style>
