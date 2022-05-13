<template>
  <b-row>
    <b-col cols="12">
      <section class="banner-dashboard mb-4">
        <div class="banner-dashboard__image">
          <img
            src="https://via.placeholder.com/720x360"
            alt=""
            class="banner-dashboard__img"
          />
          <h1 class="banner-dashboard__title">
            Bienvenido {{ usuario.nombre }}!
          </h1>
          <p class="banner-dashboard__subtitle">{{ usuario.mensaje }}</p>
        </div>
      </section>
    </b-col>

    <b-col cols="6" v-for="(cupo, i) in cupos" :key="i">
      <b-row>
        <b-col cols="12">
          <section class="dashboard-card">
            <b-row>
              <b-col cols="4">
                <div class="dashboard-graphic">
                  <p class="dashboard-graphic__percent">
                    {{ ((cupo.utilizado / cupo.disponible) * 100).toFixed(3) }}%
                  </p>
                  <b-button class="dashboard-graphic__cta" variant="link"
                    >Ver Detalles</b-button
                  >
                </div>
              </b-col>
              <b-col cols="8">
                <h3>Cupo {{ cupo.nombre }}</h3>
                <div class="d-flex justify-content-around">
                  <div>
                    <p>{{ cupo.utilizado }}</p>
                    <p>Utilizado</p>
                  </div>
                  <div>
                    <p>{{ cupo.disponible }}</p>
                    <p>Total</p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </section>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  created() {
    this.getDataDashboard();
  },
  computed: {
    ...mapState(["usuario", "cupos"]),
  },
  methods: {
    ...mapActions(["getDataDashboard"]),
  },
};
</script>

<style lang="scss" scoped>
.banner-dashboard {
  border: 1px solid #ccc;
  padding: 5px 10px 20px;
  border-radius: 10px;
}
.dashboard-graphic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dashboard-card {
  border: 1px solid #ccc;
  padding: 5px 10px 20px;
  border-radius: 10px;
}
</style>
