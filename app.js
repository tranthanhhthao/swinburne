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

// hover
// const emojiEmail = document.getElementById('emoji-email');
// const email = document.getElementById('email');

// email.addEventListener('mousemove', (e) => {
//     emojiEmail.style.display = 'block';
//     emojiEmail.style.left = e.clientX + 'px';
//     emojiEmail.style.top = e.clientY + 'px';
// })

// email.addEventListener('mouseleave', (e) => {
//     emojiEmail.style.display = 'none';
// })