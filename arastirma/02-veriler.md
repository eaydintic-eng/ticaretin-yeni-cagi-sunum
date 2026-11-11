# TİCARETİN YENİ ÇAĞI: Veri Doğrulama Dosyası

**Hazırlanma:** 11 Kasım 2026 · **Sunum:** 12 Kasım 2026, YENİAD · **Kapsam:** storyboard'daki rakamlar (22 madde) + koordinatörün ek talepleri (A–K)
**Yöntem:** Yalnızca WebSearch/WebFetch. Birincil kaynağa (kurumun kendi sayfası, rapor, şirket bülteni) ulaşılabildiğinde ona dayanıldı. Ulaşılamayınca (403/zaman aşımı) en az iki ikincil kaynakla çapraz kontrol yapıldı ve bu durum not edildi.
**Güven ölçeği:** **Yüksek** = birincil kaynak veya hakemli yayın · **Orta** = saygın ikincil kaynak / şirket beyanı / tahmin · **Tartışmalı** = yöntem eleştirisi var, temkinli kullanın
**Kapsam dışı:** Alıntıların (Hemingway, Ng, Huang, Drucker, Schwab, Kelly, Fei-Fei Li, Kay) doğrulaması bu dosyada yapılmadı.

---

## 0. SLAYT BAŞINA ÖNERİLEN ANA RAKAM

