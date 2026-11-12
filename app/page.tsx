const days = [
  { date:"01.01", weekday:"FRI", city:"札幌", title:"抵達雪國的第一夜", tone:"blue", transport:["飛機","JR 快速 Airport","札幌地下鐵","步行"], mapMode:"transit", mapStops:["新千歲空港","札幌站（JR劃位）","Vessel Hotel Campana Susukino","北海道神宮","薄野"], mapNote:"航班路段不納入地面路線；依抵達後行程標示。", backup:[["航班延誤","若 16:40 還沒抵達飯店，就取消北海道神宮，改成市區晚餐後直接休息；1/8 再完整參拜。"]], stops:[
    ["09:15","台灣起飛","前往新千歲機場；日本時間快台灣 1 小時。"],
    ["14:05","抵達新千歲機場","預留 75–90 分鐘入境、領行李及購買交通票券。"],
    ["15:30","JR 快速 Airport・新千歲→札幌","力求 15:30 前離開機場；車程約 40 分鐘。"],
    ["16:15","札幌站先劃位","抵達後先至 JR 售票窗口處理 1/5–1/7 特急北斗指定席，並確認 1/4 札幌→小樽班次是否可劃位；座位偏好列於各日行程，依可選座位安排。"],
    ["16:40","薄野飯店寄放行李","完成劃位後搭地下鐵至飯店寄放行李；再視時間安排圓山公園。"],
    ["17:20","北海道神宮參拜（視時間）","參拜時間可能提早結束；若劃位或交通耽誤、或已停止參拜，就改 1/8 早上前往。"],
    ["18:40","薄野晚餐","參拜後返回薄野吃晚餐；想吃拉麵可安排麵屋雪風。"],
    ["20:00","回飯店休息","辦理入住、整理行李，第一晚不再安排逛街。"]]},
  { date:"01.02", weekday:"SAT", city:"札幌", title:"札幌市區散步與逛街", tone:"ice", transport:["札幌地下鐵","步行"], mapMode:"walking", mapStops:["Vessel Hotel Campana Susukino","札幌電視塔","札幌時計台","大通公園","札幌三越 千秋庵 巴里銅鑼専門店","Stellar Place","大丸札幌店","あべ養鶏場 えっぐぷりん 札幌駅直営店","札幌駅前通地下歩行空間（チ・カ・ホ）","狸小路商店街","牛しゃぶ・すき焼専門店 禅（札幌）"], mapOptionalPlaces:["札幌PARCO"], backup:[["札幌PARCO","列為備案；若在大通商圈逛完仍有時間與體力，再順道前往，年始營業時間出發前確認。"],["大雪・室內行程","若地面交通受影響，就縮短戶外散步，改逛地下街、百貨與狸小路。"]], stops:[
    ["07:30","Vessel Hotel 早餐","在飯店享用早餐，吃完稍作休息再前往大通。"],
    ["09:30","札幌電視塔","先登塔俯瞰大通；若年始延後開門，就先去時計台散步再回來。"],
    ["10:40","札幌時計台・大通公園","參觀時計台外觀並沿大通公園散步；年始室內開放時間需再確認。"],
    ["11:30","札幌三越・千秋庵 巴里銅鑼專門店","到札幌三越本館 B2F 買巴里銅鑼；年始營業與商品庫存出發前確認。"],
    ["12:15","Stellar Place","先逛札幌站旁的 Stellar Place，午餐依當下胃口在附近彈性安排。"],
    ["13:30","大丸札幌店","接著逛大丸札幌店；不另排固定百貨午餐。"],
    ["14:45","阿部養雞場 えっぐぷりん 札幌站直營店","大丸後順路到札幌站東側大廳、北口附近買雞蛋布丁；店舖平常營業 09:00–20:00，年始營業時間出發前確認。"],
    ["15:10","地下街散步・札幌站往狸小路","從札幌站沿地下街往大通、薄野方向逛，再接狸小路商店街；依體力與店家年始營業彈性調整。"],
    ["17:00–20:00","狸小路商店街・自由逛街","沿商店街散步、購物，留意晚餐預約時間。"],
    ["20:30","禪・牛しゃぶ／壽喜燒晚餐","到大通附近的「牛しゃぶ・すき焼専門店 禅」用餐；店家目前營業至 23:00，年始營業與訂位狀況出發前再確認。"]]},
  { date:"01.03", weekday:"SUN", city:"美瑛・富良野", title:"一日遊團的純白風景", tone:"snow", transport:["一日遊巴士","雪上摩托車"], mapMode:"driving", mapNote:"11:30 札幌站北口集合；景點停留與順序依旅行團通知、雪況調整，路線為示意。", mapStops:["札幌站北口","美瑛聖誕樹","白鬚瀑布","四季彩之丘","森林精靈露台","札幌站"], backup:[["風雪・道路管制","依旅行團通知替換或刪減景點；不要自行脫團，雪上摩托車取消時改為園區散步與室內休息。"]], stops:[
    ["08:00","Vessel Hotel 飯店早餐","在飯店慢慢享用早餐；早上留有充裕休息與整理時間。"],
    ["11:15","札幌站北口報到","從薄野搭地下鐵或計程車抵達集合地點，確認團名與乘車位置。"],
    ["11:30","美瑛・富良野一日遊集合","於札幌站北口集合；出發時間與後續停留依團方通知。"],
    ["約 15:00","美瑛聖誕樹（預估）","郊外拍照停留；實際抵達時間依行車、雪況及團方安排。"],
    ["約 16:00","白鬚瀑布（預估）","欣賞冬季瀑布與雪景，停留時間依團方安排。"],
    ["約 17:30","四季彩之丘・雪上摩托車（預估）","活動是否包含於團費、開放狀況及體驗時間以旅行團通知為準。"],
    ["約 19:00","森林精靈露台（預估）","傍晚參觀木屋與點燈；實際順序可能依旅行團安排調整。"],
    ["約 22:00","返回札幌（預估）","回到札幌後簡單用餐、休息；實際抵達時間以團方通知為準。"]]},
  { date:"01.04", weekday:"MON", city:"小樽", title:"沿著堺町走向運河暮色", tone:"blue", transport:["JR 函館本線","步行"], mapMode:"walking", mapStops:["南小樽駅","北一硝子 三号館","ちいかわもぐもぐ本舗 小樽店","小樽蒸気時計","小樽オルゴール堂 本館","LeTAO 本店","小樽芸術村","小樽運河","小樽駅"], backup:[["住吉神社參拜","只有在 08:30 前抵達南小樽站時才去；若超過 08:30，直接前往北一硝子，避免錯過 09:00 點燈。"]], stops:[
    ["07:20","札幌站出發・札幌→小樽","搭早班 JR 前往南小樽站；座位偏好 A/B 列（右側），是否能劃位依實際班次確認。"],
    ["08:20 前後","抵達南小樽站","出站後往堺町通方向移動；住吉神社改列為當日備案，不影響 09:00 北一硝子。"],
    ["09:00","北一硝子三號館・北一廳","觀賞煤油燈逐盞點亮，接著在咖啡廳吃早餐；至少停留 1 小時，約 10:00 再離開。"],
    ["10:05","吉伊卡哇 MOGUMOGU 本舖小樽店","預留約 1 小時購物；目前為 09:30 營業，且可能需要官方 LINE 事前預約。"],
    ["11:10","小樽堺町通商店街周邊","沿 Sakaimachi Street 依序散步與購物，中途安排甜點或輕食。",["小樽蒸汽鐘｜依抵達時間觀賞整點表演。","小樽音樂盒堂本館｜參觀音樂盒展示並選購紀念品。","Un délice 住ノ江創業本店｜購買布丁大福。","北菓樓小樽本館｜購買泡芙與北海道伴手禮。","LeTAO 本店｜逛甜點櫃、外帶或安排短暫下午茶。"]],
    ["13:40","小樽藝術村周邊","往色內方向散步，逐點欣賞玻璃工藝、歷史建築與美術展館；各館年始營業時間須再次確認。",["小樽琉璃工坊｜欣賞玻璃工藝與手作作品。","小樽浪漫館｜逛復古建築內的玻璃與飾品店。","大正硝子館本館｜參觀小樽玻璃器皿與工藝品。","花窗玻璃美術館｜欣賞歷史彩繪玻璃與光影展示。"]],
    ["15:30","小樽運河","沿運河散步、拍雪景並等待傍晚點燈；之後可在小樽站周邊自由用餐，或依體力提早返札幌。"],
    ["19:00","返回札幌","晚餐後步行到小樽站，搭 JR 返回札幌。"]]},
  { date:"01.05", weekday:"TUE", city:"洞爺湖", title:"湖畔、溫泉街與一泊二食", tone:"ice", transport:["步行","JR 特急北斗","道南巴士／飯店接駁"], mapMode:"transit", mapStops:["札幌駅","洞爺駅","洞爺湖温泉バスターミナル","ザ・レイクスイート湖の栖","洞爺湖温泉にぎわい広場（イルミネーショントンネル）"], backup:[["昭和新山・有珠山纜車","只有天候穩定、纜車運行且交通已預約時，才用此方案替換下午溫泉街散策。"]], stops:[
    ["07:30","Vessel Hotel 早餐","在飯店悠閒享用早餐，吃完回房整理並確認行李。"],
    ["08:15","札幌退房","辦理退房後前往札幌站，預留冬季移動緩衝。"],
    ["09:30 前後","特急北斗・札幌→洞爺","改搭上午較晚班次前往洞爺；指定席偏好 D 列奇數座，實際車次及可選座位依劃位結果確認。"],
    ["11:30 前後","抵達洞爺站","轉巴士或預約接送到飯店寄放行李。"],
    ["12:30","洞爺湖溫泉街午餐","在溫泉街選擇餐廳用餐，下午不再趕往火山景區。"],
    ["14:00","溫泉街・洞爺湖畔散策","沿湖看雪景、逛伴手禮店與咖啡館，依天候彈性停留。"],
    ["15:30","湖之栖入住・泡湯","回飯店入住、休息並享受溫泉。"],
    ["18:00","一泊二食","享用飯店晚餐，之後稍作休息。"],
    ["21:00","洞爺湖溫泉燈光隧道","散步欣賞洞爺湖溫泉街中心「にぎわい広場」的燈光隧道；2026–27 活動期間 1/5 點燈時間為 17:00–22:00，注意保暖並預留步行時間。"]]},
  { date:"01.06", weekday:"WED", city:"函館", title:"金森港區散策與函館山夜景", tone:"snow", transport:["飯店接駁","JR 特急北斗","步行／函館市電","函館山纜車"], mapMode:"transit", mapStops:["ザ・レイクスイート湖の栖","洞爺駅","函館駅","Tokyu Stay Hakodate Asaichi","金森赤レンガ倉庫","八幡坂","函館山ロープウェイ","Tokyu Stay Hakodate Asaichi"], mapOptionalPlaces:["大門横丁"], mapAlternatives:[["金森紅磚倉庫必吃｜Google Maps", "https://maps.app.goo.gl/5CZ6CFS92GZJRaR2A"]], backup:[["函館山天候不佳","若纜車停駛或山頂能見度不佳，就取消上山，改去大門橫町吃晚餐，再回 Tokyu Stay 享受飯店設施；若仍想補夜景，啟用 1/7 提早回札幌看藻岩山的備案。"]], stops:[
    ["08:00","飯店早餐","享用早餐後保留一個悠閒上午，不急著離開飯店。"],
    ["09:30","最後泡湯・湖畔散步","依天候選擇再泡一次溫泉，或到湖畔短暫散步。"],
    ["11:00","湖之栖退房","辦理退房並搭飯店接駁前往洞爺站；接駁時間需事先確認。"],
    ["12:45","特急北斗・洞爺→函館","搭 12:45 班次由洞爺前往函館，預計 14:40 抵達；指定席偏好 D 列奇數座，依正式時刻表及劃位結果確認。"],
    ["14:40","抵達函館・Tokyu Stay 辦理入住","抵達後先到飯店 check in、放行李。"],
    ["15:30–18:45","金森紅磚倉庫・港區散策","check in 後直接前往金森，逛倉庫群與商店至接近 19:00；一定要吃函館洋菓子スナッフルス（Snaffle's）的起司蛋糕。地圖連結在右側路線資訊。"],
    ["18:45","八幡坂（沿途短暫停留）","若金森提早逛完，可順路看一下八幡坂；若逛到 19:00 就略過此處，直接前往函館山。"],
    ["19:00","出發前往函館山・纜車夜景","前往山麓站搭纜車看夜景；出發前確認天候、運行狀況及上山末班時間。"]]},
  { date:"01.07", weekday:"THU", city:"函館 → 札幌", title:"五稜郭散策、白天八幡坂與夜返札幌", tone:"blue", transport:["函館市電","步行","JR 特急北斗","札幌站步行"], mapMode:"transit", mapStops:["函館朝市","五稜郭タワー","函館駅","ヤマザキ洋服店","八幡坂","Tokyu Stay Hakodate Asaichi","函館駅","札幌駅","Keio Prelia Hotel Sapporo"], mapOptionalPlaces:["HAKODATE NOODLES 炎陣","Angelique Voyage","藻岩山ロープウェイ"], backup:[["1/6 未看到函館夜景｜1/7 提早回札幌看藻岩山","若前晚因天候取消函館山，1/7 提早離開五稜郭塔，回函館站周邊先吃炎陣；若時間充裕再加吃ヤマザキ洋服店，改搭 15:00 前後的車回札幌（約 19:00 抵達），抵達後直接前往藻岩山，並確認冬季纜車上山末班與特急班次。"],["HAKODATE NOODLES 炎陣（備案）","晴天主行程以ヤマザキ洋服店午餐為主；若要提早回函館站用餐，或店家候位／營業不合適，可改吃炎陣。年始營業出發前確認。"],["Angelique Voyage（備案）","若白天八幡坂後到回函館站前仍有空檔，可快速買甜點；可能售完提早打烊，時間不足就略過。"]], stops:[
    ["07:00","函館朝市早餐","在飯店附近的朝市吃早餐。"],
    ["08:15","退房・行李寄放","退房後先將行李寄放飯店，逛完市區後再回站前取行李。"],
    ["09:00–12:00","五稜郭塔周邊散策","逛塔與周邊公園，這天預留較多時間；若 1/6 夜景備案啟用，則提早結束並返回函館站。"],
    ["12:30 前後","返回函館站周邊","回到函館市區用午餐；行李先留在飯店寄放。"],
    ["13:00 前後","ヤマザキ洋服店・函館鹽味拉麵午餐","主要午餐安排；出發前確認年始營業與最後點餐時間。"],
    ["14:30 前後","元町・八幡坂","有時間就看白天的坡道與港景；冬季路滑請留意腳步。"],
    ["16:00 前後","回飯店取行李・前往函館站","回 Tokyu Stay 領取寄放行李，再前往 JR 函館站。"],
    ["18:00 前","抵達 JR 函館站","保留候車與取票時間；正常行程抓 18:30 前後出發，最晚不超過 19:00。"],
    ["18:30–19:00","特急北斗・函館→札幌","晴天主行程搭晚間班次回札幌；車程約 4 小時，指定席偏好 D 列偶數座，實際班次依正式時刻表確認。"],
    ["22:30–23:00","抵達札幌站・入住 Keio Prelia","抵達後步行至飯店辦理入住；今晚不再安排其他活動。"]]},
  { date:"01.08", weekday:"FRI", city:"札幌", title:"圓山晨景、海鮮與北大校園", tone:"ice", transport:["札幌地下鐵","步行","巴士"], mapMode:"transit", mapStops:["北海道神宮","六花亭 神宮茶屋店","札幌場外市場","北海道大学総合博物館","北大マルシェ Café & Labo","六花亭 札幌本店","白い恋人パーク","回転寿しトリトン 円山店"], mapAlternatives:[["合資会社 蟹ゆで名人｜販售店，店內用餐先確認","https://maps.app.goo.gl/hFp3jeFqEaW9CwMo7"],["北海道特産品販売／おもひで食堂｜附設食堂","https://maps.app.goo.gl/mRdXWagdZh7PfV1V9"],["根室杉山水産／うめぇ堂｜螃蟹與海鮮餐點","https://maps.app.goo.gl/Um5kCNCJWKRbAZta7"]], mapOptionalPlaces:["森彦 MORIHICO. 本店","回転寿しトリトン 北8条光星店","藻岩山ロープウェイ"], backup:[["森彥 MORIHICO. 本店（Optional）","場外市場吃完螃蟹後若還有時間、也想喝咖啡，再前往森彥；若時間較趕就直接去北海道大學。"],["藻岩山觀景台・夜景（備案）","若 1/6 函館山因天候未能看到夜景，1/8 可視晚間時間改排藻岩山；需調整白色戀人公園後的晚餐安排，並留意冬季纜車上山末班時間；若來不及就改 1/9。"],["札幌諏訪神社","若北海道神宮周邊提早逛完，可增加另一處神社參拜，以冬季花手水與雪景為主。"],["定山溪溫泉","若更想泡湯，可用定山溪半日或一日往返替換部分札幌行程；先確認巴士與日歸溫泉時間。"]], stops:[
    ["08:00","北海道神宮・圓山公園","回到圓山一帶悠閒散步；若 1/1 參拜匆忙，可補領御守、拍雪景。"],
    ["09:00","六花亭 神宮茶屋店","在境內吃現烤限定甜點「判官さま」；實際營業時間出發前再確認。"],
    ["10:30","札幌場外市場・螃蟹早午餐（三選一）","從以下三家選一間吃螃蟹；營業與年始安排出發前確認。",["合資会社 蟹ゆで名人｜螃蟹販售店，市場介紹未列店內用餐，想現場吃請先確認。","北海道特産品販売／おもひで食堂｜活蟹專門店，附設食堂可享用現煮螃蟹。","根室杉山水産／うめぇ堂｜水產直賣與食事處，可選螃蟹料理。"]],
    ["13:30 前後","北海道大學・綜合博物館","參觀校史、自然科學與研究標本展示；目前免費入館、17:00 閉館。"],
    ["15:30 前後","北大マルシェ Café & Labo","到百年紀念會館品嘗北大牛奶、自製起司餐點或義式冰淇淋；時間依前段行程微調。"],
    ["16:30 前後","六花亭札幌本店・雪印パーラー","購買伴手禮、品嘗甜點；依體力與胃口擇一或只外帶。"],
    ["17:30 前後","白色戀人公園・燈飾","固定安排；六花亭札幌本店後前往，最晚 18:30 前抵達。2026/12/1–2027/3/31 點燈時間 16:00–19:00，入場免費。"],
    ["19:30 前後","Toriton 晚餐・圓山店或 Kita 8 店擇一","白色戀人公園後選一間現場候位；兩店皆不接受座位預約，實際候位與年始營業以當日公告為準。"]]},
  { date:"01.09", weekday:"SAT", city:"札幌", title:"諏訪神社、札幌散步與紅磚燈飾", tone:"snow", transport:["札幌地下鐵","步行"], mapMode:"transit", mapStops:["札幌諏訪神社","奥芝商店 実家店","LOEWE 丸井今井札幌本店 一条館1F","大通公園","北海道庁赤れんが庁舎","中島公園ホワイトイルミネーション"], mapOptionalPlaces:["スープカレー SHO-RIN すすきの本店","スープカレー GARAKU 札幌本店","狸小路商店街","薄野喫茶 Purple Dahlia","藻岩山ロープウェイ"], backup:[["SHO-RIN 薄野本店","若奧芝商店實家候位太久或未營業，改去 SHO-RIN Susukino Main Store；年始營業時間出發前確認。"],["GARAKU 湯咖哩","若 SHO-RIN 也候位過久或未營業，再改到 GARAKU 札幌本店；實際營業出發前確認。"],["藻岩山觀景台・夜景（備案）","若 1/6 函館山未能看到夜景，可將 1/9 夜間方案 A／B 改為藻岩山；需預留交通時間並確認冬季纜車營運與上山末班。"],["支笏湖一日遊","若找到合適的一日團，可整日替換諏訪神社、購物等札幌市區行程；1 月上旬通常尚未進入冰濤祭。"],["白色戀人公園・札幌市區","大雪時改以白色戀人公園、地下街與室內購物為主。"]], stops:[
    ["08:00","札幌早餐","在飯店或附近用早餐，留足時間整理後出發。"],
    ["09:30","札幌諏訪神社參拜","抵達後參拜、散步；地址為札幌市東區北12条東1丁目1-10。"],
    ["12:15","奧之商店實家・湯咖哩午餐","排隊用餐；若候位太久或未營業，改吃 SHO-RIN 薄野本店；若也不合適，再改到 GARAKU。各店年始營業與最後點餐時間出發前確認。"],
    ["14:00","LOEWE 丸井今井札幌本店","湯咖哩後逛丸井今井一条館 1 樓 LOEWE；官方標示地址為札幌市中央區南一条西 2 丁目，營業時間出發前再次確認。"],
    ["15:00–15:50","大通商圈散步","在大通周邊散步、看街景，接著約 16:00 抵達紅磚廳舍。"],
    ["16:00–17:30","北海道廳紅磚廳舍・館內參觀（購票）","先購票入館參觀；一般成人入館費 300 日圓、大學生／高中生 200 日圓、中學生以下免費。官方開館至 21:00、最終入館 20:30。"],
    ["17:30 前後","紅磚廳舍前庭・冬季燈飾","館內參觀後出來欣賞赤れんがガーデン藍色燈飾與雪景；2026/11/20–2027/2/28 展出，實際點燈與內容依官方公告。"],
    ["18:30","夜間方案 A｜狸小路商店街・自由晚餐","若選市區路線，逛狸小路並在商店街或薄野自由用餐；依體力與營業時間彈性安排。"],
    ["18:30–19:30","夜間方案 B｜中島公園白色燈飾","若選燈飾路線，建議 19:30 前抵達、最晚停留至 20:00。中島公園會場 2027/1/9–1/28 開放，1/9 為首日，點燈時間 10:00–20:00。"],
    ["20:15 前後","方案 B｜中島公園後自由晚餐","看完燈飾後在中島公園或薄野一帶自由用餐。"],
    ["22:30 前後","薄野喫茶 Purple Dahlia（可選）","晚餐後到薄野吃深夜聖代；若時間不足就取消，營業時間及訂位出發前確認。"]]},
  { date:"01.10", weekday:"SUN", city:"返程", title:"把雪景裝進行李", tone:"blue", transport:["步行","JR 快速 Airport","飛機"], mapMode:"transit", mapStops:["Keio Prelia Hotel Sapporo","札幌駅","新千歳空港"], backup:[["JR 延誤","若快速 Airport 停駛或大幅延誤，立即改搭機場巴士或計程車，並優先完成報到。"]], stops:[
    ["08:30","札幌早餐","飯店附近用餐、整理最後行李。"],
    ["10:30","飯店退房","步行前往札幌站。"],
    ["11:00","JR 快速 Airport・札幌→新千歲","冬季預留列車延誤緩衝。"],
    ["12:00","機場午餐","先簡單吃午餐，暫時不展開大採買。"],
    ["12:40","航空公司報到・託運","先到國際線 3 樓報到區排隊；櫃檯預計 12:50 開放，完成報到與行李託運。"],
    ["13:15","機場伴手禮・最後採買","放下行李後再逛伴手禮，約 14:00 前往安檢與出境審查。"],
    ["15:20","札幌起飛","返回台灣。"]]}
];

