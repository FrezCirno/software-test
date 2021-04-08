import axios from 'axios'
import { message } from 'antd'
axios.defaults.headers.post['Content-Type'] = 'application/json';

interface IFRequestParam {
  url: string;
  msg?: string;
  config?: any;
  data?: any;
}

export const get = ({ url, msg = "网络错误", config }: IFRequestParam) =>
  axios
    .get(url, config)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      message.warn(msg);
    });

export const post = ({ url, data, msg = '网络错误', config }: IFRequestParam) =>
  axios
    .post(url, data, config)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      message.warn(msg);
    });
