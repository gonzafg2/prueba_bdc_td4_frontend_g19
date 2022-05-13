<template>
  <div>
    <h2>Nueva Transferencia</h2>
    <h3>Cuenta de Origen</h3>
    <div
      class="form-check form-check-inline"
      v-for="(tipo, i) in tiposCuenta"
      :key="i"
    >
      <input
        class="form-check-input"
        type="radio"
        name="tipoDeCuenta"
        v-model="tipoCuentaSelected"
        :id="tipo.id"
        :value="tipo.id"
      />
      <label class="form-check-label" :for="tipo.id">{{ tipo.nombre }}</label>
    </div>

    <h3>Cuenta de Destino</h3>
    <div class="row mb-3">
      <label class="col-2 col-form-label">Banco</label>
      <div class="col-10">
        <select class="form-select" v-model="bancoSelected">
          <option selected>Selecciona un banco:</option>
          <option v-for="banco in bancos" :key="banco.id" :value="banco.id">
            {{ banco.nombre }}
          </option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label">N° de Cuenta</label>
      <div class="col-10">
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label">RUT</label>
      <div class="col-10">
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label">Nombre</label>
      <div class="col-10">
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label">Monto</label>
      <div class="col-10">
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label">Email</label>
      <div class="col-10">
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label">Mensaje</label>
      <div class="col-10">
        <textarea
          class="form-control"
          placeholder="Deja tu comentario aquí"
          rows="5"
        ></textarea>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-2 col-form-label"></label>
      <div class="col-10">
        <b-button class="w-100" variant="primary">Transferir</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NuevaTransferenciaView",
  data() {
    return {
      tipoCuentaSelected: "",
      bancoSelected: "",
      tiposCuenta: [
        {
          id: "cuenta_corriente",
          nombre: "Cuenta Corriente",
        },
        {
          id: "linea_credito",
          nombre: "Línea de Crédito",
        },
        {
          id: "tarjeta_credito",
          nombre: "Tarjeta de Crédito",
        },
      ],
    };
  },
  created() {
    this.getBancos();
  },
  computed: {
    ...mapState(["bancos"]),
  },
  methods: {
    ...mapActions(["getBancos"]),
  },
};
</script>
