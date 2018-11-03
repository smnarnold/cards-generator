import Card from './card';

class CardsGen {
  constructor() {
    this.spreadsheetKey = '1ETXmSmOb3yecP_CQVU5eaAfoAbGGjWUMkMOcU5A9NuI'; // Between 'https://docs.google.com/spreadsheets/d/' and '/edit'
    this.jsonUrl = `https://spreadsheets.google.com/feeds/cells/${
      this.spreadsheetKey
    }/1/public/values?alt=json-in-script&callback=?`; //Make sure the spreadsheet is public File > Publish on web
    this.cols = 0;
    this.cards = [];
    this.placeholder = document.querySelector('#placeholder');
  }

  init() {
    this.getData();
    this.bindEvents();
  }

  getData() {
    $.getJSON(this.jsonUrl, {}, (data) => {
      this.json = data.feed;
      console.log(data.feed);
      this.cols = parseInt(this.json.gs$colCount.$t);
      this.rows = parseInt(this.json.gs$rowCount.$t);
      this.formatData(this.json.entry);
    });
  }

  bindEvents() {
    document.forms.settings.submit.addEventListener('click', (e) => this.generate(e));
    Array.prototype.forEach.call(document.forms.settings.render, (radio) =>
      radio.addEventListener('change', (e) => (this.placeholder.className = document.forms.settings.render.value))
    );
  }

  generate(e) {
    e.preventDefault();

    this.placeholder.innerHTML = '';

    let cardsArrToCreate = this.cardsSelection;

    for (let x = 0; x < cardsArrToCreate.length; x++) {
      let card = new Card(cardsArrToCreate[x], {
        placeholder: this.placeholder,
        render: document.forms.settings.render.value,
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
