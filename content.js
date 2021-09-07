
let input = document.querySelector('input');
var focus_status = false;

input.onfocus = inputFocus;
input.onblur = inputBlur;

function inputFocus() {
    //input.value = '';
    focus_status = true;
}
function inputBlur() {
    focus_status = false;
}





function register(){
    const that = this;
    window.addEventListener('keydown',function(e) { that.someMethod(e); });
}


var before_key;
function someMethod(e) {

    if(focus_status == false){

        //Shift
        if(e.shiftKey){
            switch(e.keyCode){
                //次に進む N
                case 78:
                    history.forward();
                    break;
                //前に戻る P
                case 80:
                    history.back();
                    break;
            }
        }

        //Ctrl = true
        else if(e.ctrlKey){
            switch(e.keyCode){
            }

        //Ctrl = else
        }else{
            switch(e.keyCode){

                //J + down browser
                case 74:
                    window.scrollBy(0, 30 );
                    break;

                //K + up   browser
                case 75:
                    window.scrollBy(0, -30 );
                    break;

                //E = 新しいタブを開く
                case 69:
                    window.open('https://www.google.com');
                    break;

                //:Q = コマンドで開いたタブを閉じる
                case 81:
                    if(before_key == 186){
                        window.close('');
                    }
                    break;

                //test F
                case 70:
                    break;


                default:
                    //window.alert('set key' + e.keyCode + ' : and ctrl? = ' + e.ctrlKey);
            }
        }
        //window.alert('before = '+before_key);
        before_key = e.keyCode
    }
}

register();









