'use strict';
{
  // 初期HTML記述をセーブ
  let defaultSaveHTML = document.body.innerHTML;
  
  // FizzBuzz処理
  document.querySelector('form').addEventListener('submit' , e => {
    e.preventDefault();
    // document.body.innerHTML = defaultSaveHTML; // HTML記述の初期化

    const FIZZ = parseInt(document.getElementById('FizzNum').value, 10); // 文字列から10進数に変換
    const BUZZ = parseInt(document.getElementById('BuzzNum').value, 10); // 文字列から10進数に変換

    let SumFizzNum = FIZZ;
    let SumBuzzNum = BUZZ;
    // console.log(typeof(SumFizzNum)); // ForDebug データ型確認
    // console.log(Number.isInteger(SumFizzNum)); // ForDebug 整数判定

    let result = document.getElementById('result'); // 出力結果の表示位置取得
    let frag = document.createDocumentFragment(); // 文書の断片(組み立てたノードを保管するtemp容器)を作成

    if (Number.isInteger(SumFizzNum) && Number.isInteger(SumBuzzNum)
      && (SumFizzNum != 0) && (SumBuzzNum != 0))
    {
      while (SumFizzNum < 100 || SumBuzzNum < 100) {
        if (SumFizzNum < SumBuzzNum) {
          // console.log('Fizz ' + SumFizzNum); // ForDebug
          let p = document.createElement('p'); // 要素ノードpを作成
          let text = document.createTextNode('Fizz ' + SumFizzNum); // テキストノードを作成
          p.appendChild(text); // ノード同士の組み立て
          frag.appendChild(p); // 要素ノードpをFragmentに追加
          SumFizzNum = SumFizzNum + FIZZ; // 加算
        } else if (SumBuzzNum < SumFizzNum) {
          // console.log('Buzz ' + SumBuzzNum); // ForDebug
          let p = document.createElement('p'); // 要素ノードpを作成
          let text = document.createTextNode('Buzz ' + SumBuzzNum); // テキストノードを作成
          p.appendChild(text); // ノード同士の組み立て
          frag.appendChild(p); // 要素ノードpをFragmentに追加
          SumBuzzNum = SumBuzzNum + BUZZ;
        } else { // SumFizzNum === SumBuzzNum
          // console.log('FizzBuzz ' + SumFizzNum); // ForDebug
          let p = document.createElement('p'); // 要素ノードpを作成
          let text = document.createTextNode('FizzBuzz ' + SumFizzNum); // テキストノードを作成
          p.appendChild(text); // ノード同士の組み立て
          frag.appendChild(p); // 要素ノードpをFragmentに追加
          SumFizzNum = SumFizzNum + FIZZ;
          SumBuzzNum = SumBuzzNum + BUZZ;
        }
      }
    } else {
      let text = document.createTextNode('整数値を入力してください'); // テキストノードを作成
      frag.appendChild(text); // 要素ノードpをFragmentに追加
    }
    // Fragmentをまとめて文書ツリーに追加
    result.appendChild(frag);
  });
}