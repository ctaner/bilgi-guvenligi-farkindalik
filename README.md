# Bilgi Güvenliği Farkındalık Eğitimi ve Sınavı

ISO/IEC 27001 BGYS kapsamında çalışanlar için ücretsiz, tamamen istemci tarafında çalışan farkındalık eğitimi + sınav + sertifika sitesi.

- **11 modüllük eğitim** (açıklama, örnek vaka, yapılacak/yapılmayacaklar, her modül sonunda pekiştirme sorusu); tamamlanmadan sınav açılmaz
- 60 soruluk havuzdan her denemede rastgele **40 soru**, **60 dakika** süre
- Başarı barajı **%70** (28/40)
- Seçenekler her denemede karışır; yanlış cevaplar için açıklamalı inceleme
- Sertifika: PNG/PDF indirme, **LinkedIn'e sertifika olarak ekle** ve gönderi paylaşımı
- Sertifika bağlantısı (`?v=...&k=...`) ile hafif doğrulama sayfası
- Sunucu, veritabanı veya üyelik yok; veriler yalnızca tarayıcıda (localStorage)

## GitHub Pages'e yayınlama

1. Yeni bir depo oluşturun (örn. `bilgi-guvenligi-farkindalik`).
2. `index.html`, `style.css`, `app.js`, `questions.js`, `training.js` dosyalarını depo köküne yükleyin.
3. **Settings → Pages → Build and deployment → Deploy from a branch → main / (root)** seçip kaydedin.
4. Adres: `https://<kullanici>.github.io/<depo>/`

## Özelleştirme

- Soru eklemek/değiştirmek: `questions.js` (ilk seçenek doğru cevaptır, sınavda karıştırılır).
- Süre, soru sayısı, baraj, imza metni: `app.js` içindeki `CFG` nesnesi.
- Eğitim modülleri: `training.js` (içerik ve pekiştirme soruları), minimum okuma süresi `app.js` içindeki `MIN_SEC`.

## Not

Site statik olduğu için doğrulama bağlantısı kriptografik olarak güvenli değildir (sertifika bilgilerinin tutarlılığını kontrol eder). Bu sertifika bir farkındalık belgesidir, akredite kişi belgelendirmesi değildir.
