<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="logo-desafio" alt="Vue logo" src="./assets/logo.png" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item nav-link"><router-link :to="{ name: 'inicio' }">Inicio</router-link></li>
            <li class="nav-item nav-link"><router-link :to="{ name: 'busquedas' }">Busquedas</router-link></li>
            <li class="nav-item nav-link"><router-link :to="{ name: 'ventas' }">Ventas</router-link></li>
            <li class="nav-item nav-link"><router-link :to="{ name: 'total' }">Total</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
.logo-desafio {
  width: 250px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>
