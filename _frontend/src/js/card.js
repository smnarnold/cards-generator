import html2canvas from 'html2canvas';
import download from 'downloadjs';

class Card {
  constructor(card, settings) {
    this.card = card;
    this.defaultSettings = {
      placeholder: document.body,
      render: 'export',
    };

    this.settings = Object.assign(this.defaultSettings, settings);
  }

  create() {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${this.card.index}`;

    let cell1 = this.getScore(this.card.hole1);
    let cell2 = this.getScore(this.card.hole2);
    let cell3 = this.getScore(this.card.hole3);
    let cell4 = this.getScore(this.card.hole4);
    let description = this.avoidOrphan(this.card.name);
    let action = this.getAction(this.card);

    card.innerHTML = `
        <section class="section scoreboard">
          <div class="scoreboard__wrapper">
            <div class="scoreboard__cell">${cell1}</div>
            <div class="scoreboard__cell">${cell2}</div>
            <div class="scoreboard__cell">${cell3}</div>
            <div class="scoreboard__cell">${cell4}</div>
          </div>
        </section>
        <section class="section name">${description}</section>
        ${action}
    `;

    this.print(card);
  }

  getScore(value) {
    let html = '';
    let classname = 'hole';
    let type = !isNaN(value) ? 'number' : 'string';
    if (type === 'string' && typeof value === 'undefined') type = 'default';

    switch (type) {
      case 'number': // is a numeric value
        value = parseInt(value);
        switch (Math.sign(value)) {
          case -1:
            value = Math.abs(value); // Remove the '-' score will bve red instead
            classname = 'negative';
            break;
          case 1:
            classname = 'positive';
            break;
          default:
            classname = 'neutral';
        }
        break;
      case 'string': // Display icone instead of a value
        classname = value;
        value = '';
        break;
      default:
        // empty display a hole
        value = '';
    }

    html = `<div class="scoreboard__point ${classname}">${value}</div>`;

    return html;
  }

  getAction(card) {
    let html = '';
    let title = typeof card.actionTitle === 'undefined' ? '' : `<strong>${this.avoidOrphan(card.actionTitle)}</strong>`;
    let description = typeof card.actionDesc === 'undefined' ? '' : `<p>${this.avoidOrphan(card.actionDesc)}</p>`;
    let classname = typeof card.actionType === 'undefined' ? '' : card.actionType;

    if (card.actionDesc) {
      html = `<section class="section action ${classname}">${title} ${description}</section>`;
    }

    return html;
  }

  avoidOrphan(str) {
    let n = str.split(' ');
    let size = n[n.length - 1].length + n[n.length - 2].length;
    if (size < 16) str = str.replace(/ ([^ ]*)$/, '&nbsp;$1');
    return str;
  }

  print(card) {
    this.settings.placeholder.appendChild(card);

    if (this.settings.render === 'export') {
      html2canvas(card).then((canvas) => {
        let src = canvas.toDataURL('image/jpeg', 1.0);
        download(src, `${card.id}.jpg`, 'image/jpeg');
      });
    }
  }
}

export { Card as default };
