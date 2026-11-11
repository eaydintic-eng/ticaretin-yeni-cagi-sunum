# 05 · Bağımsız sunum denetimi: "Ticaretin Yeni Çağı"

**Denetim:** 11 Kasım 2026 · **Sunum:** 12 Kasım 2026, 09.00, YENİAD · Halil Aydın
**İncelenenler:** `sunum/index.html` (23 slayt, konuşmacı notları, kaynak satırları), `onizleme/s01–s23.png`, `_genel-1/2.png`, `arastirma/00–03`, `sunum/assets/deck.css` (yazı boyutları)
**Yöntem:** Her rakam ve alıntı 01 ve 02 dosyalarındaki doğrulanmış hâliyle tek tek karşılaştırıldı. Bir görsel künyesi web'den teyit edildi (S02). Sunumda hiçbir düzeltme yapılmadı.
**Not:** Önizlemeler her slaytın son (tüm tıklamalar açılmış) hâlini gösteriyor. Görsel bulgular bu hâle göre yazıldı.

---

## Genel karar

**Puan: 7 / 10.** Burada sorunları sert bir gözle sıraladım; sunumun güçlü yanlarını da aynı açıklıkla belirtmem gerekiyor.

- **Güçlü:** Hikâye kurgusu dünya standardında. Kültepe ve 1913 ile açılıyor, tez net ("Bu kez araç düşünebiliyor"), gerçeklik kontrolü dürüst, kapanış açılıştaki görsellere dönüyor. Kaynak disiplini genelde çok iyi, BSS yalnızca imza olarak geçiyor ve satış kokusu yok. Türkçe büyük ölçüde temiz. "Yapay zekâ" yazımı slaytlarda baştan sona tutarlı.
- **Puanı düşürenler:** (1) Sahnede herkesin göreceği bir taşma var (S16). (2) Bazı ifadeler kaynağıyla çelişiyor ya da doğrulanmamış: S07'deki "10–40 kat", S19'daki "Çalışanlar" başlığı, S15'te "Herkes kullanıyor" ile S19 arasındaki çelişki. (3) Acemoğlu alıntısındaki Türkçe hata anlamı tersine çeviriyor. (4) Sunum 18 dakikaya sığmıyor; gerçekçi süre 21-22 dakika. Tekrarlar var ve alıntı sayısı (10-11) storyboard'un kendi koyduğu "en fazla 5-6" sınırını aşıyor.

| Boyut | Puan |
|---|---|
| Kurgu ve hikâye | 9 |
| Olgu disiplini | 7 |
| Türkçe | 7 |
| Dinleyiciye uygunluk | 7,5 |
| Görsel | 7 |
| Süre ve tempo | 5 |

---

## En çok iyileştirme getirecek 3 değişiklik

