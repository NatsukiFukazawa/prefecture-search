export type Prefecture = {
  code: string;
  name: string;
  nameEn: string;
  region: string;
  kana: string;
  hiragana: string;
};

export const prefectures: Prefecture[] = [
  { code: "01", name: "北海", nameEn: "Hokkaido", region: "北海道", kana: "ホッカイ", hiragana: "ほっかい" },
  { code: "02", name: "青森", nameEn: "Aomori", region: "東北", kana: "アオモリ", hiragana: "あおもり" },
  { code: "03", name: "岩手", nameEn: "Iwate", region: "東北", kana: "イワテ", hiragana: "いわて" },
  { code: "04", name: "宮城", nameEn: "Miyagi", region: "東北", kana: "ミヤギ", hiragana: "みやぎ" },
  { code: "05", name: "秋田", nameEn: "Akita", region: "東北", kana: "アキタ", hiragana: "あきた" },
  { code: "06", name: "山形", nameEn: "Yamagata", region: "東北", kana: "ヤマガタ", hiragana: "やまがた" },
  { code: "07", name: "福島", nameEn: "Fukushima", region: "東北", kana: "フクシマ", hiragana: "ふくしま" },
  { code: "08", name: "茨城", nameEn: "Ibaraki", region: "関東", kana: "イバラキ", hiragana: "いばらき" },
  { code: "09", name: "栃木", nameEn: "Tochigi", region: "関東", kana: "トチギ", hiragana: "とちぎ" },
  { code: "10", name: "群馬", nameEn: "Gunma", region: "関東", kana: "グンマ", hiragana: "ぐんま" },
  { code: "11", name: "埼玉", nameEn: "Saitama", region: "関東", kana: "サイタマ", hiragana: "さいたま" },
  { code: "12", name: "千葉", nameEn: "Chiba", region: "関東", kana: "チバ", hiragana: "ちば" },
  { code: "13", name: "東京", nameEn: "Tokyo", region: "関東", kana: "トウキョウ", hiragana: "とうきょう" },
  { code: "14", name: "神奈川", nameEn: "Kanagawa", region: "関東", kana: "カナガワ", hiragana: "かながわ" },
  { code: "15", name: "新潟", nameEn: "Niigata", region: "中部", kana: "ニイガタ", hiragana: "にいがた" },
  { code: "16", name: "富山", nameEn: "Toyama", region: "中部", kana: "トヤマ", hiragana: "とやま" },
  { code: "17", name: "石川", nameEn: "Ishikawa", region: "中部", kana: "イシカワ", hiragana: "いしかわ" },
  { code: "18", name: "福井", nameEn: "Fukui", region: "中部", kana: "フクイ", hiragana: "ふくい" },
  { code: "19", name: "山梨", nameEn: "Yamanashi", region: "中部", kana: "ヤマナシ", hiragana: "やまなし" },
  { code: "20", name: "長野", nameEn: "Nagano", region: "中部", kana: "ナガノ", hiragana: "ながの" },
  { code: "21", name: "岐阜", nameEn: "Gifu", region: "中部", kana: "ギフ", hiragana: "ぎふ" },
  { code: "22", name: "静岡", nameEn: "Shizuoka", region: "中部", kana: "シズオカ", hiragana: "しずおか" },
  { code: "23", name: "愛知", nameEn: "Aichi", region: "中部", kana: "アイチ", hiragana: "あいち" },
  { code: "24", name: "三重", nameEn: "Mie", region: "近畿", kana: "ミエ", hiragana: "みえ" },
  { code: "25", name: "滋賀", nameEn: "Shiga", region: "近畿", kana: "シガ", hiragana: "しが" },
  { code: "26", name: "京都", nameEn: "Kyoto", region: "近畿", kana: "キョウト", hiragana: "きょうと" },
  { code: "27", name: "大阪", nameEn: "Osaka", region: "近畿", kana: "オオサカ", hiragana: "おおさか" },
  { code: "28", name: "兵庫", nameEn: "Hyogo", region: "近畿", kana: "ヒョウゴ", hiragana: "ひょうご" },
  { code: "29", name: "奈良", nameEn: "Nara", region: "近畿", kana: "ナラ", hiragana: "なら" },
  { code: "30", name: "和歌山", nameEn: "Wakayama", region: "近畿", kana: "ワカヤマ", hiragana: "わかやま" },
  { code: "31", name: "鳥取", nameEn: "Tottori", region: "中国", kana: "トットリ", hiragana: "とっとり" },
  { code: "32", name: "島根", nameEn: "Shimane", region: "中国", kana: "シマネ", hiragana: "しまね" },
  { code: "33", name: "岡山", nameEn: "Okayama", region: "中国", kana: "オカヤマ", hiragana: "おかやま" },
  { code: "34", name: "広島", nameEn: "Hiroshima", region: "中国", kana: "ヒロシマ", hiragana: "ひろしま" },
  { code: "35", name: "山口", nameEn: "Yamaguchi", region: "中国", kana: "ヤマグチ", hiragana: "やまぐち" },
  { code: "36", name: "徳島", nameEn: "Tokushima", region: "四国", kana: "トクシマ", hiragana: "とくしま" },
  { code: "37", name: "香川", nameEn: "Kagawa", region: "四国", kana: "カガワ", hiragana: "かがわ" },
  { code: "38", name: "愛媛", nameEn: "Ehime", region: "四国", kana: "エヒメ", hiragana: "えひめ" },
  { code: "39", name: "高知", nameEn: "Kochi", region: "四国", kana: "コウチ", hiragana: "こうち" },
  { code: "40", name: "福岡", nameEn: "Fukuoka", region: "九州", kana: "フクオカ", hiragana: "ふくおか" },
  { code: "41", name: "佐賀", nameEn: "Saga", region: "九州", kana: "サガ", hiragana: "さが" },
  { code: "42", name: "長崎", nameEn: "Nagasaki", region: "九州", kana: "ナガサキ", hiragana: "ながさき" },
  { code: "43", name: "熊本", nameEn: "Kumamoto", region: "九州", kana: "クマモト", hiragana: "くまもと" },
  { code: "44", name: "大分", nameEn: "Oita", region: "九州", kana: "オオイタ", hiragana: "おおいた" },
  { code: "45", name: "宮崎", nameEn: "Miyazaki", region: "九州", kana: "ミヤザキ", hiragana: "みやざき" },
  { code: "46", name: "鹿児島", nameEn: "Kagoshima", region: "九州", kana: "カゴシマ", hiragana: "かごしま" },
  { code: "47", name: "沖縄", nameEn: "Okinawa", region: "九州", kana: "オキナワ", hiragana: "おきなわ" },
];