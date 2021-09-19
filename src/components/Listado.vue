<template>
  <div class="table table-bordered">
    <ul v-if="$store.getters.juegosSegunBusqueda.length > 0">
      <li v-for="juego in $store.getters.juegosSegunBusqueda" :key="juego.codigo" :style="{'background-color': juego.color}">{{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}</li>
    </ul>
    <ul v-else>
      <li>Escribe Algo para buscar</li>
    </ul>
  </div>
</template>

