document.getElementById('create-button').addEventListener('click', function() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('video-creation').style.display = 'block';
});

document.getElementById('generate-video').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    // Burada yapay zeka API'si ile video oluşturma işlemleri yapılacak.
    // Örnek olarak sadece metni ekrana yazdırıyoruz.
    document.getElementById('video-output').innerHTML = `<p>${text}</p>`;
});