<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Créer un produit
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <form id="create-customer"
                    @submit.prevent="createUser"
                    method="post">
                <p>
                  <label for="last_name">Nom</label>
                  <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      required
                      >
                </p>
                <p>
                  <label for="first_name">Prénom</label>
                  <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      required
                      >
                </p>

                <p>
                  <label for="email">email</label>
                  <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      >
                </p>
                <p>
                  <label for="password">Mot de Passe</label>
                  <input
                      id="password"
                      type="password"
                      name="password"
                      required
                  >
                </p>
                <p>
                  <label for="phone">Téléphone</label>
                  <input
                      id="phone"
                      type="text"
                      name="phone"
                      required
                      >
                </p>
                <p>
                  <label for="street">rue</label>
                  <input
                      id="street"
                      type="text"
                      name="street"
                      required
                      >
                </p>
                <p>
                  <label for="street2">complément d'adresse</label>
                  <input
                      id="street2"
                      type="text"
                      name="street2"
                      >
                </p>
                <p>
                  <label for="zip_code">Code Postal</label>
                  <input
                      id="zip_code"
                      type="number"
                      name="zip_code"
                      required
                      >
                </p>
                <p>
                  <label for="city">Ville</label>
                  <input
                      id="city"
                      type="text"
                      name="city"
                      required
                      >
                </p>
                <p>
                  <label for="country">Pays</label>
                  <input
                      id="country"
                      type="text"
                      name="country"
                      required
                      >
                </p>
                <p>
                  <input
                      type="submit"
                      @click="createUser()"
                      value="Enregistrer"
                  >
                </p>
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                Quitter sans enregistrer
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {getAPI} from "@/services/axios";

export default {
  name: "NewCustomer",
  data() {
    return{


    }
  },
  methods:{
    async createUser(){
      const form = document.getElementById('create-customer')
      let data = new FormData(form)
      await getAPI.post('/account/registration/', data)
    }
  },
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>