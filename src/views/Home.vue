<template>

  <section class="home">
    <main class="container" >
        <section class="section-container">
          <article class="card">
            <header>
              <h2 class="titre">Produits</h2>
            </header>
            <img src="@/assets/img/logo.png" alt="Produits">
            <div >
              <p> Créer </p>
              <p> Modifier </p>
              <p> Supprimer </p>
            </div>

          </article>
        </section>

        <section class="section-container">
          <article class="card">
            <header>
              <h2 class="titre">Articles</h2>
            </header>
            <img src="@/assets/img/delivery.png" alt="Articles">
            <div >
              <p> Créer </p>
              <p> Modifier </p>
              <p> Supprimer </p>
            </div>
          </article>
        </section>

        <section class="section-container">
          <article class="card">
            <header>
              <h2 class="titre">Clients</h2>
            </header>
            <img src="@/assets/img/account.png" alt="clients">
            <div >

              <button id="show-modal" @click="showModal = true">Créer</button>
              <NewCustomer v-if="showModal" @close="showModal = false"/>
              <p> Modifier </p>
              <p> Supprimer </p>
            </div>
          </article>
        </section>

    </main>

  </section>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import NewProduct from '@/components/NewProduct'
import NewCustomer from '@/components/NewCustomer'

export default {
  name: 'Home',
  components: {
    NewProduct,
    NewCustomer,
  },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style >
.titre{
  color:#2e5576;
}
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
  justify-content: space-between;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}
.section-container {
  display: flex;
  border: 10px solid transparent;
  padding: 15px;
  border-color: #2c3e50;
}



</style>