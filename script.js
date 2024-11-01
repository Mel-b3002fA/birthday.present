/* var div = document.getElementById('main')
var display = 0;
function hideShow{
 if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
} */

    const myButton = document.getElementById('myButton');
    const myImg = document.getElementById('myImg');

    myButton.addEventListener('click', () => {
        if(myImg.style.display === 'none'){
            myImg.style.display = 'block';
            myButton.textContent = 'Zurückbutton';
        }
        else{
            myImg.style.display = 'none';
            myButton.textContent = 'Button';
        }
    });

