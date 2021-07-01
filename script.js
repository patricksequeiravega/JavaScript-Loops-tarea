//DECLARACION FOR

function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  let btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    alert('Número de opciones seleccionadas: ' + howMany(document.selectForm.musicTypes));
  });


//DECLARACION DO-WHILE

let i = 0; do { i += 1; console.log(i); } while (i < 5);


//DECLARACION WHILE

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}


//DECLARACION LABELED

for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
  }
  

//DECLARACION LABELED

for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
  }


//DECLARACION CONTINUE

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}


//DECLARACION FOR-IN

function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
  }


//DECLARACION FOR-OF

const arr = [3, 5, 7];
arr.foo = 'hola';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}







