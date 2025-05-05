"use client"

import { useState, useMemo } from "react"
import { prefectures } from "./data/prefectures"

export default function Home() {
  const [searchPattern, setSearchPattern] = useState("")
  const [isValidPattern, setIsValidPattern] = useState(true)

  const filteredPrefectures = useMemo(() => {
    if (!searchPattern) return prefectures
    try {
      // 全角・半角の「？」を「.」に変換して正規表現パターンを作成
      const pattern = searchPattern.replace(/[?？]/g, '.')
      const regex = new RegExp(pattern)
      setIsValidPattern(true)
      return prefectures.filter(
        (prefecture) =>
          regex.test(prefecture.kana) ||
          regex.test(prefecture.hiragana)
      )
    } catch (e) {
      console.error(e)
      setIsValidPattern(false)
      return prefectures
    }
  }, [searchPattern])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">都道府県検索</h1>

      <div className="mb-8">
        <input
          type="text"
          value={searchPattern}
          onChange={(e) => setSearchPattern(e.target.value)}
          placeholder="？で1文字を表現（例：さい？ま）"
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
            <p className="text-sm text-gray-400">{prefecture.kana}</p>
            <p className="text-sm text-gray-400">{prefecture.hiragana}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
