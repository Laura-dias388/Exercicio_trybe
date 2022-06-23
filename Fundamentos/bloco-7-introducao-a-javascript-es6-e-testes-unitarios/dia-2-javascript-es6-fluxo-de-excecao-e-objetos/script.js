function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      try {
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      if(value1 == '' || value2 == '' ){
        throw new Error('Um dos campos esta vazio');
      }  
    }      
      
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }