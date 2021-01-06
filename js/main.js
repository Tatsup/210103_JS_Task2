'use strict';
{
  const RESULT = document.getElementById('result'); // 出力結果の表示位置取得

  // 初期の【出力】を記憶
  const DEFAULT_HTML = RESULT.innerHTML;
  // // 初期のHTML記述を記憶
  // const DEFAULT_HTML = document.body.innerHTML;
  
  // FizzBuzz処理
  document.querySelector('form').addEventListener('submit' , e => {
    e.preventDefault();
    
    // 【出力】を初期状態に戻す
    RESULT.innerHTML = DEFAULT_HTML;
    
    let frag = document.createDocumentFragment(); // 文書の断片(組み立てたノードを保管するtemp容器)を作成

    const FIZZ = parseFloat(document.getElementById('FizzNum').value, 10); // 文字列から10進数に変換
    const BUZZ = parseFloat(document.getElementById('BuzzNum').value, 10); // 文字列から10進数に変換

    // ▼▼▼以下はコードレビュー受けて修正後にコメントアウト(21/1/6)▼▼▼
    // let sumFizzNum = FIZZ;
    // let sumBuzzNum = BUZZ;
    // // console.log(typeof(sumFizzNum)); // ForDebug データ型確認
    // // console.log(Number.isInteger(sumFizzNum)); // ForDebug 整数判定
    // if (Number.isInteger(sumFizzNum) && Number.isInteger(sumBuzzNum)
    //   && (sumFizzNum != 0) && (sumBuzzNum != 0))
    // {
    //   while (sumFizzNum < 100 || sumBuzzNum < 100) {
    //     if (sumFizzNum < sumBuzzNum) {
    //       // console.log('Fizz ' + sumFizzNum); // ForDebug
    //       let text = document.createTextNode(`Fizz ${sumFizzNum}`); // テキストノードを作成
    //       const P = document.createElement('p'); // 要素ノードpを作成
    //       P.appendChild(text); // ノード同士の組み立て
    //       frag.appendChild(P); // 要素ノードpをFragmentに追加
    //       sumFizzNum = sumFizzNum + FIZZ; // 加算
    //     } else if (sumBuzzNum < sumFizzNum) {
    //       // console.log('Buzz ' + sumBuzzNum); // ForDebug
    //       let text = document.createTextNode(`Buzz ${sumBuzzNum}`); // テキストノードを作成
    //       const P = document.createElement('p'); // 要素ノードpを作成
    //       P.appendChild(text); // ノード同士の組み立て
    //       frag.appendChild(P); // 要素ノードpをFragmentに追加
    //       sumBuzzNum = sumBuzzNum + BUZZ;
    //     } else { // sumFizzNum === sumBuzzNum
    //       // console.log('FizzBuzz ' + sumFizzNum); // ForDebug
    //       let text = document.createTextNode(`FizzBuzz ${sumFizzNum}`); // テキストノードを作成
    //       const P = document.createElement('p'); // 要素ノードpを作成
    //       P.appendChild(text); // ノード同士の組み立て
    //       frag.appendChild(P); // 要素ノードpをFragmentに追加
    //       sumFizzNum = sumFizzNum + FIZZ;
    //       sumBuzzNum = sumBuzzNum + BUZZ;
    //     }
    //   }
    // } else {
    //   let text = document.createTextNode('整数値を入力してください'); // テキストノードを作成
    //   frag.appendChild(text); // 要素ノードpをFragmentに追加
    // }
    // ▲▲▲以下はコードレビュー受けて修正後にコメントアウト(21/1/6)▲▲▲
    
    if (Number.isInteger(FIZZ) && Number.isInteger(BUZZ)
    && (FIZZ != 0) && (BUZZ != 0)) {
      for (let i=1; i<=5; i++){
        if ( (i % FIZZ === 0) && (i % BUZZ === 0) ) {
          let text = document.createTextNode(`FizzBuzz ${i}`); // テキストノードを作成
          const P = document.createElement('p'); // 要素ノードpを作成
          P.appendChild(text); // ノード同士の組み立て
          frag.appendChild(P); // 要素ノードpをFragmentに追加
        } else if (i % FIZZ === 0) {
          let text = document.createTextNode(`Fizz ${i}`); // テキストノードを作成
          const P = document.createElement('p'); // 要素ノードpを作成
          P.appendChild(text); // ノード同士の組み立て
          frag.appendChild(P); // 要素ノードpをFragmentに追加
        } else if (i % BUZZ === 0) {
          let text = document.createTextNode(`Buzz ${i}`); // テキストノードを作成
          const P = document.createElement('p'); // 要素ノードpを作成
          P.appendChild(text); // ノード同士の組み立て
          frag.appendChild(P); // 要素ノードpをFragmentに追加
        }
      }
    } else {
      let text = document.createTextNode('整数値を入力してください'); // テキストノードを作成
      frag.appendChild(text); // 要素ノードpをFragmentに追加
    }

    // // HTML記述を初期状態に戻す
    // document.body.innerHTML = DEFAULT_HTML;

    // Fragmentをまとめて文書ツリーに追加
    RESULT.appendChild(frag);
  });
}