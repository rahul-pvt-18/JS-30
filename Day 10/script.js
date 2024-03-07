const shareBtn = document.querySelector('.shareBtn');
const dialogBox = document.querySelector('.dialogBox');
const crossBtn = document.querySelector('.crossBtn');
const saveBtn = document.querySelector('.saveBtn');


shareBtn.addEventListener('click', () => {
    dialogBox.classList.remove('hidden');
    dialogBox.classList.add('animate__backInUp');
    dialogBox.classList.remove('animate__backOutDown');
    crossBtn.classList.remove('hidden');
});

crossBtn.addEventListener('click', () => {
    dialogBox.classList.add('animate__backOutDown');
    crossBtn.classList.add('animate__backOutDown');
    setTimeout(() => {
        dialogBox.classList.add('hidden');
        dialogBox.classList.remove('animate__backInUp');
        dialogBox.classList.remove('animate__backOutDown');
        crossBtn.classList.add('hidden');
        crossBtn.classList.remove('animate__backOutDown'); // Ensure to remove animation class from crossBtn
    }, 120);
});

saveBtn.addEventListener('click', () => {
    const image = document.querySelector('.img-container img');
    const imageSrc = image.getAttribute('src');
    
    if (imageSrc) {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'image.jpg';
        link.click();
    } else {
        alert('No image source found!');
    }
});
