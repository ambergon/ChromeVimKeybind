
//一つ前の入力を保存
var beforeKey;

//選択項目の色:緑
var SELECT_CONTENT_COLOR = '#008000';
//one of list
var SELECT_CONTENT = -1;
//google class名
var SELECT_CLASS = 'yuRUbf';
//配列化
SELECT_LIST = document.getElementsByClassName( SELECT_CLASS );


//Chuck focus
//input要素を確認してフォーカス時に処理できるように変更する。
//もれがある。
let _statusFocus = false;
let first_input_focus = document.querySelector('input');
let input_focus_all = document.querySelectorAll('input');

//inputが存在しない場合処理しない
if( first_input_focus != null ){
    //すべてのinput要素に適用させる
    for( i = 0 ; i < input_focus_all.length ; i++ ){
        input_focus_all[i].onfocus = input_Focus;
        input_focus_all[i].onblur = input_Blur;
    }
}
function input_Focus() {
    _statusFocus = true;
}
function input_Blur() {
    _statusFocus = false;
}


//key event
function ChromeVimKeyBind(){
    window.addEventListener( 'keydown' , function(e) {
        this.AddKeyEvent(e);
    });
}



function AddKeyEvent(e) {

    if(_statusFocus == false){

        //次に進む alt + N
        if( e.shiftKey == false && e.ctrlKey == false && e.altKey == true && e.keyCode == 78 ) {
            history.forward();

        //前に戻る alt + P
        } else if ( e.shiftKey == false && e.ctrlKey == false && e.altKey == true && e.keyCode == 80 ) {
            history.back();

        //select down shift + J
        } else if ( e.shiftKey == true && e.ctrlKey == false && e.altKey == false && e.keyCode == 74 ) {
            if( -1 <= SELECT_CONTENT && SELECT_CONTENT < SELECT_LIST.length ){
                if(SELECT_CONTENT != -1){
                //カラーの初期化
                before_block = SELECT_LIST[ SELECT_CONTENT ];
                before_block.style.backgroundColor = null;
                }

                SELECT_CONTENT++;

                if(SELECT_CONTENT != SELECT_LIST.length ){
                    //選択した項目の背景色を変更
                    block = SELECT_LIST[ SELECT_CONTENT ];
                    block.style.backgroundColor = SELECT_CONTENT_COLOR;
                }
            }

        //select up shift + K
        } else if ( e.shiftKey == true && e.ctrlKey == false && e.altKey == false && e.keyCode == 75 ) {
            if( 0 <= SELECT_CONTENT && SELECT_CONTENT <= SELECT_LIST.length ){
                if(SELECT_CONTENT != SELECT_LIST.length ){
                    //カラーの初期化
                    before_block = SELECT_LIST[ SELECT_CONTENT ];
                    before_block.style.backgroundColor = null;
                }

                SELECT_CONTENT--;

                if( 0 <= SELECT_CONTENT ){
                    //選択した項目の背景色を変更
                    block = SELECT_LIST[ SELECT_CONTENT ];
                    block.style.backgroundColor = SELECT_CONTENT_COLOR;
                }
            }

        //select enter
        } else if ( e.shiftKey == false && e.ctrlKey == false && e.altKey == false && e.keyCode == 13 ) {
            if(SELECT_CONTENT != -1 && SELECT_CONTENT != SELECT_LIST.length ){
                var raw_text = SELECT_LIST[ SELECT_CONTENT ].innerHTML;
                var result = raw_text.match(/href=\".*?\"/gi);
                var link = result[0].slice( 5 ).replace(/"/g , '');
                window.open( link , '_self');
            }

        //select open shift + enter 
        } else if ( e.shiftKey == true && e.ctrlKey == false && e.altKey == false && e.keyCode == 13 ) {
            if(SELECT_CONTENT != -1 && SELECT_CONTENT != SELECT_LIST.length ){
                var raw_text = SELECT_LIST[ SELECT_CONTENT ].innerHTML;
                var result = raw_text.match(/href=\".*?\"/gi);
                var link = result[0].slice( 5 ).replace(/"/g , '');
                window.open( link , '_self');
            }


        //Select open Ctrl + enter 別のタブで開く
        } else if ( e.shiftKey == false && e.ctrlKey == true && e.altKey == false && e.keyCode == 13 ) {
            if(SELECT_CONTENT != -1 && SELECT_CONTENT != SELECT_LIST.length ){
                var raw_text = SELECT_LIST[ SELECT_CONTENT ].innerHTML;
                var result = raw_text.match(/href=\".*?\"/gi);
                var link = result[0].slice( 5 ).replace(/"/g , '');
                window.open( link );
            }

        //J + down browser
        } else if ( e.shiftKey == false && e.ctrlKey == false && e.altKey == false && e.keyCode == 74 ) {
            window.scrollBy(0, 50 );

        //K + up   browser
        } else if ( e.shiftKey == false && e.ctrlKey == false && e.altKey == false && e.keyCode == 75 ) {
            window.scrollBy(0, -50 );

        //GG + go to top
        } else if ( e.shiftKey == false && e.ctrlKey == false && e.altKey == false && e.keyCode == 71 ) {
                if( beforeKey == 71 ){
                    window.scroll({ top: 0 , behavior: 'smooth' });
                }

        //G + go to bottom
        } else if ( e.shiftKey == true && e.ctrlKey == false && e.altKey == false && e.keyCode == 71 ) {
            var element = document.documentElement;
            var bottom = element.scrollHeight - element.clientHeight;
            window.scroll({ top : bottom , behavior : 'smooth' });

        //yy 現在のリンクをクリップボードにコピー
        //toastが出るようにしたい。
        } else if ( e.shiftKey == false && e.ctrlKey == false && e.altKey == false && e.keyCode == 89 ) {
            if( beforeKey == 89 ){
                navigator.clipboard.writeText( window.location.href );
            }
        }
    } else {
        //console.log( "on focus" );
    }
    //keyの保存
    beforeKey = e.keyCode;
}
ChromeVimKeyBind();






