class IncomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Place holder for the Income View</p>
      <ul>
          <li>First Question</li>
          <li>Second Question</li>
          <li>Thrid Question</li>
      </ul>
      `;
  }
}

customElements.define('income-component', IncomeComponent);

