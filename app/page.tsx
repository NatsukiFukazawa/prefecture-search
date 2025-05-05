"use client"

import { useState, useMemo } from "react";
import type { Prefecture } from "./data/prefectures"; // Prefecture 型をインポート
import { prefectures } from "./data/prefectures"

export default function Home() {
  const [searchPattern, setSearchPattern] = useState("");
  const [isValidPattern, setIsValidPattern] = useState(true);
  const [searchTarget, setSearchTarget] = useState<"prefecture" | "capital">("prefecture"); // 検索対象の state を追加 (デフォルトは 'prefecture')


  const filteredPrefectures: Prefecture[] = useMemo(() => {
    if (!searchPattern) return prefectures
    try {
      // 検索パターンから「？」を除いた実際の文字数を計算
      // 全角・半角の「？」を「.」に変換して正規表現パターンを作成
      const pattern = searchPattern.replace(/[?？]/g, '.')
      const regex = new RegExp(pattern)
      setIsValidPattern(true)
      return prefectures.filter((prefecture) => {
        if (searchTarget === "prefecture") {
          // 都道府県名で検索
          return (
            (regex.test(prefecture.kana) && prefecture.kana.length === pattern.length) ||
            (regex.test(prefecture.hiragana) && prefecture.hiragana.length === pattern.length)
          );
        } else {
          // 県庁所在地名で検索
          return (
            (regex.test(prefecture.capitalKana) && prefecture.capitalKana.length === pattern.length) ||
            (regex.test(prefecture.capitalHiragana) && prefecture.capitalHiragana.length === pattern.length)
          );
        }
      });
    } catch (e) {
      console.error(e)
      setIsValidPattern(false)
      return prefectures
    }
  }, [searchPattern, searchTarget]); // searchTarget を依存配列に追加

  

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">都道府県・県庁所在地検索</h1>

      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => setSearchTarget("prefecture")}
          className={`px-4 py-2 rounded-lg ${searchTarget === 'prefecture' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          都道府県名で検索
        </button>
        <button
          onClick={() => setSearchTarget("capital")}
          className={`px-4 py-2 rounded-lg ${searchTarget === 'capital' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          県庁所在地名で検索
        </button>
      </div>

      <div className="mb-8">
        <input
          type="text"
          value={searchPattern}
          onChange={(e) => setSearchPattern(e.target.value)}
          placeholder={`？で1文字を表現（例：${searchTarget === 'prefecture' ? 'とうきょう？' : 'さっ？ろ'}）`}
          className={`w-full p-4 border rounded-lg ${
            !isValidPattern ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!isValidPattern && (
          <p className="text-red-500 mt-2">無効な正規表現パターンです</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPrefectures.map((prefecture) => (
          <div
            key={prefecture.code}
            className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{prefecture.name}</h2>
            <p className="text-gray-600">{prefecture.nameEn}</p>
            <p className="text-sm text-gray-500">{prefecture.region}</p>
            <p className="text-sm text-gray-500 mt-2">県庁所在地: {prefecture.capital}</p>
            <p className="text-sm text-gray-400">{prefecture.kana} / {prefecture.capitalKana}</p>
            <p className="text-sm text-gray-400">{prefecture.hiragana} / {prefecture.capitalHiragana}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
