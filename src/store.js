import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const delay = (ms) => new Promise(resolve => {
  setTimeout(resolve, ms)
})

const store = new Vuex.Store({
  state: {
    busqueda: "",
    listaJuegos: [
      {codigo: "0001", nombre: "Sekiro", stock: 10, precio: 30000, color: "red", destacado: "true"},
      {codigo: "0002", nombre: "Fifa 21", stock: 10, precio: 25000, color: "blue", destacado: "false"},
      {codigo: "0003", nombre: "Gears of War 4", stock: 12, precio: 15000, color: "green", destacado: "true"},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: 2, precio: 35000, color: "yellow", destacado: "false"},
      {codigo: "0005", nombre: "Bloodborne", stock: 7, precio: 10000, color: "blue", destacado: "false"},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: 15, precio: 20000, color: "red", destacado: "true"},
    ],
    ventas: []
  },
  getters: {
    stockTotal(state) {
      return state.listaJuegos.reduce((accumulator, juego) => {
        accumulator = accumulator + juego.stock
        return accumulator;
      }, 0)
    },
    juegosSegunBusqueda(state){
      if (state.busqueda === "") {
        return[]
      } else {
        return state.listaJuegos.filter(juego => juego.nombre.toLowerCase().includes(state.busqueda.toLowerCase()))
      }
    },
    juegosConStock(state){
      return state.listaJuegos.filter(juego => juego.stock > 0)
    },
    totalJuegosConStock(state, getters){
      return getters.juegosConStock.length
    },
    montoTotalVentas(state){
      return state.ventas.reduce((accumulator, venta) => {
        accumulator += venta.precio
        return accumulator
      }, 0)
    }
  },
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda
    },
    RESTAR_STOCK(state, indiceJuego){
      state.listaJuegos[indiceJuego].stock--
    },
    AGREGAR_STOCK(state, indiceJuego){
      state.listaJuegos[indiceJuego].stock++
    },
    AGREGAR_VENTA(state, venta){
      state.ventas.push(venta)
    }
  },
  actions: {
    setBusqueda(context, nuevaBusqueda) {
      context.commit("SET_BUSQUEDA", nuevaBusqueda)
    }, 
    async venderJuego(context, juego){
      await context.dispatch("procesarVenta", juego)
      await context.dispatch("registrarVenta", juego)
    },
    async procesarVenta(context, juegoVender) {
      await delay(2000)
      const  indiceJuego = context.state.listaJuegos.findIndex(juego => juego.codigo === juegoVender.codigo)
      if(context.state.listaJuegos[indiceJuego].stock > 0) {
        context.commit("RESTAR_STOCK", indiceJuego)
      }
    },
    async registrarVenta(context, juego){
      await delay(1000)
      // eslint-disable-next-line no-unused-vars
      const {stock, ...datosJuego} = juego
      context.commit("AGREGAR_VENTA", datosJuego)
    }
  }
});

export default store;
