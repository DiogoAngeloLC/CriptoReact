import http from "../index";
import FormCadastroBetaData from "../../types/FormCadastroBeta.interface"
import FormCadastroData from "../../types/FormCadastro.interface"

class CadastroService {
  getAll() {
    return http.get("/cadastro");
  }

  get(id: string) {
    return http.get(`/cadastro/${id}`);
  }

  create(data: FormCadastroData) {
    return http.post("/cadastro", data);
  }

  createBeta(data: FormCadastroBetaData) {
    return http.post("/cadastro", data);
  }

  update(data: FormCadastroData, id: number | string) {
    return http.put(`/cadastro/${id}`, data);
  }

  delete(id: number | string) {
    return http.delete(`/cadastro/${id}`);
  }

  deleteAll() {
    return http.delete(`/cadastro`);
  }

}

export default new CadastroService();