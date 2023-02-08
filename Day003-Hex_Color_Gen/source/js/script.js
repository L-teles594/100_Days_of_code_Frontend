const hexColor = document.querySelector('.hex');
const btn = document.querySelector('.generate-color');

const colorGenerator = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = '#' + randomColor;
    hexColor.innerHTML = '#' + randomColor;
};

btn.addEventListener('click', colorGenerator)

colorGenerator()