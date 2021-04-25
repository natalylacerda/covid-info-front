import axios from "axios";

const api = axios.create({
  baseURL: "http://(IP):3000",

  // inserir api da máquina na url acima
  // desativar o firewall pode ser necessário
  // iniciar o servidor do back com o comando rails s -b 0.0.0.0
});

export default api;