const hotels = [
  ["01.01—05","Vessel Hotel Campana Susukino","札幌・4 晚"],
  ["01.05—06","洞爺湖 湖之栖","洞爺湖・1 晚"],
  ["01.06—07","Tokyu Stay Hakodate Asaichi","函館・1 晚"],
  ["01.07—10","Keio Prelia Hotel Sapporo","札幌・3 晚"]
];

const reservations = [
  ["01.03","美瑛・富良野一日遊團","11:30 於札幌站北口集合；確認乘車位置、景點順序、雪上摩托車是否含在團費，以及取消規則。"],
  ["01.04","吉伊卡哇 MOGUMOGU 本舖","預留 10:05–11:05 入店；目前須透過官方 LINE 參加預約或抽選，出發前再確認規則。"],
  ["01.01、01.05—07","JR 劃位・特急北斗指定席","1/1 抵達札幌站後先處理劃位；1/4 札幌→小樽偏好 A/B 列（右側，依車種確認能否劃位）；特急北斗：1/5 札幌→洞爺 D 列奇數座、1/6 洞爺→函館 D 列奇數座、1/7 函館→札幌 D 列偶數座。座位依實際可選狀況安排。"],
  ["01.05","洞爺湖飯店接駁","先向湖之栖確認洞爺站接送時間；若啟用昭和新山備案，再另約計程車或包車。"],
  ["01.09","薄野喫茶 Purple Dahlia","若晚間分支行程結束後仍有時間與體力，再安排 22:30 前後；以交通與店家當日營業時間為準。"]
];

function mapsDirectionsUrl(stops: string[], mode: string) {
  const waypoints = stops.slice(1, -1).slice(0, 9);
  const params = new URLSearchParams({
    api: "1",
    origin: stops[0],
    destination: stops[stops.length - 1],
    travelmode: mode === "walking" ? "walking" : mode === "driving" ? "driving" : "transit",
  });
  if (waypoints.length) params.set("waypoints", waypoints.join("|"));
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function DailyRouteMap({ stops, mode, note, alternatives, optionalPlaces, dayNumber }: { stops: string[]; mode: string; note?: string; alternatives?: [string, string][]; optionalPlaces?: string[]; dayNumber: number }) {
  const points = stops.map((_, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    return { x: row % 2 === 0 ? 18 + col * 86 : 276 - col * 86, y: 18 + row * 42 };
  });
  return <aside className="dailyMap" aria-label={`DAY ${dayNumber} 路線順序`}>
    <div className="dailyMapHead"><span>DAY {String(dayNumber).padStart(2, "0")} · ROUTE</span><span>{stops.length} 個點</span></div>
    <div className="routeSketch" aria-hidden="true">
      <svg viewBox="0 0 300 120" preserveAspectRatio="none">
        <path d={points.map((p, i) => `${i ? "L" : "M"}${p.x},${p.y}`).join(" ")} />
      </svg>
      {points.map((p, i) => <span className={`routeDot${i === 0 || i === points.length - 1 ? " routeDotEnd" : ""}`} style={{ left: `${p.x / 3}%`, top: `${p.y / 1.2}%` }} key={`${i}-${p.x}`}>{i + 1}</span>)}
    </div>
    <ol className="routeStopList">{stops.map((stop, i) => <li key={`${i}-${stop}`}><span>{String(i + 1).padStart(2, "0")}</span>{stop}</li>)}</ol>
    {note && <p className="routeNote">{note}</p>}
    {alternatives?.length ? <div className="mapAlternatives"><b>{dayNumber === 6 ? "金森必吃店家｜Google Maps" : "場外市場螃蟹三選一｜Google Maps"}</b>{alternatives.map(([place, url]) => <a href={url} target="_blank" rel="noreferrer" key={place}>{dayNumber === 6 ? "函館洋菓子スナッフルス（Snaffle's）｜必吃起司蛋糕" : place} ↗</a>)}</div> : null}
    {optionalPlaces?.length ? <div className="mapAlternatives"><b>選擇性停靠｜Google Maps</b>{optionalPlaces.map(place => <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`} target="_blank" rel="noreferrer" key={place}>{place} ↗</a>)}</div> : null}
    <a className="mapsLink" href={mapsDirectionsUrl(stops, mode)} target="_blank" rel="noreferrer">在 Google Maps 開啟路線 <span>↗</span></a>
    <small className="routeCaption">路線順序示意，非比例地圖</small>
  </aside>;
}

export default function Home(){return <main>
  <header className="hero" id="top">
    <nav className="nav shell"><a className="brand" href="#top">北國十日</a><div className="navlinks"><a href="#overview">概覽</a><a href="#itinerary">行程</a><a href="#checklists">清單</a><a href="#notes">Notes</a></div></nav>
    <div className="heroInner shell"><div className="heroCopy"><p className="eyebrow">HOKKAIDO · WINTER 2027</p><h1>北海道<br/>雪路旅誌</h1><p className="lead">札幌、小樽、美瑛、洞爺湖與函館。每一站都有時間，每一天都留有風雪所需的餘白。</p><a className="primaryButton" href="#itinerary">查看十日行程 <span>↓</span></a></div>
    <div className="heroCard"><div className="stamp"><span>JAN</span><strong>01—10</strong><small>10 DAYS · 9 NIGHTS</small></div><div className="routeLine"><b>CTS</b><i></i><b>SPK</b><i></i><b>OTR</b><i></i><b>TOYA</b><i></i><b>HKD</b></div><div className="hotelBrief">{hotels.map(h=><p key={h[0]}><span>{h[0]}</span>{h[1]}</p>)}</div></div></div>
  </header>

  <section className="overview shell" id="overview"><div className="sectionHeading"><p>TRIP AT A GLANCE</p><h2>十日路線，一眼掌握</h2></div><div className="overviewGrid"><article><span>去程</span><strong>01.01 · 09:15</strong><small>台灣 → 新千歲 14:05</small></article><article><span>移動核心</span><strong>JR 特急北斗</strong><small>札幌 → 洞爺 → 函館 → 札幌</small></article><article><span>回程</span><strong>01.10 · 15:20</strong><small>新千歲 → 台灣</small></article></div>
  <div className="quickNav">{days.map((d,i)=><a href={`#day-${i+1}`} key={d.date}><strong>{d.date}</strong><span>{d.city}</span></a>)}</div></section>

  <section className="itinerary shell" id="itinerary">{days.map((d,i)=><article className={`day day-${d.tone}`} id={`day-${i+1}`} key={d.date}><div className="dayDate"><span>DAY {String(i+1).padStart(2,"0")}</span><strong>{d.date}</strong><em>{d.weekday}</em></div><div className="dayContent"><div className="dayTitle"><p>{d.city}</p><h2>{d.title}</h2></div><div className="dayTransport"><b>當日交通</b><div>{d.transport.map(item=><span key={item}>{item}</span>)}</div></div><div className="dayBackups"><b>當日備案</b><div>{d.backup.map(item=><article key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div><div className="dayColumns"><ol className="timeline">{d.stops.map(s=><li key={`${d.date}-${s[0]}-${s[1]}`}><time>{s[0] as string}</time><div><h3>{s[1] as string}</h3><p>{s[2] as string}</p>{Array.isArray(s[3])&&<ul className="stopDetails">{s[3].map(item=><li key={item}>{item}</li>)}</ul>}</div></li>)}</ol><DailyRouteMap stops={d.mapStops} mode={d.mapMode} note={d.mapNote} alternatives={d.mapAlternatives} optionalPlaces={d.mapOptionalPlaces} dayNumber={i+1}/></div></div></article>)}</section>

  <section className="checklists shell" id="checklists"><div className="sectionHeading"><p>BOOK AHEAD</p><h2>預約清單</h2></div><div className="listColumns"><article className="listPanel bookingList"><div className="listPanelTitle"><span>RESERVATIONS</span><h3>要預定的</h3></div><ol>{reservations.map((item,i)=><li key={item[1]}><b>{String(i+1).padStart(2,"0")}</b><div><time>{item[0]}</time><h4>{item[1]}</h4><p>{item[2]}</p></div></li>)}</ol></article></div></section>

  <section className="notes" id="notes"><div className="shell"><div className="sectionHeading light"><p>NOTES BEFORE DEPARTURE</p><h2>出發前最後確認</h2></div><div className="notesGrid"><article><b>01</b><h3>北海道神宮參拜</h3><p>神宮可能提早結束參拜，這個安排非常吃入境速度。若 16:40 還沒抵達飯店，1/1 直接改市區晚餐與休息；1/8 早上仍會前往北海道神宮與圓山一帶。</p></article><article><b>02</b><h3>年始營業</h3><p>時計台、電視塔、百貨、餐廳與小樽各店的年始時間，請於出發前再次確認；1/8 場外市場也需確認選定餐廳是否營業。</p></article><article><b>03</b><h3>洞爺交通</h3><p>先確認湖之栖往返洞爺站的接駁時間；昭和新山與有珠山只有啟用備案時，才需要另約計程車或包車。</p></article><article><b>04</b><h3>風雪備案</h3><p>1/6 函館山為主要夜景安排；若天候不佳，改吃大門橫町並回飯店休息，1/7 可提早返札幌接藻岩山夜景；若仍無法成行，藻岩山另保留 1/8、1/9 備案。各地纜車運行皆受風雪影響，出發前確認。</p></article><article><b>05</b><h3>指定席・餐廳</h3><p>特急北斗建議提早預約指定席；1/7 正常行程傍晚搭車回札幌，函館至札幌約需 4 小時；若啟用藻岩山備案則需改搭約 15:00 班次並直奔纜車站，車次、座位與末班時間先確認。1/8 Toriton 不接受座位預約，Purple Dahlia 也建議事先確認營業時間。</p></article><article><b>06</b><h3>時間性質</h3><p>頁面中的時間是順路規劃值，JR、巴士、飯店接駁與旅行團時間須以正式預約資料覆蓋。</p></article></div></div></section>
  <footer><div className="shell"><strong>北國十日</strong><p>HOKKAIDO WINTER JOURNAL · 2027</p><a href="#top">回到頁首 ↑</a></div></footer>
  </main>}
