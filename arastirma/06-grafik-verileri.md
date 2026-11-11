# TİCARETİN YENİ ÇAĞI: Grafik Verileri (SVG'ye çevrilecek sayısal seriler)

**Hazırlanma:** 11 Kasım 2026 · **Sunum:** 12 Kasım 2026, YENİAD · **Önceki dosya:** `02-veriler.md` (burada tekrar edilmedi)
**Yöntem:** Mümkün olan her yerde ham veri dosyası kurumun kendi sunucusundan indirildi ve sayılar bu dosyalardan Node.js ile okundu. Ham dosyalar `arastirma\veri\` klasöründe. Tahmin ya da uydurma sayı yok; bulunamayanlar **BULUNAMADI** diye işaretlendi.
**Tablolarda ondalık ayırıcı nokta (.)** kullanıldı (grafik koduna doğrudan aktarılabilsin diye). Slayt metninde virgül kullanın.
**Güven ölçeği:** Yüksek = birincil kaynak / ham veri · Orta = tahmin, model kestirimi veya ikincil kaynak · Tartışmalı = yöntem itirazı var.

## İndirilen ham dosyalar (`C:\Users\User\Desktop\ha.sunum\arastirma\veri\`)

| Dosya | İçerik | Kaynak |
|---|---|---|
| `owid-teknoloji-benimseme.csv` (+ `.metadata.json`) | ABD hanelerinde 45 teknolojinin yıllık benimseme yüzdesi (1860-2019) | Our World in Data grapher CSV |
| `genai-tracker-All_Results.xlsx` | Tracker'ın tüm sonuç dosyası (sitedeki "indir" düğmesi) | genaiadoptiontracker.com/All_Results.xlsx |
| `genai-tracker-pc-internet.csv` | Xlsx'teki "GenAI_PC_Internet" sayfası (çıkıştan bu yana geçen yıl ekseni) | yukarıdaki xlsx'ten çıkarıldı |
| `genai-tracker-dalgalar.csv` | Xlsx'teki "GenAI_All" sayfası: 9 anket dalgası (Ağu 2024 - Ağu 2026) | yukarıdaki xlsx'ten çıkarıldı |
| `epoch-notable-models.csv` | Epoch AI "Notable AI Models" veri tabanının tamamı (8.500+ satır) | epoch.ai/data/notable_ai_models.csv |
| `epoch-secilmis-modeller.csv` | Grafik için seçilmiş 16 model | yukarıdakinden çıkarıldı |
| `metr-benchmark_results_1_1.yaml` | METR Time Horizon 1.1 model sonuçları (ham) | metr.org/assets/benchmark_results_1_1.yaml |
| `metr-time-horizon-1-1.csv` | Aynı verinin tablo hâli (dakika, %50 ve %80, güven aralıklarıyla) | yukarıdakinden çıkarıldı |
| `iea-veri-merkezi-elektrik-2020-2030.csv` | IEA 2025: bölgelere göre veri merkezi elektriği, Temel Senaryo | IEA grafik sayfasındaki gömülü veri |
| `iea-veri-merkezi-elektrik-2020-2035-guncelleme2026.csv` | IEA 2026 güncellemesi: 2020-2035 toplam, senaryo aralığı | IEA rapor sayfasındaki gömülü veri |
| `owid-dunya-birincil-enerji-TWh.csv` | Dünya toplam birincil enerji arzı, 1800-2025 (TWh) | OWID (Energy Institute Statistical Review 2026) |

Ayrıca: `C:\Users\User\Desktop\ha.sunum\sunum\assets\img\portre\nikolai-kardashev.jpg` (858 × 1250 px, CC BY 4.0; ayrıntı madde 6'da).

---

## 1. ABD hanelerinde teknoloji benimseme (Our World in Data)

**Kaynak:** Our World in Data, *Share of United States households using specific technologies*, grapher verisi "Technology Diffusion (Comin and Hobijn (2004) and others)". Ana dayanak: Comin, D. ve Hobijn, B. (2004), "Cross-country technology adoption: making the theories face the facts", *Journal of Monetary Economics* 51(1). Ek kaynaklar: Horace Dediu derlemesi, Lebergott, Bowden ve Offer, ABD Nüfus Bürosu, Pew vb. OWID güncelleme belgesi sürümü 27.07.2019; veri en geç 2019'da bitiyor.
**URL:** https://ourworldindata.org/grapher/technology-adoption-by-households-in-the-united-states · Ham CSV: aynı adres + `.csv?v=1&csvType=full&useColumnShortNames=false` (indirme tarihi 11.11.2026)
**Sayılar birincil kaynaktan mı?** OWID derlemesinin ham CSV'sinden, doğrudan. **Çapraz kontrol:** 2001 için OWID'de internet %49 ve bilgisayar (Microcomputer) %56,3; NTIA'nın Eylül 2001 CPS rakamları %50,5 ve %56,5 (https://www.ntia.gov/sites/default/files/data/dn/html/Chapter1.htm). Fark 1,5 puanın altında.
**Güven:** Yüksek (derleme veri; erken yıllar tarihsel tahmin).

**Okurken dikkat:**
- Serilerin çoğu **%10'dan başlıyor**. Derleme, teknolojiyi %10 yaygınlıkta "başlatıyor". Bu yüzden "ilk veri yılı" çoğu zaman icat yılı değil, %10 yılı.
- **Birim:** Elektrik, telefon, radyo, otomobil, buzdolabı, TV, bilgisayar, internet ve cep telefonu için **hane yüzdesi**. Sosyal medya, akıllı telefon ve tablet için **yetişkin yüzdesi** (Pew). Bunları aynı grafikte kullanırsanız dipnot düşün.
- Siyah-beyaz TV'nin 1950'lerdeki yayılımı bu veri setinde **yok**: "Television" serisi yalnızca 1992 sonrası (~%97). Grafikte **Colour TV** kullanın.
- Üretken yapay zekâ bu veri setinde **yok**. Madde 2'deki tracker kişi bazlı; hane serileriyle aynı grafikte gösterirseniz "hane ≠ kişi" notu düşün.
- "Computer" serisinde yıl boşlukları var (1992, 1998, 2003, 2005…). Yıllık ve kesintisiz S-eğrisi için **Microcomputer** serisi daha uygun.

### 1a. Özet tablo

| Teknoloji (OWID adı) | Birim | İlk veri yılı (değer) | %10'u ilk geçtiği yıl | %50'yi ilk geçtiği yıl | %10 → %50 (yıl) | Son veri |
|---|---|---|---|---|---|---|
| Elektrik (Electric power) | hane | 1908 (10) | 1908 | 1925 (52) | 17 | 2005 (99) |
| Sabit telefon (Landline) | hane | 1903 (10) | 1903 | 1946 (50) | 43 | 2018 (41.7) |
| Radyo (Radio) | hane | 1925 (10) | 1925 | 1931 (52) | 6 | 2005 (99) |
| Otomobil (Automobile) | hane | 1915 (10) | 1915 | 1926 (54) | 11 | 2005 (91) |
| Buzdolabı (Refrigerator) | hane | 1925 (1) | 1930 (12.8) | 1938 (51.7) | 8 | 1978 (99.7) |
| Buzdolabı (Household refrigerator) | hane | 1931 (10) | 1931 | 1942 (50) | 11 | 2017 (98) |
| Renkli TV (Colour TV) | hane | 1966 (10) | 1966 | 1974 (57) | 8 | 2005 (96) |
| Bilgisayar (Microcomputer) | hane | 1984 (8.2) | 1985 (10) | 2000 (51) | 15 | 2016 (78) |
| Bilgisayar (Computer) | hane | 1992 (20.7) | seri %10'un üstünde başlıyor | 2003 (63.1); önceki veri 1998'de 42 | n/a | 2016 (89.3) |
| İnternet (Internet) | hane | 1993 (10) | 1993 | 2002 (52) | 9 | 2016 (88) |
| Cep telefonu (Cellular phone) | hane | 1994 (10) | 1994 | 2002 (56) | 8 | 2019 (96) |
| Sosyal medya (Social media usage) | yetişkin | 2005 (5) | 2006 (11) | 2011 (50) | 5 | 2019 (79) |
| Akıllı telefon (Smartphone usage) | yetişkin | 2011 (35) | seri %35'ten başlıyor | 2013 (54) | n/a | 2019 (81) |
| Tablet | yetişkin | 2010 (3) | 2011 (10) | 2016 (51) | 5 | 2017 (64) |

Not: Otomobil 1931-33'te (Büyük Buhran) ve 1943-46'da (savaş) tekrar %50'nin altına düşüyor. Sabit telefon 1930'larda geriliyor, 2005'ten sonra ise cep telefonu yüzünden hızla düşüyor.

### 1b. Grafik serileri (5 yıllık örnekleme; ilk ve son yıl dahil; yıl:%)

- **Elektrik:** 1908:10 · 1910:12.3 · 1915:20 · 1920:33.5 · 1925:52 · 1930:68 · 1935:68.5 · 1940:78 · 1945:85 · 1950:94 · 1955:98.3 · 1960:99 · (2005'e kadar 99)
- **Sabit telefon:** 1903:10 · 1905:14 · 1910:24.5 · 1915:30 · 1920:34 · 1925:38 · 1930:39.5 · 1935:32 · 1940:37 · 1945:46 · 1950:62 · 1955:71.7 · 1960:78.5 · 1965:85 · 1970:87 · 1975:90 · 1980:92.5 · 1985:92 · 1990:93.5 · 1995:94 · 2000:94 · 2005:92 · 2010:75 · 2015:54.7 · 2018:41.7
- **Radyo:** 1925:10 · 1930:45 · 1935:68 · 1940:81 · 1945:88 · 1950:92 · 1955:96 · 1960:95 · 1965:96 · 1970:98 · 1975:99 · (2005'e kadar 99)
- **Otomobil:** 1915:10 · 1920:28 · 1925:49 · 1930:59 · 1935:52 · 1940:55 · 1945:46 · 1950:58 · 1955:68 · 1960:75 · 1965:79 · 1970:80 · 1975:83 · 1980:86 · 1985:88 · 1990:91 · 1995:91 · 2000:92 · 2005:91
- **Buzdolabı (Refrigerator):** 1925:1 · 1930:12.8 · 1935:34.2 · 1940:63 · 1945:67.5 · 1950:86.4 · 1955:94.1 · 1960:98.2 · 1965:99.5 · 1970:99.8 · 1975:99.9 · 1978:99.7
- **Buzdolabı (Household refrigerator):** 1931:10 · 1935:24 · 1940:44 · 1945:56 · 1950:80 · 1955:93 · 1960:97.8 · 1965:99 · … · 2005:99 · 2010:99.3 · 2015:98.4 · 2017:98
- **Renkli TV:** 1966:10 · 1970:31 · 1975:64 · 1980:79 · 1985:90 · 1990:96 · 1995:94 · 2000:94 · 2005:96
- **Bilgisayar (Microcomputer, yıllık):** 1984:8.2 · 1985:10 · 1990:17 · 1995:30 · 2000:51 · 2005:65 · 2010:76.7 · 2015:73 · 2016:78
- **Bilgisayar (Computer, tüm noktalar):** 1992:20.7 · 1998:42 · 2003:63.1 · 2005:67.1 · 2010:75.2 · 2011:76.7 · 2012:78.9 · 2013:83.8 · 2014:85.1 · 2015:86.8 · 2016:89.3
- **İnternet:** 1993:10 · 1995:13 · 1997:19 · 2000:42 · 2001:49 · 2002:52 · 2005:61 · 2010:74 · 2015:85 · 2016:88
- **Cep telefonu:** 1994:10 · 1995:12 · 2000:42 · 2002:56 · 2005:71.3 · 2010:87.2 · 2015:92 · 2019:96
- **Sosyal medya (yetişkin):** 2005:5 · 2006:11 · 2008:21 · 2010:48 · 2011:50 · 2015:65 · 2017:80 · 2019:79
- **Akıllı telefon (yetişkin):** 2011:35 · 2012:45 · 2013:54 · 2015:68 · 2017:73 · 2019:81
- **Tablet (yetişkin):** 2010:3 · 2011:10 · 2012:25 · 2015:45 · 2016:51 · 2017:64

Yıllık ayrıntı gerekirse ham CSV'de her teknolojinin tüm yılları var.

**Slayt kaynak satırı:** *Kaynak: Our World in Data (Comin ve Hobijn, 2004 ve diğerleri), ABD haneleri*

---

## 2. St. Louis Fed GenAI Adoption Tracker: üretken YZ, PC ve internet karşılaştırması

**Kaynak:** Bick, A. (St. Louis Fed), Blandin, A. (Vanderbilt), Deming, D. ve McKittrick, K. (Harvard Project on Workforce), *GenAI Adoption Tracker*, son veri **Ağustos 2026** (ABD, 18-64 yaş, Real-Time Population Survey; 9 dalga, 40.000+ katılımcı). https://www.genaiadoptiontracker.com/ · Ham dosya: https://www.genaiadoptiontracker.com/All_Results.xlsx (indirme 11.11.2026)
**Yöntem belgesi:** Bick, Blandin, Deming, *The Rapid Adoption of Generative AI*, NBER WP 32966 (Eylül 2024, revizyon Şubat 2025), Şekil 3-4. Makale *Management Science* (2026) dergisinde de yayımlandı, DOI 10.1287/mnsc.2025.02523. https://www.nber.org/system/files/working_papers/w32966/w32966.pdf
**Sayılar birincil kaynaktan mı?** Evet, tracker'ın kendi xlsx dosyasından ("GenAI_PC_Internet" ve "GenAI_All" sayfaları).
**Güven:** Yüksek

**"0. yıl" tanımı (makaleden, birebir):** PC için **1981** (IBM PC, Ağustos 1981), internet için **1995** (Nisan 1995: NSF, NSFNet'i kapatıp internete ticari trafiği açtı), üretken YZ için **2022** (ChatGPT, Kasım 2022). PC ve internet (CPS) verileri ABD Nüfus Bürosu'nun CPS "Computer and Internet Use" eklerinden (18-64 yaş). Internet (ITU) serisi tüm yaşları kapsıyor ve ITU'nun ABD internet kullanıcı oranı.

### 2a. "Çıkıştan bu yana geçen yıl" ekseni (yüzde; boş = o yıl ölçüm yok)

| Yıl | YZ genel | PC genel (CPS) | İnternet (CPS) | İnternet (ITU) | YZ işte | PC işte | YZ iş dışı | PC evde |
|---|---|---|---|---|---|---|---|---|
| 0 | | | | 9.24 | | | | |
| 1 | | | | 16.42 | | | | |
| 2 | **45.48** | | | **21.62** | 32.14 | | 37.66 | |
| 3 | 52.60 | **19.72** | | 30.09 | 36.46 | 25.11 | 46.57 | 5.50 |
| 4 | **60.05** | | | 35.85 | 42.86 | | 53.63 | |
| 5 | | | | 43.08 | | | | |
| 6 | | | 60.62 | 49.08 | | | | |
| 7 | | | | 58.79 | | | | |
| 8 | | 31.10 | 66.09 | 61.70 | | 37.43 | | 11.46 |
| 9 | | | | 64.76 | | | | |
| 10 | | | | 67.97 | | | | |
| 11 | | | | 68.93 | | | | |
| 12 | | 39.88 | 70.00 | 75.00 | | 46.62 | | 18.89 |
| 13 | | | | 74.00 | | | | |
| 14 | | | 76.34 | 71.00 | | | | |
| 15 | | | | 71.69 | | | | |
| 16 | | 51.94 | | 69.73 | | 50.63 | | 33.03 |
| 17 | | | | 74.70 | | | | |
| 18 | | | | 71.40 | | | | |
| 19 | | | | 73.00 | | | | |
| 20 | | 65.55 | | 74.55 | | 54.67 | | 54.82 |
| 21 | | | | 85.54 | | | | |
| 22 | | 69.27 | | 87.27 | | 56.58 | | 60.09 |
| 23 | | | | 88.50 | | | | |
| 24 | | | | 89.43 | | | | |
| 25 | | | | 90.62 | | | | |

- YZ değerleri **yıllık ortalama**. 2. yıl = 2024 (Ağustos ve Kasım dalgalarının ortalaması: (44.62+46.34)/2 = 45.48). 3. yıl = 2025 (4 dalga). 4. yıl = 2026 (Şubat, Mayıs, Ağustos). Ortalamaları dalga verisinden yeniden hesaplayarak doğruladım.
- PC (CPS) ölçüm yılları: 1984, 1989, 1993, 1997, 2001, 2003. İnternet (CPS) ölçüm yılları: 2001, 2003, 2007, 2009.
- **Tracker'ın kendi cümlesi:** üretken YZ işteki benzer yaygınlığa (~%44) PC'lerin harcadığı sürenin **üçte birinde** ulaştı. Tablodan: YZ işte 4. yılda %42,9, PC işte 12. yılda %46,6.

### 2b. Dalga dalga seri (ChatGPT'den bu yana geçen ay; %)

| Anket | ChatGPT'den bu yana ay (yaklaşık) | Genel kullanım | Geçen hafta kullanan | Her gün kullanan | İşte kullanım (çalışanlar) | İş dışı kullanım |
|---|---|---|---|---|---|---|
| Ağu 2024 | 21 | 44.62 | 36.06 | 12.05 | 33.27 | 36.03 |
| Kas 2024 | 24 | 46.34 | 38.20 | 8.92 | 31.01 | 39.28 |
| Şub 2025 | 27 | 47.98 | 40.38 | 10.98 | 32.75 | 41.94 |
| May 2025 | 30 | 51.86 | 44.02 | 12.28 | 35.08 | 45.94 |
| Ağu 2025 | 33 | 54.54 | 46.85 | 13.85 | 37.36 | 48.59 |
| Kas 2025 | 36 | 56.01 | 47.80 | 13.25 | 40.65 | 49.81 |
| Şub 2026 | 39 | 57.56 | 50.43 | 13.89 | 42.84 | 50.98 |
| May 2026 | 42 | 61.78 | 54.21 | 15.44 | 45.20 | 54.81 |
| **Ağu 2026** | 45 | **60.81** | 53.84 | 14.38 | **40.55** | 55.11 |

Ek seriler (aynı xlsx): iş saatlerinin YZ ile geçen payı Kas 2024'te %4,10, Ağu 2026'da %5,31 (zirve May 2026, %6,27). YZ sayesinde tasarruf edilen iş saati Kas 2024'te %1,41, Ağu 2026'da %2,08.

**Uyarılar:**
1. **%39,5 ile %45,5 farkı:** `02-veriler.md`'deki "2 yıl sonra %39,5" makalenin ilk sürümünden geliyor (Ağu+Kas 2024 birleşik, Şubat 2025 revizyonunda %39,6). Tracker'ın güncel xlsx'i **aynı dalgalar için %44,6 ve %46,3** veriyor. Farkın nedeni (ağırlık ya da tanım revizyonu) kaynakta açıklanmıyor: **BULUNAMADI.** Grafikte tek kaynak kullanın: **tracker xlsx serisi** (madde 2a). Metinde "%39,5" geçiyorsa "makalenin ilk tahmini" diye ayırın.
2. Ağustos 2026'da işte kullanım %45,2'den %40,5'e düştü (standart hata ~1,1 puan). Tek dalgadaki düşüşü "trend kırıldı" diye yorumlamayın.
3. Hep birlikte çizilen seriler farklı kitleleri ölçüyor: YZ ve CPS serileri 18-64 yaş kişi, ITU serisi tüm nüfus. Madde 1'deki OWID serileri ise hane bazlı.

**Slayt kaynak satırı:** *Kaynak: St. Louis Fed / Harvard, GenAI Adoption Tracker (Bick, Blandin, Deming, McKittrick), Ağustos 2026; PC ve internet: ABD Nüfus Bürosu CPS, ITU*

---

## 3. Epoch AI: eğitim hesaplama gücü (FLOP)

**Kaynak:** Epoch AI, *Data on Notable AI Models* (canlı veri tabanı; 11.11.2026'da indirildi). https://epoch.ai/data/notable-ai-models · CSV: https://epoch.ai/data/notable_ai_models.csv
**Büyüme oranı:** Epoch AI, *Trends* sayfası, **güncelleme 5 Şubat 2026**: "Öncü dil modellerinin eğitim hesaplaması **2020'den beri yılda 5 kat** büyüyor (%90 güven aralığı 4-6 kat), yani **her 5,2 ayda iki katına** çıkıyor (aralık 4,6-6,0 ay). 2020'den bu yana ilk 5 modelin trendi ~10.000 kat büyüdü." https://epoch.ai/trends · Önceki yaygın rakam: Sevilla ve Roldán, *Training Compute of Frontier AI Models Grows by 4-5x per Year*, Epoch AI, Mayıs 2024.
**Sayılar birincil kaynaktan mı?** Evet, Epoch'un CSV'sinden. Ancak değerlerin kendisi Epoch'un **kestirimi**: kapalı modellerin hiçbiri FLOP açıklamıyor. Her satırda Epoch'un güven etiketi var (Confident / Likely / Speculative).
**Güven:** Büyüme oranı Yüksek · tek tek kapalı model değerleri Orta (Speculative olanlar Tartışmalı)

### 3a. Seçilmiş modeller (`veri\epoch-secilmis-modeller.csv`)

| Model | Kurum | Tarih | Eğitim hesaplaması (FLOP) | log10 | Epoch güveni |
|---|---|---|---|---|---|
| Perceptron Mark I | Cornell | 1957 | 6.95e5 | 5.84 | Likely |
| AlexNet | Toronto Üniv. | Eyl 2012 | 4.70e17 | 17.67 | Confident |
| AlphaGo Lee | DeepMind | Oca 2016 | 1.90e21 | 21.28 | Speculative |
| Transformer | Google | Haz 2017 | 7.42e18 | 18.87 | Confident |
| GPT-1 | OpenAI | Haz 2018 | 1.76e19 | 19.24 | Likely |
| BERT-Large | Google | Eki 2018 | 2.85e20 | 20.45 | Confident |
| GPT-2 (1.5B) | OpenAI | Şub 2019 | 1.92e21 | 21.28 | Speculative |
| GPT-3 175B | OpenAI | May 2020 | 3.14e23 | 23.50 | Confident |
| PaLM (540B) | Google | Nis 2022 | 2.53e24 | 24.40 | Confident |
| GPT-4 | OpenAI | Mar 2023 | 2.10e25 | 25.32 | Likely (%90 GA 8.2e24 – 4.4e25) |
| Gemini 1.0 Ultra | Google DeepMind | Ara 2023 | 5.00e25 | 25.70 | Speculative |
| Llama 3.1 405B | Meta | Tem 2024 | 3.80e25 | 25.58 | Confident |
| Grok 3 | xAI | Şub 2025 | 3.50e26 | 26.54 | Likely |
| GPT-4.5 | OpenAI | Şub 2025 | 3.80e26 | 26.58 | Likely |
| Grok 4 | xAI | Tem 2025 | 5.00e26 | 26.70 | Speculative |
| **GPT-6 Astra** | OpenAI | **3 Eyl 2026** | **9.40e26** | **26.97** | Likely (GA ~5e26 – 2e27) |

- **Güncel en büyük (Epoch veri tabanında hesaplaması tahmin edilmiş model):** **GPT-6 Astra**, ~9,4×10²⁶ FLOP. Epoch'un notuna göre en az 100.000 Nvidia GB200 ile Abilene, Teksas'ta eğitildi (~90 gün, %25 FP8 verim varsayımı). Lansman tarihi (3 Eylül 2026) ve "100.000'den fazla GPU" bilgisi Axios ve TheNextWeb haberleriyle doğrulandı (https://axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman). FLOP değeri ise OpenAI'ın değil, Epoch'un kestirimi.
- 10²⁶ FLOP'u aşan dört model var: GPT-6 Astra, Grok 4, GPT-4.5 ve Grok 3. 10²⁵'i aşan 26 model var.
- **Bilinmeyenler:** Claude Opus 4.5/5, Gemini 3/3.5/4, GPT-5.x ve GPT-6.1 gibi 2025-26 öncü modellerinin çoğu için Epoch'ta hesaplama değeri **yok** ("Unknown"). Bu nedenle "dünyanın en büyük eğitim koşusu" diye kesin konuşmayın; "tahmini bilinen en büyük" deyin.
- **AlphaGo uyarısı:** Epoch, AlphaGo Zero'yu (2017) yalnızca doğrudan eğitimi sayacak şekilde 6,5×10²⁰'ye revize etti, sentetik veri üretimini dahil etmiyor. Eski kaynaklarda geçen ~3×10²³ değeriyle karıştırmayın. Grafikte AlphaGo için "Lee (2016), 1,9×10²¹, spekülatif" yazın ya da AlphaGo'yu çıkarın.

### 3b. Büyüme hızı (benim hesabım, Epoch değerleriyle)

| Aralık | Süre (yıl) | Toplam artış | Yıllık çarpan |
|---|---|---|---|
| AlexNet (2012) → GPT-6 Astra (2026) | 13.9 | ~2 milyar kat (10^9.3) | **~4.7×/yıl** |
| GPT-2 (2019) → GPT-6 Astra (2026) | 7.6 | ~490.000 kat | ~5.7×/yıl |
| GPT-3 (2020) → GPT-4 (2023) | 2.8 | ~67 kat | ~4.5×/yıl |
| GPT-4 (Mar 2023) → GPT-6 Astra (Eyl 2026) | 3.5 | ~45 kat | ~3.0×/yıl |

Son satır, en büyük açıklanmış koşular arasında son 3,5 yılda tempo yavaşlamış gibi gösteriyor. Ancak 2025-26 modellerinin çoğunun değeri bilinmediği için bu yorumu slayta koymayın. Epoch'un resmî oranı olan **"yılda ~5 kat"** rakamını kullanın.

**Slayt kaynak satırı:** *Kaynak: Epoch AI, Notable AI Models veri tabanı (Kasım 2026) ve Trends (Şubat 2026); değerler kestirimdir*

---

## 4. METR: yapay zekâ ajanlarının bitirebildiği görev süresi ("time horizon") ★ en önemli seri

**Kaynaklar:**
- Kwa, T., West, B., Becker, J. ve diğerleri (METR), *Measuring AI Ability to Complete Long Tasks*, arXiv:2503.14499, **18 Mart 2025** (v4: 10 Temmuz 2026). Özet: Claude 3.7 Sonnet'in %50 zaman ufku "yaklaşık 50 dakika"; öncü modellerin zaman ufku **2019'dan beri yaklaşık her 7 ayda iki katına** çıkıyor, "trend 2024'te hızlanmış olabilir". https://arxiv.org/abs/2503.14499
- METR, *Time Horizon 1.1*, blog, **29 Ocak 2026**. Görev seti 170'ten 228 göreve büyütüldü, 14 model yeniden ölçüldü. İkiye katlanma süresi: tüm veri **~196 gün (~7 ay)**; 2023 sonrası **130,8 gün** [107-161]; 2024 sonrası **~89 gün** (son rakam ikincil özetten, *Orta*). https://metr.org/blog/2026-01-29-time-horizon-1-1/
- **Ham veri (birincil):** METR, `benchmark_results_1_1.yaml` (METR-Horizon-v1.1), https://metr.org/assets/benchmark_results_1_1.yaml, sayfa: https://metr.org/time-horizons/. Sayfa **8 Eylül 2026'dan beri "artık aktif olarak güncellenmiyor"**. Son eklenen model: Claude Mythos Preview (erken), 8 Mayıs 2026.

**Tanım:** "%50 zaman ufku", insan uzmanların ortalama X sürede bitirdiği görevleri yapay zekâ ajanının **%50 olasılıkla** başarıyla bitirebildiği X süresidir. Görevlerin çoğu yazılım, siber güvenlik ve makine öğrenmesi araştırması. Bu ölçü, "model 16 saat kesintisiz çalışıyor" anlamına **gelmez**.
**Sayılar birincil kaynaktan mı?** Evet, METR'in YAML dosyasından. Doğrulama: Mythos için YAML'daki güven aralığı (508,9-3.304,3 dk = **8,5-55 saat**), METR'in duyurusundaki "en az 16 saat (%95 GA 8,5-55 saat)" ifadesiyle birebir uyuşuyor (The Decoder, 10 Mayıs 2026: https://the-decoder.com/metr-says-it-can-barely-measure-claude-mythos-palo-alto-networks-warns-of-autonomous-ai-attackers/).
**Güven:** Veri Yüksek · yorum **Tartışmalı**. Görevler yazılım ağırlıklı, başarı eşiği %50 ve 16 saatin üstündeki ölçümler METR'e göre güvenilmez (228 görevden yalnızca 5'i 16 saat ve üzeri).

### 4a. Seri: model, çıkış tarihi, %50 zaman ufku (Time Horizon 1.1)

★ = METR'e göre o tarihte en iyi model ("is_sota"). Ana çizgi için ★ olanları kullanın.

| Model | Çıkış | %50 ufuk (dk) | Okunuş | %95 GA (dk) | %80 ufuk (dk) |
|---|---|---|---|---|---|
| ★ GPT-2 | 14 Şub 2019 | 0.054 | ~3 saniye | 0.010–0.142 | 0.013 |
| ★ GPT-3 (davinci-002) | 28 May 2020 | 0.144 | ~9 saniye | 0.093–0.221 | 0.056 |
| ★ GPT-3.5 (turbo-instruct) | 15 Mar 2022 | 0.599 | ~36 saniye | 0.255–1.1 | 0.255 |
| ★ GPT-4 | 14 Mar 2023 | 4.0 | 4 dakika | 1.9–8.0 | 0.89 |
| ★ GPT-4 Turbo (1106) | 6 Kas 2023 | 4.0 | 4 dk | 1.9–8.4 | 0.78 |
| Claude 3 Opus | 4 Mar 2024 | 4.0 | 4 dk | 1.7–8.8 | 0.64 |
| GPT-4 Turbo (Nis 2024) | 9 Nis 2024 | 3.7 | 4 dk | 2.0–6.7 | 0.93 |
| ★ GPT-4o | 13 May 2024 | 7.0 | 7 dk | 4.0–12.9 | 1.3 |
| ★ Claude 3.5 Sonnet | 20 Haz 2024 | 11.4 | 11 dk | 5.5–22.4 | 1.7 |
| ★ o1-preview | 12 Eyl 2024 | 20.3 | 20 dk | 11.7–33.4 | 4.4 |
| ★ Claude 3.5 Sonnet (yeni) | 22 Eki 2024 | 20.5 | 21 dk | 10.1–40.8 | 2.6 |
| ★ o1 | 5 Ara 2024 | 38.8 | 39 dk | 21.2–65.0 | 7.1 |
| ★ Claude 3.7 Sonnet | 24 Şub 2025 | 60.4 | ~1 saat | 33.0–104.2 | 12.1 |
| ★ o3 | 16 Nis 2025 | 119.7 | ~2 saat | 74.6–190.9 | 30.0 |
| Claude Opus 4 | 22 May 2025 | 100.4 | 1 sa 40 dk | 60.0–163.5 | 20.4 |
| Claude Opus 4.1 | 5 Ağu 2025 | 100.5 | 1 sa 40 dk | 59.3–159.5 | 23.5 |
| ★ GPT-5 | 7 Ağu 2025 | 203.0 | 3 sa 23 dk | 112.6–405.6 | 38.3 |
| ★ Gemini 3 Pro | 18 Kas 2025 | 224.3 | 3 sa 44 dk | 139.6–379.2 | 54.1 |
| GPT-5.1-Codex-Max | 19 Kas 2025 | 223.7 | 3 sa 44 dk | 134.3–396.2 | 50.6 |
| ★ Claude Opus 4.5 | 24 Kas 2025 | 293.0 | 4 sa 53 dk | 161.7–623.7 | 49.4 |
| ★ GPT-5.2 | 11 Ara 2025 | 352.2 | 5 sa 52 dk | 198.1–815.2 | 66.0 |
| ★ **Claude Opus 4.6** | 5 Şub 2026 | **718.8** | **~12 saat** | 316.7–3633.8 (5–61 sa) | 69.9 |
| GPT-5.3-Codex | 5 Şub 2026 | 349.5 | 5 sa 50 dk | 194.9–816.4 | 54.7 |
| Gemini 3.1 Pro | 19 Şub 2026 | 384.1 | 6 sa 24 dk | 233.5–694.8 | 89.8 |
| GPT-5.4 | 5 Mar 2026 | 341.7 | 5 sa 42 dk | 186.6–768.8 | 53.9 |
| ★ **Claude Mythos Preview (erken)** | 7 Nis 2026 | **1044.8** | **≥16 saat** (nokta tahmin 17 sa 25 dk) | 508.9–3304.3 (8,5–55 sa) | 185.9 (~3 sa) |

- **Büyüklük:** GPT-2'den (2019, ~3 sn) Claude Opus 4.6'ya (2026, ~12 sa) **~13.000 kat**. GPT-4'ten (Mart 2023, 4 dk) Opus 4.6'ya (Şubat 2026) ~3 yılda **~180 kat**.
- **İkiye katlanma süresi (YAML'daki güncel değer; 16 saatin üstündeki noktalar hariç):** tüm dönem **187,8 gün (~6,2 ay)**; 2023 sonrası **128,7 gün (~4,2 ay)**, aralık 104-158 gün (~3,4-5,2 ay).
- **Slayt için önerilen ifade:** "Ajanların bitirebildiği işin süresi 2019'dan beri yaklaşık her 7 ayda, 2023'ten beri yaklaşık her 4 ayda bir ikiye katlanıyor."
- **Mythos uyarısı:** METR'in kendi notu: "16 saatin üstündeki ölçümler mevcut görev setimizle güvenilir değil." Slayta "≥16 saat" yazın, "17,4 saat" yazmayın.
- **Sürüm uyarısı:** Time Horizon 1.0 (Mart 2025) ile 1.1'in değerleri farklı. Örneğin GPT-5 TH1.0'da ~2 sa 17 dk, TH1.1'de ~3 sa 23 dk. Grafikte yalnızca 1.1'i kullanın (tablodaki tüm değerler 1.1).
- **BULUNAMADI:** Nisan 2026 sonrası çıkan modeller için METR'in yayımladığı TH1.1 değeri **yok** (sayfa 8 Eylül 2026'da donduruldu). Claude Opus 5, GPT-5.5, GPT-6 Astra ve Gemini 4 için METR zaman ufku bulunamadı. Halef görev setinin (TH 2.0) yayımlandığına dair kanıt da bulunamadı.

**Slayt kaynak satırı:** *Kaynak: METR, "Measuring AI Ability to Complete Long Tasks" (2025) ve Time Horizon 1.1 verisi (2026); %50 başarı eşiği*

---

## 5. IEA: veri merkezlerinin elektrik tüketimi

**Kaynaklar:**
- IEA, *Energy and AI*, **10 Nisan 2025** (grafik verisi son güncelleme 10.04.2025). Yönetici özeti: veri merkezleri 2024'te **~415 TWh** tüketti, bu **küresel elektriğin ~%1,5'i** demek. 2017'den beri yılda ~%12 büyüme var. Temel Senaryo'da 2030'da **~945 TWh**, 2035'te ~1.200 TWh (senaryo aralığı 700-1.700 TWh). 2024'te tüketimin %45'i ABD'de, %25'i Çin'de, %15'i Avrupa'da. https://www.iea.org/reports/energy-and-ai/executive-summary · Grafik: https://www.iea.org/data-and-statistics/charts/data-centre-electricity-consumption-by-region-base-case-2020-2030
- **2026 güncellemesi:** IEA, *Key Questions on Energy and AI*, basın bülteni **16 Nisan 2026**. Veri merkezi elektriği 2025'te **%17 arttı** ve **485 TWh**'e ulaştı; yapay zekâya odaklı veri merkezlerinde artış %50. 2030'da **~950 TWh**, küresel elektriğin **~%3'ü**. Yapay zekâ odaklı tüketim 2025-2030 arasında üç katına çıkacak. https://iea.org/reports/key-questions-on-energy-and-ai/executive-summary · https://iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions
**Sayılar birincil kaynaktan mı?** Evet. Seriler IEA sayfalarına gömülü grafik verisinden okundu (lisans **CC BY 4.0**). Toplamlar yönetici özetindeki rakamlarla tutuyor: 2024 = 415,9, 2030 = 945,7.
**Güven:** 2020-2025 Yüksek · projeksiyonlar Orta (senaryo)

### 5a. Bölgelere göre, Temel Senaryo, TWh (IEA 2025; `veri\iea-veri-merkezi-elektrik-2020-2030.csv`)

| Yıl | ABD | Çin | Avrupa | Asya (Çin hariç) | Dünyanın geri kalanı | **Toplam** |
|---|---|---|---|---|---|---|
| 2020 | 108.4 | 61.9 | 56.9 | 27.9 | 14.3 | **269.4** |
| 2021 | 120.7 | 70.8 | 59.9 | 30.7 | 15.2 | **297.2** |
| 2022 | 134.1 | 77.6 | 63.0 | 33.8 | 15.9 | **324.3** |
| 2023 | 154.1 | 84.5 | 65.6 | 38.8 | 17.7 | **360.6** |
| 2024 | 182.6 | 101.9 | 67.8 | 43.2 | 20.4 | **415.9** |
| 2025* | 224.4 | 117.4 | 71.5 | 49.2 | 22.9 | **485.4** |
| 2026* | 259.3 | 140.1 | 78.0 | 56.7 | 26.2 | **560.3** |
| 2027* | 304.0 | 175.1 | 88.4 | 66.8 | 30.5 | **664.7** |
| 2028* | 350.0 | 214.3 | 98.3 | 76.3 | 34.3 | **773.4** |
| 2029* | 391.0 | 245.2 | 105.7 | 83.7 | 37.4 | **863.0** |
| 2030* | 425.7 | 277.3 | 113.4 | 89.1 | 40.1 | **945.7** |

\* Projeksiyon (2025 raporunda son gerçekleşen yıl 2024).

### 5b. Toplam, 2020-2035 (IEA 2026 güncellemesi; `veri\iea-veri-merkezi-elektrik-2020-2035-guncelleme2026.csv`)

| Yıl | Gerçekleşen | Temel Senaryo | Senaryo aralığı (alt–üst)** |
|---|---|---|---|
| 2020 | 269.1 | | |
| 2021 | 297.0 | | |
| 2022 | 324.1 | | |
| 2023 | 360.4 | | |
| 2024 | 415.6 | | |
| **2025** | **485.1** | | |
| 2026 | | 560.0 | 548.6–559.9 |
| 2027 | | 664.4 | 639.9–664.3 |
| 2028 | | 773.0 | 711.4–772.9 |
| 2029 | | 862.4 | 772.5–885.5 |
| **2030** | | **945.0** | 832.8–1008.3 |
| 2031 | | 1012.5 | 868.1–1130.8 |
| 2032 | | 1075.0 | 894.9–1264.2 |
| 2033 | | 1119.3 | 912.5–1394.9 |
| 2034 | | 1161.5 | 934.7–1527.1 |
| 2035 | | 1192.9 | 942.0–1636.9 |

\*\* Aralık, IEA grafiğindeki yığılmış alanın yapısından türetildi (alt sınır = "Blank" katmanı, üst sınır = Blank + "Case range"). IEA metinde bu sınırları ayrıca yazmıyor. Bu yüzden **Orta** güven; grafikte yalnızca Temel Senaryo çizgisini kullanmanız önerilir. 2025 raporu 2035 için 700-1.700 TWh aralığı vermişti; 2026 grafiğindeki alt sınır daha yüksek.

- **Küresel elektrikteki pay:** 2024'te ~%1,5 (IEA 2025), 2030'da ~%3 (IEA 2026). IEA ara yıllar için pay serisi yayımlamıyor: **BULUNAMADI.**
- **Ölçek için:** 2025'teki 485 TWh, 2024 → 2030 arasında ~2,3 katına çıkış (415,9 → 945).
- **Slayt kaynak satırı:** *Kaynak: IEA, Energy and AI (2025) ve Key Questions on Energy and AI (Nisan 2026), Temel Senaryo; Lisans CC BY 4.0*

---

## 6. Kardashev ölçeği

### 6a. Nikolai Kardashev: kısa biyografi
- **Tam adı:** Nikolay Semyonoviç Kardaşev (Николай Семёнович Кардашёв)
- **Doğum:** 25 Nisan 1932, Moskova · **Ölüm:** 3 Ağustos 2019, Moskova (87 yaşında)
- **Eğitim:** Moskova Devlet Üniversitesi, Mekanik-Matematik Fakültesi astronomi bölümü, 1955. Doktora çalışmasını Sternberg Astronomi Enstitüsü'nde (GAİŞ) **İosif Şklovski** danışmanlığında yaptı.
- **Kurumlar:** Sternberg Astronomi Enstitüsü (1955/59-1967) · SSCB Bilimler Akademisi Uzay Araştırmaları Enstitüsü (İKİ), 1967-1990; 1977'den itibaren müdür yardımcısı · **Lebedev Fizik Enstitüsü (FİAN) Astro Uzay Merkezi**: 1990'da kurdu ve ölümüne kadar yönetti · 1999'dan itibaren Rusya Bilimler Akademisi Astronomi Konseyi başkanı. Rus ölüm ilanı onu "uzay radyo astronomisinin kurucusu" olarak anıyor (RadioAstron uzay radyo teleskobu bu merkezin projesi).
- **Unvan:** SSCB Bilimler Akademisi muhabir üyesi (1976), **Rusya Bilimler Akademisi asıl üyesi (akademisyen), 1994**
- **Ödüller:** SSCB Devlet Ödülü (1980 ve 1988), Grote Reber Altın Madalyası (2012)
- **Kaynaklar:** Wikipedia, https://en.wikipedia.org/wiki/Nikolai_Kardashev · *Astronomiçeski Jurnal* 96(12), 2019, ölüm ilanı: https://sciencejournals.ru/issues/astrus/2019/vol_96/iss_12/AstRus_1912007OBITUARY/AstRus_1912007OBITUARY.pdf · *Zemlya i Vselennaya* 2019/4: https://epizodyspace.ru/bibl/zemlya_i_vselennaya/2019/4/84-85.pdf
- **Güven:** Yüksek. Doğum, ölüm, 1990 ve 1994 tarihleri Rus ölüm ilanlarıyla teyit edildi. 1976 muhabir üyeliği yalnızca Wikipedia'da var (Orta).
- **Kaynaklar arasındaki fark:** Wikipedia doktora yılını 1962/1963, ölüm ilanı 1959 veriyor. Slayta yıl yazmayın.

### 6b. 1964 makalesinin künyesi
- **Kardashev, N. S.** (1964). "Передача информации внеземными цивилизациями" / **"Transmission of Information by Extraterrestrial Civilizations"**. Rusça asıl metin: *Astronomiçeski Jurnal*, cilt 41, s. 282, Mart-Nisan 1964. İngilizce çeviri: ***Soviet Astronomy*, cilt 8, s. 217**, Eylül-Ekim 1964 (ADS bibkodu **1964SvA.....8..217K**). Makale 1964'te Ermenistan'daki Byurakan SETI toplantısında sunuldu.
- **Güven:** Yüksek (cilt ve sayfa bibkoddan ve iki ayrı referans listesinden). Sayı numarası ve sayfa aralığı birincil kaynakta görülemedi: **BULUNAMADI.** ADS sayfası erişime kapalıydı.

### 6c. Orijinal tip eşikleri (Kardashev 1964)

| Tip | Tanım | Güç (erg/s) | Güç (W) |
|---|---|---|---|
| I | Dünya'nın 1964'teki enerji tüketimi düzeyi | ~4 × 10¹⁹ | ~4 × 10¹² |
| II | Kendi yıldızının tüm enerjisini kullanan uygarlık | ~4 × 10³³ | ~4 × 10²⁶ |
| III | Kendi galaksisinin enerjisini kullanan uygarlık | ~4 × 10⁴⁴ | ~4 × 10³⁷ |

**Kaynak:** Gray, R. H. (2020), "The Extended Kardashev Scale", *The Astronomical Journal* 159(5):228, 23 Nisan 2020, Tablo 1. https://doi.org/10.3847/1538-3881/ab792b. Wikipedia "Kardashev scale" ile çapraz kontrol edildi. **Güven:** Yüksek

### 6d. Carl Sagan'ın ara değer formülü (1973)
- **Formül (yaygın biçim):** **K = (log₁₀ P − 6) / 10**, P watt cinsinden. Buna göre Tip I = 10¹⁶ W, Tip II = 10²⁶ W, Tip III = 10³⁶ W.
- **Sagan'ın kendi değerleri** (*The Cosmic Connection: An Extraterrestrial Perspective*, 1973): ondalık bir ölçek önerdi. **Tip 1,0 = 10¹⁶ W**, Tip 1,1 = 10¹⁷ W. 1973 Dünyası ~10¹³ W ile **Tip 0,7**.
- **Önemli düzeltme:** Gray (2020, AJ) şunu belirtiyor: "Sık sık kaynak gösterilen *Cosmic Connection*'da hiçbir denklem yok." Bulunabilen en eski denklem, Wikipedia'nın 27 Kasım 2004 tarihli "Kardashev Scale" maddesi. Yani **ölçeği ve 10¹⁶ W'ı Sagan önerdi; formülün yazılı hâli sonradan türetildi.** Slayta "Sagan'ın formülü" yerine **"Sagan'ın ara değer ölçeği (1973)"** yazın.
- **Güven:** Değerler Yüksek (Gray 2020) · formülün Sagan'a atfedilmesi Orta

### 6e. İnsanlığın bugünkü K değeri (kendi hesabım)

**Veri:** Energy Institute, *Statistical Review of World Energy 2026* (75. baskı, **30 Haziran 2026**; Ember, Kearney ve KPMG ile birlikte). **2025 küresel toplam birincil enerji arzı = 600,31 EJ** (2024: 592,18 EJ).
- **Birinci yol:** OWID'in EI 2026 verisi, Dünya 2025 = 166.753,6 TWh × 0,0036 EJ/TWh = **600,31 EJ** (`veri\owid-dunya-birincil-enerji-TWh.csv`). OWID, Statistical Review 2026'yı kaynak gösteriyor; güncelleme tarihi 30.06.2026. https://ourworldindata.org/grapher/primary-energy-cons
- **İkinci yol (çapraz kontrol):** Connaissance des Énergies, "600,31 EJ consommés en 2025", +%1,7. https://www.connaissancedesenergies.org/statistical-review-of-world-energy-2026
- **Büyüme notu:** Ham değerlerle büyüme %1,37. EI'nin ilan ettiği %1,7, 2024'ün artık yıl (366 gün) olmasına göre düzeltilmiş büyümeyle örtüşüyor: 592,18 × 365/366 = 590,56 → %1,65. Bu açıklama benim hesabım.
- EI'nin kendi sitesi 403 hatası verdi; özet PDF indirildi ama metni makineyle okunamadı. Bu yüzden rakam EI'nin kendi sayfasından değil, iki bağımsız aktarımdan doğrulandı. **Güven:** Yüksek

**Hesap (2025):**
1. Enerji: 600,31 EJ = 6,0031 × 10²⁰ J
2. Süre: 2025 = 365 gün × 86.400 s = 3,1536 × 10⁷ s
3. Ortalama güç: P = 6,0031 × 10²⁰ / 3,1536 × 10⁷ = **1,904 × 10¹³ W ≈ 19,0 TW**
4. log₁₀ P = 13,2796
5. **K = (13,2796 − 6) / 10 = 0,728 ≈ 0,73**

| Yıl | Birincil enerji (EJ) | Ortalama güç (TW) | K (Sagan ölçeği) |
|---|---|---|---|
| 1973 (Sagan) | n/a | ~10 | ~0.7 |
| 2024 | 592.18 | 18.73 (366 gün) | 0.727 |
| **2025** | **600.31** | **19.04** | **0.728** |

- **Tip I'e (10¹⁶ W) uzaklık:** Bugünkü güç Tip I'in **%0,19'u**. Tip I için **~525 kat** daha fazla enerji gerekiyor. Kardashev'in kendi 1964 Tip I eşiği (4 × 10¹² W) ise o yılki Dünya tüketimiydi; bugün bu eşiğin ~4,8 katındayız. Bu fark Sagan'ın ölçeğinin neden çıktığını açıklıyor.
- **Not:** "Birincil enerji arzı" dönüşüm kayıplarını içerir, geleneksel biyokütleyi içermez (OWID notu). Wikipedia'nın 2021 örneği (595,15 EJ → K = 0,73) ile tutarlı.
- **Slayt kaynak satırı:** *Hesap: Sagan ölçeği, K = (log₁₀P − 6)/10; veri: Energy Institute, Statistical Review of World Energy 2026 (2025 için 600 EJ)*

### 6f. Kardashev fotoğrafı ✔ indirildi
- **Dosya:** `C:\Users\User\Desktop\ha.sunum\sunum\assets\img\portre\nikolai-kardashev.jpg`, **858 × 1250 px** (uzun kenar 1250), 446 KB, JPEG
- **Commons sayfası:** https://commons.wikimedia.org/wiki/File:Nikolai_Kardashev_1980.jpg · Orijinal: https://upload.wikimedia.org/wikipedia/commons/b/bc/Nikolai_Kardashev_1980.jpg
- **Fotoğrafçı:** Woodruff T. Sullivan III · **Tarih ve yer:** Aralık 1980, Moskova · **Hak sahibi:** NRAO/AUI/NSF · **Kaynak:** NRAO/AUI Archives, Sullivan Collection, https://www.nrao.edu/archives/items/show/43312
- **Lisans:** **CC BY 4.0**. Koşul: NRAO kredisi görünür olmalı. Fotoğraftaki kişinin kişilik hakları ayrıca saklıdır; NRAO logosu kullanılmamalı.
- **Slayttaki kredi satırı (zorunlu):** *Fotoğraf: Woodruff T. Sullivan III, Moskova 1980. NRAO/AUI Archives, Sullivan Collection, CC BY 4.0*

---

## Özet: hangi seri tam, hangisi eksik

| # | Seri | Durum | Güven |
|---|---|---|---|
| 1 | OWID teknoloji benimseme (11 teknoloji + sosyal medya, akıllı telefon, tablet) | **Tam** (ham CSV). Eksik: siyah-beyaz TV (veri setinde yok), 2019 sonrası | Yüksek |
| 2 | GenAI Tracker: YZ, PC ve internet olay zamanı ekseni + 9 dalga | **Tam** (ham xlsx). Açıklanamayan: makaledeki %39,6 ile tracker'daki %45,5 farkı | Yüksek |
| 3 | Epoch eğitim hesaplaması (16 model) + büyüme oranı | **Tam**. Eksik: 2025-26 öncü modellerinin çoğunun FLOP değeri ("Unknown") | Orta (kestirim) / Yüksek (oran) |
| 4 | METR zaman ufku (GPT-2'den Claude Mythos Preview'a 26 model) + ikiye katlanma | **Tam (Nisan 2026'ya kadar)**. Eksik: Nisan 2026 sonrası modeller (METR sayfayı dondurdu) | Veri Yüksek / yorum Tartışmalı |
| 5 | IEA veri merkezi elektriği 2020-2030 (bölgesel) ve 2020-2035 (2026 güncellemesi) | **Tam**. Eksik: ara yıllar için küresel pay serisi; senaryo aralığı türetildi | Yüksek / Orta |
| 6 | Kardashev: biyografi, künye, eşikler, Sagan, K = 0,73, fotoğraf | **Tam**. Eksik: makalenin sayı numarası ve sayfa aralığı | Yüksek |
