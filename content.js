//一つ前の入力を保存
var before_key;

//選択項目の色:緑
var choose_color = '#008000';

//google class名
var chrome_class_name = 'yuRUbf';

//one of list
var choose_int = -1;
//配列化
div_list = document.getElementsByClassName( chrome_class_name );


//on focus
var focus_status = false;
let input_focus = document.querySelector('input');

//console.log( input_focus );
//inputが存在しない場合処理しない
if( input_focus != null ){
    input_focus.onfocus = input_Focus;
    input_focus.onblur = input_Blur;
}
function input_Focus() {
    focus_status = true;
}
function input_Blur() {
    focus_status = false;
}

//key event
function ChromeVimKeyBind(){
    const that = this;
    window.addEventListener('keydown',function(e) { that.someMethod(e); });
}
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
                 
                //J
                case 74:
                    if( -1 <= choose_int && choose_int < div_list.length ){
                        if(choose_int != -1){
                        //カラーの初期化
                        before_block = div_list[ choose_int ];
                        before_block.style.backgroundColor = null;
                        }

                        choose_int++;

                        if(choose_int != div_list.length ){
                            //選択した項目の背景色を変更
                            block = div_list[ choose_int ];
                            block.style.backgroundColor = choose_color;
                        }
                    }
                    break;
                    
                //K
                case 75:

                    if( 0 <= choose_int && choose_int <= div_list.length ){
                        if(choose_int != div_list.length ){
                            //カラーの初期化
                            before_block = div_list[ choose_int ];
                            before_block.style.backgroundColor = null;
                        }

                        choose_int--;

                        if( 0 <= choose_int ){
                            //選択した項目の背景色を変更
                            block = div_list[ choose_int ];
                            block.style.backgroundColor = choose_color;
                        }
                    }
                    break;
                 
                //Shift + enter 
                case 13:
                    if(choose_int != -1 && choose_int != div_list.length ){
                        var raw_text = div_list[ choose_int ].innerHTML;
                        var result = raw_text.match(/href=\".*?\"/gi);
                        var link = result[0].slice( 5 ).replace(/"/g , '');
                        window.open( link , '_self');
                    }
                    break;
                 
                //G + go to bottom
                case 71:
                    var element = document.documentElement;
                    var bottom = element.scrollHeight - element.clientHeight;
                    window.scroll({ top : bottom , behavior : 'smooth' });
                    break;
            }
        }

        //Ctrl = true
        else if(e.ctrlKey){
            switch(e.keyCode){

                //Ctrl + enter 別のタブで開く
                case 13:
                    if(choose_int != -1 && choose_int != div_list.length ){
                        var raw_text = div_list[ choose_int ].innerHTML;
                        var result = raw_text.match(/href=\".*?\"/gi);
                        var link = result[0].slice( 5 ).replace(/"/g , '');
                        window.open( link );
                    }
                    break;
            }

        //Ctrl = else
        }else{
            switch(e.keyCode){

                //J + down browser
                case 74:
                    window.scrollBy(0, 50 );
                    break;

                //K + up   browser
                case 75:
                    window.scrollBy(0, -50 );
                    break;

                //GG + go to top
                case 71:
                    if( before_key == 71 ){
                        window.scroll({ top: 0 , behavior: 'smooth' });
                    }
                    break;

                //enter
                case 13:
                    if(choose_int != -1 && choose_int != div_list.length ){
                        var raw_text = div_list[ choose_int ].innerHTML;
                        var result = raw_text.match(/href=\".*?\"/gi);
                        var link = result[0].slice( 5 ).replace(/"/g , '');
                        window.open( link , '_self');
                    }
                    break;

                //yy 現在のリンクをクリップボードにコピー
                case 89:
                    if( before_key == 89 ){
                        navigator.clipboard.writeText( window.location.href );
                    }
                    break;

                //F
                case 70:
                    break;
                //default:
            }
        }
        //keyの保存
        before_key = e.keyCode;
    }
}

ChromeVimKeyBind();








