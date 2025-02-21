//your code here!

const list = document.getElementById('infi-list');
let itemCount = 10; 
function addItems(count) {
    for (let i = 0; i < count; i++) {
        itemCount++; 
        const item = document.createElement('li');
        item.textContent = `Item ${itemCount}`;
        list.appendChild(item);
    }
}


addItems(10);

list.addEventListener('scroll', () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
        addItems(2); 
    }
});
