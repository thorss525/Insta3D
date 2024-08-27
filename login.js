document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
 // Basit bir kontrol. Gerçek bir uygulamada, bu kısımlar backend ile doğrulanır.
// Basit bir kontrol. Gerçek bir uygulamada, bu kısımlar backend ile doğrulanır.
if (username === 'Gorzo' && password === '123') {
        // Giriş başarılıysa kullanıcıyı yönlendir
        window.location.href = 'gorzo.html';
    } else {
        // Hata mesajını göster
        document.getElementById('error-message').textContent = 'Yanlış Şifre VE Kullanıcı Adı Tekrar Deneyiniz 😡';
        document.getElementById('error-message').style.display = 'block';
    }
});
