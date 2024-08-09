import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const user = ref({});
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
      console.error("Error al enviar los datos:", error);
    }
  };
  const logout = () => {
    localStorage.clear();
    user.value = "";
    router.push("/login");
  };

  return { user, login, logout };
});
