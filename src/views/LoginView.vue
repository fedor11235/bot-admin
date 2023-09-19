<template>
  <div id="q-app-login">
    <div class="q-pa-md" style="min-width: 400px">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="login"
          label="Логин"
          hint="Пожалуйста хоть что-то введите"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
        ></q-input>

        <q-input
          filled
          type="password"
          v-model="password"
          hint="Пожалуйста хоть что-то введите"
          label="Пароль"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Пожалуйста хоть что-то введите']"
        ></q-input>
        <div>
          <q-btn label="Войти????" type="submit" color="primary"></q-btn>
          <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const login = ref("")
const password = ref("")

async function onSubmit() {
  if(login.value === "admin" && password.value === "admin") {
    window.localStorage.setItem("enter", "enabled");
    await router.push({ name: "home" });
  }
}

function onReset() {
  login.value = ""
  password.value = ""
}
</script>

<style scoped>
#q-app-login{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