| Slayt | Rakam | Slayta yazılacak tek cümle | Kaynak satırı |
|---|---|---|---|
| 1 / kapanış (ops.) | ~23.000 tablet | Kayseri Kültepe'de, 4.000 yıl önceki Asurlu tüccarların yazışmalarından 23 bini aşkın kil tablet bulundu. | Kaynak: Kültepe kazıları; UNESCO Dünya Belleği (2015) |
| 3 | 75 yıl → 2 ay | Telefon 100 milyon kullanıcıya 75 yılda, internet 7 yılda, ChatGPT ise 2 ayda ulaştı. | Kaynak: UBS/Similarweb (2023); tarihsel derlemeler |
| 3 (alt satır) | 900 milyon/hafta | Bugün ChatGPT'yi her hafta 900 milyon kişi kullanıyor. | Kaynak: OpenAI, Şubat 2026 |
| 3 (alternatif) | 42 → 3 yıl | ABD hanelerinin yarısına ulaşma süresi: elektrik çağı 42 yıl, PC 20, internet 12, mobil 6, yapay zekâ ~3 yıl (tahmin). | Kaynak: Morgan Stanley, BOND "Trends – AI" (2025), s. 59 |
| 4 | 280 kat | GPT-3.5 düzeyinde bir yapay zekâyı kullanmanın maliyeti iki yılda 280 kat düştü. | Kaynak: Stanford AI Index 2025 |
| 6 | ~7 kat / +%31 | 2025 yılbaşı sezonunda ABD'de yapay zekâ sohbetlerinden mağaza sitelerine gelen trafik yaklaşık 7 katına çıktı ve bu ziyaretçiler %31 daha fazla satın aldı. | Kaynak: Adobe Analytics, Ocak 2026 |
| 6 (güncel) | %60 | Temmuz 2026'da yapay zekâdan gelen müşteri, diğer kanallardan gelenden %60 daha fazla alışveriş yapıyordu. | Kaynak: Adobe Analytics, Ağustos 2026 |
| 7 | 1 trilyon $ | 2030'da yalnızca ABD'de 1 trilyon dolarlık perakende satışı yapay zekâ ajanları yönetebilir. Dünya genelinde bu rakam 3-5 trilyon dolar. | Kaynak: McKinsey, Ekim 2025 (tahmin) |
| 7 | %90 · 15 trilyon $ | 2028'de B2B satın almaların %90'ına yapay zekâ ajanları aracılık edecek: 15 trilyon dolar. | Kaynak: Gartner, Ekim 2025 (tahmin) |
| 8 (Sonuç başına ödeme) | 0,99 $ | Intercom'un yapay zekâ ajanı Fin, yalnızca çözdüğü her konuşma için 0,99 dolar alıyor. | Kaynak: fin.ai fiyat sayfası, Kasım 2026 |
| 8 (Küçük ekip) | 146 kişi · 400 M$ | Lovable 146 çalışanla yıllık 400 milyon dolar gelire ulaştı. Bu, çalışan başına 2,7 milyon dolar demek. Walmart'ta bu rakam yaklaşık 0,3 milyon dolar. | Kaynak: TechCrunch, Mart 2026 |
| 9 | %12 · %25 · %40 | Yapay zekâ kullanan BCG danışmanları %12 daha çok iş bitirdi, %25 daha hızlı çalıştı ve %40 daha kaliteli sonuç verdi. | Kaynak: Harvard–BCG deneyi (Dell'Acqua vd., 2023) |
| 9 | %15 · %30+ | Çağrı merkezinde verimlilik ortalama %15 arttı, en az deneyimli çalışanlarda artış %30'u aştı. | Kaynak: Brynjolfsson, Li, Raymond, QJE 2025 |
| 10 | 15 kat | Şirketlerde çalışan yapay zekâ ajanlarının sayısı bir yılda 15 katına çıktı. | Kaynak: Microsoft Work Trend Index 2026 |
| 11 | +170 M · −92 M · %39 | 2030'a kadar 170 milyon iş doğacak, 92 milyon iş kaybolacak ve bugünkü becerilerin %39'u değişecek. | Kaynak: WEF Gelecekte İşler Raporu 2025 |
| 12 | %37 · %6 | Şirketlerin neredeyse hepsi yapay zekâ kullanıyor. Ancak kârında etkisini gören yalnızca %37, büyük kazanç elde eden ise %6. | Kaynak: McKinsey State of AI 2026 |
| 12 (ek) | %56 | CEO'ların %56'sı yapay zekâdan henüz ne gelir ne de maliyet kazancı gördüğünü söylüyor. | Kaynak: PwC 29. Küresel CEO Araştırması, Ocak 2026 |
| 13 | ~40 yıl | İlk elektrik santrali (1882) ile fabrikalardaki verim sıçraması (1920'ler) arasında yaklaşık 40 yıl var. Fark yaratan motor değil, fabrikanın baştan tasarlanması oldu. | Kaynak: Paul David, American Economic Review, 1990 |
| 14 (ops.) | ~725-750 milyar $ | Dört teknoloji devi 2026'da yapay zekâ altyapısına yaklaşık 725-750 milyar dolar harcıyor (2025'te ~410 milyar $). | Kaynak: Şirket açıklamaları, Ekim 2026 |
| 15 | %7,5 → %14 · AB %20 | Türkiye'de yapay zekâ kullanan şirketlerin oranı bir yılda %7,5'ten %14'e çıktı. AB ortalaması %20. | Kaynak: TÜİK 2026; Eurostat 2025 |
| 15 | %37,6 | Türkiye'de her 10 yetişkinden yaklaşık 4'ü üretken yapay zekâ kullanıyor (2025'te bu oran %19,2'ydi). | Kaynak: TÜİK, Yapay Zekâ İstatistikleri 2026 |
| 15 | %12,7 | Toptan ve perakende ticaret şirketlerinde yapay zekâ kullanım oranı %12,7. | Kaynak: TÜİK 2026 |
| 15 | 4,5 trilyon TL | 2025'te Türkiye'de e-ticaret 4,5 trilyon TL'ye ulaştı. Bu, toplam ticaretin %19,3'ü. | Kaynak: Ticaret Bakanlığı ETBİS 2025 |

---

## 1. 100 milyon kullanıcıya ulaşma süresi + ChatGPT'nin güncel kullanıcı sayısı

| Teknoloji | Süre | Not | Güven |
|---|---|---|---|
| Telefon | ~75 yıl | 1876'dan itibaren. Eski derlemelerden gelen bir rakam (Business Insider 2015 vb.); "kullanıcı" tanımı belirsiz | Orta |
| Cep telefonu | ~16 yıl | 1983'teki DynaTAC'tan sonra (Statista DE) | Orta |
| İnternet/Web | ~7 yıl | Statista DE ("World Wide Web 7 yıl") | Orta |
| Facebook | ~4,5 yıl | Şubat 2004'ten Ağustos 2008'deki 100 M aktif kullanıcıya kadar | Yüksek |
| Instagram | ~2,5 yıl | UBS notu (Reuters, Şubat 2023) | Orta-Yüksek |
| TikTok | ~9 ay | Küresel lansmandan itibaren (UBS/Sensor Tower, Reuters) | Orta |
| ChatGPT | ~2 ay | 30 Kasım 2022'den Ocak 2023'e: **tahmini 100 M aylık aktif kullanıcı**. UBS'nin Similarweb verisine dayanan tahmini; OpenAI resmî olarak doğrulamadı | Orta-Yüksek (yaygın kabul görüyor) |

- **Kaynaklar:** Reuters/UBS, "ChatGPT fastest-growing app in history", 2 Şubat 2023. https://news.yahoo.com/chatgpt-fastest-growing-app-history-142338104.html · Statista DE: https://de.statista.com/infografik/amp/7573/geschwindigkeit-mit-der-sich-technologien-verbreiten · Business Insider: https://www.businessinsider.in/It-took-75-years-for-the-telephone-to-reach-100-million-users-and-it-took-Candy-Crush-Saga-15-months/articleshow/48256736.cms
- **Uyarı:** Statista'nın İngilizce grafikleri 100 milyon değil **50 milyon** eşiğini kullanıyor (telefon 50 yıl, cep 12 yıl, internet 7 yıl). Telefon, cep telefonu ve internet sürelerini tek bir resmî kaynak birlikte vermiyor; her biri farklı tanım ve dönem verilerinden derlenmiş. Slaytta "yaklaşık" deyin. Threads'in "5 günde 100 milyon" rakamını kullanmayın, çünkü bu kayıt sayısı, aktif kullanıcı değil.
- **ChatGPT'nin güncel kullanıcı sayısı:**
  - **900 milyon haftalık aktif kullanıcı**, 50 milyon ücretli abone (OpenAI blog yazısı, 27 Şubat 2026). Ekim 2025'te 800 M, Şubat 2025'te 400 M idi. https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users · **Güven: Yüksek**
  - **31 Temmuz 2026:** OpenAI, modellerinin "1 milyardan fazla aktif kullanıcıya" ulaştığını ve 2 milyondan fazla işletmenin bunları kullandığını açıkladı. Ancak bu rakam ChatGPT, Codex ve ChatGPT Work'ün toplamı; **haftalık olduğu belirtilmiyor.** https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/07/31/openai-says-has-more-than-1-billion-active-users/ · **Güven: Orta** (tanım belirsiz)
- **Slayt ifadesi:** "Bugün ChatGPT'yi her hafta 900 milyon kişi kullanıyor. OpenAI, Temmuz 2026'da tüm ürünlerinde 1 milyar kullanıcıyı aştı." · *Kaynak: OpenAI (Şubat ve Temmuz 2026)*

## 2. Yapay zekâ çıkarım maliyetindeki düşüş

- **Rakam:** MMLU testinde %64,8 başarı gösteren, yani GPT-3.5 düzeyindeki bir modeli kullanmanın maliyeti, Kasım 2022'de **milyon token başına 20 $** iken Ekim 2024'te **0,07 $**'a indi: **yaklaşık 280 kat** düşüş (~23 ay). Aynı rapora göre donanım maliyeti yılda ~%30 düşüyor, enerji verimliliği yılda ~%40 artıyor.
- **Kaynak:** Stanford HAI, *AI Index Report 2025*, Nisan 2025. https://hai.stanford.edu/ai-index/2025-ai-index-report (özet: https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-costs-drop-280-fold-but-harmful-incidents-rise-56-percent-in-last-year-stanford-2025-ai-report-highlights-china-us-competition)
- **Daha yeni veri var mı?** *AI Index 2026* 13 Nisan 2026'da yayımlandı (https://hai.stanford.edu/ai-index/2026-ai-index-report). Bölüm özetlerinde **280 katın yerini alacak yeni bir çıkarım maliyeti çarpanı bulunamadı (BULUNAMADI).** İkincil bloglarda dolaşan "medyan fiyat 2,10 $'dan 0,85 $'a indi" gibi iddialar birincil kaynakla doğrulanamadı; kullanmayın. AI Index 2026'nın yeni ve kullanışlı rakamları: kuruluşların **%88**'i yapay zekâ kullanıyor; 2025'te küresel kurumsal yapay zekâ yatırımı **581,7 milyar $** (rekor); üretken yapay zekâ üç yılda **%53** nüfus yaygınlığına ulaştı.
- **Tamamlayıcı veri:** Epoch AI (Mart 2025) ölçümüne göre aynı performansın fiyatı göreve bağlı olarak **yılda 9 ile 900 kat** arasında, GPT-4 düzeyi için yılda yaklaşık **40 kat** düşüyor. https://epoch.ai/blog/llm-inference-price-trends
- **Dikkat edilecek nokta:** Token başına fiyat düşüyor ama toplam fatura düşmüyor, çünkü "düşünen" modeller çok daha fazla token harcıyor. McKinsey 2026 anketinde katılımcıların ~%20'si token maliyetlerinin kullanımlarını sınırladığını söylüyor.
- **Güven:** Yüksek (AI Index 2025)
- **Slayt ifadesi:** "Aynı zekâ iki yılda 280 kat ucuzladı." · *Kaynak: Stanford AI Index 2025*

## 3. Üretken yapay zekânın benimsenme hızı: PC ve internetle karşılaştırma

- **Orijinal çalışma:** Bick, Blandin, Deming, *The Rapid Adoption of Generative AI*, NBER WP 32966 / St. Louis Fed WP 2024-027 (Eylül 2024; son revizyon Ekim 2025). Ağustos 2024 anketine göre ABD'de 18-64 yaş arası yetişkinlerin **%39,4**'ü üretken yapay zekâ kullanmış. ChatGPT'den iki yıl sonra benimseme **%39,5**. Karşılaştırma için: internette iki yıl sonra **%20**, PC'de (IBM PC'den) üç yıl sonra **%20**. Fark büyük ölçüde evde kullanımdan geliyor; işte kullanım hızı PC'ye benziyor. https://www.nber.org/system/files/working_papers/w32966/w32966.pdf · https://news.harvard.edu/gazette/story/2024/10/generative-ai-embraced-faster-than-internet-pcs
- **Daha yeni veri (tercih edin):** St. Louis Fed **GenAI Adoption Tracker** (Bick, Blandin, Deming, McKittrick; 6 Ekim 2026). **Ağustos 2026:** ABD'de 18-64 yaşın **%60,8**'i üretken yapay zekâ kullanıyor; çalışanların **%40,5**'i işte kullanıyor. Tracker'ın kendi ifadesiyle: "Üretken yapay zekâ, işte benzer bir yaygınlığa (~%44) PC'lerin harcadığı sürenin **üçte birinde** ulaştı." https://www.genaiadoptiontracker.com/ · https://www.frbsf.org/research-and-insights/publications/system-research-st-louis-fed/2026/10/genai-adoption-tracker/
- **Güven:** Yüksek (ABD'yi temsil eden Real-Time Population Survey)
- **Slayt ifadesi:** "Yapay zekâ, PC'nin 9 yılda geldiği noktaya 3 yılda geldi." · *Kaynak: St. Louis Fed, GenAI Adoption Tracker (Ekim 2026)*

## 4. Adobe Analytics: üretken yapay zekâdan gelen ABD perakende trafiği

| Dönem | Trafik artışı | Dönüşüm (yapay zekâ ↔ diğer kanallar) | Kaynak |
|---|---|---|---|
| 2024 yılbaşı sezonu | +%1.300 (yıllık) | **%9 daha düşük** | Adobe, Mart 2025 |
| Şubat 2025 (Temmuz 2024'e göre) | +%1.200 | Fark %23'e kadar kapanıyor | https://blog.adobe.com/en/publish/2025/03/17/adobe-analytics-traffic-to-us-retail-websites-from-generative-ai-sources-jumps-1200-percent |
| **2025 yılbaşı sezonu (1 Kas–31 Ara)** | **+%693,4** (Kasım +%769, Aralık +%673) | **%31 daha yüksek**; Şükran Günü'nde +%54, Kara Cuma'da +%38 | Adobe, 7-12 Ocak 2026. https://news.adobe.com/news/2026/01/adobe-holiday-shopping-season |
| Prime Day 2026 (1. gün) | +%98,3 | +%50,7 | https://www.cmswire.com/digital-experience/adobe-ai-shopping/ |
| **Temmuz 2026** | +%62 (yıllık); Ekim 2024'ten bu yana +%1.219 | **%60 daha yüksek**; ziyaret başına gelir +%53; 11 ay üst üste diğer kanalları geride bıraktı | Adobe AI Traffic Trends, 19 Ağu 2026. https://www.digitalcommerce360.com/2026/08/19/adobe-ai-referral-traffic-data-july-2026/ |
| 2026 yılbaşı sezonu **tahmini** | +%130 | n/a | Adobe tahmini, 28-29 Eyl 2026: online harcama 275,1 milyar $ (+%6,7). https://digitalcommerce360.com/2026/09/29/adobe-projection-2026-online-holiday-sales-275-billion |

- **Ziyaret başına gelir (2025 yılbaşı sezonu):** Kaynaklar farklı ölçütler veriyor. Marketing Dive'a göre yapay zekâ trafiği diğer kanallardan **%32 daha fazla** gelir getiriyor; Adobe'ye göre yapay zekâ trafiğinin ziyaret başına geliri yıllık **%254** arttı. Slaytta yalnızca dönüşüm rakamını (%31) kullanın.
- **Önemli uyarı:** Adobe, yapay zekâ trafiğinin toplam trafikteki **payını açıklamıyor**. Yüzdeler küçük bir tabandan hesaplanıyor. "Yapay zekâ trafiği" tanımı, sohbet botundaki bir bağlantıya tıklayıp siteye gelmek.
- **Güven:** Orta-Yüksek (Adobe'nin 1 trilyondan fazla ziyaret üzerinde yaptığı kendi analizi; bağımsız denetim yok)
- **Slayt ifadesi:** "Yapay zekâya sorup gelen müşteri daha kararlı: %31 daha fazla satın alıyor." · *Kaynak: Adobe Analytics, 2025 yılbaşı sezonu*

## 5. Ajan ticareti: Kasım 2026 itibarıyla durum

| Girişim | Ne açıklandı | Kasım 2026 durumu | Güven |
|---|---|---|---|
| **OpenAI Instant Checkout + Agentic Commerce Protocol (ACP)** | 29 Eylül 2025: ChatGPT içinde satın alma, ilk aşamada Etsy; ACP Stripe ile birlikte geliştirildi ve açık kaynak yapıldı. https://techcrunch.com/2025/09/29/openai-takes-on-google-amazon-with-new-agentic-shopping-system | **Mart 2026'da geri çekildi.** OpenAI'ın açıklaması: ilk sürüm "hedeflediğimiz esnekliği sunmadı". ChatGPT artık ürün **keşfi ve karşılaştırması** için kullanılıyor; ödeme satıcının kendi sitesinde ya da uygulamasında yapılıyor. Forrester'a göre Şubat 2026 itibarıyla yalnızca ~30 Shopify satıcısı bu sisteme katılmıştı. ACP, keşif tarafında genişliyor. https://www.retailgazette.co.uk/blog/2026/03/openai-pivots-chatgpt-shopping-strategy-after-instant-checkout-underwhelms/ | Yüksek |
| **Walmart–OpenAI** | Ekim 2025: ~200 bin ürün Instant Checkout'ta | ChatGPT içindeki satın alma, Walmart.com'a yönlendirmeye göre **3 kat daha düşük dönüşüm** sağladı (Daniel Danker, WIRED, 18 Mart 2026). Walmart kendi asistanı **Sparky**'yi ChatGPT'ye (Mart 2026) ve Gemini'ye (Nisan 2026) taşıdı. https://ppc.land/walmarts-chatgpt-checkout-flopped-heres-what-comes-next/ | Orta-Yüksek |
| **Google AP2 → Universal Commerce Protocol (UCP)** | AP2 (ödeme yetkilendirme katmanı) Eylül 2025'te açıklandı. UCP 11 Ocak 2026'da (NRF) Shopify, Etsy, Wayfair, Target ve Walmart ile birlikte duyuruldu. https://developers.googleblog.com/en/under-the-hood-universal-commerce-protocol-ucp/ | 20 Mayıs 2026 (Google Marketing Live): AI Mode ve Gemini'de yerel ödeme ile mağazalar arası **Universal Cart** açıklandı (Nike, Sephora, Target, Walmart, Wayfair). https://blog.google/products-and-platforms/products/shopping/shopping-updates-google-marketing-live | Yüksek (duyuru) / Orta (gerçek yaygınlık) |
| **Visa Intelligent Commerce** | Nisan 2025'te başladı; Trusted Agent Protocol Ekim 2025'te geldi | **2 Temmuz 2026:** Avrupa'da 31 banka (Barclays, BBVA, HSBC UK, ING, Revolut vb.) üzerinden **canlı** ajan ödemeleri yapıldı. İşlem hacmi açıklanmadı. https://www.visa.co.uk/about-visa/newsroom/press-releases.3457328.html | Yüksek |
| **Mastercard Agent Pay** | 10 Eylül 2025: "Yılbaşı sezonuna kadar ABD'deki tüm kart sahipleri kullanabilecek, ardından küresel yayılım." https://www.mastercard.com/us/en/news-and-trends/press/2025/september/mastercard-unveils-new-tools-and-collaborations-to-power-smarter%2C-safer-agentic-commerce.html | 2026'da Hong Kong'da ilk canlı işlem ve Haziran 2026'da makineler arası ödeme için "Agent Pay for Machines" duyuruldu (ikincil kaynaklar). ABD geneline yayılımın tamamlandığı bağımsız olarak doğrulanamadı. | Orta |
| **Amazon "Buy for Me" / Rufus → Alexa for Shopping** | Buy for Me Nisan 2025'te başladı; Kasım 2025'te 500 binden fazla ürün kapsıyordu. Rufus: 2025'te 250 M kullanıcı; Rufus kullanan müşterinin satın alma ihtimali %60 daha yüksek; "10 milyar $'ı aşan ek yıllık satış yolunda" (Jassy, 30 Ekim 2025) | 13 Mayıs 2026: Rufus, **Alexa for Shopping** adıyla yeniden markalandı. 29 Ekim 2026 (3. çeyrek): son 12 ayda **400 M+** kullanıcı, etkileşim **+%570**, ABD'de kullanıcılar sipariş başına **%50 daha fazla** harcıyor (şirket beyanı). https://ppc.land/us-alexa-for-shopping-users-spend-50-more-per-order-amazon-says/ · https://fortune.com/2025/11/02/amazon-rufus-ai-shopping-assistant-chatbot-10-billion-sales-monetization/ | Orta (şirket beyanı) |
| **Shopify** | UCP'nin ortak geliştiricisi; "agentic plan" Mart 2026'da açıldı (Shopify'da mağazası olmayan markalar da katalogla yapay zekâ kanallarına çıkabiliyor) | **3. çeyrek 2026 (3 Kasım):** yapay zekâ kanallarından gelen siparişler yıllık **3,3 kat**, trafik **2,6 kat** arttı (1. çeyrekte siparişler ~13 kat). İlk kez "dolaylı satın alma" görüldü: kişisel ajan alışverişi müşteri adına tamamlıyor. https://ppc.land/shopify-revenue-gains-32-to-3-7bn-as-ai-referred-orders-rise-3-3x/ | Orta-Yüksek |

**Türkiye'de karşılığı:**
- **Trendyol:** Grup CEO'su Erdem İnan (Slush'D İstanbul, Ekim 2026): "Gelecekte tüm alışverişlerin yapay zekâ ajanları tarafından baştan sona tamamlanmasını beklemiyoruz." Uçtan uca ajanla alışverişin, ürün tercihinin önceden belli olduğu kategorilerde yaygınlaşacağını öngörüyor. Satıcılar için dijital asistan **"Ortak"**; **Trendyol LLM** ile 10 dilde yurt dışı satış; kodun ~%20'si otonom yapay zekâ ile yazılıyor; teknoloji ekiplerinde asistan kullanımı %90; platforma günde 17 milyon kullanıcı geliyor. https://www.paradergi.com.tr/sektorler/2026/10/16/trendyol-yapay-zeka-ile-e-ticaretin-gelecegini-sekillendiriyor · *Güven: Orta (şirket beyanı)*
- **Hepsiburada:** "Akıllı Alışveriş Asistanı" yazarak veya sesle ürün buluyor (TEKNOFEST, büyük olasılıkla Eylül 2025); yorum özetleri ChatGPT ile yapılıyor; tarif seçince malzemeleri tek tıkla sepete ekliyor. **Ajanın satın alma yaptığına dair bir kanıt bulunamadı.** https://www.haberturk.com/hepsiburada-teknofest-istanbulda-3821887-teknoloji
- **iyzico:** Satıcılar için yapay zekâ alışveriş asistanı **"kolai"** var (iyzico E-ticaret Raporu 2025). **Ajanın başlattığı ödeme ürünü bulunamadı.** https://www.iyzico.com/assets/uploads/pdf/iyzico_ecommerce_report_2025.pdf
- **Genel durum:** Ekim 2026 itibarıyla ChatGPT, Google, Meta ve Amazon'un ajanla alışveriş özelliklerinin Türkiye'de resmî olarak kullanıma açılmadığı bildiriliyor (ikincil kaynak; *Orta*).
- **Slayt ifadesi:** "İlk ajan alışverişi denemeleri tökezledi; ödeme sistemleri (Visa, Mastercard, Google) ise hazırlığını bitirdi." · *Kaynak: OpenAI, Walmart, Visa (2026)*

## 6. McKinsey ajan ticareti projeksiyonu

- **Rakam:** 2030'a kadar **yalnızca ABD B2C perakendesinde 1 trilyon $'a kadar** ajanların yönettiği gelir. Küresel olarak **3-5 trilyon $**. Tahminler yalnızca malları kapsıyor; hizmetler ve B2B **dahil değil**.
- **Kaynak:** McKinsey, *The agentic commerce opportunity: How AI agents are ushering in a new era for consumers and merchants*, Ekim 2025. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants · Haber: https://www.digitalcommerce360.com/2025/10/20/mckinsey-forecast-5-trillion-agentic-commerce-sales-2030/
- **Daha yeni veri:** ICSC ile McKinsey'nin Mayıs 2026 raporu "ABD'de 2030'a kadar 1 trilyon $" rakamını yineliyor. Aynı rapora göre tüketicilerin **%68**'i son üç ayda alışverişte en az bir yapay zekâ aracı kullanmış. https://www.retaildive.com/news/agentic-commerce-us-one-trillion-2030/818936/
- **Güven:** Orta. Bu bir senaryo tahmini; "yönetilen gelir" ajanın sürece dahil olduğu satışı ifade ediyor, ek bir pazar değil.

## 7. Gartner tahminleri

- **B2B (J maddesine bakınız):** "2028'e kadar B2B satın almaların %90'ına yapay zekâ ajanları aracılık edecek ve 15 trilyon $'ı aşan B2B harcaması ajan borsaları üzerinden geçecek." *Top Strategic Predictions for 2026 and Beyond*, Gartner IT Symposium/Xpo, 21 Ekim 2025. https://siliconangle.com/2025/10/21/gartner-predicts-ai-will-upend-job-markets-trigger-lawsuits-rewire-global-commerce-2027/ · https://www.gartner.com/en/articles/strategic-predictions-for-2026 · *Güven: Orta (analist tahmini)*
- **25 Haziran 2025 tarihli basın bülteni** (Reuters üzerinden):
  - **2027 sonuna kadar** ajan projelerinin **%40'tan fazlası iptal edilecek** (gerekçeler: maliyet, belirsiz iş değeri, zayıf risk kontrolü).
  - **2028'de** kurumsal yazılımların **%33**'ü ajan içerecek (2024'te %1'in altındaydı).
  - **2028'de** günlük iş kararlarının **%15**'i otonom verilecek (2024'te %0).
  - Binlerce "ajan" satıcısından yalnızca **~130**'u gerçek ajan üretiyor ("agent washing").
  - https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says
- **Ek (26 Ağustos 2025):** 2026 sonunda kurumsal uygulamaların **%40**'ında göreve özel ajan olacak (2025'te %5'in altındaydı). https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025
- **Güven:** Orta (tahmin). %40 iptal tahmini Ocak 2025'te 3.412 katılımcıyla yapılan bir webinar anketine dayanıyor.

## 8. BCG–Harvard "jagged frontier" (eğri büğrü sınır) deneyi

- **Rakam:** Yapay zekânın yetenek sınırı **içindeki** görevlerde GPT-4 kullanan danışmanlar **%12,2 daha fazla görev** tamamladı, işi **%25,1 daha hızlı** bitirdi ve **%40'tan fazla daha kaliteli** sonuç üretti. Sınırın **dışındaki** görevde ise doğru sonuca ulaşma ihtimalleri **19 puan düştü**.
- **Bağlam:** 758 BCG danışmanı (şirketteki bireysel danışmanların ~%7'si), önceden kaydı yapılmış randomize alan deneyi, 18 ürün ve yaratıcılık görevi, 2023.
- **Kaynak:** Dell'Acqua, McFowland, Mollick vd., *Navigating the Jagged Technological Frontier*, HBS Working Paper 24-013, Eylül 2023 (SSRN 4573321). Dergi yayını *Organization Science* 37(2): 403-423 (ikincil kaynaklardan aktarıldı). https://www.library.hbs.edu/working-knowledge/humans-vs-machines-untangling-the-tasks-ai-can-and-cant-handle
- **Daha yeni veri:** Yok; rakamlar değişmedi.
- **Güven:** Yüksek. Sınırlılıklar: danışmanlık görevleriyle sınırlı, kalite puanlaması değerlendirici yargısına dayanıyor.
- **Slayt ifadesi:** "%12 daha çok iş, %25 daha hızlı, %40 daha kaliteli. Ama yapay zekânın bilmediği işte hata oranı artıyor." · *Kaynak: Harvard–BCG, 2023*

## 9. Brynjolfsson–Li–Raymond, "Generative AI at Work"

- **Orijinal (NBER WP 31161, Nisan 2023):** 5.179 müşteri hizmetleri temsilcisi; saatte çözülen talep sayısı ortalama **%14** arttı, acemi ve düşük becerili çalışanlarda **%34**.
- **Hakemli ve daha yeni sürüm (tercih edin):** *Quarterly Journal of Economics* 140(2): 889-942, **2025**. 5.172 temsilci; ortalama artış **%15**; düşük becerili çalışanlarda **~%30**, en düşük beceri dilimindeki çalışanlarda **%36**. En deneyimli çalışanlarda hız biraz arttı, kalite biraz düştü. Müşteriler daha kibar davrandı ve daha az "yöneticiyi isterim" dedi. https://econpapers.repec.org/RePEc:oup:qjecon:v:140:y:2025:i:2:p:889-942. · https://arxiv.org/html/2304.11771v2
- **Fark:** %14 / %34 rakamları yanlış değil, ancak eski çalışma kâğıdından geliyor. Güncel ve hakemli rakamlar %15 / ~%30-36.
- **Güven:** Yüksek
- **Slayt ifadesi:** "Çağrı merkezinde verim %15 arttı. En büyük kazanç, işe yeni başlayanlarda (%30'un üzeri)." · *Kaynak: Brynjolfsson, Li & Raymond, QJE 2025*

## 10. Microsoft Work Trend Index: "Frontier Firm"

- **2025 ("The Year the Frontier Firm Is Born", 23 Nisan 2025):** 31 ülkede 31.000 bilgi çalışanı, anket tarihi 6 Şubat–24 Mart 2025.
  - Yöneticilerin **%82**'si bu yılı strateji ve operasyonları yeniden düşünmek için kritik bir yıl olarak görüyor.
  - **%81**'i 12-18 ay içinde ajanların yapay zekâ stratejilerine orta veya yüksek düzeyde entegre olmasını bekliyor.
  - Frontier Firm yöneticilerinin **%71**'i şirketinin "geliştiğini" söylüyor; küresel çalışanlarda bu oran **%39**.
  - Frontier Firm yöneticilerinin **%55**'i daha fazla iş alabileceğini söylüyor; küresel oran **%25**.
  - Yöneticilerin **%53**'ü verimliliğin artması gerektiğini düşünüyor; çalışanların **%80**'i işi için yeterli zamanı ya da enerjisi olmadığını söylüyor.
  - https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born · *Güven: Yüksek*
- **2026 sürümü (5 Mayıs 2026, "Agents, human agency, and the opportunity for every organization"):** 10 ülkede yapay zekâ kullanan 20.000 bilgi çalışanı + Microsoft 365 verileri.
  - Microsoft 365'teki aktif ajan sayısı yıllık **15 kat** arttı (büyük şirketlerde 18 kat). Bu, anket değil telemetri verisi.
  - Yapay zekâ kullananların **%58**'i bir yıl önce üretemeyeceği işler üretiyor.
  - Yapay zekâ etkisinin **%67**'si organizasyonel faktörlerden (kültür, yönetici desteği), **%32**'si bireysel faktörlerden geliyor.
  - Kullanıcıların %19'u "Frontier" bölgede.
  - https://microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization · *Güven: Yüksek (rakamlar çalışanların kendi beyanı)*
- **Slayt ifadesi:** "Bir yılda şirketlerde çalışan yapay zekâ ajanı sayısı 15 katına çıktı. Farkı yaratan kişiler değil, kurum." · *Kaynak: Microsoft Work Trend Index 2026*

## 11. WEF Gelecekte İşler 2025

- **Rakam (2025-2030):** **170 M** yeni iş, **92 M** kaybolan iş, net **+78 M**. Mevcut işlerin %22'si dönüşüme uğrayacak. Çalışanların mevcut becerilerinin **%39**'u değişecek ya da eskiyecek (2023'te %44, 2020'de %57 idi). İş gücünün %59'unun yeniden eğitime ihtiyacı olacak.
- **Kaynak:** World Economic Forum, *Future of Jobs Report 2025*, 8 Ocak 2025. 55 ekonomide 14 milyondan fazla çalışanı temsil eden 1.000'i aşkın işverenle yapılan anket. https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/ · Basın bülteni: https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/
- **Daha yeni veri:** Rapor iki yılda bir yayımlanıyor; bir sonraki sürüm 2027'de. **2026 güncellemesi yok.**
- **Güven:** Yüksek (WEF raporu). Not: rakamlar işveren beklentisi, ölçülmüş sonuç değil. %39 oranı birden fazla kaynakta doğrulandı, ancak WEF basın sayfası 403 hatası verdi.
- **Slayt ifadesi:** "2030'a kadar 170 milyon iş doğacak, 92 milyon iş kaybolacak. Becerilerimizin %39'u değişecek." · *Kaynak: WEF Gelecekte İşler 2025*

## 12. MIT NANDA, "The GenAI Divide: State of AI in Business 2025"

- **Rakam:** Kurumsal üretken yapay zekâya 30-40 milyar $ yatırılmasına rağmen kurumların **%95**'i ölçülebilir bir kâr/zarar etkisi görmüyor. Pilotların yalnızca ~%5'i hızlı gelir artışı sağlıyor. Uzman bir satıcıdan alınan çözümler ~%67 oranında başarılı olurken şirket içinde geliştirilenler bunun ~üçte biri oranında başarılı. Bütçenin yarısından fazlası satış ve pazarlamaya gidiyor ama en yüksek getiri arka ofiste.
- **Yöntem:** 300'ü aşkın kamuya açık uygulamanın incelenmesi, 52 kuruluşla görüşme, 153 üst yöneticiyle anket (Fortune bunu "~150 görüşme, 350 çalışan" olarak aktardı). Yazarlar: A. Challapally vd. Temmuz 2025'te hazırlandı, Ağustos 2025'te gündeme geldi. https://finance.yahoo.com/news/mit-report-95-generative-ai-105412686.html
- **Yöntem eleştirileri:**
  1. Örneklem küçük ve rastgele değil (52 kuruluş, konferans katılımcıları).
  2. "Başarı" dar tanımlanmış: üretime geçmeyen her pilot başarısız sayılıyor, oysa öğrenme deneyleri de bunların içinde. https://arnon.dk/mits-95-ai-failure-rate-is-wrong/
  3. Ham veri ve güven aralıkları paylaşılmadı (Wharton'dan Kevin Werbach).
  4. Raporun ajan çözümü önerisi yazarların kendi NANDA çerçevesini öne çıkarıyor.
  5. Wing VC (Ocak 2026), raporun "MIT çalışması" diye anılmasını sorunlu buluyor ve MIT ile bağının zayıf olduğunu söylüyor. https://www.wing.vc/content/the-state-of-ai-in-the-enterprise
- **Daha yeni veri:** MIT NANDA'nın 2026 sürümü **bulunamadı**. Aynı mesajı daha sağlam verilerle veren kaynaklar: McKinsey 2026 (EBIT etkisi gören %37, yüksek performanslı ~%6) ve PwC CEO 2026 (%56 hiçbir kazanç görmedi, bkz. madde 16 ve E).
- **Güven:** **Tartışmalı**
- **Öneri:** Slaytta asıl rakam McKinsey veya PwC olsun. %95'i kullanacaksanız şöyle yazın: "Bir MIT araştırmasına göre pilotların %95'i kâra yansımadı (yöntemi tartışmalı)."

## 13. McKinsey "The State of AI"

- **Kasım 2025 sürümü ("Agents, innovation, and transformation"):** 105 ülkeden 1.993 katılımcı, anket Haziran–Temmuz 2025.
  - Kuruluşların **%88**'i en az bir işlevde yapay zekâ kullanıyor (önceki yıl %78).
  - ~**üçte biri** yapay zekâyı şirket geneline yaygınlaştırıyor.
  - **%62**'si ajanlarla en az deneme yapıyor, **%23**'ü ajanları bir yerde ölçeklendiriyor (tek bir işlevde bu oran ≤%10).
  - **%39**'u herhangi bir EBIT etkisi bildiriyor.
  - Yüksek performanslılar ≥%5 EBIT'i yapay zekâya bağlayan grup ve oranları **~%6**. Bu şirketlerin iş akışlarını kökten yeniden tasarlama ihtimali **~3 kat** daha yüksek.
  - https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-state-of-ai-2025
- **Ağustos 2026 sürümü ("The state of AI in 2026: On the road to ROI", 10. sürüm):** 97 ülkeden 1.719 katılımcı, anket 4 Mayıs–8 Haziran 2026.
  - Kullanım: "10 şirketten neredeyse 9'u" (ikincil kaynaklarda %88).
  - Yapay zekânın şirket genelinde ölçeklendiğini söyleyenler **%44** (önceki yıl %38).
  - EBIT etkisi gören **%37**; geçen yılla aynı düzeyde.
  - Yüksek performanslılar **~%6**; değişmedi.
  - Büyük şirketlerde (>1 milyar $ gelir) ajan ölçeklendirme **%27'den %40'a** çıktı.
  - Katılımcıların **%80**'i kişisel verimliliğinin arttığını söylüyor.
  - ~%20'si token ve işletme maliyetlerinin kullanımı kısıtladığını belirtiyor; %60'ı yatırımı artıracak.
  - Kurumsal istihdamda düşüş bekleyenler %39 (2025'te %32).
  - https://www.mckinsey.com/the-state-of-ai · PDF: https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/the-state-of-ai-in-2026-on-the-road-to-roi.pdf · https://www.fm-magazine.com/news/2026/sep/companies-financial-value-from-ai-holds-firm-in-2026/
- **Güven:** Yüksek (McKinsey sayfası zaman aşımına uğradı; rakamlar McKinsey'in bülteni ve PDF künyesiyle eşleşen 3 ikincil kaynaktan doğrulandı)
- **Slayt ifadesi:** "Neredeyse herkes kullanıyor, kârında görebilen ise yalnızca üçte biri. Büyük kazananlar %6." · *Kaynak: McKinsey, State of AI 2026*

## 14. Gartner Hype Cycle (Abartı Döngüsü)

- **2025 (Hype Cycle for AI, basın bülteni 5 Ağustos 2025):** **Yapay zekâ ajanları** ve **yapay zekâya hazır veri** "Abartılı Beklentiler Zirvesi"nde; ikisi de en hızlı ilerleyen teknolojiler. **Üretken yapay zekâ "Hayal Kırıklığı Çukuru"na girdi.** 2024'te üretken yapay zekâ projelerine ortalama 1,9 M $ harcanmasına rağmen yapay zekâ liderlerinin %30'dan azı CEO'larının getiriden memnun olduğunu söylüyor. https://www.gartner.com/en/newsroom/press-releases/2025-08-05-gartner-hype-cycle-identifies-top-ai-innovations-in-2025 · *Güven: Yüksek / Orta* (çukur ifadesi ikincil kaynaklardan doğrulandı; Gartner sayfası 403 verdi)
- **2026 sürümleri:**
  - *Hype Cycle for Agentic AI* (2 Nisan 2026): ajanlar zirvede. Bir Gartner anketine göre kuruluşların ~%17'si ajan kullanıyor, %42'si 12 ay içinde kullanmayı planlıyor (ikincil kaynak). https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai
  - *Hype Cycle for GenAI 2026* (Mayıs 2026): 30 teknolojiden **hiçbiri** "Verimlilik Platosu"na ulaşmadı. Kodlama ve içerik araçları gibi üretken yapay zekâ uygulamaları "Aydınlanma Yokuşu"ndaki tek kalem. Projelerin en az yarısı bütçeyi aşacak. https://www.theregister.com/ai-ml/2026/05/28/most-generative-ai-and-custom-model-projects-will-be-a-bust-gartner/5247633
  - *Hype Cycle for AI 2026* (28 Ağustos 2026): ikincil kaynaklara göre üretken yapay zekâ çukurun dibinde, ajanlar zirveyi geçip inişe başlamış. Gartner'ın 1 Ekim 2026 tarihli yorumu: yılın sorusu, "yapay zekânın ne yaptığının ve neye mal olduğunun hesabını verebilmek". **Güven: Orta** (Gartner'ın kendi grafiğine ulaşılamadı)
- **Slayt ifadesi:** "Üretken yapay zekâ 'hayal kırıklığı çukurunda', ajanlar ise abartının zirvesinde. Bu, teknolojinin her büyük dalgada izlediği yol." · *Kaynak: Gartner Hype Cycle 2025-2026*

## 15. Paul David, "The Dynamo and the Computer" (1990)

Ayrıntılar için H maddesine bakın.
- **Künye:** Paul A. David, "The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox", *American Economic Review* 80(2), Papers & Proceedings, Mayıs 1990, s. 355-361.
- **Özü:** Ampul 1879'da, ilk merkezî santraller 1881-82'de geldi. 1899'da elektrik motorları ABD fabrikalarındaki mekanik güç kaynağının **%5'inden azını** oluşturuyordu ve bu oran ~1919-1920'de **yaklaşık yarıya** ulaştı. İmalatta toplam faktör verimliliği (TFP) artışı 1919-29'da, 1909-19'a göre ~**5 puan** hızlandı ve bu hızlanmanın ~yarısı elektrik motoru kapasitesiyle ilişkili. 1920'lerde ABD imalat verimliliği yılda %5'in üzerinde büyüdü.
- **Mekanizma:** Önce buhar makinesi sökülüp yerine tek büyük motor kondu ("grup tahrik", aynı mil ve kayışlar). Bu adım verimi neredeyse hiç artırmadı. Kazanç, **her makineye ayrı motor** ("tekli tahrik") ile geldi. Böylece ağır tavan milleri kalktı, tek katlı ve aydınlık fabrikalar mümkün oldu, iş akışı yeniden düzenlendi.
- **Güven:** Yüksek (klasik makale). Yıllara göre yüzdeler David ve Devine (1983) kaynaklıdır.
- **Storyboard düzeltmesi:** "~30 yıl sonra" yerine **"yaklaşık 40 yıl"** (1880'ler → 1920'ler) yazın. Yalnızca fabrikada elektrik motorunun yayılmasından sayılırsa "20-30 yıl" da savunulabilir.

## 16. Türkiye

### TÜİK, Yapay Zekâ İstatistikleri (D maddesine de bakın)
| Gösterge | 2025 | 2026 |
|---|---|---|
| Yapay zekâ kullanan girişim (10+ çalışan) | **%7,5** (2021: %2,7) | **%14,0** |
| 10-49 çalışan | %6,6 (ikincil kaynak; bir başka kaynakta %8,4) | **%12,8** |
| 50-249 çalışan | %9,6 (ikincil kaynak; bir başka kaynakta %10,4) | **%17,0** |
| 250+ çalışan | %24,1 (ikincil kaynak; bir başka kaynakta %18,2) | **%37,1** |
| Toptan ve perakende ticaret | n/a | **%12,7** |
| Bireylerde üretken yapay zekâ kullanımı (16-74 yaş) | **%19,2** | **%37,6** |

- 2025'in büyüklüğe göre kırılımı için kaynaklar çelişiyor; bu nedenle **2026 kırılımını** kullanın.
- **Bültenler:** "Yapay Zekâ İstatistikleri, 2025" (ilk bülten, 1 Ekim 2025) ve "…2026" (2 Ekim 2026). Bir sonraki bülten Ekim 2027'de.

### Eurostat (AB-27, 10+ çalışanlı işletmeler)
- **2025:** **%20,0** (19,95); 2024'te %13,5. Büyük işletmelerde **%55,0**. Küçük işletmelerde ~%17, orta ölçeklilerde ~%30 (bu iki kırılım ikincil kaynaktan). Danimarka %42, Finlandiya %37,8, İsveç %35. En düşükler: Romanya %5,2, Polonya %8,4, Bulgaristan %8,5. Yayın: 11 Aralık 2025. https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2
- **AB'nin 2026 verisi henüz yayımlanmadı** (Aralık 2026'da bekleniyor).
- **Doğru karşılaştırma:** Aynı yıl için **2025: Türkiye %7,5, AB %20**. Türkiye'nin 2026'daki %14'ü AB'nin 2025'teki %20'siyle karşılaştırılırsa, bunun farklı yıllar olduğunu belirtin. Büyük şirketlerde Türkiye 2026'da %37,1, AB 2025'te %55.
- **Güven:** Yüksek

### E-ticaret (Ticaret Bakanlığı ETBİS, "Türkiye'de E-Ticaretin Görünümü 2025", 12 Mayıs 2026)
- **4,5 trilyon TL** (+%52,2) ≈ **115,4 milyar $** (+%28,9).
- **5,94 milyar** işlem.
- Toplam ticaretteki payı **%19,3** (2024'te %19,1); GSYH'ye oranı **%6,9**.
- Perakende e-ticaret 2,46 trilyon TL (+%51,8).
- Hızlı ticaret 388,7 milyar TL.
- 634.611 aktif e-ticaret işletmesi.
- https://www.alomaliye.com/2026/05/12/turkiyede-e-ticaretin-gorunumu-raporu-2025-yayimlandi/ · https://www.dunya.com/ekonomik-veriler/e-ticarette-dev-buyume-hacim-45-trilyon-lirayi-gecti-haberi-840243
- 2026'nın ilk yarısına ait resmî ETBİS rakamı **BULUNAMADI**.
- **Güven:** Yüksek

### Ulusal Yapay Zekâ Stratejisi
- **2021-2025 stratejisinin 2025 hedefleri:**
  - Yapay zekânın GSYH'ye katkısını **%5**'e çıkarmak.
  - Bu alandaki istihdamı **50 bine** çıkarmak.
  - Uluslararası endekslerde **ilk 20**'ye girmek.
  - https://bilgem.tubitak.gov.tr/wp-content/uploads/sites/8/TR-UlusalYZStratejisi2021-2025.pdf
  - Hedeflerin ne kadar gerçekleştiğine dair resmî bir değerlendirme **bulunamadı**. Bir haberde Türkiye'nin küresel yapay zekâ endeksinde 2021'de 44., 2024'te 34. olduğu belirtiliyor (ilk 20 hedefine ulaşılmamış).
- **2024-2025 Eylem Planı:** 24 Temmuz 2024'te yürürlüğe girdi, 71 eylem içeriyor.
- **YENİ: Türkiye Yapay Zekâ Eylem Planı 2026-2030** (Cumhurbaşkanlığı Genelgesi 2026/9, Resmî Gazete 18 Ağustos 2026). 4 eksen ("Fark Et, İstifade Et, Üret, Yönet") ve 16 eylem.
  - Kamu ve özel kaynaklarla **1 trilyon TL'yi aşan** ekonomik değer.
  - En az **10 milyar $** altyapı yatırımı (ağırlıklı özel sektör).
  - 2030'a kadar **1 GW** yapay zekâ ve veri merkezi kapasitesi.
  - 2027 sonuna kadar 10 bin ileri düzey uzman ve 100 bin uygulama profesyoneli.
  - İki yılda 5 milyon kişiye yapay zekâ okuryazarlığı.
  - İlk 12 ayda en az 1.000 KOBİ'ye yapay zekâ kuponu.
  - https://webrazzi.com/2026/08/18/turkiye-nin-2026-2030-yapay-zek-eylem-plani-yururluge-girdi/
  - *Güven: Yüksek*

### Türkiye'ye özel anketler
- **PwC 29. Küresel CEO Araştırması, Türkiye sonuçları:** 84 Türk CEO; hem maliyetin düştüğünü hem gelirin arttığını söyleyenler **%21** (küreselde %12); kurumsal ölçekte yapay zekâ erişimi olanlar %13; net bir yol haritası olanlar %34. PwC Türkiye'den Cenk Ulu: "Algı ile operasyonel gerçeklik arasında hâlâ mesafe var." Ayrıntılar E maddesinde.
- **AWS ve Strand Partners, "2026'da Türkiye'nin Yapay Zekâ Potansiyelini Ortaya Çıkarmak"** (24 Eylül 2026): işletmelerde yapay zekâ kullanımı bir yılda %37'den **%51**'e çıktı; ileri düzeydekiler %24; yöneticilerin %66'sı yapay zekâyı öncelik olarak görüyor. https://webrazzi.com/2026/09/24/turkiye-deki-isletmelerin-yapay-zeka-kullanimi-son-bir-yilda-yuzde-51-e-yukseldi/ · *Güven: Orta* (anket yöntemi açıklanmamış; tanımı TÜİK'ten çok daha geniş, **TÜİK'in %14'üyle aynı slaytta karıştırmayın**)
- **KPMG, "Perakende Sektöründe Yapay Zekâ"** (Temmuz 2026, küresel): tüketici ve perakende CEO'larının %64'ü yapay zekâyı en önemli yatırım önceliği olarak görüyor; %73'ü 12 ay içinde bütçesinin %10-20'sini yapay zekâya ayırmayı planlıyor. https://kpmg.com/tr/tr/insights/2026/07/perakende-sektorunde-yapay-zeka.html · *Güven: Orta*
- **Deloitte Türkiye 2026 / TÜSİAD 2026:** Türkiye'ye özel bir yapay zekâ anket rakamı **BULUNAMADI**. Yalnızca TÜSİAD–Bain üretken yapay zekâ raporu (Temmuz 2025) var.

## 17. Sonuç başına fiyatlandırma

- **Intercom Fin:** **Sonuç başına 0,99 $.** Sonuç, çözüm ya da insan temsilciye eksiksiz devir anlamına geliyor. Konuşma başına bir kez ücret alınıyor; sonuçsuz konuşmalar ücretsiz. Satış adayı nitelendirme 9,99 $. Başka bir yardım masası yazılımıyla kullanıldığında aylık 50 sonuç minimumu var. https://fin.ai/pricing (Kasım 2026 itibarıyla geçerli) · *Güven: Yüksek*
- **Salesforce Agentforce:** Eylül 2024'te **konuşma başına 2 $**. Mayıs 2025'te **Flex Credits** geldi: 100 bin kredi 500 $, standart eylem 20 kredi, yani **eylem başına ~0,10 $**. Bunlara ek olarak kullanıcı başına lisans seçenekleri var. Eylül 2026 itibarıyla konuşma başına model yalnızca mevcut müşterilere sunuluyor (ikincil kaynak). https://www.salesforce.com/de/blog/flex-credits/ · *Güven: Orta-Yüksek*
- **Zendesk:** Ağustos 2024'te sektördeki ilk "sonuç bazlı fiyatlandırma"yı getirdi: otomatik çözüm başına, taahhütlü hacimde ~1,50 $, kullandıkça öde modelinde ~2 $ (ikincil kaynak). Relate 2026'da yalnızca doğrulanmış çözümlere ücret alınacak şekilde genişletildi. https://www.zendesk.com/sg/newsroom/articles/zendesk-outcome-based-pricing/ · *Güven: Orta*
- **Slayt ifadesi:** "Yazılım artık koltuk değil sonuç satıyor: çözülen her müşteri sorusu 0,99 $." · *Kaynak: Intercom Fin*

## 18. Küçük ekip, büyük gelir

| Şirket | Gelir | Çalışan | Çalışan başına | Kaynak / Güven |
|---|---|---|---|---|
| **Lovable** (İsveç) | **400 M$ yıllık tekrarlayan gelir (ARR), Şubat 2026** (Temmuz 2025'te 100 M$) | **146** | **~2,7 M$** | TechCrunch, 11 Mart 2026 (şirket doğruladı). https://techcrunch.com/2026/03/11/lovable-says-it-added-100m-in-revenue-last-month-alone-with-just-146-employees/ · Yüksek. Haziran 2026'da 500 M$ iddiası var (doğrulanmadı). |
| **Cursor (Anysphere)** | 1 Mrd $ ARR (Kasım 2025) → **2 Mrd $ (Mart 2026)** → ~4 Mrd $ (Haziran 2026, kulis bilgisi) | ~300-400 (tahmin) | ~5-10 M$ | Bloomberg ve TechCrunch (2 Mrd $); https://dealroom.co/news/134107-cursor-tops-4b-annualized-revenue/ · Orta. **SpaceX, 16 Haziran 2026'da Cursor'u 60 Mrd $'a hisseyle satın alma anlaşması imzaladı.** https://www.techzine.eu/news/devops/142197/spacex-acquires-cursor-for-60-billion/ |
| **Midjourney** | ~500 M$ (2025, **üçüncü taraf tahmini**) | ~100-160 (tahmin) | ~3-5 M$ | Sacra/Latka; dış yatırım almadı. https://sacra.com/c/midjourney/ · Orta-Düşük |
| Klarna (karşılaştırma) | n/a | n/a | **1,24 M$** (4. çeyrek 2025; 2022'den bu yana 3,6 kat) | Şirket bülteni · Orta |
| Walmart (karşılaştırma) | ~681 Mrd $ (2025 mali yılı) | ~2,1 M | **~0,32 M$** | Hesaplama (şirket raporlarından) · Orta |

- **Slayt ifadesi:** "146 kişilik bir şirket yılda 400 milyon dolar ciro yapıyor. Bu, çalışan başına Walmart'ın yaklaşık 9 katı." · *Kaynak: TechCrunch (Mart 2026); Walmart yıllık raporu*

## 19. Klarna

- **Şubat 2024:** Yapay zekâ asistanı ilk ayında 2,3 milyon konuşma yaptı. Bu, müşteri hizmetleri sohbetlerinin üçte ikisi ve **700 tam zamanlı temsilcinin işine** denk. Çözüm süresi 11 dakikadan 2 dakikanın altına indi, tekrar başvurular %25 azaldı. 23 pazar, 35'ten fazla dil. 2024 için tahmini **40 M$ kâr iyileşmesi**. Klarna basın bülteni, 27 Şubat 2024. https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/ · *Güven: Yüksek (şirket beyanı)*
- **Mayıs 2025, geri dönüş:** CEO Siemiatkowski (Bloomberg) otomasyonda "fazla ileri gidildiğini" ve maliyetin fazla belirleyici olduğunu, bunun da kaliteyi düşürdüğünü söyledi. Müşterinin bir insanla konuşabilmesinin "kritik" olduğunu belirtti. Uber benzeri, uzaktan çalışan esnek insan temsilci modeline geçildi. https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/
- **Daha yeni veri:**
  - 3. çeyrek 2025 sonuçları (18 Kasım 2025): asistan artık **853 tam zamanlı temsilcinin** işini yapıyor ve ~60 M$ tasarruf sağladı. Yine de müşteri hizmetleri maliyeti 42 M$'dan 50 M$'a çıktı. https://www.customerexperiencedive.com/news/klarna-says-ai-agent-work-853-employees/805987/
  - 4. çeyrek 2025: çalışan başına gelir **1,24 M$**; 2022'den bu yana çalışan sayısı %49 azaldı (şirket beyanı).
- **Güven:** Orta (şirket beyanları, bağımsız doğrulama yok)
- **Slayt ifadesi:** "Klarna'nın yapay zekâsı 700 kişinin işini yaptı, ama Klarna yine de insanları geri çağırdı: müşteri insana ulaşabilmeli." · *Kaynak: Klarna, 2024-2025*

## 20. PwC Global AI Jobs Barometer

- **2025 (3 Haziran 2025, 2024 verisi):** yapay zekâ becerisi olan işlerde ortalama **%56** ücret primi var (önceki yıl %25). Yapay zekâya en açık sektörlerde çalışan başına gelir artışı **%27**, en az açık sektörlerde ~%8,5; yani **~3 kat** fark (2018-2024). Bu sektörlerde verimlilik artışı 2022'den sonra ~4 katına çıktı. https://pwc.com/gx/en/news-room/press-releases/2025/ai-linked-to-a-fourfold-increase-in-productivity-growth.html
- **2026 (15 Haziran 2026, tercih edin):** 6 kıtada 1 milyardan fazla iş ilanı incelendi.
  - Yapay zekâ becerisi primi ortalama **%62**: tüketim pazarlarında %118, kamuda %16.
  - Yapay zekâ becerisi isteyen ilanlar **%69** arttı; tüm ilanlarda artış %9.
  - Yapay zekâya en açık şirketlerin ilk %20'sinde emek verimliliği 2018'den bu yana **%163** arttı.
  - Bu şirketlerde istihdam %52 arttı (en az açıklarda %36).
  - https://euronews.com/business/2026/06/16/human-skills-increasingly-in-demand-as-ai-reshapes-labour-market-pwc-finds
- **Güven:** Orta-Yüksek (PwC'nin ilan verisi; nedensellik kanıtlanmış değil)
- **Slayt ifadesi:** "Yapay zekâ bilen çalışan %62 daha fazla kazanıyor." · *Kaynak: PwC Global AI Jobs Barometer 2026*

## 21. Büyük teknoloji şirketlerinin yapay zekâ yatırımı (capex)

- **2025 (gerçekleşen):** Microsoft, Alphabet, Amazon ve Meta'nın toplamı **~410 milyar $**. Amazon tek başına ~134,7 Mrd $.
- **2026 rehberleri (Ekim 2026'daki 3. çeyrek açıklamaları):**
  - Amazon ~**220 Mrd $** (nakit capex)
  - Alphabet **195-205 Mrd $** (Temmuz'da yükseltildi; 3. çeyrek capex'i 51,4 Mrd $; 2027'de "önemli ölçüde artacak") https://s206.q4cdn.com/479360582/files/doc_events/2026/Oct/28/2026_Q3_Earnings_Transcript.pdf
  - Microsoft takvim yılı için ~**170 Mrd $**
  - Meta **135-145 Mrd $**
  - **Toplam ~725-750 Mrd $** (bir yılda ~%77 artış). Alphabet, Amazon ve Meta'nın serbest nakit akışı bu harcama yüzünden negatife döndü.
  - https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion
- **Güven:** Orta-Yüksek (Alphabet rakamı birincil kaynaktan; diğerleri derleme; şirketlerin capex tanımları farklı)
- **Slayt ifadesi:** "Dört şirket bu yıl yapay zekâya Türkiye'nin yıllık ihracatından fazla yatırım yapıyor." **Dikkat:** Türkiye'nin 2025 mal ihracatı ~270 milyar $ civarında, ancak bu rakam bu çalışmada doğrulanmadı; kullanmadan önce TİM/TÜİK'ten kontrol edin. Güvenli alternatif: "4 şirket, 2026'da ~750 milyar $."

## 22. Ticaret, perakende ve tedarik zinciri için 5 çarpıcı veri

1. **Yılbaşı alışverişinin %20'si yapay zekâ ve ajan etkisinde.** 2025 yılbaşı sezonunda küresel online satış 1,29 trilyon $ oldu; bunun **262 milyar $**'ında yapay zekâ ve ajanların etkisi vardı. Yapay zekâ aramasından gelen ziyaretçi, sosyal medyadan gelene göre **9 kat** daha fazla dönüşüm sağladı. Kendi ajanını kullanan markalar %59 daha hızlı büyüdü. *Salesforce, 6-8 Ocak 2026 (1,5 milyar alışverişçinin verisi + model varsayımları).* https://www.salesforce.com/news/press-releases/2026/01/06/2025-holiday-shopping-data/ · Güven: Orta
2. **Amazon'un asistanı sepeti büyütüyor.** Rufus, 2025'te **10 Mrd $'ı aşan ek yıllık satış** hedefine ulaşma yolundaydı ve kullananların satın alma ihtimali %60 daha yüksekti. Ekim 2026'da adı Alexa for Shopping oldu: 400 M+ kullanıcı, ABD'de sipariş başına **%50 daha fazla** harcama. *Amazon kazanç görüşmeleri, Ekim 2025 ve Ekim 2026.* Güven: Orta (şirket beyanı)
3. **Ajan ilk denemede kaybetti.** Walmart'ın ChatGPT içindeki satın alma deneyi, kendi sitesine yönlendirmeye göre **3 kat daha düşük** dönüşüm sağladı (Mart 2026). OpenAI de sohbet içi ödemeyi geri çekti. **Ders: müşteri ilişkisini ve ödemeyi elinizde tutun, ama yapay zekâda görünür olun.** *WIRED, PPC Land, Retail Gazette.* Güven: Orta-Yüksek
4. **Walmart: daha fazla iş, aynı sayıda çalışan.** Dünyanın en büyük özel işvereni, büyümesine rağmen ~2,1 milyonluk çalışan sayısını **3 yıl sabit** tutmayı planlıyor; işlerin içeriği değişiyor. CEO McMillon: "Yapay zekâ kelimenin tam anlamıyla her işi değiştirecek." *Fortune, 27 Eylül 2025.* https://fortune.com/2025/09/27/ai-ceos-job-market-transformation-walmart-accenture-salesforce/ · Güven: Orta-Yüksek
5. **Tedarik zinciri otonomlaşıyor.** Gartner'a göre 2030'a kadar tedarik zinciri yönetim yazılımlarının **yarısı**, kararları kendi başına uygulayan ajanlar içerecek. *Gartner, 21 Mayıs 2025.* https://www.gartner.com/en/newsroom/press-releases/2025-05-21-gartner-predicts-half-of-supply-chain-management-solutions-will-include-agentic-ai-capabilities-by-2030 · Güven: Orta (tahmin)
- **Yedek veriler:**
  - Shopify'da yapay zekâ kanalından gelen siparişler yıllık 3,3 kat arttı (3. çeyrek 2026).
  - Adobe 2026 tahmini: yılbaşında yapay zekâ trafiği +%130.
  - Trendyol'da müşteri sorularının dörtte birini yapay zekâ yanıtlıyor (K maddesi).
  - KPMG: perakende CEO'larının %64'ü yapay zekâyı en önemli yatırım önceliği olarak görüyor.
- **KULLANMAYIN:** "Yapay zekâ lojistik maliyetini %15, stoku %35 düşürür, hizmet düzeyini %65 artırır (McKinsey)." Bu rakamlar McKinsey'nin bir yayınında bulunamadı; kaynak belirsiz.

---

# EK DOĞRULAMALAR (Koordinatör talepleri A–K)

## A) Kültepe / Kaniş
- **Tablet sayısı:** Kaynaklar **~23.000** ile **~23.500** arasında değişiyor.
  - Kazı başkanı Prof. Fikri Kulakoğlu (Anadolu Ajansı) ve Google Arts & Culture'daki UNESCO koleksiyon sayfası: **23.500**.
  - Hamburg Üniversitesi CSMC (2024) ve Archaeology Magazine (Kasım/Aralık 2023, Cécile Michel'e dayanarak): "23.000'i aşkın" / "yaklaşık 23.000".
  - Bunların ~4.500'ü yurt dışındaki müzelerde (Kayseri Büyükşehir Belediyesi yayını).
  - **Öneri:** "23 binden fazla tablet" yazın; iki rakamı da doğru kılan güvenli ifade bu.
  - https://www.csmc.uni-hamburg.de/publications/mesopotamia/2024-08-31.html · https://archaeology.org/issues/530-2311/features/11800-kanesh-assyrian-letters · *Güven: Yüksek*
- **UNESCO kaydı:** **"Old Assyrian Merchant Archives of Kültepe"** (Kültepe Eski Asur Tüccar Arşivleri), UNESCO Dünya Belleği Uluslararası Kaydı, **2015**. Kulakoğlu bir röportajda adı "Özel Asur Tüccar Arşivleri" olarak da anmış. *Güven: Yüksek (yıl) / Orta-Yüksek (tam ad; UNESCO'nun kendi sayfasına ulaşılamadı)*
- **Tarih aralığı:** Asur Ticaret Kolonileri Çağı yaklaşık **MÖ 1974-1719** (Türk kaynakları, orta kronoloji). Tabletlerin çok büyük kısmı Karum **II. katından**: Archaeology Magazine'e göre çoğu **MÖ ~1900-1840**, MÖ 1835'ten sonraya ait tablet neredeyse yok. Ib katında daha az tablet var (~MÖ 1835-1700).
  - **Öneri:** "MÖ 1950-1750" yerine **"yaklaşık 4.000 yıl önce (MÖ 20.-19. yüzyıl)"** yazın.
- **Ticaretin kendisi:** Asur'dan eşeklerle kalay (doğudan) ve kumaş (çoğu Babil'den) getiriliyor, Anadolu'da gümüş ve altına çevriliyordu. Akademik özetlere göre kalay yaklaşık **iki katına**, ince kumaş **üç katına kadar** fiyatla satılıyordu (C. Michel; ikincil kaynaklardan; *Orta*).
- **Tüccar mektubu örneği (sipariş ve kalite):** **Puzur-Aššur'dan Waqqurtum'a:** "Gönderdiğin ince kumaştan daha yap." Satışların artması için bu kalitede kumaş istiyor. Kumaşı dokuyamıyorsa Asur'da ince kumaş satın almasını öneriyor: kâr daha düşük olur ama satış artar. Archaeology Magazine, "Assyrian Women of Letters" (C. Michel'in çalışmaları). Aynı kaynakta tüccar **Pušu-kēn**'in eşi **Lamassī**'ye yolladığı kumaşların kalitesinden şikâyet ettiği, Lamassī'nin de elinden geleni yaptığını yazdığı bir yazışma da var. Kaynakta fiyat yok. *Güven: Yüksek (tercüme özeti)*
  - **Slayt için öneri:** "4.000 yıl önce Kayserili Asur tüccarı eşine yazıyor: 'Gönderdiğin ince kumaştan daha yap. Satış onunla artıyor.' Müşteri geri bildirimi, kalite, kâr marjı… hepsi aynı."

## B) Alüminyumun fiyat tarihi
- **1850'ler:** Science History Institute'un *Distillations* dergisine göre (Tom Geller, 2007) alüminyum **1859'da pound başına ~17 $**, yani gümüşle aynı fiyattaydı; 1800'lerin ortasında "altından değerli" sayılıyordu. Sık geçen "1852'de kilosu 1.200 $" rakamı yalnızca kaynak göstermeyen popüler sitelerde var, **doğrulanamadı; kullanmayın.** 1855 Paris Dünya Fuarı'nda alüminyum külçeler taç mücevherlerinin yanında sergilendi ve "kilden gümüş" diye anıldı.
- **Hall–Héroult (1886):**
  - Hall ilk metali 23 Şubat 1886'da elde etti, patentini 9 Temmuz 1886'da başvurdu.
  - Héroult Fransa'da 23 Nisan 1886'da patent başvurusu yaptı.
  - Fiyat bu dönemde **pound başına 6 $'ın altına** inmişti.
  - **1891'de pound başına 1 $'ın altına**, 1903'te ~**0,30 $**'a düştü.
  - https://www.sciencehistory.org/stories/magazine/aluminum-common-metal-uncommon-past/ · *Güven: Yüksek (eğilim) / Orta (tek tek rakamlar; kaynaklar arasında küçük farklar var)*
- **III. Napolyon anekdotu:** En önemli konuklarına alüminyum çatal-bıçak verdiği, diğerlerinin gümüşle yediği anlatılır (*Distillations*). Popüler kaynaklarda varyantları var ("kendisi alüminyum tabakta yedi, konuklar altında" gibi). **Güven: Orta.** Slayta "rivayete göre" diye yazın.
- **Washington Anıtı'nın tepesi:** **6 Aralık 1884'te** yerleştirildi; **8,9 inç** (~22,6 cm) yüksekliğinde, **100 ons** (~2,8 kg) ağırlığında, saflığı %97,75, döküldüğü dönemin en büyük alüminyum parçası. Döküm ücreti 225 $. O dönem alüminyumun fiyatı **ons başına 1,10 $**, yani **gümüşle aynı**. National Archives (Prologue dergisi) "gümüşün iki katı" diyor; NPS'in "aynı" ifadesi esas alınmalı. https://www.nps.gov/articles/000/wamocap.htm · *Güven: Yüksek*
- **Slayt için öneri:** "1884: Washington Anıtı'nın tepesine 'değerli metal' olarak alüminyum kondu. 1891: pound fiyatı 1 doların altına düştü. Bugünün pahalı zekâsı da yarının alüminyum folyosu olacak."

## C) Morgan Stanley / BOND, "ABD hanelerinin %50'sine ulaşma süresi"
- **Künye:** BOND (Mary Meeker, Jay Simons, Daegwon Chae, Alexander Krey), *Trends – Artificial Intelligence (AI)*, **30 Mayıs 2025**, ~340 sayfa. **Slayt 59** (PDF'te 60. sayfa): "AI User Adoption – Time to 50% Household Penetration = Each Cycle Ramps in ~Half-the-Time…AI Following Pattern".
- **Rakamlar ("Years to 50% Adoption of Household Technologies in USA"):** 2. Sanayi Devrimi **42** · PC çağı **20** · masaüstü internet **12** · mobil internet **6** · yapay zekâ **"3 yıl?"** (slaytta soru işaretiyle).
- **Kaynak notu (aynen):** "Morgan Stanley, 'Google and Meta: AI vs. Fundamental 2H Debates' (7/23), Our World in Data, other web sources per MS." Ayrıca: "3 years for AI Era implies that the time to 50% USA Household Adoption is similarly cut in half from the previous cycle."
- **Önemli:** Yapay zekâ için "3 yıl" **ölçülmüş bir değer değil**. Her döngünün bir öncekinin yarısında tamamlandığı varsayımıyla yapılan bir **projeksiyon.** Slaytta "~3 yıl (tahmin)" yazın.
- https://www.bondcap.com/report/pdf/Trends_Artificial_Intelligence.pdf · Slayt kopyası: https://www.slideshare.net/slideshow/trends-artificial-intelligence-mary-meeker/279946168 · *Güven: Yüksek (künye) / Orta (yapay zekâ tahmini)*
- **Ölçülmüş karşılaştırma:** St. Louis Fed Tracker'a göre ABD'de 18-64 yaşın %60,8'i Ağustos 2026'da üretken yapay zekâ kullanıyor (madde 3). Bu, ölçülmüş bir değer ve 3 yıllık tahmini destekliyor.

## D) TÜİK, "Yapay Zekâ İstatistikleri, 2026"
- **Doğrulandı.** Tüm rakamlar, bülteni aktaran birden fazla bağımsız haberle (AA/Foreks 3 Ekim 2026, Bloomberg HT, Gazete Oksijen 2 Ekim 2026, Yeni Ankara) birebir uyuşuyor:
  - Bireylerde üretken yapay zekâ kullanımı **%19,2 → %37,6**.
  - Girişimlerde yapay zekâ kullanımı **%7,5 → %14,0**.
  - **Toptan ve perakende ticarette %12,7**. Diğer sektörler: ulaştırma ve depolama %9,7, inşaat %6,9 (en düşük), telekomünikasyon ve bilişim %63,7 (en yüksek), finans %30,2.
  - **10-49 çalışanlı girişimlerde %12,8**, 50-249'da %17, 250+'da %37,1.
  - **%72,3 uzmanlık eksikliği:** Bu oran yapay zekâyı kullanmayı düşünüp kullanmayan girişimler arasındaki en büyük engel. Diğer engeller: hukuki belirsizlik %66,4, veri gizliliği %65,4.
  - Ek bilgiler: kullanan girişimlerin %51'i pazarlama ve satışta kullanıyor; kullanmayıp planlayanlar %8,3; bireylerde 16-24 yaş grubunda kullanım %64,9.
- **Sınırlılık:** data.tuik.gov.tr (veriportali.tuik.gov.tr) JavaScript ile çalıştığı için bülten metnine doğrudan **erişilemedi**. Bülten numarası ve kesin URL **bulunamadı**. Yayın tarihi haberlere göre **2 Ekim 2026**.
- https://gazeteoksijen.com/bilim-ve-teknoloji/turkiyede-yapay-zeka-kullanimi-ikiye-katlandi-291485 · https://www.foreks.com/haber/detay/6ac0f13524008d7d4373b88a/AA/tr/turkiye-yapay-zekayi-en-cok-bilisimde-en-az-insaatta-kullaniyor-03-10-26/ · https://bloomberght.com/turkiye-de-yapay-zeka-kullanimi-yaklasik-iki-kat-artti-3790100
- **Güven: Yüksek**
- **Kaynak satırı:** *Kaynak: TÜİK, Yapay Zekâ İstatistikleri 2026 (Ekim 2026)*

## E) PwC 29. Küresel CEO Araştırması (Ocak 2026)
- **Küresel:** 95 ülkeden 4.454 CEO, anket 30 Eylül–10 Kasım 2025, sonuçlar Davos'ta 19-20 Ocak 2026'da açıklandı.
  - Son 12 ayda yapay zekâdan **ne gelir ne de maliyet kazancı görmeyenler %56**.
  - Geliri artanlar %30 (bir PwC ülke sayfasında %29), maliyeti düşenler %26.
  - **Her ikisini birden görenler %12** (PwC bu gruba "öncüler" diyor).
  - https://www.forbes.com.tr/kuresel-ekonomi/ceo-larda-son-5-yilin-en-dusuk-guveni-yapay-zeka-yatirimlari-henuz-meyve-vermedi · https://www.pwc.be/en/news-publications/2026/ceo-survey-2026.html · *Güven: Yüksek*
- **Türkiye:** 84 CEO.
  - Hem maliyet düşüşü hem gelir artışı görenler **%21** (küresel %12).
  - Gelir artışı görenler %28 (küresel %29).
  - Kurumsal ölçekte yapay zekâ erişimi olanlar %13; net bir yol haritası olanlar %34.
  - Cenk Ulu, %21'in operasyonel kullanım sınırlı olduğu için "temkinli okunması gerektiğini" söylüyor.
  - https://www.ekonomigazetesi.com/ekonomi/turk-ceolar-gelecek-donem-beklentisinde-negatif-ayrisiyor-73654 (27 Şubat 2026)
- **Sınırlılık:** PwC Türkiye PDF'i (yönetici özeti v1/v2) **403 hatası verdi; doğrudan açılamadı.** %21 ve %12 rakamları PwC Türkiye sayfasının arama özetinde ve Ekonomi Gazetesi'nde aynı. "%66'sı gelirde değişim görmedi" ifadesi bir arama özetinde geçiyor ama **doğrulanamadı**.
- **Güven:** Yüksek (küresel) / Orta-Yüksek (Türkiye)

## F) McKinsey State of AI 2026
- **Kullanım:** "10 şirketten neredeyse 9'u" (ikincil kaynaklarda %88). McKinsey'nin kendi metninde 2026 için "%88" ifadesi **bulunamadı**. %88, 2025 sürümünde doğrulanmış durumda. **Öneri:** "~%90 (10 şirketten 9'u)" yazın.
- **EBIT etkisi gören %37 · yüksek performanslılar ~%6:** **Doğrulandı** (McKinsey bülteni + PDF künyesi + FM Magazine).
- **Yüksek performanslıların iş akışını yeniden tasarlaması ~3 kat:**
  - **2025 sürümü:** "Yüksek performanslıların iş akışlarını kökten yeniden tasarlamış olma ihtimali **neredeyse 3 kat** daha fazla." *Doğrulandı.*
  - **2026 sürümü:** yüksek performanslıların **~%75**'i iş akışlarını önemli ölçüde yeniden tasarladı; diğerlerinde bu oran **~%25** (yine ~3 kat; McKinsey'nin Eylül 2026 bülteni).
  - Bu bir ilişki, nedensellik kanıtlanmış değil.
- **Kaynak satırı:** *Kaynak: McKinsey, The State of AI in 2026 (Ağustos 2026; 1.719 katılımcı)*

## G) Adobe, 2025 yılbaşı sezonu
- **Doğrulandı:** 1 Kasım–31 Aralık 2025 döneminde ABD perakende sitelerine üretken yapay zekâdan gelen trafik yıllık **%693,4** arttı. Bu ziyaretçiler diğer kaynaklardan gelenlere göre **%31 daha yüksek** oranda dönüştü (2024'te %9 daha düşüktü). Aynı dönemde online harcama rekor kırarak **257,8 milyar $** oldu. Adobe, 7-12 Ocak 2026. https://news.adobe.com/news/2026/01/adobe-holiday-shopping-season · Ayrıntılar madde 4'te. *Güven: Orta-Yüksek*

## H) Paul David: elektrikteki gecikme
- **~40 yıl: Evet**, en savunulabilir ifade bu. Edison ve Swan'ın ampulü 1879'da, ilk merkezî santraller 1881-82'de geldi; fabrikalarda verim sıçraması **1920'lerde** oldu. 1919-29 döneminde imalat TFP büyümesi, 1909-19'a göre ~5 puan hızlandı.
- **1919'da yarısı mı?** **Yaklaşık evet.** 1899'da elektrik motorları fabrikalardaki mekanik güç kapasitesinin **%5'inden azını** oluşturuyordu ve bu oran ~**1919-1920'de yaklaşık %50**'ye ulaştı. Devine (1983) de elektriğin 1920'ye kadar buharı geçerek ana güç kaynağı olduğunu yazıyor. Kesin yüzde (ör. %53) birincil tablodan **doğrulanamadı**; slaytta "yaklaşık yarısı" deyin.
- **Kaynaklar:** David (1990), *AER* 80(2): 355-361 · Devine (1983), "From Shafts to Wires", *Journal of Economic History* 43(2): 347-372. https://ideas.repec.org/a/cup/jechis/v43y1983i02p347-372_02.html · *Güven: Yüksek (eğilim) / Orta (tek yüzdeler)*

## I) ChatGPT: OpenAI'ın açıkladığı en güncel haftalık kullanıcı sayısı
- **900 milyon haftalık aktif kullanıcı.** OpenAI blog yazısı, **27 Şubat 2026**. OpenAI'ın açıkladığı **en son haftalık rakam bu.**
- 31 Temmuz 2026'daki "1 milyardan fazla aktif kullanıcı" açıklaması ChatGPT, Codex ve ChatGPT Work'ün **toplamı** ve **haftalık olduğu belirtilmiyor.** "1 milyar haftalık kullanıcı" diye yazmayın.
- Daha sonra (Ağustos–Kasım 2026) açıklanmış resmî bir haftalık rakam **bulunamadı**.
- *Güven: Yüksek*

## J) Gartner B2B %90 tahmini: tam ifade ve tarih
- **İfade (Gartner, İngilizce):** "By 2028, 90% of B2B buying will be AI agent intermediated, pushing over $15 trillion of B2B spend through AI agent exchanges."
- **Türkçesi:** "2028'e kadar B2B satın almaların %90'ına yapay zekâ ajanları aracılık edecek ve 15 trilyon doları aşan B2B harcaması yapay zekâ ajan borsaları üzerinden geçecek."
- **Tarih ve bağlam:** *Gartner Top Strategic Predictions for 2026 and Beyond*, Gartner IT Symposium/Xpo, Orlando, **21 Ekim 2025**.
- **Uyarı:** Bazı ikincil kaynaklarda "etkilenecek" (influenced) ifadesi geçiyor; Gartner'ın kelimesi "aracılık edilecek" (intermediated). 15 trilyon $ tüm B2B pazarı değil, ajanların aracılık edeceği kısım.
- https://www.gartner.com/en/articles/strategic-predictions-for-2026 (403 verdi; ifade arama özetinden ve SiliconANGLE'dan doğrulandı) · https://siliconangle.com/2025/10/21/gartner-predicts-ai-will-upend-job-markets-trigger-lawsuits-rewire-global-commerce-2027/
- *Güven: Yüksek (ifade) / Orta (tahminin isabeti)*

## K) Trendyol: ihracatçı satıcılar için yapay zekâ beyanları
- **"Ürün listeleme %60 daha hızlı":** Trendyol Grubu CEO'su **Erdem İnan**'ın kasım kampanyası açıklamasında geçiyor (**27 Ekim 2026**): yapay zekâ tabanlı eşleştirme algoritmaları e-ihracat yapan satıcıların listeleme süreçlerini %60 hızlandırıyor. Aynı açıklamaya göre müşteri sorularının **dörtte birini yapay zekâ yanıtlıyor** ve anlık yanıtlar satıcının satışa dönüşüm oranını **iki katına** çıkarıyor. https://www.timeturk.com/rekor-hedefler-yapay-zeka-sistemleri-hiz-ve-kuresel-erisim-trendyol-is-ortaklariyla-kasimda-sinirlar
- **"10+ dil":**
  - Erdem İnan'ın Slush'D İstanbul konuşması (16 Ekim 2026): "Trendyol LLM ile iş ortakları **10 farklı dilde** uluslararası pazarlara açılabiliyor." https://www.paradergi.com.tr/sektorler/2026/10/16/trendyol-yapay-zeka-ile-e-ticaretin-gelecegini-sekillendiriyor
  - Webrazzi'deki 19 Aralık 2025 tarihli yazıda "ürün bilgileri **10'dan fazla dile** otomatik çevriliyor" deniyor. Ancak bu içerik **"SPONSORLU"** etiketli ve aynı yazıda 125 binden fazla KOBİ'nin e-ihracat yaptığı belirtiliyor.
- **Öneri:** "10 dil" yazın (CEO beyanı); "10+" ifadesi yalnızca sponsorlu içerikte geçiyor.
- **Güven:** Orta. Tümü şirket beyanı; bağımsız ölçüm yok. Trendyol'un kendi basın odasında bu rakamları içeren bir bülten **bulunamadı**; kaynaklar CEO konuşmalarını aktaran haberler.
- **Kaynak satırı:** *Kaynak: Trendyol (Erdem İnan, Ekim 2026)*

---

## DEĞİŞEN / GÜNCELLENEN VERİLER: Storyboard'a düzeltme önerileri
1. **Slayt 3:** Mevcut kullanıcı sayısı için "haftada 900 milyon (OpenAI, Şubat 2026)" yazın. "1 milyar" kullanılacaksa "tüm OpenAI ürünlerinde aktif kullanıcı" diye belirtin. Alternatif güçlü veri: St. Louis Fed Ağustos 2026, ABD'de yetişkinlerin %60,8'i.
2. **Slayt 4:** 280 kat için kaynak **AI Index 2025**. AI Index 2026 bu rakamı güncellemiyor; "2026" diye yazmayın.
3. **Slayt 6:** OpenAI Instant Checkout'u başarı olarak göstermeyin; **Mart 2026'da geri çekildi.** Walmart'ta dönüşüm 3 kat düşük kaldı. Hikâye şöyle kurulabilir: "Sor" aşaması patladı (Adobe: +%693, %31 daha fazla dönüşüm); "Yaptır" aşaması ödeme altyapısında hazır (Visa ve Mastercard canlıda, Google UCP), ama müşteri deneyimi henüz oturmadı.
4. **Slayt 7:** McKinsey ve Gartner rakamları **tahmin**; "olabilir" ve "öngörülüyor" fiilleriyle yazın.
5. **Slayt 9:** Çağrı merkezi verisi için %14/%34 yerine **%15 / %30'un üzeri** (QJE 2025, hakemli sürüm).
6. **Slayt 10:** Work Trend Index'in **2026 sürümü var** (ajan sayısı 15 kat, %58, organizasyonun payı %67).
7. **Slayt 12:** McKinsey 2026 (%37 / %6) ve PwC 2026 (%56) daha sağlam. MIT'nin %95'i **tartışmalı**; kullanılacaksa dipnot düşün.
8. **Slayt 13:** "~30 yıl" yerine **"~40 yıl"** (1880'ler → 1920'ler).
9. **Slayt 15:** TÜİK **2026** = %14 (bir yılda neredeyse iki katı); perakende %12,7. AB'nin 2026 verisi Aralık'ta çıkacak; şimdilik "AB 2025: %20" kullanın.
10. **Yeni (opsiyonel):** Türkiye'nin 2026-2030 Yapay Zekâ Eylem Planı (Ağustos 2026: 1 trilyon TL değer hedefi, 1 GW kapasite) "fırsat penceresi" mesajını destekliyor.
