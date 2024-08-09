import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const user = ref({});
  const loginErrors = ref();
  const errores = ref();
  const login = async (formData) => {
    console.log(formData.value);
    try {
      // Configurar encabezados para enviar JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Realizar solicitud POST con JSON
      const result = await axios.post(
        "http://localhost:3000/users/login",
        formData.value,
        config
      );
      console.log(result.data);
      user.value = result.data;
      localStorage.setItem("user", JSON.stringify(result.data));
      router.push("/");
    } catch (error) {
      loginErrors.value = error;
    }
  };
  const logout = () => {
    localStorage.clear();
    user.value = "";
    router.push("/login");
  };
  const registrarse = async (formData) => {
    try {
      // Configurar encabezados para enviar JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Realizar solicitud POST con JSON
      const result = await axios.post(
        "http://localhost:3000/users/crear",
        formData.value,
        config
      );

      router.push("login");
    } catch (error) {
      errores.value = error.response.data.errors;
      let arrayErrores = [];
      console.log(error.response.data.errors);
      error.response.data.errors.forEach((e) => {
        arrayErrores.push(e.msg);
      });
      errores.value = {
        response: {
          data: {
            msg: arrayErrores,
          },
        },
      };
      console.log(errores.value);
    }
  };

  return { user, login, logout, registrarse, loginErrors, errores };
});
