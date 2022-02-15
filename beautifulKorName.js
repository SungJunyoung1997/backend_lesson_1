//한국어 예쁜 이름 짓기 앱
function randName(){
    const kname = ['현빈', '민서', '현준', '수정', '수민'];
    let index =  Math.floor( Math.random() * kname.length );
    return kname[index]
}
