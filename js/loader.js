const URL = {
  SERVER: `https://es.dump.academy/pixel-hunter`
};

export default class Loader {
  static loadData() {
    return fetch(`${URL.SERVER}/questions`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error(`Ошибка! ${resp.status}`);
          }
        });
  }

  static sendResults(data) {
    return fetch(`${URL.SERVER}/stats/${data.name}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    });
  }

  static loadResults(name) {
    return fetch(`${URL.SERVER}/stats/${name}`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error(`Ошибка! ${resp.status}`);
          }
        });
  }
}
