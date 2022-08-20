console.log('Hello World');

let notebookPrice = 3000;

console.log(notebookPrice);

function greetings(sentense) {
  console.log('hi');
  console.log('하이');
  console.log(sentense)
};

greetings('hola');

function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
}

welcome('홍깅')

function printSquare(x) {
  console.log(x*x);
}

printSquare(5);

console.log('한국 영화 역사상 아카데미상을 받은 것은 \'기생충\'이 처음이다.');
console.log('아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.');
console.log("영화 '베테랑'에서 \"어이가 없네~\"라는 대사가 유명했다.");

console.log(typeof 101);
console.log(typeof 1.0);
console.log(typeof '1');
console.log(typeof welcome);
console.log(typeof 8-3);
console.log('typeof 연산자의 우선순위는 사칙연산보다 먼저이기에 오류가 난다.');
console.log(typeof (8-3));

console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));
console.log(Number(true));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));

let year = 2022;
let month = 6;
let day = 30;

console.log(`오늘은 ${year}년 ${month}월 ${day}일 입니다.`);
console.log('이건 \'이게 아니고 `이거임 (~_~)');