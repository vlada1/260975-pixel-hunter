const URL = {
  DATA: `https://es.dump.academy/pixel-hunter/questions`,
};

export default class Loader {
  static loadData() {
    return fetch(URL.DATA)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error(`Ошибка! ${resp.status}`);
          }
        });
  }
}
