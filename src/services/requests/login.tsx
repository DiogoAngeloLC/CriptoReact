import http from "../index";
import FormLoginData from "../../types/FormLogin.interface"
import FormNovaSenhaData from "../../types/FormNovaSenha.interface";
import FormEsqueceuSenhaData from "../../types/FormEsqueceuSenha.interface";

class LoginService {
  login(data: FormLoginData) {
    return http.post("/login", data);
  }

  logout(data: FormLoginData) {
    return http.post(`/logout`, data);
  }

  novaSenha(data: FormNovaSenhaData) {
    return http.post(`/novaSenha`, data);
  }

  esqueceuSenha(data: FormEsqueceuSenhaData) {
    return http.post(`/novaSenha`, data);
  }
}

export default new LoginService();