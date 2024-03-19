const akaClick = document.getElementById('aka-click');
const adj =  document.getElementById('adj');
const atWhat = document.getElementById('at-what');

const me = [{
    adj: 'nerd',
    atWhat: '@ rock n roll'
},
{
    adj: 'muted',
    atWhat: '@ social interaction'
},
{
    adj: 'immature',
    atWhat: '@ heart'
},
{
    adj: 'trying',
    atWhat: '@ least'
}]

let counter = 0; 

akaClick.addEventListener('click', () => {
    counter++
    console.log(counter)

    if (counter >= me.length) {
        counter = 0
    }

    adj.innerHTML = me[counter].adj;
    atWhat.innerHTML = me[counter].atWhat
})

