document.addEventListener("DOMContentLoaded", () => {
    const photoButton = document.getElementById('photo-button') as HTMLButtonElement;
    const photoInput = document.getElementById('photo') as HTMLInputElement;
    const photoPreview = document.getElementById('photo-preview') as HTMLImageElement;
    const form = document.getElementById('simple-form') as HTMLFormElement;

    photoButton.addEventListener('click', () => {
        photoInput.click();
    });

    photoInput.addEventListener('change', () => {
        const file = photoInput.files ? photoInput.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photoPreview.src = e.target?.result as string;
                photoPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