1. **Görünürlük onarımı (10 dakikalık iş).** S16'daki taşmayı giderin: alttaki iki satır kaynak satırının üstüne biniyor ve son satır ekranın dışına taşıyor. S06 ve S21'deki görünmeyen kaynak satırlarının kontrastını artırın. Bunlar sahnede ilk göze çarpacak, "bitmemiş iş" izlenimi veren hatalar.
2. **Dört iddiayı kaynağına uydurun.** S07'deki "10–40 kat" ya kalksın ya da "Sequoia'nın iddiası" diye etiketlensin. S19 başlığı "Bireyler başladı" olsun. S15 başlığı "Çoğu deniyor, azı kazanıyor" olsun ve rakamların CEO'lara ait olduğu yazılsın. S15'teki Acemoğlu cümlesi düzeltilsin. Bu dört düzeltme, dikkatli bir dinleyicinin soru-cevapta yakalayabileceği tutarsızlıkları kapatır.
3. **Yaklaşık 3 dakika kısaltın ve tekrarları ayıklayın.** S13 ile S14'ü birleştirin. S11'deki "Herkese özel" kartını çıkarın (S12'de aynısı var). %21'i yalnız bir slaytta verin. Alıntı sayısını 6-7'ye indirin. Ayrıntılar "Akış ve süre" bölümünde.

---

## KRİTİK (yanlış bilgi ya da utandırıcı hata)

**K1 · S16 · Görsel · Metin taşıyor ve üst üste biniyor.**
"Aleti değil, işi yeniden tasarlayın." satırı kaynak satırının ("Paul A. David… McKinsey, The State of AI (2025)") tam üstüne biniyor. Bu yüzden iki metin de okunmuyor. Altındaki "Bugün de kazananlar, iş akışını ~3 kat daha sık baştan tasarlayanlar." satırı ise slaytın alt kenarına dayanıyor ve kesiliyor. Sayfa numarası da fotoğrafın üstünde kalıyor.
→ **Öneri:** Başlığı iki satıra indirin ("Elektrik geldi. Verim 40 yıl sonra geldi." 3 satır yerine 2 satıra sığar; yazı boyutunu biraz küçültün ya da `max-width` değerini artırın). Ayrıca 1880'ler satırını kısaltın. Ya da alt satırı konuşmacı notuna alın. Hedef: içerik, kaynak satırının en az 40 piksel üstünde bitsin.

**K2 · S15 · Türkçe/olgu · Acemoğlu alıntısında anlam tersine dönüyor.**
Mevcut metin: *"Yapay zekâyı fazlasıyla otomasyona, çalışanlara uzmanlık ve bilgi sağlamaya ise yeterince kullanmıyoruz."*
Cümlede tek fiil var ve o da olumsuz ("kullanmıyoruz"). Bu yüzden cümle Türkçede "otomasyona da fazlasıyla kullanmıyoruz" diye okunuyor ve Acemoğlu'nun söylediğinin tersini veriyor. Bir Nobel sahibinin ağzına bozuk bir cümle koymak, bu dinleyici önünde riskli.
→ **Öneri:** *"Yapay zekâyı otomasyon için fazlasıyla kullanıyoruz; çalışanlara uzmanlık ve bilgi sağlamak için ise yeterince kullanmıyoruz."* (01 dosyası, madde 36). İmza: "Daron Acemoğlu · MIT · 2024 Nobel Ekonomi Ödülü sahibi". Mevcut "MIT, 2024 Nobel Ekonomi Ödülü" ifadesi kişiyi ödülün kendisiymiş gibi gösteriyor. İmza satırı da şu an kötü bölünüyor: "Daron Acemoğlu ·" bir satırda kalıyor, devamı alt satıra geçiyor.

**K3 · S07 · Olgu · "%10–40 daha hızlı / 10–40 kat daha fazla iş" doğrulanmamış.**
Bu iki rakam 02-veriler'de yok. 03-benchmark'ta da yalnızca **[İ]** etiketiyle, Sequoia konuşmasının "Çince tam metin özetinden" aktarılmış. Kaynağı bir risk sermayesi fonunun sahne konuşması; ölçülmüş bir bulgu değil. Slaytta ise dev puntoyla, olgu gibi duruyor. Bir yazılım şirketi CEO'sunun ağzından "10–40 kat" vaadi satış konuşması gibi algılanabilir. Sekiz slayt sonra gelen "CEO'ların %56'sı hiçbir kazanç görmedi" verisiyle de çelişiyor.
→ **Öneri (birini seçin):** (a) Rakamları kaldırın, metaforu bırakın: "Asistan işinizi hızlandırır; ajan işi sizin yerinize yapar." (b) Rakamları tutacaksanız kartın altına "Sequoia'nın öngörüsü, ölçülmüş veri değil" yazın ve konuşmada da bunu söyleyin. Ayrıca kart başlığındaki "BUGÜN · AJAN" ifadesi S09'daki "Yaptır: BAŞLIYOR" ve notlardaki "daha başında" ile çelişiyor. "ŞİMDİ BAŞLIYOR · AJAN" daha doğru olur.

**K4 · S19 (ve S05 notu) · Olgu · "Çalışanlar başladı" başlığı veriyle uyuşmuyor.**
%37,6, TÜİK'in **16-74 yaş bireyler** verisi. Öğrenci, emekli ve ev hanımı da bu orana dahil, yani "çalışanlar" verisi değil. S05'in notunda geçen "bu salondaki çalışanlarınızın **büyük kısmı** zaten kullanıyor" cümlesi de iki kez hatalı: %37,6 "büyük kısım" değil, ayrıca veri çalışanlara ait değil.
→ **Öneri:** Başlığı *"Bireyler başladı. Şirketler henüz değil."* yapın (ya da "İnsanlar başladı…"). S05 notunu şöyle değiştirin: *"Her 10 yetişkinden 4'e yakını kullanıyor. Çalışanlarınızın bir kısmı da muhtemelen size söylemeden kullanıyor."*

**K5 · S15 · Olgu/tutarlılık · "Herkes kullanıyor" başlığı S19 ile çelişiyor; özne eksik.**
S15 "Herkes kullanıyor" diyor. Dört slayt sonra S19, Türk şirketlerinin %14'ünün, AB şirketlerinin %20'sinin kullandığını gösteriyor. Ayrıca %56 / %32 / %12 satırlarında bunların **CEO** oranı olduğu yazmıyor; yalnızca %21 satırında "CEO" geçiyor. Dinleyici bunları "şirketlerin %56'sı" diye okuyacak.
→ **Öneri:** Başlığı *"Çoğu deniyor, azı kazanıyor"* ya da *"Yatırım çok, kazanç az"* yapın. Göstergenin üstüne küçük bir satır ekleyin: "PwC · 4.454 CEO · son 12 ay". %56 satırı da "ne gelir ne maliyet kazancı gördü" olsun. "Hiçbir kazanç görmedi" ifadesi kaynaktan daha geniş bir iddia.

---

## ÖNEMLİ

**Ö1 · S02 · Türkçe · Sunumun ilk alıntısı aksak.**
Mevcut: *"Gönderdiğin ince kumaştan **daha yap**."* "Daha", nicelik bildiren bir sözcük olmadan ("çok", "fazla") standart Türkçede eksik kalıyor ve İngilizce "make more" kalıbının çevirisi gibi duruyor. Vurgu rengiyle öne çıkarılan kısım da tam bu iki sözcük.
→ *"Gönderdiğin o ince kumaştan **daha çok dokuyup gönder**."* ya da daha kısa: *"Gönderdiğin ince kumaştan **daha çok yap**."*

**Ö2 · S06, S21 (genel: tüm kaynak satırları) · Görsel · Kaynak satırları okunmuyor.**
`.src` stili: 17 piksel, soluk renk (`--muted`), %75 opaklık. S06'da (alüminyum dokusu ve sol gölge) ve S21'de (Kapalıçarşı fotoğrafı) satır neredeyse görünmüyor. Kaynak satırı bu sunumun güvenilirlik imzası; okunmazsa işlevini yitirir.
→ S06 ve S21'de `.src` için opaklığı 1'e çekin ve rengi `--ink-2` yapın. Gerekirse arkasına hafif koyu bir zemin şeridi koyun. Diğer slaytlarda da opaklığı 0,9'a çıkarmak iyi olur.

**Ö3 · S11 · Olgu/dinleyici · Doğrulanmamış rakam ve tanınmayan isimler.**
- "Hizmete 6 $, yazılıma 1 $ harcanıyor" 02'de yok, 03'te yalnızca [İ] etiketli. Ya doğrulayın ya da "Sequoia tahmini" diye etiketleyin. Cümle de eksik; şöyle olmalı: "Yazılıma harcanan her 1 dolara karşılık hizmete 6 dolar harcanıyor."
- "Lovable: 146 kişiyle **yıllık 400 milyon $ gelir**". Kaynakta bu rakam yıllık tekrarlayan gelir (ARR), yani yıllıklandırılmış gelir hızı; gerçekleşmiş yıllık gelir değil. → "146 kişiyle yıllıklandırılmış 400 milyon $ gelir". Dinleyici Lovable'ı tanımaz; "İsveçli bir yazılım girişimi" diye ekleyin.
- "a16z" kısaltmasını salondaki kimse bilmez. → "Andreessen Horowitz (ABD'li yatırım fonu)" yazın ya da imzayı kaldırın. Tırnak içindeki "Herkese göre değil, size göre." ifadesi birebir alıntı değil, serbest çeviri. Ya tırnakları kaldırın ya da notta belirtin.
- **"Sindir → Yenile → Yeniden tanımla."** "Sindirmek" Türkçede "yıldırmak, korkutmak" anlamını da taşır. "Yenile" de İngilizcedeki "innovate"in karşılığı değil. → *"Benimse → Geliştir → Dönüştür."*

**Ö4 · S16 · Olgu · Tarih satırı ve "~3 kat" ifadesi kaynakla uyuşmuyor.**
- "1880'ler: Fabrikalar buhar makinesini söküp yerine büyük bir elektrik motoru koyuyor." 1880'ler ilk santrallerin kurulduğu dönem. 02'ye göre 1899'da bile motorlar fabrika gücünün %5'inden azını oluşturuyordu. → "1880'ler: İlk elektrik santralleri. 1900'ler: Fabrikalar buhar makinesini söküp yerine tek büyük motor koyuyor…"
- "1919: Fabrika gücünün ancak yarısı" → kaynak "yaklaşık yarısı" diyor; bu sözcüğü ekleyin.
- "iş akışını ~3 kat daha **sık** baştan tasarlayanlar". McKinsey verisi bir olasılık farkı ("yeniden tasarlamış olma ihtimali ~3 kat"), sıklık değil; ayrıca nedensellik kanıtlanmış değil. → "Bugün de kazananların iş akışını baştan tasarlamış olma ihtimali yaklaşık 3 kat yüksek."

**Ö5 · S17 ve S18 · Dinleyici/Türkçe · "Hendek" çeviri kokuyor.**
"Moat" (Buffett'ın "ekonomik hendek" kavramı) İngilizce iş jargonu. Türk iş insanı için "hendeğiniz miydi?" sorusu ilk duyuşta anlaşılmaz; açıklama yalnızca notta var. S18'de "kalıcı olacak hendekler" diye ikinci kez geçiyor.
→ S17: *"O maliyet, sizi koruyan bir sur muydu?"* ya da *"Sizi koruyan maliyet duvarı yıkılıyor."* S18: *"Yağmur dinince kalıcı olacak üç avantaj: Güven · Veri · İlişki."* Kelime korunacaksa konuşmacı ilk geçtiği yerde tek cümleyle açıklamalı: "Kaleyi koruyan hendek gibi, rakibi uzak tutan maliyet."

**Ö6 · S09 · Olgu bağlamı ve görsel kalabalık.**
- McMillon'un sözü, Walmart'ın ChatGPT içinde satın alma ortaklığının duyurusunda söylendi. 02'ye göre bu deneme **3 kat daha düşük dönüşümle başarısız oldu** ve OpenAI Mart 2026'da sohbet içi ödemeyi geri çekti. Konu Kasım 2026'da gündemde; salonda bilen biri çıkabilir. Notta "Dürüst not" var ama isteğe bağlı gibi duruyor. → Bu notu **mutlaka söylenecek** hâle getirin. McMillon'un imzası şöyle olmalı: "Walmart'ın o dönemki CEO'su, Ekim 2025" (Şubat 2026'da görevi bıraktı).
- Notta geçen "trafik bir yılda ~7 kat" hatalı: +%693, trafiğin yaklaşık **8 katına** çıkması demek. → "yaklaşık 8 katına çıktı" ya da yalnızca "yüzde 693 arttı" deyin. "%31 daha çok satın alıyor" ifadesi de yanlış: veri miktar değil oran. → "satın alma oranı %31 daha yüksek".
- Görsel: Alıntı, iki istatistik kutusu ve üç kart alt bölümde sıkışıyor. "+%693" kutusu üçüncü kartın alt kenarına değiyor. "Bu değişmek üzere." da tek başına alt satıra düşüyor. → Alıntıyı konuşmaya bırakın; slaytta yalnızca iki istatistik kalsın. Ya da istatistikleri kartların sağına taşıyın.

**Ö7 · S07 ve S14 · Akış · Asistan/ajan ayrımı iki kez anlatılıyor.**
S07'de "Dün asistan, bugün ajan" anlatılıyor. S14'te ise aynı ayrım "1. evre Asistan, 2. evre Dijital meslektaş" diye yeniden geliyor. → S14'ü S13 ile birleştirin (bkz. Akış bölümü) ya da S14'te yalnızca 3. evre ile Huang alıntısı kalsın.

**Ö8 · S15 ve S19 · Akış/olgu · %21 iki kez veriliyor, uyarısı ise hiç verilmiyor.**
"Türkiye %21 / dünya %12" hem S15'te hem S19'da var. Rakam 84 CEO'luk küçük bir örnekleme dayanıyor ve PwC Türkiye'den Cenk Ulu, operasyonel kullanım sınırlı olduğu için "temkinli okunması gerektiğini" söylüyor (02, madde E). → Rakamı yalnızca S19'da tutun (Türkiye slaytı). Notta şu uyarı yer alsın: "84 CEO'luk bir örneklem; PwC'nin kendisi de temkinli okunmasını öneriyor."

**Ö9 · Genel · Alıntı enflasyonu.**
Sunumda 10-11 alıntı var: Puzur-Aššur, Hemingway, McMillon, a16z, Lakhani, Huang, Acemoğlu, yarışçı sözü, Lütke (iki kez), Bezos. Storyboard v2'nin kendi kuralı "en fazla 5-6". Her alıntı konuşmacının kendi sesinden süre yiyor. → S11'deki a16z alıntısını, S13'teki Lakhani alıntısını (ya da S14'teki Huang alıntısını) ve S09'daki McMillon alıntısını slayttan notlara alın. Kalan 7 alıntı yeterli.

**Ö10 · S20 · İçerik boşluğu · KVKK ve veri güvenliği hiç geçmiyor; "Engel para değil" iddiası desteksiz.**
Türk iş insanının soru-cevaptaki ilk sorusu büyük olasılıkla şu olacak: "Verim nereye gidiyor?" TÜİK'e göre uzmanlık eksikliğinden sonra gelen engeller hukuki belirsizlik (%66,4) ve veri gizliliği (%65,4). Adım 3 "müşteri geçmişi" diyor ama gizlilikten söz etmiyor. → Adım 3'ün alt satırı şöyle olsun: *"Katalog, fiyat, stok, müşteri geçmişi: düzenli ve KVKK'ya uygun. Yapay zekânın yakıtı bu."* Adım 4'teki "Engel para değil, uzmanlık." ifadesi de TÜİK verisinden çıkmıyor (veri yalnızca uzmanlığın en sık belirtilen engel olduğunu gösteriyor). → *"En büyük engel para değil, uzmanlık."*

**Ö11 · S21 · Bağlamdan koparma · "Cevap: güven." Bezos'un cevabı değil.**
Bezos'un kendi cevabı "düşük fiyat, hızlı teslimat, geniş seçenek" idi (01, madde 19b). Mevcut düzen, "güven"i Bezos söylemiş gibi gösteriyor. → *"Bizim cevabımız: güven."* ya da *"Ticaretteki cevap: güven."*

**Ö12 · S17 · Soru-cevap riski · "Yazılım ve otomasyon: yazılım ekibi → tarif ederek".**
Bir yazılım şirketinin CEO'su "artık yazılım ekibine gerek yok, tarif etmeniz yeterli" der gibi görünüyor. Salondan "O zaman BSS'ye neden ihtiyacımız olsun?" sorusu gelebilir. İddia da abartılı; S13'teki "stajyer yanılır" mesajıyla gerilim yaratıyor. → Satırı "Basit otomasyon: yazılım ekibi → tarif ederek" diye daraltın ve kısa bir cevap hazır tutun: "Basit işleri herkes kendi yapabilir; kritik sistemler hâlâ uzmanlık ister."

**Ö13 · S12 · Anlam · "12 dilde teklif".**
Gelen tek bir talebe 12 dilde teklif hazırlanmaz; teklif müşterinin dilinde hazırlanır. "12 dil" katalog için anlamlı. → *"Gelen talebe 10 dakikada, müşterinin kendi dilinde teklif, ürün föyü ve navlun hesabı."* Bu değişiklik, S17'deki "12 dilde katalog" ile tekrarı da azaltır.

**Ö14 · S10 · Olgu nüansı ve görsel.**
- Gartner'ın kelimesi "aracılık edilecek" (intermediated). Mevcut "%90'ının yapay zekâ ajanları üzerinden yapılması" ifadesi daha güçlü bir iddia. → *"…satın almaların %90'ına yapay zekâ ajanlarının aracılık etmesi bekleniyor."* "Gartner tahmini" etiketi %90'ın hemen altına daha görünür biçimde konsun.
- Kaynak satırında McKinsey var ama slaytta McKinsey verisi yok. Ya kaldırın ya da notta kullanın.
- Kontrol listesindeki kutular **işaretlenmiş** hâlde. Bu "zaten yapıldı" mesajı veriyor; boş kutular dinleyiciyi kendini sınamaya davet eder.

---

## KÜÇÜK

| S | Konu | Mevcut | Öneri |
|---|---|---|---|
| 02 | Olgu | "4.000 yıl önce" (üst satırda MÖ ~1900, yani ~3.900 yıl) | Başlık kalabilir; konuşmada "yaklaşık 4.000 yıl" deyin |
| 02 | Olgu | "Kaniş'ten Waqqurtum'a" | "Kaniş'ten" ibaresi kaynakta yok; "Puzur-Aššur'dan Waqqurtum'a" yeterli |
| 02 | Olgu/görsel | Tablet görseli (Met 66.245.1) | Bu tablet, Puzur-Aššur'un kardeşlerine yazdığı ve bir ticari anlaşmazlığı anlatan **başka bir mektup**; kumaş mektubu değil ([Met kaydı](https://www.metmuseum.org/art/collection/search/325842)). Konuşmada "bu tablet" değil, "böyle bir tablet" deyin |
| 02 | Türkçe | "Bilgi · Güven · Takas" | Kültepe ticareti gümüş, kredi ve ortaklıkla yürüyordu; "takas" trampa çağrıştırıyor. → "Bilgi · Güven · Alışveriş" |
| 03 | Görsel | 1913 fotoğrafındaki kırmızı halka, Hemingway alıntısının arkasında kalıyor | Son adımda halkayı söndürün ya da alıntıyı yukarı taşıyın |
| 03 | Not | Notta "önce yavaş, sonra birden", slaytta "önce yavaş yavaş, sonra birdenbire" yazıyor | Notu slayttaki metinle aynı yapın; konuşmacı slayttakini söylesin |
| 05 | Hassasiyet | "%19 → %37,6" | "%19,2 → %37,6" (sayaç da 19,2'den başlıyor) |
| 05 | Olgu | "bir yılda ikiye katlandı" | "neredeyse ikiye katlandı" (1,96 kat) |
| 05 | Görsel | %19 ile %37,6 arasındaki ok, kısa bir çizgi gibi görünüyor ("%19 - %37,6") | Ok simgesini büyütüp kontrol edin; aralık işareti gibi okunuyor |
| 06 | Türkçe | "…alüminyum çatal sunar." | "…sunuyor." (diğer satırlarla zaman uyumu: konuyor, bulunuyor, iniyor) |
| 06 | Olgu | "fiyat 1 doların altına iniyor" | Birim eksik: "libresi 1 doların altına iniyor" |
| 06 | Türkçe | "Elektrolizle üretim bulunuyor" | "Elektrolizle ucuz üretim yöntemi bulunuyor" |
| 06 | Türkçe | "maliyeti iki yılda ~280 kat düştü" | "iki yılda yaklaşık 280 kat ucuzladı" ("kat düşmek" mantık olarak sorunlu) |
| 06 | Biçim | "değerli metal" düz tırnakla yazılmış | Tipografik tırnak: “değerli metal” (S11 ve S13'teki kaynak satırlarında da aynı sorun var) |
| Genel | Biçim | "~" işareti (~3 yıl, ~280 kat, ~3 kat) | Teknik olmayan dinleyici için "yaklaşık" yazın |
| 07 | Not | Notlarda başlıktaki at/araba metaforu ve rakamlar geçmiyor | Notun ilk maddesi şu olsun: "Ford'a atfedilen söz: 'Sorsaydım daha hızlı at isterlerdi.'" |
| 08 | Akış | Gündemde "Gerçeklik kontrolü" ve "Türkiye nerede?" bölümleri yok; `data-title` "Üç soru" ama maddeler dört | Kabul edilebilir; isterseniz 03'ün altına "· Gerçeklik ve Türkiye" ekleyin. Slaytın alt yarısı boş kalıyor |
| 09 | Türkçe | "kişi başı 5.000 TL altı en iyi 3 sandalye hangisi?" | "tanesi 5.000 TL'nin altında en iyi 3 sandalye hangisi?" |
| 09 | Türkçe | "%31 daha yüksek satışa dönüşme" | "%31 daha yüksek satın alma oranı" |
| 09 | Not | "Visa, Mastercard, Google ajan ödemelerini açtı" | 02'ye göre Mastercard'ın ABD'ye yayılımı doğrulanamadı. → "Visa Avrupa'da canlıya geçti; Google ve Mastercard altyapıyı kuruyor" |
| 11 | Akış | 1. kart ("sonuç satmak") ile 4. kart ("yapılmış iş" satmak) birbirine çok yakın | Birleştirin ya da 4. kartı "hizmet pazarı açılıyor" diye ayırın |
| 11 | Görsel | Kart etiketleri 19 piksel ve mavi | Salonun arka sıralarından okunmaz; 22 piksele çıkarın |
| 12 | Görsel | Sahne etiketleri (BUGÜN/2028) 17 piksel; Perakendeci kartında satır aralığı diğerlerinden farklı | Etiketleri 19-20 piksel yapın; satırları kartın üstüne hizalayın |
| 13 | Biçim | "+%12,2 · %25,1 · %40+" ve "+%15 · %30+" (artı işareti hem başta hem sonda, iki ayrı anlamda kullanılıyor) | "%12,2 · %25,1 · %40'tan fazla" ve "%15 · %30'un üzeri" |
| 13 | Olgu | Harvard–BCG kartında bağlam yok | Kart etiketine "yapay zekânın güçlü olduğu işlerde" ekleyin; alttaki "zayıf olduğu işlerde" kutusuyla eşleşsin |
| 13 | Kaynak | Lakhani alıntısının kaynağı (HBR, Ağustos 2023) kaynak satırında yok | Ekleyin ya da alıntıyı notlara alın (Ö9) |
| 15 | Görsel | Noktalı grafikte iki ayrı mavi ton var (gelir 18, maliyet 14), açıklamada tek mavi | Açıklamayı "%18 yalnız gelir · %14 yalnız maliyet" diye ayırın ya da tek renk yapın |
| 16 | Olgu | "Verim 40 yıl sonra geldi." | Kaynak "yaklaşık 40 yıl" diyor; notta "yaklaşık" deyin (başlık kalabilir) |
| 17 | Görsel | Üstü çizili "eski" etiketler (haftalar, ajans…) 22 piksel, soluk renk ve kırmızı çizgili | Neredeyse okunmuyor; 24-26 piksele çıkarın, rengi `--ink-2` yapın |
| 19 | Olgu | Türkiye çubuklarında yıl yazmıyor; AB çubuğunda "2025" var | Türkiye çubuklarına "2026" ekleyin (02: farklı yıllar belirtilmeli) |
| 19 | Kaynak | TÜİK bülten adı S05 ile S19'da farklı ("Yapay Zekâ İstatistikleri 2026" / "Hanehalkı ve Girişimlerde BT Kullanım Araştırması 2026") | İkisinde de "TÜİK, Yapay Zekâ İstatistikleri 2026 (Ekim 2026)" yazın |
| 19 | Türkçe | "%72 · Düşünüp de kullanmayan şirketlerin ilk sebebi: uzmanlık eksikliği." | "Kullanmayı düşünüp kullanamayan şirketlerin %72'si engel olarak uzmanlık eksikliğini gösteriyor." |
| 22 | Kaynak | Lütke alıntısında tarih ve kaynak yok (01'de değil, 03'te BOND s. 325'ten [B]) | İmza: "Tobi Lütke · Shopify CEO'su, Nisan 2025". İmza 20 piksel ve fotoğrafın üstünde; okunurluk için gölge ekleyin |
| 01/23 | Marka | Logoda "BSS TECHNOLOGY", metinde "BSS Teknoloji" | Bilinçli bir tercihse sorun yok |
| Notlar | Türkçe | Altı yerde "YZ" kısaltması geçiyor (S05, S09, S15, S16, S22) | Konuşmacı "ye-ze" demesin; notlarda da "yapay zekâ" yazın |
| 06 notu | Abartı | "Bir uzmanın birkaç saatlik işini, bir çay parasına yaptırabiliyoruz." | Kaynakta yok; "Bir sayfa çeviri artık kuruşlar tutuyor" gibi ölçülü bir örnek verin |

---

## 1 · Türkçe: genel değerlendirme

- **"Yapay zekâ" yazımı slaytlarda baştan sona tutarlı.** Büyük harfte de doğru: "YAPAY ZEKÂ". "Hâlâ", "kâr" ve "temsilîdir" de doğru yazılmış. Kesme işaretlerinde (CEO'su, 2028'e, %90'ının, WhatsApp'tan, 02.00'de) hata yok. Ondalık virgül tutarlı.
- **Bozuk ya da çeviri kokan cümleler:** S15'teki Acemoğlu cümlesi (K2), S02'deki "daha yap" (Ö1), S17 ve S18'deki "hendek" (Ö5), S11'deki "Sindir → Yenile" (Ö3).
- **Tırnak tutarsızlığı:** Ana alıntılar tipografik tırnakla (“ ”), bazı ara metinler ve etiketler düz tırnakla (") yazılmış: S06 ("değerli metal"), S11 ("yapılmış iş", "Herkese göre…"). Hepsini tipografik tırnağa çevirin.
- **Zaman uyumu:** S06'daki zaman çizelgesinde bir satır "sunar" ile bitiyor, diğerleri şimdiki zamanda.

## 2 · Olgu tutarlılığı: tek tek kontrol

| S | Slayttaki ifade | 01/02'deki doğrulanmış hâl | Durum |
|---|---|---|---|
| 02 | 23.000'den fazla tablet; UNESCO 2015 | "23 binden fazla"; 2015 | ✓ |
| 02 | Puzur-Aššur → Waqqurtum, kumaş mektubu | 02, madde A | ✓ ("Kaniş'ten" ekleme; görsel başka bir mektup) |
| 03 | Hemingway, *Güneş de Doğar* (1926) | 01, madde 1 | ✓ |
| 05 | 42 / 20 / 12 / 6 / ~3 yıl | BOND s. 59; yapay zekâ için tahmin | ✓ (tahmin olduğu kaynak satırında yazıyor) |
| 05 | ChatGPT haftada 900 milyon (Şubat 2026) | En son resmî haftalık rakam | ✓ |
| 05 | %19 → %37,6 | %19,2 → %37,6 | ✓ (yuvarlama ve "ikiye" ifadesi küçük bulgu) |
| 06 | 280 kat; 20 $ → 0,07 $ | AI Index 2025 | ✓ |
| 06 | Alüminyum 1859, 1884, 1891 | 02, madde B | ✓ (birim eksik) |
| 07 | %10–40 / 10–40 kat | **02'de yok**; 03'te [İ] | ✗ **K3** |
| 09 | McMillon alıntısı | 01, madde 24 | ✓ (bağlam: Ö6) |
| 09 | +%693 / %31 | Adobe, Ocak 2026 | ✓ (notta "~7 kat" ✗, doğrusu ~8 katına) |
| 10 | %90, 15 trilyon $ | Gartner, 21 Ekim 2025 | ✓ ("üzerinden" yerine "aracılık") |
| 11 | Intercom Fin 0,99 $ | 02, madde 17 | ✓ |
| 11 | Lovable 146 kişi, 400 M$ | ARR, Şubat 2026 | ✓ ("yıllık gelir" ifadesi ARR'yi gerçekleşmiş gelir gibi gösteriyor) |
| 11 | Hizmete 6 $, yazılıma 1 $ | **02'de yok**; 03'te [İ] | ✗ Ö3 |
| 11 | a16z "Herkese göre değil, size göre" | 03'te [B], serbest çeviri | ~ |
| 12 | Trendyol, 10 dil | 02, madde K | ✓ |
| 13 | %12,2 / %25,1 / %40+ / 19 puan / 758 danışman | 02, madde 8 | ✓ |
| 13 | %15 / %30+ / 5.172 temsilci | QJE 2025 | ✓ |
| 13 | Lakhani alıntısı | 01, madde 8 | ✓ (kaynak satırında yok) |
| 14 | Microsoft üç evre; Huang alıntısı | 03 [B]; 01, madde 7 | ✓ |
| 15 | %56 / %32 / %12 / %21 | PwC 2026 (%32 = 18 + 14) | ✓ (özne eksik: **K5**) |
| 15 | Acemoğlu alıntısı | 01, madde 36 | ✗ dil hatası anlamı tersine çeviriyor (**K2**) |
| 16 | ~40 yıl; 1919'da yaklaşık yarısı; ~3 kat | 02, madde 15/H; McKinsey 2025 | ~ "1880'ler" satırı ve "sık" ifadesi (Ö4) |
| 17 | Evans, "moat" | 03 [B] | ✓ |
| 18 | Yarışçı sözü | 03: Senna'ya atfedilmemeli | ✓ (kişiye atfedilmemiş, doğru tercih) |
| 19 | %37,6 / %14 / %12,7 / AB %20 / %72 / %21 | TÜİK 2026, Eurostat 2025, PwC TR | ✓ (başlık ✗ **K4**) |
| 20 | Lütke "Tırmanmıyorsanız kayıyorsunuz" | 01, madde 13 | ✓ |
| 20 | Ng: strateji 4. adım | 03'te [H], 02'de yok | ~ (genel bilgi; doğru olduğunu biliyorum) |
| 21 | Bezos, re:Invent 2012 | 01, madde 19b | ✓ ("Cevap: güven" Bezos'a ait değil: Ö11) |
| 22 | Lütke "tüccar ve girişimci" cümlesi | 01'de yok; 03'te [B] BOND s. 325 | ~ (kaynak satırı yok) |

**Kaynak satırı eksik olanlar:** S22 (Lütke), S13 (Lakhani). S10'da ise slaytta kullanılmayan bir kaynak (McKinsey) listelenmiş.
**Abartılı ya da bağlamından koparılmış ifadeler:** S07 "10–40 kat", S15 "Herkes kullanıyor", S19 "Çalışanlar", S05 notundaki "büyük kısmı", S20 "Engel para değil", S21 "Cevap: güven", S09'da McMillon alıntısının başarısız denemeyle bağlantısının söylenmemesi.

## 3 · Dinleyiciye uygunluk

- **Jargon ve İngilizce:** Ana metinde yalnızca "B2B" geçiyor ve o da S10'da açıklanmış; bu iyi. Sorunlu olanlar: "a16z", "Lovable", "Intercom Fin" (S11), "hendek" (S17, S18), "ajan" (iyi tanımlanmış ve tutarlı kullanılmış; artı). Kaynak satırlarındaki İngilizce başlıklar kabul edilebilir.
- **Satış kokusu:** Yok. BSS yalnızca S01 ve S23'te geçiyor. Tek risk S07'deki "10–40 kat" ve S17'deki "tarif ederek yazılım" ifadelerinin bir yazılım CEO'sunun ağzından vaat gibi duyulması (K3, Ö12).
- **Muhafazakâr eğilimli bir iş dünyası derneğinde hassasiyet:** Belirgin bir risk görmedim. Değerler bölümü etik vaaz yerine "güven = ticari değer" diye kurgulanmış; bu çok yerinde. Notlardaki "'Yeni bir dünya için' hız teknolojiden gelir; güven bizden." cümlesi derneğin adına doğal bir bağ kuruyor. Lakhani'nin "yerini alacak" cümlesi korku tonu taşıyor ama S13'te olumlu veriyle dengelenmiş.
- **Eksik konu:** KVKK, veri gizliliği ve hata sorumluluğu (Ö10). Soru-cevapta neredeyse kesin gelecek.

## 4 · Akış ve süre

**Gerçekçi süre tahmini.** Storyboard'daki süreler toplamı 17:50 ediyor, ama bunlar iyimser. Kapakta "selam, teşekkür, kendinizi tanıtın" 15 saniyeye sığmaz. S09, S12 ve S20 ise çok tıklamalı ve yoğun.

| Bölüm | Slaytlar | Storyboard | Gerçekçi |
|---|---|---|---|
| Açılış ve tez | 1–4 | 2:25 | ~3:00 |
| Neden şimdi + köprü + harita | 5–8 | 2:45 | ~3:15 |
| 01 Ticaret | 9–12 | 4:00 | ~4:45 |
| 02 Şirket | 13–14 | 1:40 | ~2:00 |
| Gerçeklik kontrolü | 15–16 | 1:50 | ~2:15 |
| 03 Rekabet | 17–18 | 1:35 | ~1:45 |
| Türkiye + 5 adım | 19–20 | 1:55 | ~2:30 |
| Kapanış | 21–23 | 1:40 | ~2:00 |
| **Toplam** | | **17:50** | **~21:30** |

**Sonuç:** 23 slayt bu hâliyle 18 dakikaya sığmaz. Yaklaşık 3 dakika kısaltma gerekiyor.

**Tekrarlar:**
- Asistan/ajan ayrımı: S07 ve S14.
- "Her müşteriye ayrı vitrin, kendi dilinde cevap": S11 (2. kart) ve S12 (Perakendeci), neredeyse aynı cümleyle.
- "12 dil" ve "7/24": S12 ve S17.
- %21 / %12: S15 ve S19.
- %37,6: S05 ve S19. Bu kabul edilebilir; S19'da Türkiye tablosunun parçası olarak geri dönüyor.
- Güven: S02, S18 ve S21. Bilinçli bir geri dönüş ama S18'deki "Güven · Veri · İlişki" üçlüsü S21'in etkisini önceden harcıyor.

**Zayıf halkalar:**
- **S11:** Soyut bir slayt; dört yabancı marka (Intercom, a16z, Lovable, Sequoia) ve tartışmalı bir rakam (6 $ / 1 $) içeriyor.
- **S08:** Gündem slaytı. Değerli, ama sonraki bölümler gündemle tam örtüşmüyor.
- **S07'deki rakamlar:** K3'te anlatıldı.

**Kısaltma önerisi (~3 dakika kazanç):**
1. **S13 + S14'ü birleştirin** (yaklaşık −1:00). "Sınırsız stajyer" verisi kalsın. S14'ten yalnızca Huang'ın İK cümlesi, Lakhani'nin yerine geçsin. Üç evre konuşmada söylensin.
2. **S11'i üç karta indirin** (yaklaşık −0:45). "Herkese özel" kartı çıksın (S12 bunu daha somut anlatıyor). "Sindir → …" satırı konuşmaya kalsın.
3. **S19'daki %21 kartını kaldırın** ya da S15'teki 4. satırı kaldırın (yaklaşık −0:20).
4. **S09'daki McMillon alıntısını konuşmaya alın** (yaklaşık −0:20). Slaytta yalnızca istatistikler kalsın.
5. **S18'deki üçlüyü kaldırın.** S18 kısa bir nefes slaytı olsun ("Yağmur yağıyor; sıralama yeniden yazılıyor"), güven S21'de patlasın (yaklaşık −0:20).
6. **Kapak tanıtımını 45 saniyeyle sınırlayın.**

Bu kısaltmalarla süre yaklaşık **18:30** olur ve soru-cevaba pay kalır.

## 5 · Görsel denetim (slayt bazında)

| S | Bulgu | Önem |
|---|---|---|
| 16 | Alt metin kaynak satırının üstüne biniyor, son satır kesiliyor | **KRİTİK (K1)** |
| 06, 21 | Kaynak satırı neredeyse görünmüyor | ÖNEMLİ (Ö2) |
| 09 | Alt bölüm sıkışık; istatistik kutusu kartın kenarına değiyor; alıntının son sözcüğü alt satıra düşüyor | ÖNEMLİ (Ö6) |
| 15 | Acemoğlu imzası kötü bölünüyor; grafikte iki mavi ton var, açıklamada tek | KÜÇÜK |
| 17 | Üstü çizili "eski" etiketler çok küçük ve soluk | KÜÇÜK |
| 05 | Ok simgesi kısa çizgi gibi görünüyor | KÜÇÜK |
| 03 | Kırmızı halka alıntının arkasına giriyor | KÜÇÜK |
| 11, 12 | Etiketler 17-19 piksel; arka sıralardan okunmaz | KÜÇÜK |
| 10 | Kontrol listesi kutuları önceden işaretlenmiş | KÜÇÜK |
| 22 | Lütke imzası küçük ve fotoğrafın üstünde | KÜÇÜK |
| 08 | Alt yarı boş, yerleşim üste yığılmış | KÜÇÜK |
| Genel | Kaynak satırı 17 piksel ve %75 opak; projeksiyonda okunmaz (bu tasarım tercihi, ama S06 ve S21'de sınırı aşıyor) | ÖNEMLİ (Ö2) |

Kontrast ve yerleşim genel olarak çok iyi: koyu lacivert zemin, tek vurgu rengi, büyük tipografi. S02, S04, S05, S13, S19 ve S20 örnek alınacak düzeyde.

## 6 · Konuşmacı notları

**İyi olanlar:** Notlar kısa ve madde madde. "(tık)" işaretleri animasyon adımlarıyla uyumlu. Her slaytta 2-4 madde var; S09'da 5. Notlar slayt içeriğiyle büyük ölçüde örtüşüyor ve dürüst uyarılar içeriyor (S09'daki "Dürüst not", S10'daki "Tahmin").

**Sorunlar:**
- **S05:** "Çalışanlarınızın büyük kısmı" hem abartı hem yanlış özne (K4).
- **S09:** "~7 kat" yanlış (doğrusu ~8 katına). "%31 daha çok satın alıyor" ifadesi oranı miktar gibi gösteriyor. "Dürüst not" isteğe bağlı değil, zorunlu olmalı.
- **S07:** Başlıktaki metafor (at/araba) ve kaynağı notlarda geçmiyor.
- **S15:** %21 için temkin uyarısı yok. Klarna bilgisi parantez içinde kalmış; konuşmacı atlayabilir ya da yanlış özetleyebilir. Klarna yapay zekâdan vazgeçmedi; insan desteğini yeniden ekledi.
- **S03:** Hemingway cümlesi notta slayttakinden farklı yazılmış.
- **Genel:** "YZ" kısaltması altı yerde geçiyor. Zaman işareti yok. → Birkaç slayda birikimli süre hedefi ekleyin: S08 → 4:00, S12 → 8:30, S16 → 12:30, S20 → 16:00, S23 → 18:00. Böylece konuşmacı sahnede geride mi ileride mi olduğunu görür.
- **Soru-cevap hazırlığı (S23 notuna):** Şu üç soruya hazır cevap ekleyin: "Verim nereye gidiyor (KVKK)?", "Yapay zekâ yanlış söylerse sorumlu kim?", "Küçük bir firma nereden başlasın, bütçesi ne kadar?"

---

*Denetçi notu: Web yalnızca bir olguyu teyit etmek için kullanıldı. Metropolitan Museum'un 66.245.1 numaralı eseri Kültepe'den bir özel mektup; Puzur-Aššur'un kardeşlerine yazdığı, bir ticari anlaşmazlığı anlatan bir tablet ([Met kaydı](https://www.metmuseum.org/art/collection/search/325842)). Diğer tüm karşılaştırmalar 01, 02 ve 03 dosyalarına dayanıyor.*
