import api from "qiita-api/$api";
import aspida from "@aspida/fetch";

export const qiita = api(aspida(fetch));
