function loopExample() {
    var output = '';
    for (var i = 1; i <= 5; i++) {
      output += i + ' ';
    }
    document.getElementById('data-output').textContent = output;
  }

  // Form használata
  function submitForm(event) {
    event.preventDefault();
    var inputValue = document.getElementById('form-input').value;
    alert('Bevitel: ' + inputValue);
  }

  // Események bemutatása (pl. OnClick)
  function changeText() {
    var button = document.getElementById('change-text-button');
    button.textContent = 'Megváltozott!';
  }

  // Képnézegető
  function changeImage() {
    var image = document.getElementById('image-viewer');
    image.src = 'https://example.com/image.jpg';
  }

  // Egyszerű számológép
  function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').textContent = 'Eredmény: ' + result;}