export type Prefecture = {
  code: string;
  name: string;
  nameEn: string;
  region: string;
  kana: string;
  hiragana: string;
};

export const prefectures: Prefecture[] = [
  { code: "01", name: "北海道", nameEn: "Hokkaido", region: "北海道", kana: "ホッカイドウ", hiragana: "ほっかいどう" },
  { code: "02", name: "青森県", nameEn: "Aomori", region: "東北", kana: "アオモリケン", hiragana: "あおもりけん" },
  { code: "03", name: "岩手県", nameEn: "Iwate", region: "東北", kana: "イワテケン", hiragana: "いわてけん" },
  { code: "04", name: "宮城県", nameEn: "Miyagi", region: "東北", kana: "ミヤギケン", hiragana: "みやぎけん" },
  { code: "05", name: "秋田県", nameEn: "Akita", region: "東北", kana: "アキタケン", hiragana: "あきたけん" },
  { code: "06", name: "山形県", nameEn: "Yamagata", region: "東北", kana: "ヤマガタケン", hiragana: "やまがたけん" },
  { code: "07", name: "福島県", nameEn: "Fukushima", region: "東北", kana: "フクシマケン", hiragana: "ふくしまけん" },
  { code: "08", name: "茨城県", nameEn: "Ibaraki", region: "関東", kana: "イバラキケン", hiragana: "いばらきけん" },
  { code: "09", name: "栃木県", nameEn: "Tochigi", region: "関東", kana: "トチギケン", hiragana: "とちぎけん" },
  { code: "10", name: "群馬県", nameEn: "Gunma", region: "関東", kana: "グンマケン", hiragana: "ぐんまけん" },
  { code: "11", name: "埼玉県", nameEn: "Saitama", region: "関東", kana: "サイタマケン", hiragana: "さいたまけん" },
  { code: "12", name: "千葉県", nameEn: "Chiba", region: "関東", kana: "チバケン", hiragana: "ちばけん" },
  { code: "13", name: "東京都", nameEn: "Tokyo", region: "関東", kana: "トウキョウト", hiragana: "とうきょうと" },
  { code: "14", name: "神奈川県", nameEn: "Kanagawa", region: "関東", kana: "カナガワケン", hiragana: "かながわけん" },
  { code: "15", name: "新潟県", nameEn: "Niigata", region: "中部", kana: "ニイガタケン", hiragana: "にいがたけん" },
  { code: "16", name: "富山県", nameEn: "Toyama", region: "中部", kana: "トヤマケン", hiragana: "とやまけん" },
  { code: "17", name: "石川県", nameEn: "Ishikawa", region: "中部", kana: "イシカワケン", hiragana: "いしかわけん" },
  { code: "18", name: "福井県", nameEn: "Fukui", region: "中部", kana: "フクイケン", hiragana: "ふくいけん" },
  { code: "19", name: "山梨県", nameEn: "Yamanashi", region: "中部", kana: "ヤマナシケン", hiragana: "やまなしけん" },
  { code: "20", name: "長野県", nameEn: "Nagano", region: "中部", kana: "ナガノケン", hiragana: "ながのけん" },
  { code: "21", name: "岐阜県", nameEn: "Gifu", region: "中部", kana: "ギフケン", hiragana: "ぎふけん" },
  { code: "22", name: "静岡県", nameEn: "Shizuoka", region: "中部", kana: "シズオカケン", hiragana: "しずおかけん" },
  { code: "23", name: "愛知県", nameEn: "Aichi", region: "中部", kana: "アイチケン", hiragana: "あいちけん" },
  { code: "24", name: "三重県", nameEn: "Mie", region: "近畿", kana: "ミエケン", hiragana: "みえけん" },
  { code: "25", name: "滋賀県", nameEn: "Shiga", region: "近畿", kana: "シガケン", hiragana: "しがけん" },
  { code: "26", name: "京都府", nameEn: "Kyoto", region: "近畿", kana: "キョウトフ", hiragana: "きょうとふ" },
  { code: "27", name: "大阪府", nameEn: "Osaka", region: "近畿", kana: "オオサカフ", hiragana: "おおさかふ" },
  { code: "28", name: "兵庫県", nameEn: "Hyogo", region: "近畿", kana: "ヒョウゴケン", hiragana: "ひょうごけん" },
  { code: "29", name: "奈良県", nameEn: "Nara", region: "近畿", kana: "ナラケン", hiragana: "ならけん" },
  { code: "30", name: "和歌山県", nameEn: "Wakayama", region: "近畿", kana: "ワカヤマケン", hiragana: "わかやまけん" },
  { code: "31", name: "鳥取県", nameEn: "Tottori", region: "中国", kana: "トットリケン", hiragana: "とっとりけん" },
  { code: "32", name: "島根県", nameEn: "Shimane", region: "中国", kana: "シマネケン", hiragana: "しまねけん" },
  { code: "33", name: "岡山県", nameEn: "Okayama", region: "中国", kana: "オカヤマケン", hiragana: "おかやまけん" },
  { code: "34", name: "広島県", nameEn: "Hiroshima", region: "中国", kana: "ヒロシマケン", hiragana: "ひろしまけん" },
  { code: "35", name: "山口県", nameEn: "Yamaguchi", region: "中国", kana: "ヤマグチケン", hiragana: "やまぐちけん" },
  { code: "36", name: "徳島県", nameEn: "Tokushima", region: "四国", kana: "トクシマケン", hiragana: "とくしまけん" },
  { code: "37", name: "香川県", nameEn: "Kagawa", region: "四国", kana: "カガワケン", hiragana: "かがわけん" },
  { code: "38", name: "愛媛県", nameEn: "Ehime", region: "四国", kana: "エヒメケン", hiragana: "えひめけん" },
  { code: "39", name: "高知県", nameEn: "Kochi", region: "四国", kana: "コウチケン", hiragana: "こうちけん" },
  { code: "40", name: "福岡県", nameEn: "Fukuoka", region: "九州", kana: "フクオカケン", hiragana: "ふくおかけん" },
  { code: "41", name: "佐賀県", nameEn: "Saga", region: "九州", kana: "サガケン", hiragana: "さがけん" },
  { code: "42", name: "長崎県", nameEn: "Nagasaki", region: "九州", kana: "ナガサキケン", hiragana: "ながさきけん" },
  { code: "43", name: "熊本県", nameEn: "Kumamoto", region: "九州", kana: "クマモトケン", hiragana: "くまもとけん" },
  { code: "44", name: "大分県", nameEn: "Oita", region: "九州", kana: "オオイタケン", hiragana: "おおいたけん" },
  { code: "45", name: "宮崎県", nameEn: "Miyazaki", region: "九州", kana: "ミヤザキケン", hiragana: "みやざきけん" },
  { code: "46", name: "鹿児島県", nameEn: "Kagoshima", region: "九州", kana: "カゴシマケン", hiragana: "かごしまけん" },
  { code: "47", name: "沖縄県", nameEn: "Okinawa", region: "九州", kana: "オキナワケン", hiragana: "おきなわけん" },
];