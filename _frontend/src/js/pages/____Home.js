import Page from '../base/Page';
import gsjson from 'google-spreadsheet-to-json';

export default class extends Page {
  constructor(el) {
    super(el);

    //-- Properties
    //--------------------------------------------------------------
    this.dom = $.extend({}, this.dom, {
      submit: $('[name="submit"]'),
      radio: $('[name="print"]'),
      selection: $('[name="selection"]'),
    });

    this.start = 0;
    this.end = null;
  }

  //-- Methods
  //--------------------------------------------------------------
  init() {
    console.log(gsjson);
    super.init();
    this.bindEvents();
  }

  bindEvents() {
    super.bindEvents();
    this.dom.submit.on('click', () => this.setData());
  }

  setData() {
    if ($('[name=print]:checked').val() === 'all') {
      this.start = 0;
      this.end = null;
    } else {
      let txtArr = this.dom.selection.val().split('-');

      if (txtArr.length > 1) {
        this.start = parseInt(txtArr[0]);
        this.end = parseInt(txtArr[1]);
      } else {
        this.start = parseInt(txtArr[0]);
        this.end = parseInt(txtArr[0]) + 1;
      }
    }

    this.getData();
  }

  getData() {
    $.getJSON('./assets/json/data.json', (data) => {
      if (this.end === null) {
        this.end = data.length;
      }

      console.log(data);

      // for(let x=this.start; x<this.end; x++) {
      //   this.createCard(data[x], x);
      // }
    });
  }

  createCard(obj, index) {
    let pts1Class = this.getScore(obj.hole1);
    let pts2Class = this.getScore(obj.hole2);
    let pts3Class = this.getScore(obj.hole3);
    let pts4Class = this.getScore(obj.hole4);

    let action = this.getAction(obj);

    let content = `
      <section class="section scoreboard">
        <div class="scoreboard__wrapper">
          <div class="scoreboard__cell">${pts1Class}</div>
          <div class="scoreboard__cell">${pts2Class}</div>
          <div class="scoreboard__cell">${pts3Class}</div>
          <div class="scoreboard__cell">${pts4Class}</div>
        </div>
      </section>
      <section class="section name">${obj.name}</section>
      ${action}
    `;

    let card = $(`<div class="card">${content}</div>`);

    this.saveImage(card, index);
  }

  getScore(score) {
    let className = '';
    let point = '';

    if (typeof score === 'number') {
      if (score === 0) className = '';
      if (score > 0) className = `<div class="scoreboard__point positive">${score}</div>`;
      else if (score < 0) className = `<div class="scoreboard__point negative">${Math.abs(score)}</div>`;
    } else if (typeof score === 'string') {
      if (score === '') className = `<div class="scoreboard__point hole"></div>`;
      else className = `<div class="scoreboard__point icon icon-${score}"></div>`;
    }

    return className;
  }

  getAction(obj) {
    let action = '';

    if (obj.actionDesc.length) {
      action = `
        <section class="section action ${obj.actionType}">
          <strong>${obj.actionTitle}</strong>
          <p>${obj.actionDesc}</p>
        </section>
      `;
    }

    return action;
  }

  saveImage(d, index) {
    this.dom.body.prepend(d);
    let card = document.querySelector('.card');

    html2canvas(card).then((canvas) => {
      // eslint-disable-line no-undef
      let src = canvas.toDataURL('image/jpeg', 1.0);
      download(src, `card-${index}.jpg`, 'image/jpeg'); // eslint-disable-line no-undef
    });
  }
}
