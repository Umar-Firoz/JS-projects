const generate = document.querySelector('#generate-btn');
generatePalette();


function generatePalette() {
  document.querySelectorAll('.box').forEach((box) => {
    const hexCode = colorGen();
    box.querySelector('.color-box').style.backgroundColor = hexCode;
    box.querySelector('.code').innerText = hexCode;
  });
}
generate.addEventListener('click', generatePalette);

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const box = btn.closest('.box');
    const codeEl = box.querySelector('.code');
    const codeText = codeEl.innerText;

    navigator.clipboard.writeText(codeText);

    codeEl.innerText = 'Copied!';
    setTimeout(() => {
      codeEl.innerText = codeText;
    }, 1000);
  });
});

function colorGen() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
