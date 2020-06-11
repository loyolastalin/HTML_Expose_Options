class IncomeComponent extends HTMLElement {
  connectedCallback() {
    loadIncomeUI(this);
  }
}

customElements.define('income-component', IncomeComponent);

function loadIncomeUI(currentScope) {

  $.get('IncomeService.htm', function (response) {
    currentScope.innerHTML = response;
  });

  $.ajax({
    url: 'IncomeService.htm',
    type: 'GET',
    success: function (data) {
      currentScope.innerHTML = data;
    },
    error: function (data) {
      console.log('oops error occured!'); //or whatever
      var defaultHtml = `<p>Place holder for the Income View</p>
<ul>
    <li>First Question</li>
    <li>Second Question</li>
    <li>Thrid Question</li>
</ul>
`
      currentScope.innerHTML = defaultHtml;

    }
  });


}
