const input = document.querySelector('input');
const preview = document.querySelector('.file_list');
const food = document.querySelector('.food');
input.addEventListener('change', showTextFile);


function showTextFile() {
const selectedFiles = input.files;
const list = document.createElement('ul');
preview.appendChild(list);

for(const file of selectedFiles) {
const listItem = document.createElement('li');
const summary = document.createElement('div');
summary.textContent = file.name;
listItem.appendChild(summary);
list.appendChild(listItem);
// 출처: https://hianna.tistory.com/347 [어제 오늘 내일]


const foodBox = document.createElement('div')
foodBox.classList.add('foodBox')
const foodPicture = document.createElement('div')
foodPicture.classList.add('foodPicture')
foodPicture.classList.add(summary.textContent)
const foodName = document.createElement('div')
foodName.classList.add('foodName')
const h2 = document.createElement('h2')
h2.innerText = summary.textContent
foodName.appendChild(h2)
foodBox.appendChild(foodPicture)
foodBox.appendChild(foodName)
food.appendChild(foodBox)

console.log(document.querySelector('.김치찌개.jpg'))
}
}





// .된장찌개{
//     background-image: url(./img/된장찌개.jpg);
//     /* display: none; */
//    }