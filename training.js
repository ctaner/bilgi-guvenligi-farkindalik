// Eğitim modülleri. c = pekiştirme sorusu: [soru, DOĞRU cevap, yanlış1, yanlış2, açıklama]
window.TRAINING = [
{
  t: 'Bilgi güvenliğinin temelleri',
  intro: 'Bilgi, kurumun en değerli varlıklarından biridir. Bilgi güvenliği; bilgiyi yetkisiz erişimden, izinsiz değişiklikten ve kayıptan korumaktır. Bu korumanın sorumluluğu yalnızca BT ekibinde değil, bilgiyle çalışan herkestedir.',
  points: [
    'Gizlilik: Bilgiye yalnızca yetkili kişiler erişebilir.',
    'Bütünlük: Bilgi doğru, eksiksiz ve izinsiz değiştirilmemiş olmalıdır.',
    'Erişilebilirlik: Bilgiye gerektiğinde, gerekli kişiler ulaşabilmelidir.',
    'Bilgi varlığı; dijital veriler, basılı belgeler, yazılımlar, donanımlar, hizmetler ve kişilerin bilgisini kapsar.',
    'Risk, bir tehdidin bir zafiyeti kullanarak varlığa zarar verme olasılığı ile bu zararın etkisinin birleşimidir.'
  ],
  example: 'Bir muhasebe çalışanı ödeme listesini yanlışlıkla herkesin görebildiği bir paylaşım klasörüne koyar. Liste yetkisiz kişilerce görülürse gizlilik ihlal edilmiş olur; biri rakamları değiştirirse bütünlük de zarar görür. Tek bir dikkatsizlik iki unsuru birden tehlikeye atabilir.',
  dos: ['Bilgiyi yalnızca ihtiyacı olan kişilerle paylaşın.', 'İşinizdeki bilgilerin hassasiyetini bilin.', 'Şüpheli durumu hemen bildirin.'],
  donts: ['"Güvenlik BT\'nin işi" diye düşünmeyin.', 'Hassas bilgiyi herkese açık alanlara koymayın.', 'Riskleri görmezden gelmeyin.'],
  c: ['Bir raporun rakamları izinsiz değiştirildi. Hangi güvenlik unsuru ihlal edilmiştir?', 'Bütünlük', 'Gizlilik', 'Erişilebilirlik', 'Bilginin izinsiz değiştirilmesi bütünlük ihlalidir.']
},
{
  t: 'ISO/IEC 27001 ve BGYS',
  intro: 'ISO/IEC 27001, kuruluşların bilgi güvenliğini sistematik ve risk temelli yönetmesi için Bilgi Güvenliği Yönetim Sistemi (BGYS) gerekliliklerini tanımlar. Sistem; politika, risk değerlendirmesi, kontroller, izleme, iç denetim ve sürekli iyileştirme döngüsüyle çalışır.',
  points: [
    'Standart, çalışanların farkındalığını ayrı bir gereklilik olarak ister (Madde 7.3 ve Ek A\'daki farkındalık, eğitim ve öğretim kontrolü).',
    'Çalışan; bilgi güvenliği politikasını, kendi katkısının nasıl bir fark yarattığını ve uyumsuzluğun sonuçlarını bilmelidir.',
    'Eğitimler kayıt altına alınır; denetimde bu kayıtlar kanıt olarak istenir.',
    'Güvenlik olaylarını bildirmek, çalışanın BGYS içindeki en önemli görevlerinden biridir.',
    'BGYS bir kez kurulup bırakılmaz; planla-uygula-kontrol et-iyileştir (PDCA) mantığıyla sürekli geliştirilir.'
  ],
  example: 'Bir denetimde denetçi rastgele bir çalışana "Bilgi güvenliği olayını kime ve nasıl bildirirsiniz?" diye sorar. Çalışan doğru cevabı veremezse, eğitimin etkinliği sorgulanır ve uygunsuzluk çıkabilir.',
  dos: ['Politikaları okuyun ve nerede bulunduğunu bilin.', 'Olay bildirim kanalını ezbere bilin.', 'Eğitim kayıtlarınızı saklayın.'],
  donts: ['Politikayı "yalnızca denetim için var" diye görmeyin.', 'Kuralları kendi yorumunuza göre esnetmeyin.', 'Eğitimi geçiştirmeyin.'],
  c: ['ISO 27001 kapsamında çalışanlardan aşağıdakilerden hangisi beklenir?', 'Politikayı bilmeleri ve uyumsuzluğun sonuçlarının farkında olmaları', 'Güvenlik duvarı kurallarını yazmaları', 'Sunucuları kendilerinin yönetmesi', 'Çalışan farkındalığı, standardın açık bir gerekliliğidir.']
},
{
  t: 'Parola ve kimlik doğrulama',
  intro: 'Kimlik bilgileri, saldırganların en çok hedef aldığı varlıklardır. Çalınan veya tahmin edilen tek bir parola, tüm kurum ağına açılan kapı olabilir.',
  points: [
    'Uzunluk, karmaşıklıktan daha önemlidir: "Kahve-Mavi-Bisiklet-47!" gibi parola cümleleri tahmin edilmesi zor ama hatırlaması kolaydır.',
    'Her hesap için ayrı parola kullanın. Bir sızıntıda aynı parola diğer hizmetlerde otomatik denenir (credential stuffing).',
    'Parola yöneticisi, benzersiz ve güçlü parolaları saklamanın en pratik yoludur.',
    'Çok faktörlü kimlik doğrulama (MFA), parola çalınsa bile hesabı korur.',
    'MFA yorgunluğu saldırısında saldırgan sürekli onay bildirimi yollar; kullanıcı bıkıp onaylayana kadar dener.'
  ],
  example: 'Telefonunuza gece yarısı art arda "Giriş onayı" bildirimi gelir. Birkaç dakika sonra "BT destek" olduğunu söyleyen biri arayıp "bildirimi onaylarsanız sorun çözülecek" der. Bu, MFA yorgunluğu ve sosyal mühendisliğin birleşimidir.',
  dos: ['Uzun parola cümleleri kullanın.', 'MFA\'yı mümkün olan her yerde açın.', 'Beklenmedik MFA isteğini reddedip bildirin.'],
  donts: ['Parolanızı kimseyle (BT dahil) paylaşmayın.', 'Parolayı not kâğıdına yazıp ekrana yapıştırmayın.', 'Aynı parolayı birden fazla yerde kullanmayın.'],
  c: ['Siz giriş yapmadığınız hâlde telefonunuza MFA onay isteği geldi. Ne yaparsınız?', 'Reddederim, parolamı değiştirir ve bildiririm', 'Bildirim kesilsin diye onaylarım', 'Yok sayıp telefonu kapatırım', 'Beklenmedik MFA istekleri hesabınızın ele geçirilmeye çalışıldığının işaretidir.']
},
{
  t: 'Oltalama ve sosyal mühendislik',
  intro: 'Sosyal mühendislik, teknik açıklar yerine insanı hedef alır. Saldırgan; aciliyet, korku, merak, otorite veya ödül vaadi gibi duygularla düşünmeden hareket etmenizi sağlamaya çalışır.',
  points: [
    'Oltalama (phishing) e-posta ile; vishing telefonla; smishing SMS ile; quishing sahte QR kodla yapılır.',
    'Hedefli oltalama (spear phishing), hedefin adı, görevi ve iş ilişkileri bilinerek hazırlanır; bu yüzden çok inandırıcıdır.',
    'İş e-postası dolandırıcılığında (BEC) "genel müdür" adına acil ödeme veya bilgi talep edilir.',
    'Yapay zekâ ile ses ve görüntü taklit edilebilir (deepfake); tanıdık ses tek başına kanıt değildir.',
    'Tıklamadan önce bağlantının gerçek adresine bakın; beklenmedik ekleri açmayın; mali talepleri ayrı bir kanaldan doğrulayın.'
  ],
  example: 'Muhasebeye, genel müdürün adresine çok benzeyen bir adresten "Gizli bir satın alma var, bugün şu hesaba havale yap, kimseye söyleme" e-postası gelir. Adreste tek bir harf farkı vardır. Çalışan arayıp doğrulasaydı dolandırıcılık anlaşılacaktı.',
  dos: ['Beklenmedik talepleri bilinen bir kanaldan doğrulayın.', 'Bağlantının gerçek adresini kontrol edin.', 'Şüpheli iletiyi bildirin.'],
  donts: ['Aciliyet baskısıyla hareket etmeyin.', 'Bilinmeyen ekleri ve QR kodlarını açmayın.', 'Tıkladıysanız saklamayın; hemen bildirin.'],
  c: ['Telefonda "BT destek" olduğunu söyleyen kişi parolanızı istiyor. Doğru davranış nedir?', 'Vermem; kimliğini resmi kanaldan doğrular ve bildiririm', 'Aciliyet varsa veririm', 'Yalnızca yarısını söylerim', 'Gerçek BT personeli parolanızı asla istemez.']
},
{
  t: 'Fiziksel güvenlik ve temiz masa',
  intro: 'Bilgi güvenliği yalnızca ekranlarda değil, ofiste de başlar. Açıkta bırakılan bir belge, kilitlenmemiş bir ekran veya kapıdan izinsiz giren bir kişi tüm dijital önlemleri boşa çıkarabilir.',
  points: [
    'Temiz masa, temiz ekran: Masadan kalkarken ekranı kilitleyin (Win + L), gizli belgeleri kaldırın.',
    'Ziyaretçiler kayıt altına alınır, kart takar ve refakatsiz dolaştırılmaz.',
    'Tailgating: Kartı olmayan birinin sizin arkanızdan içeri girmesine izin vermeyin.',
    'Gizli kâğıtlar imha makinesiyle yok edilir; yazıcıda çıktı unutulmaz, mümkünse PIN ile güvenli yazdırma kullanılır.',
    'Eski cihazlar ve diskler çöpe atılmaz; güvenli imha için BT\'ye teslim edilir.'
  ],
  example: 'Bir "kurye", elindeki kolilerle kapıya gelir ve "kartım yok, tutar mısın" der. İçeri girer, boş bir masadaki kilitsiz bilgisayara USB takar. Nazik olmak ile güvenli olmak aynı anda mümkündür: kapıdaki kişiyi karşılama masasına yönlendirmek yeterlidir.',
  dos: ['Masadan kalkarken ekranı kilitleyin.', 'Tanımadığınız kişiye nazikçe "Size yardımcı olabilir miyim?" deyin.', 'Çıktıları hemen alın, gerekirse imha edin.'],
  donts: ['Kartınızı başkasına vermeyin.', 'Parolayı ekrana veya masaya yazmayın.', 'Gizli belgeyi çöpe atmayın.'],
  c: ['Kartsız biri "elim dolu" diyerek sizinle birlikte kapıdan geçmek istiyor. Ne yaparsınız?', 'Kendi kartını okutmasını veya resepsiyona gitmesini nazikçe söylerim', 'Kapıyı tutarım', 'Kartımı ödünç veririm', 'Bu, tailgating yöntemidir. Yetkisiz kişi içeri alınmamalıdır.']
},
{
  t: 'Cihaz, ağ ve yazılım güvenliği',
  intro: 'İş cihazları ve ağ, kurumun verisine açılan kapılardır. Güncelleme, doğru yazılım ve güvenli bağlantı alışkanlıkları, saldırı yüzeyini önemli ölçüde küçültür.',
  points: [
    'Güncellemeler, saldırganların kullandığı bilinen açıkları kapatır; ertelemeyin.',
    'Onaylı olmayan yazılım kurmayın; kaynağı belirsiz programlar zararlı kod taşıyabilir.',
    'Antivirüs/EDR gibi koruma yazılımlarını devre dışı bırakmayın; yavaşlık sorununu BT\'ye bildirin.',
    'Bulduğunuz USB belleği takmayın. Kurumsal veriyi izinsiz taşınabilir ortama kopyalamayın.',
    'Halka açık Wi-Fi ağlarında kurumsal VPN kullanın; dinlemeye açık ağlarda hassas işlem yapmayın.'
  ],
  example: 'Otopark girişinde "Maaş Listesi 2026" etiketli bir USB bellek bulunur. Merakla bilgisayara takıldığında bellek, arka planda zararlı yazılım yükler. Bu yöntem (USB drop) gerçek saldırılarda sıkça kullanılır.',
  dos: ['Güncellemeleri zamanında yapın.', 'Kafede kurumsal VPN kullanın.', 'Bulunan USB\'yi BT\'ye teslim edin.'],
  donts: ['Kaynağı belirsiz program kurmayın.', 'Koruma yazılımını kapatmayın.', 'Kurumsal cihazı başkalarına kullandırmayın.'],
  c: ['Park yerinde bulduğunuz USB belleği ne yapmalısınız?', 'Takmadan BT/güvenlik ekibine teslim etmeliyim', 'İçeriğine bakmak için bilgisayara takarım', 'Evdeki bilgisayarda denerim', 'Bulunan USB\'ler zararlı yazılım taşıyabilir; asla takılmamalıdır.']
},
{
  t: 'Zararlı yazılım ve yedekleme',
  intro: 'Fidye yazılımı, kurumları günler hatta haftalarca durdurabilir. Bulaşma çoğu zaman bir oltalama e-postası veya güncellenmemiş bir sistem üzerinden olur. En güçlü savunma; önleme ve sağlam yedekleme birlikteliğidir.',
  points: [
    'Fidye yazılımı verileri şifreler ve açmak için ödeme ister; birçok saldırıda önce veri de dışarı sızdırılır.',
    'Fidye ödemek verilerin geri geleceğini garanti etmez; olay müdahale sürecini başlatın.',
    '3-2-1 yedekleme: 3 kopya, 2 farklı ortam, 1 tanesi uzak konumda.',
    'Yedekler ağdan izole olmalı ve geri yüklemesi düzenli test edilmelidir; test edilmeyen yedek yok sayılır.',
    'Bulaşma şüphesinde cihazı ağdan çekin, kapatmadan BT\'ye haber verin.'
  ],
  example: 'Bir çalışan "fatura" ekini açar; birkaç dakika sonra ekranda fidye notu belirir. Şirkette yedekler aynı ağda tutulduğu için onlar da şifrelenmiştir. İzole ve test edilmiş yedek olsaydı, birkaç saatte geri dönülebilirdi.',
  dos: ['Şüpheli ekleri açmadan önce doğrulayın.', 'Yedeklerin geri dönüşünü test ettirin.', 'Şüphede hemen ağ bağlantısını kesip bildirin.'],
  donts: ['Fidyeyi kendi başınıza ödemeye kalkmayın.', 'Olayı saklamayın.', 'Yedekleri çalışma ağına açık bırakmayın.'],
  c: ['3-2-1 yedekleme kuralı neyi ifade eder?', '3 kopya, 2 farklı ortam, 1 uzak konum', '3 gün, 2 saat, 1 dakika', '3 kullanıcı, 2 parola, 1 cihaz', 'Bu kural, tek bir arızanın tüm kopyaları yok etmesini önler.']
},
{
  t: 'Veri sınıflandırma ve kişisel verilerin korunması',
  intro: 'Her bilgi aynı değerde değildir. Sınıflandırma, hangi bilginin kim tarafından görülebileceğini, nasıl saklanacağını ve nasıl paylaşılacağını belirler. Kişisel veriler ayrıca KVKK kapsamında korunur.',
  points: [
    'Tipik sınıflar: Halka açık, Kuruma özel, Gizli. Kurumunuzun sınıflarını ve işaretleme kurallarını bilin.',
    'Kimliği belirli veya belirlenebilir gerçek kişiye ait her bilgi kişisel veridir: ad-soyad, T.C. kimlik no, telefon, e-posta, plaka gibi.',
    'Sağlık, biyometrik ve benzeri özel nitelikli veriler çok daha sıkı korunur.',
    'Gizli bilgi, kişisel e-posta, onaysız bulut hizmetleri veya mesajlaşma uygulamalarıyla paylaşılmaz.',
    'Yanlış alıcıya gönderilen e-posta bile bir veri ihlali olabilir; yasal bildirim süreleri olduğundan hemen bildirin.'
  ],
  example: 'Bir çalışan, müşteri listesini "evde çalışırım" diye kişisel Gmail adresine yollar. Hesap daha sonra ele geçirilir. Veri kurumun kontrolü dışında olduğu için ne silinebilir ne de erişim kayıtları incelenebilir.',
  dos: ['Belgeleri doğru sınıfla işaretleyin.', 'Alıcıyı göndermeden önce kontrol edin.', 'İhlal şüphesini hemen bildirin.'],
  donts: ['Gizli veriyi kişisel hesaplara göndermeyin.', 'Gerekmedikçe kişisel veri toplamayın veya çoğaltmayın.', 'Ekran görüntüsüyle veri paylaşımını kontrolsüz yapmayın.'],
  c: ['Aşağıdakilerden hangisi kişisel veridir?', 'Bir müşterinin telefon numarası', 'Şirketin toplam yıllık cirosu', 'Herkese açık ürün kataloğu', 'Kimliği belirlenebilir kişiye ait her bilgi kişisel veridir.']
},
{
  t: 'Mobil, uzaktan çalışma ve toplantılar',
  intro: 'Uzaktan çalışma, ofis duvarlarının dışına çıkan bir risk alanı yaratır. Ev ağı, kafe, tren ve çevrimiçi toplantılar da kurumun bilgi güvenliği kapsamındadır.',
  points: [
    'İş cihazını aile bireyleri veya arkadaşlarla paylaşmayın; ekranı kilitleyin.',
    'Ev ağınızda yönlendirici varsayılan parolasını değiştirin ve WPA2/WPA3 kullanın.',
    'Halka açık yerlerde ekran filtresi kullanın; omuz üstünden bakma (shoulder surfing) riskine dikkat edin.',
    'Hassas iş konuşmalarını asansörde, kafede veya trende yapmayın.',
    'Toplantı bağlantılarını herkese açık paylaşmayın; ekran paylaşmadan önce hassas pencereleri kapatın.',
    'Kişisel cihazla (BYOD) çalışıyorsanız kurumun güvenlik kurallarına uyun; disk şifreleme ve ekran kilidi açık olsun.'
  ],
  example: 'Bir yönetici trende dizüstü bilgisayarıyla gizli bir teklifi hazırlarken yanındaki yolcu ekranı fotoğraflar. Ayrıca aynı yolcu, telefon görüşmesinden müşteri adını ve rakamları da not eder. Ekran filtresi ve konuşmaları ertelemek bu riski ortadan kaldırırdı.',
  dos: ['Halka açık ağda VPN kullanın.', 'Cihazınızı gözetimsiz bırakmayın.', 'Toplantı bağlantısını yalnızca katılımcılarla paylaşın.'],
  donts: ['Aile bireylerine iş cihazını vermeyin.', 'Varsayılan yönlendirici parolasını bırakmayın.', 'Hassas konuları kalabalıkta konuşmayın.'],
  c: ['Evde Wi-Fi yönlendiricinizi güvenli hâle getirmek için ilk yapmanız gereken nedir?', 'Varsayılan parolayı değiştirmek ve WPA2/WPA3 kullanmak', 'Parolayı herkesle paylaşmak', 'Ağı parolasız bırakmak', 'Varsayılan parolalar herkesçe bilinir; ilk iş değiştirilmelidir.']
},
{
  t: 'Sosyal medya ve yapay zekâ araçları',
  intro: 'Paylaşımlarınız ve yapay zekâ araçlarına yazdıklarınız, kurumun bilgisini kendi kontrolünüzün dışına taşıyabilir. Saldırganlar hedeflerini araştırırken sosyal medyayı ilk kaynak olarak kullanır.',
  points: [
    'İş yerinde çekilen fotoğraf ve videolarda ekran, ağ şeması, beyaz tahta, rozet veya belgelerin görünmediğinden emin olun.',
    'Unvan, proje adı, kullanılan teknolojiler ve organizasyon yapısı, hedefli saldırılar için ipucu olabilir.',
    'Genel yapay zekâ araçlarına müşteri verisi, kaynak kod, sözleşme veya gizli belgeler yapıştırılmaz.',
    'Kurumun onayladığı yapay zekâ araçlarını ve politikasını kullanın.',
    'Yapay zekâ çıktıları hata içerebilir; kritik kararlardan önce doğrulayın.'
  ],
  example: 'Bir çalışan, "yeni projemiz başladı" paylaşımına arkasında ağ şemasının göründüğü bir ofis fotoğrafı ekler. Başka biri aynı çalışana "yapay zekâ ile özetlemek için" müşteri sözleşmesini genel bir sohbet aracına yapıştırmasını önerir. İkisi de kontrolsüz veri ifşasıdır.',
  dos: ['Paylaşmadan önce fotoğrafın arka planına bakın.', 'Onaylı yapay zekâ araçlarını kullanın.', 'Emin değilseniz sorun.'],
  donts: ['Gizli veriyi genel yapay zekâ araçlarına girmeyin.', 'Kurumsal bilgileri sosyal medyada duyurmayın.', 'Tanımadığınız kişilerin bağlantı isteklerini körü körüne kabul etmeyin.'],
  c: ['Müşteri verisi içeren bir belgeyi özetlemek için genel kullanıma açık bir yapay zekâ aracına yapıştırmak doğru mudur?', 'Hayır, kurum onayı olmadan gizli veya kişisel veri girilmez', 'Evet, araç güvenilirdir', 'Evet, isimleri silerek her zaman serbesttir', 'Girilen veri üçüncü taraf sistemlerde işlenebilir; kurum politikası esastır.']
},
{
  t: 'Erişim yönetimi ve olay bildirimi',
  intro: 'İyi bir güvenlik kültürünün iki temeli vardır: kimsenin gerekenden fazla yetkisi olmaması ve bir şeyler ters gittiğinde hızlıca haber verilmesi. Erken bildirim, küçük bir olayın büyük bir krize dönüşmesini önler.',
  points: [
    'En az yetki ilkesi: Yalnızca işiniz için gereken erişime sahip olun.',
    'İşten ayrılan veya görev değiştiren kişinin erişimleri gecikmeden kaldırılır veya güncellenir.',
    'Güvenlik olayı örnekleri: kayıp/çalıntı cihaz, oltalama bağlantısına tıklama, yanlış alıcıya e-posta, şüpheli giriş uyarısı, bulunan USB.',
    'Olayı fark ettiğinizde kimseyi suçlamadan, ilk fırsatta kurumun bildirim kanalına bildirin.',
    'Delilleri silmeyin; ne gördüğünüzü, saati ve hangi cihazı kullandığınızı not edin.'
  ],
  example: 'Bir çalışan şüpheli bağlantıya tıkladığını fark eder ama "azar işitirim" diye kimseye söylemez. İki gün sonra saldırgan e-posta hesabını kullanarak müşterilere sahte faturalar yollar. Hemen bildirseydi parola değişimi ve hesap kilidiyle zarar sınırlanabilirdi.',
  dos: ['Şüphede bildirin; yanlış alarm sorun değildir.', 'Gördüklerinizi kısaca not edin.', 'Yetkilerinizi gözden geçirin, gereksizleri bildirin.'],
  donts: ['Olayı saklamayın veya kendi başınıza "düzeltmeye" çalışmayın.', 'Delilleri silmeyin.', 'Erişim bilginizi devretmeyin.'],
  c: ['Kayıp iş dizüstü bilgisayarınız için ne yaparsınız?', 'Gecikmeden BT/güvenlik ekibine bildiririm', 'Birkaç gün bulmayı beklerim', 'Kimseye söylemem', 'Hızlı bildirim, uzaktan kilitleme ve parola değişimi gibi önlemleri mümkün kılar.']
}
];
