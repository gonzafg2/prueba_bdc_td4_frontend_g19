<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="#">Banco Digital de Chile</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="#">Profile</b-nav-item>
          <b-nav-item href="#">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-breadcrumb class="ms-5 my-3" :items="items"></b-breadcrumb>
    <!-- Modelo C - R - C => Container - Row - Col -->
    <b-container fluid>
      <b-row>
        <!-- Menú Lateral-->
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item>Cuenta Corriente</b-list-group-item>
            <b-list-group-item>Tarjeta de Crédito</b-list-group-item>
            <b-list-group-item>Línea de Crédito</b-list-group-item>
            <b-list-group-item>Transferencias</b-list-group-item>
            <b-list-group-item>Pago de Servicios</b-list-group-item>
          </b-list-group>
        </b-col>
        <!-- Vista que va a cambiar de acuerdo a la ruta -->
        <b-col cols="9">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
