# 08 · Türkçe denetim: "Ticaretin Yeni Çağı"

**Tarih:** 11 Kasım 2026 · **Sunum:** 12 Kasım 2026, YENİAD · Halil Aydın
**Denetlenen:** `sunum/index.html` (25 slayt: ekran metni, `<aside class="notes">` konuşmacı notları, `data-title`, `alt`), `sunum/assets/data.js` (grafik etiketleri), `sunum/assets/deck.js` (`SECS` bölüm adları ve konuşmacı penceresi metinleri)
**Ölçüt:** TDK Yazım Kılavuzu, iş dünyası sunum dili. Alıntı çevirileri `01-alintilar.md` ve `07-tahminler-ve-portreler.md`'deki orijinalleriyle karşılaştırıldı.
**Kural:** Yalnızca metin değişti. Etiket, sınıf, stil, `id`, `src` ve JavaScript koduna dokunulmadı. Kaynaklardan gelen rakam, tarih, yüzde ve kaynak adları değişmedi. `node --check assets/data.js` sonucu: geçti.

---

## Genel değerlendirme

Metin genel olarak temiz ve tutarlı. "Yapay zekâ", "üretken yapay zekâ", "ajan", "Kardaşev", "KOBİ" her yerde aynı biçimde yazılmış. Şapkalı yazım da tutarlı (zekâ, hâlâ, kâr, merkezî, temsilî, resmî); tek istisna "Milli" idi. Sayı yazımı doğru: ondalıkta virgül (%37,6), binlikte nokta (23.000; 96.400 TL), kesmeli ekler doğru okunuşa göre eklenmiş (%10'undan, %5'inden, 2030'a, 485 TWh'e, TÜİK, KVKK'ya). `deck.js` içinde düzeltme gerekmedi.

Sistematik iki sorun vardı:
1. **Tırnak işareti:** Ekran metninde “ ” kullanılırken konuşmacı notlarında düz tırnak (" ") vardı. Notlardaki 20 tırnak çifti “ ” yapıldı.
2. **İki noktadan sonra büyük harf:** TDK'ye göre iki noktadan sonra **cümle** geliyorsa büyük harfle başlar, sıralama ya da tanım geliyorsa küçük harfle. Sunum bu kuralı karışık uyguluyordu (ör. "Kardaşev ölçeği: Bir uygarlık…" doğru, "Genel eğilim açık: eğriler…" yanlış). 37 yerde düzeltildi: 36 yerde büyük harfe, 1 yerde küçük harfe çevrildi. Sıralamalar ("bilgi, güven, alışveriş"), tanımlar ("Token: yapay zekânın okuyup…") ve grafik etiketleri ("2026: inişe geçti") küçük harfle bırakıldı.

Ayrıca dört **anlam** hatası düzeltildi: S22'deki "Zekâ ucuzladıkça enerjiye dönüşüyor" ifadesi anlamı tersine çeviriyordu. S20'deki eksen başlığı "bir uzmana göre süresi" yanlış anlam veriyordu. S19'daki kimlik satırında "en büyük üretici" sanki Huang'mış gibi okunuyordu. S17 notundaki "Altı kurum" ifadesi de yanlıştı; slaytta Gartner iki kez geçtiği için kurum sayısı beş.

**Toplam: 81 düzeltme** (index.html'de 80; data.js'de 1 satırda 6 etiket). Bunların 20'si tırnak, 37'si iki nokta sonrası harf büyüklüğü, 24'ü yazım, noktalama ve anlamla ilgili. Ekrandaki düzeltmelerin çoğu metni aynı uzunlukta bıraktı ya da kısalttı. Yalnızca birkaç yerde metin birer karakter uzadı: S04'teki "yy." noktası, S22'deki "Neden önemli?" kartı ve S20 eksen etiketlerine eklenen noktalar. Notlarda en büyük artış S18'de oldu: "kurucusu" yerine "kurucu ortağı" yazıldı (+5 karakter).

---

## Değişiklik tablosu

"Ekran" slaytta görünen metni, "Not" konuşmacı notunu, "data-title" konuşmacı penceresindeki slayt adını gösterir.

### Yazım, noktalama, anlam (24)

| Slayt | Eski ifade | Yeni ifade | Gerekçe |
|---|---|---|---|
| 02 · Ekran | Sunumdaki rakamların her birinin kaynağı slaytın altında yer alıyor. | Sunumdaki her rakamın kaynağı slaytın altında yer alıyor. | "Her birinin" yapısı çeviri kokuyor; daha kısa ve doğal. |
| 02 · Not | Yol haritasını kısaca okuyun. | Gündemi kısaca okuyun. | "Yol haritası" 5. bölümün adı; gündem slaytıyla karışıyordu. |
| 03 · Ekran | Yazışmalarını kil tabletlere yazdılar. | Mektuplarını kil tabletlere yazdılar. | "Yazışma… yazmak" tekrarı giderildi; kısaldı. |
| 03 · Künye | Kültepe'den bir Asurlu tüccar mektubu | Kültepe'den Asurlu bir tüccar mektubu | Sözcük sırası doğallaştı; `alt` metniyle aynı oldu. |
| 04 · Ekran | MÖ 7. yy | MÖ 7. yy. | TDK kısaltması "yy." noktalıdır. |
| 04 · Ekran | İlk kez araç, bilgiyi yalnızca taşımıyor; | İlk kez araç bilgiyi yalnızca taşımıyor; | Özne ile nesne arasındaki gereksiz virgül kaldırıldı. |
| 04 · Not | internet vitrini, akıllı telefon mağazayı cebe taşıdı. | internet vitrini ekrana, akıllı telefon cebe taşıdı. | Eksiltili yapı "internet vitrini cebe taşıdı" diye okunuyordu (anlam hatası). |
| 07 · Ekran (başlık) | Üretken yapay zekâ, PC'den ve internetten hızlı yayılıyor | Üretken yapay zekâ PC'den ve internetten hızlı yayılıyor | Özneden sonraki gereksiz virgül kaldırıldı; data-title ile aynı oldu. |
| 08 · Ekran | Bir librenin (yaklaşık 450 gram) fiyatı yaklaşık 17 dolar | Bir librenin (~450 gram) fiyatı yaklaşık 17 dolar | Aynı cümlede "yaklaşık" iki kez geçiyordu; sunumdaki "~" kullanımıyla uyumlu. |
| 08 · Ekran | alüminyum çatal-bıçak | alüminyum çatal bıçak | TDK: "çatal bıçak" ayrı ve kısa çizgisiz yazılır. |
| 08 · Ekran | …kullanmanın maliyeti (…) iki yılda yaklaşık 280 kat ucuzladı. | …kullanmanın maliyeti (…) iki yılda yaklaşık 280 kat düştü. | "Maliyet ucuzladı" yanlış eşdizim: maliyet düşer, ürün ucuzlar. |
| 08 · Kaynak | ABD Milli Parklar İdaresi | ABD Millî Parklar İdaresi | Sunumdaki şapka tutarlılığı (merkezî, temsilî, resmî); TDK yazımı "millî". |
| 10 · Not | AB'nin 2026 verisi Aralık'ta açıklanacak | AB'nin 2026 verisi aralıkta açıklanacak | Belirli bir tarih bildirmeyen ay adı küçük harfle yazılır, kesme almaz. |
| 17 · Not | Altı kurum, altı öngörü. | Beş kurum, altı öngörü. | Slaytta altı kart var ama kurum beş (Gartner iki kartta geçiyor). Kaynak rakamı değil, slayttaki kartların sayımı. İstenirse geri alınabilir. |
| 18 · Ekran | Microsoft'un kurucu ortağı · Gates Vakfı başkanı | Microsoft'un kurucu ortağı · Gates Vakfı Başkanı | "Kurum + unvan" kalıbındaki diğer satırlarla tutarlılık (Microsoft Yönetim Kurulu Başkanı, YENİAD Başkan Yardımcısı). |
| 18 · Not | Bill Gates, Microsoft'un kurucusu; | Bill Gates, Microsoft'un kurucu ortağı; | Slayttaki kimlik satırıyla tutarlılık. |
| 19 · Ekran | NVIDIA'nın kurucusu ve CEO'su · Yapay zekâ çiplerinin en büyük üreticisi | Yapay zekâ çiplerinin en büyük üreticisi NVIDIA'nın kurucusu ve CEO'su | "·" ile ayrılan ikinci bölüm kişiyi nitelermiş gibi okunuyordu (Huang en büyük üretici). Uzunluk aynı. |
| 19 · Not | Jensen Huang, NVIDIA'nın kurucusu. Bugün yapay zekâ çiplerinin en büyük üreticisi; | Jensen Huang, NVIDIA'nın kurucusu. NVIDIA yapay zekâ çiplerinin en büyük üreticisi; | Aynı özne belirsizliği vardı: İkinci cümlenin öznesi Huang gibi okunuyordu. |
| 20 · Ekran (eksen) | Yapay zekânın %50 başarıyla bitirebildiği görevlerin, bir uzmana göre süresi | Yapay zekânın %50 başarıyla bitirebildiği görevlerde uzmanın harcadığı süre | "Uzmana göre" ifadesi "uzmanın görüşüne göre" anlamına geliyordu. Ölçülen, görevin bir uzmana ne kadar sürdüğü. Uzunluk aynı. |
| 22 · Ekran | 1964'te uygarlıkları, kullanabildikleri enerjiye göre üç türe ayırdı. | Kardaşev 1964'te uygarlıkları enerji kullanımına göre üç türe ayırdı. | Cümlenin öznesi yoktu; gereksiz virgül kaldırıldı. "Kullanabilmek" vurgusu başlıkta duruyor. Uzunluk aynı. |
| 22 · Ekran | Uluslararası Enerji Ajansı'na göre | Uluslararası Enerji Ajansına göre | TDK: Kurum ve kuruluş adlarına gelen ekler kesmeyle ayrılmaz. |
| 22 · Ekran | Zekâ ucuzladıkça enerjiye dönüşüyor. | Yapay zekâ enerjiyi zekâya çeviriyor. | **Anlam tersti:** "Zekâ enerjiye dönüşüyor" ifadesi, enerjinin zekâya dönüştüğünü söyleyen konuşmacı notunun ("yapay zekâ, enerjiyi zekâya çeviren bir makine") tersini söylüyordu. +1 karakter; kart yüksekliğini komşu kartlar belirliyor. |
| 22 · Not | 1964'te uzaydaki uygarlıkları, kullanabildikleri enerjiye göre | 1964'te uzaydaki uygarlıkları kullanabildikleri enerjiye göre | Gereksiz virgül kaldırıldı. |
| data.js · S20 grafiği | '1 sn', '10 sn', '1 dk', '10 dk', '1 sa', '8 sa' | '1 sn.', '10 sn.', '1 dk.', '10 dk.', '1 sa.', '8 sa.' | TDK kısaltmaları noktalıdır (sn., dk., sa.). Sözdizimi denetimi geçti. |

### İki noktadan sonra harf büyüklüğü (37)

Kural: İki noktadan sonra cümle geliyorsa büyük, sıralama, tanım ya da ad öbeği geliyorsa küçük harf kullanılır.

| Slayt | Eski ifade | Yeni ifade | Gerekçe |
|---|---|---|---|
| 04 · Ekran | Amazon ve eBay yayında: vitrin internete taşınıyor | …: Vitrin internete taşınıyor | Cümle |
| 04 · Not | 2022'deki fark: önceki araçların hepsi… | …: Önceki araçların hepsi… | Cümle |
| 05 · data-title | 1900 → 1913: Bir caddenin 13 yılı | 1900 → 1913: bir caddenin 13 yılı | Ad öbeği, cümle değil; diğer data-title'larla tutarlı |
| 06 · Ekran | Genel eğilim açık: eğriler sağa doğru dikleşiyor. | …: Eğriler sağa doğru dikleşiyor. | Cümle |
| 06 · Not | Mesaj: yayılma hızı her dalgada artıyor. | Mesaj: Yayılma hızı… | Cümle |
| 07 · Not | Soldaki çubuklar: her dalga bir öncekinin… | …: Her dalga… | Cümle |
| 08 · Not | aynısı oluyor: aynı kalitede cevap… | …: Aynı kalitede cevap… | Cümle |
| 08 · Not | Dürüst not: token başına fiyat düşüyor… | Dürüst not: Token başına… | Cümle |
| 09 · Not | Dikey eksen logaritmik: her çizgi 100 kat. | …: Her çizgi 100 kat. | Cümle (ad cümlesi) |
| 09 · Not | Para tarafı: dört büyük şirket… | Para tarafı: Dört büyük şirket… | Cümle |
| 10 · data-title | Türkiye: bireyler hızlı, şirketler daha yavaş | Türkiye: Bireyler hızlı, şirketler daha yavaş | Cümle |
| 11 · Not | Bugünkü karşılığı: yapay zekâyı eski sürecin… | …: Yapay zekâyı… | Cümle |
| 12 · Not | Rakamlar: kullanım çok yaygın (%88)… | Rakamlar: Kullanım… | Cümle |
| 13 · Not | Üç basamak: sohbet botu cevap verir; … | Üç basamak: Sohbet botu… | Cümle |
| 13 · Not | Fark araç kullanmasında: e-posta gönderebilir… | …: E-posta gönderebilir… | Cümle |
| 14 · Not | (4) Araçları kullanır: burada sohbet botundan ayrılır. | …: Burada… | Cümle |
| 15 · Not | …anlatıyor: asistana sorarsınız, cevap verir… | …: Asistana sorarsınız… | Cümle |
| 15 · Not | Son iki üç yıl: soruyoruz, … | …: Soruyoruz, … | Cümle |
| 15 · Not | Şimdi başlayan: yaptırıyoruz. | Şimdi başlayan: Yaptırıyoruz. | Tek sözcüklü cümle |
| 17 · Ekran | …aynı şeyi ölçmez: harcama, ekonomik katkı ya da etkilenen istihdam farklı göstergelerdir… | …: Harcama, ekonomik katkı… | Cümle |
| 17 · Not | Denge: aynı Gartner… | Denge: Aynı Gartner… | Cümle |
| 18 · data-title | Bill Gates: ajanlar alışverişi nasıl değiştirecek? | Bill Gates: Ajanlar alışverişi nasıl değiştirecek? | Soru cümlesi |
| 18 · Ekran | Aynı yazıdaki tahmini: beş yıl içinde, yani 2028'e kadar… | …: Beş yıl içinde… | Cümle |
| 18 · Not | …en önemli cümle: ajan yorumları okuyacak… | …: Ajan yorumları… | Cümle |
| 19 · Not | …o konuşmadan: ekranda yapay zekânın dört evresi var. | …: Ekranda… | Cümle |
| 19 · Not | Söylediği: ajanlar dijital çalışanlar gibi yönetilecek. | Söylediği: Ajanlar… | Cümle |
| 20 · Ekran | Ama yön açık: ajanlar her yıl… | Ama yön açık: Ajanlar… | Cümle |
| 20 · Not | şunu ölçüyor: yapay zekâ, bir uzmanın… bitirebiliyor? | …: Yapay zekâ… | Soru cümlesi |
| 20 · Not | …açıklıyor: birkaç saniyelik işten… geçtik. | …: Birkaç saniyelik… | Cümle |
| 20 · Not | Dürüst not: görevler çoğunlukla yazılım işi… | Dürüst not: Görevler… | Cümle |
| 21 · Not | Onun tahmini: bu dönüşüm bir on yıla sığabilir. | Onun tahmini: Bu dönüşüm… | Cümle |
| 23 · Ekran | …neyi onaya sunar: bunu baştan belirleyin. | …: Bunu baştan belirleyin. | Cümle |
| 23 · Not | 4: Ajanlar için "yetki matrisi": hangi tutara kadar… | 4: Ajanlar için “yetki matrisi”: Hangi tutara kadar… | Cümle (tırnak da düzeltildi) |
| 23 · Not | …hatırlatın: sizi bir ajan bulacaksa… | …: Sizi bir ajan bulacaksa… | Cümle |
| 24 · Ekran | …satıcıyı seçecek: teslim sözünüz, iade oranınız, yorumlarınız artık veri. | …: Teslim sözünüz… | Cümle (ad cümlesi) |
| 24 · Not | Bezos'un sorusu: neyin değişmeyeceğini bilirseniz… | Bezos'un sorusu: Neyin… | Cümle |
| 24 · Not | Değişen şu: güven artık ölçülüyor… | Değişen şu: Güven artık… | Cümle |

### Tırnak işareti: düz tırnaktan “ ” tırnağa (20, hepsi konuşmacı notu)

| Slayt | Eski ifade | Yeni ifade | Gerekçe |
|---|---|---|---|
| 01 | "Önümüzdeki 20 dakikada … diliyle." | “Önümüzdeki 20 dakikada … diliyle.” | Ekran metniyle tutarlılık |
| 03 | "Bu kalite satıyor, daha çok üret." | “Bu kalite satıyor, daha çok üret.” | 〃 |
| 03 | "Bu üçü hiç değişmedi; değişen hep araç oldu." | “…” | 〃 |
| 05 | "Otomobili bulabilir misiniz?" | “Otomobili bulabilir misiniz?” | 〃 |
| 05 | "Peki şimdi atı bulun." | “Peki şimdi atı bulun.” | 〃 |
| 08 | "düşünen" | “düşünen” | 〃 |
| 09 | "motorunun" | “motorunun” | 〃 |
| 11 | "Yapay zekâ yeni elektriktir." | “Yapay zekâ yeni elektriktir.” | 〃 |
| 12 | "abartı döngüsü" | “abartı döngüsü” | 〃 |
| 12 | "Önümüzdeki iki yılda … küçümseriz." | “…” | 〃 |
| 13 | "Ajan" | “Ajan” | 〃 |
| 15 | "Yaptır" | “Yaptır” | 〃 |
| 16 | "Bu salonda … Sizinki hangisi?" | “…” | 〃 |
| 18 | "her iş için ayrı uygulama" | “her iş için ayrı uygulama” | 〃 |
| 18 | "Şirketler, … ayrışacak." | “…” | 〃 |
| 23 | "yetki matrisi" | “yetki matrisi” | 〃 |
| 25 | "Verimiz nereye gidiyor? (KVKK)" | “…” | 〃 |
| 25 | "Yapay zekâ yanlış söylerse sorumlu kim?" | “…” | 〃 |
| 25 | "Küçük firma nereden başlasın, bütçesi ne?" | “…” | 〃 |
| 25 | "Ajanlar işimizi elimizden alır mı?" | “…” | 〃 |

Son durumda `index.html`'de 40 açılış ve 40 kapanış tırnağı var; hepsi eşleşiyor.

### Alıntı çevirileri

Hemingway, Ng, Nadella, Gates (iki alıntı), Huang, Hassabis, Bezos ve Puzur-Aššur metinleri orijinalleriyle karşılaştırıldı. Hepsinin anlamı doğru, Türkçeleri de doğal. **Hiçbir alıntıda değişiklik yapılmadı.** Huang alıntısında özneden sonra konan virgül ("…bilgi işlem departmanı, yapay zekâ…") uzun özneyi ayırdığı için kabul edilebilir.

---

## Öneriler (uygulanmadı)

### İçerik ve olgu incelikleri (kaynak ve unvan kuralı gereği dokunulmadı)

1. **S11 · Andrew Ng unvanı:** "Google Brain'in kurucusu" yerine "Google Brain'in kurucularından" daha doğru olur; Ng ekibi Jeff Dean ve Greg Corrado ile birlikte kurdu. Konuşmacı notundaki "Google'ın yapay zekâ ekibini kuran isim" ifadesi de "kuranlardan biri" olabilir.
2. **S17 · WEF raporunun adı:** "Gelecekte İşler Raporu" yerine Türkçede yerleşik çeviri "İşlerin Geleceği Raporu" (Future of Jobs Report) önerilir. Kaynak adı olduğu için değiştirilmedi.
3. **S17 · "+170 M · −92 M":** "M" İngilizce bir kısaltma. Dinleyici "milyon" olduğunu kart metninden anlayamıyor. Öneri: "Doğacak ve kaybolacak işler (milyon)" ya da "+170 mn · −92 mn".
4. **S17 · IMF kartı:** Başlık "IMF · bugün" diyor, metin ise gelecek zaman kullanıyor ("etkilenecek"). IMF'nin ifadesi "yapay zekâya açık/maruz". Öneri: "…yaklaşık %40'ı yapay zekâdan etkilenebilir durumda."
5. **S08 · Not:** "Elektroliz bulununca fiyat çöktü." Elektroliz 1800'lerin başından beri biliniyordu. 1886'da bulunan, alüminyumu elektrolizle ucuza üretme yöntemiydi (Hall-Héroult). Öneri: "Elektrolizle ucuz üretim bulununca fiyat çöktü." Cümleyi uzattığı için uygulanmadı.
6. **S10 · Not:** "Engel para değil…" TÜİK verisi yalnızca uzmanlık eksikliğinin en sık belirtilen engel olduğunu gösteriyor; paranın engel olmadığını göstermiyor (05 denetiminde de belirtilmişti). Öneri: "En sık belirtilen engel bilgi ve uzmanlık."
7. **S18 · Not:** "kişisel bilgisayar devrimini yaşamış biri" ifadesi Gates'in rolünü küçültüyor. Öneri: "…devriminin öncülerinden biri".
8. **S24 · Not:** "Bezos'un sorusu:" ifadesinden sonra bir soru değil bir yargı geliyor. "Bezos'un fikri:" daha isabetli olur.

### Dil ve üslup (küçük, isteğe bağlı)

9. **S03 · Ekran:** "Asurlu tüccarlar … getirdi, … sattı. Mektuplarını … yazdılar." Aynı öznenin yüklemleri bir tekil, bir çoğul çekimli. İki biçim de dil bilgisi açısından doğru ama tutarlılık için hepsi "getirdiler, sattılar" olabilir. Metni uzattığı için uygulanmadı.
10. **S03 · "Puzur-Aššur":** "š" harfi Türkçe okura yabancı. Türkçe yayınlarda "Puzur-Aşşur" yazımı da kullanılıyor.
11. **S09 · Eksen başlığı:** "eğitim hesaplaması", "training compute" teriminin birebir çevirisi. "eğitiminde yapılan işlem miktarı" daha anlaşılır olur.
12. **S12 · Kart:** "ne gelir ne maliyet kazancı gören CEO'lar" ifadesindeki "maliyet kazancı" çeviri kokuyor. "ne gelir artışı ne maliyet düşüşü gören" daha açık ama uzun.
13. **S14 · 3. adım:** "Plan yapar. Fiyatı hesapla, ürün föyünü ekle, teklifi Almanca yaz." Öteki adımlar üçüncü tekil şahısla yazılmış, bu adım emir kipinde. Planın içeriği olduğu anlaşılıyorsa sorun yok. İstenirse "Plan yapar: Fiyatı hesapla, …" biçiminde iki noktayla belirginleştirilebilir.
14. **S07 · Not:** "ChatGPT'den 4 yıl sonra" yerine "ChatGPT'nin çıkışından 4 yıl sonra" daha açık olur.
15. **S09 · Kaynak satırı:** "Şirketlerin 2026 3. çeyrek açıklamaları" ifadesinde iki sayı yan yana geliyor. "2026'nın 3. çeyreğine ait açıklamaları" daha okunaklı.
16. **"McKinsey'e" (S11):** TDK'nin okunuşa göre ek getirme kuralıyla ("mekinzi") "McKinsey'ye" yazılması gerekir. Ancak "McKinsey'e" de yaygın ve sizin örneğinizle aynı. Sunumda yalnızca bir kez geçtiği için tutarlılık sorunu yaratmıyor; dokunulmadı.
17. **Unvanların büyük/küçük harfi:** "Amazon'un kurucusu ve yönetim kurulu başkanı" (küçük) ile "Microsoft Yönetim Kurulu Başkanı" (büyük) yazımlarının ikisi de kurala uygun. İlgi ekli genel tanım küçük harfle, kurul adıyla birlikte kullanılan unvan büyük harfle yazılır. Yalnızca görsel tutarlılık isteniyorsa birleştirilebilir.

### Teknik olmayan dinleyici için açıklaması olmayan terimler

Aşağıdaki terimler değiştirilmedi. Konuşmacı ilk geçtikleri yerde birer kelimeyle açıklayabilir. "Token", "FLOP", "logaritmik ölçek" ve "Hype Cycle" zaten açıklanmış.

| Terim | Nerede | Öneri |
|---|---|---|
| B2B | S17 kartı ve notu, S23 notu | "şirketler arası (B2B)" |
| ERP | S13 tanım ve tablo, S14 örneği | Notta bir kez: "ERP, yani stok, muhasebe ve sipariş yazılımınız" |
| TWh, eksajul | S22 kartları | Notta bir kıyas verilebilir; birimler açıklanmamış |
| dil modeli | S16 kaynak satırı (Trendyol) | "kendi yapay zekâ modeliyle" daha anlaşılır olur |
| METR, Epoch AI, St. Louis Fed, BOND | S07, S09, S20 | METR notta tanıtılmış. Diğerleri için: "bağımsız araştırma kuruluşu", "ABD Merkez Bankasının St. Louis şubesi" |
| PC | S07 başlığı | Yaygın bir kısaltma, sorun değil. Çubuklarda "Kişisel bilgisayar" yazıyor; tutarlılık isteniyorsa başlıkta da açık yazılabilir (başlık uzar) |

Marka ve model adları (GPT-4, Claude, Gemini, AlexNet, ChatGPT vb.) ile etkinlik adları (Build, CES, re:Invent) olduğu gibi bırakıldı.
