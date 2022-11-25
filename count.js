const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
function countWord(paragraph){
paragraph=paragraph.trim();
paragraph=paragraph.split("love");
paragraph=paragraph.length;
return paragraph;
}
console.log(countWord(paragraph));