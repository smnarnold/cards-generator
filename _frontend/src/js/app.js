import Card from './card';

class CardsGen {
  constructor() {
    this.cols = 0;
    this.cards = [];
    this.placeholder = document.querySelector('#placeholder');
  }

  init() {
    this.setForm();
    this.getData();
    this.bindEvents();
  }

  bindEvents() {
    document.forms.settings.type.addEventListener('change', () => this.getData());

    Array.prototype.forEach.call(document.forms.settings.cards, (radio) =>
      radio.addEventListener('change', (e) => localStorage.setItem('cards', e.target.value))
    );

    Array.prototype.forEach.call(document.forms.settings.render, (radio) =>
      radio.addEventListener('change', () => {
        this.placeholder.className = document.forms.settings.render.value;
        localStorage.setItem('render', document.forms.settings.render.value);
      })
    );

    document.forms.settings.selection.addEventListener('change', (e) =>
      localStorage.setItem('selection', e.target.value)
    );

    document.forms.settings.submit.addEventListener('click', (e) => this.generate(e));
  }

  setForm() {
    const type = localStorage.getItem('type');
    const cards = localStorage.getItem('cards');
    const render = localStorage.getItem('render');

    if (type) {
      document.forms.settings.type.value = type;
    }
    if (cards) {
      document.forms.settings.cards.value = cards;

      if (cards === 'specific') {
        const selection = localStorage.getItem('selection');
        if (selection) {
          document.forms.settings.selection.value = selection;
        }
      }
    }
    if (render) {
      document.forms.settings.render.value = render;
    }
  }

  getData() {
    document.forms.settings.basic.disabled = true;
    this.cards = [];
    let url = `https://spreadsheets.google.com/feeds/cells/${
      document.forms.settings.type.value
    }/1/public/values?alt=json-in-script&callback=?`;

    localStorage.setItem('type', document.forms.settings.type.value);

    $.getJSON(url, {}, (data) => {
      this.json = data.feed;
      this.type = this.json.title.$t;
      this.cols = parseInt(this.json.gs$colCount.$t);
      this.rows = parseInt(this.json.gs$rowCount.$t);
      this.formatData(this.json.entry);
    });
  }

  generate(e) {
    e.preventDefault();

    this.placeholder.innerHTML = '';

    let cardsArrToCreate = this.cardsSelection;

    for (let x = 0; x < cardsArrToCreate.length; x++) {
      let card = new Card(cardsArrToCreate[x], {
        placeholder: this.placeholder,
        render: document.forms.settings.render.value,
        type: this.type,
      });

      card.create();
    }
  }

  get cardsSelection() {
    let start = 0;
    let end = this.cards.length;

    if (document.forms.settings.cards.value === 'specific') {
      let selectionArr = document.forms.settings.selection.value.split('-');
      start = parseInt(selectionArr[0]) - 1;
      end = selectionArr.length > 1 ? parseInt(selectionArr[1]) : parseInt(selectionArr[0]);
    }

    return this.cards.slice(start, end);
  }

  formatData(json) {
    let card = {};
    let currentRow = null;

    for (let x = this.cols; x < json.length; x++) {
      let entry = json[x];
      let col = entry.gs$cell.col - 1;
      let row = entry.gs$cell.row - 1;

      if (row !== currentRow) {
        if (!this.isObjEmpty(card)) {
          card.index = currentRow;
          this.cards.push(card);
        }
        card = {};
        currentRow = row;
      }

      let type = json[col].content.$t;
      card[type] = entry.content.$t.trim();
    }

    if (!this.isObjEmpty(card)) this.cards.push(card);
    document.forms.settings.basic.disabled = false;
  }

  isObjEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }
}

var cardsGen = new CardsGen();
cardsGen.init();
