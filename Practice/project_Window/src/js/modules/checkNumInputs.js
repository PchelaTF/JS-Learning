export const checkNumInputs = (selecror) => {
    const numInputs = document.querySelectorAll(selecror);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};