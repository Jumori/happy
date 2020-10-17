import axios from 'axios';

const api = axios.create({
  /**
   * Running on
   * * mobile device: path = your machine IP
   * * iOS emulator: path = localhost
   * * Android emulator: path = localhost
   * + run at terminal `adb reverse tcp:3333 tcp:3333`
   *
   * http://{path}:3333
   */
  baseURL: 'http://192.168.1.4:3333',
});

export default api;
