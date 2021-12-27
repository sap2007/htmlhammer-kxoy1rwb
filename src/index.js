import { style, button, span, customElement } from 'htmlhammer';

const MyCounterStyle = style(/*css*/`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `);

const MyCounter = customElement("my-counter", {
  Count: 0,
  CounterDisplay: null,  
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(
      MyCounterStyle,
      button({ id: "dec", onclick: this.Dec }, "-"),
      this.CounterDisplay = span(this.Count),
      button({ id: "inc", onclick: this.Inc }, "+")
    );
  },
  Inc() {
    this.Update(++this.Count);
  },
  Dec() {
    this.Update(--this.Count);
  },
  Update(count) {
    this.CounterDisplay.textContent = count;
  }
});
