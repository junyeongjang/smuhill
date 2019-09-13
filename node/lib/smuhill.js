module.exports = {
    HTML:function(text){
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <link rel="stylesheet" href="css/bootstrap.css">
            <link rel="stylesheet" href="css/icon.css">
            <link rel="stylesheet" href="jquery-ui-1.12.1.custom/jquery-ui.css">
            <link rel="stylesheet" href="https://jsplumbtoolkit.com/css/jsplumbtoolkit-defaults.css">
            <style>
                /* 상업적 이용 가능 무료 폰트 - https://noonnu.cc/font_page/38 */
                @font-face {
                    font-family: 'NanumSquareRound';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
        
                * {
                    font-family: NanumSquareRound, 나눔고딕;
                }
            </style>
        
        
        </head>
        
        <body>
            <nav class="navar navbar-inverse navbar-fixed-top">
                <!-- 상단 nav 고정 바 -->
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">스뮤고개</a>
                        <a href="#" class="navbar-profile">홍길동</a><!-- nav 프로필 영역 -->
                        <img class="navbar-proimg">
                    </div>
        
                </div>
            </nav> <!-- 상단고정바-->
        
            <section class="wrapper">
                <!--반응형 웹 구조-->
                <div class="section1">
        
                    <div class="section1_main">
                        <div class="elements">
                            <div class="selection">
                                <div class="select_element" id="s_all" onclick="select(1)" value="s">전체</div>
                                <div class="select_element" id="s_bas" onclick="select(2)" value="c">기본</div>
                                <div class="select_element" id="s_down" onclick="select(3)" value="c">다운로드</div>
                            </div>
                            <div class="elements_section" id="basic">
                                <div id="normal_elements" onclick="fold_normal()" value="open">
                                    <div class="fold_normal" id="fold1"></div>
                                    <div class="fold_normal2" id="fold2"></div>
        
                                    <p style="display: inline">&nbsp;&nbsp;기본 요소&nbsp;&nbsp;</p><br>
                                </div>
                                <div id="template">
                                    <br>
                                    <div class="templete templete1" id="text" draggable="true"
                                        xmlns="http://www.w3.org/1999/xhtml">
                                        <div class="icon">
                                            <p>___________<br>___________</p>
                                        </div>
                                        <p style="font-size:16px; padding-top:2px;">텍스트</p>
                                    </div>
                                    <div class="templete templete2" id="list" draggable="true"
                                        xmlns="http://www.w3.org/1999/xhtml">
                                        <div class="icon">
                                            <p style="margin: 0 0 3px; padding-top: 5px;">___________</p>
                                            <div class="list_ex" id="ex_1"></div>
                                            <div class="list_ex" id="ex_2"></div>
                                            <div class="list_ex" id="ex_3"></div>
                                        </div>
        
                                        <p style="font-size:16px; padding-top:2px;">리스트
                                    </div>
                                    <div class="templete templete3" id="image" draggable="true"
                                        xmlns="http://www.w3.org/1999/xhtml">
                                        <div class="icon" id="photo">
                                            <div id="mountain"></div>
                                            <div id="sun"></div>
                                        </div>
                                        <p style="font-size:16px; padding-top:2px;">이미지</p>
                                    </div>
        
                                    <div class="templete templete4" id="video" xmlns="http://www.w3.org/1999/xhtml">
                                        <div class="icon">
                                            <div id="video_back"></div>
                                            <div id="start"></div>
                                        </div>
                                        <p style="font-size:16px; padding-top:2px;">동영상</p>
                                    </div>
                                    <div class="templete templete5" id="sound" xmlns="http://www.w3.org/1999/xhtml">
                                        <div class="icon">
                                            <div id="speaker">
                                                <p>)</p>
                                                <p>)</p>
                                            </div>
                                        </div>
                                        <p style="font-size:16px; padding-top:2px;">음성</p>
                                    </div>
                                    <div class="templete templete6" id="file" xmlns="http://www.w3.org/1999/xhtml">
                                        <div class="icon">
                                            <div id="file_i"></div>
                                            <div id="infile" style="font-size:2px;">----</div>
                                        </div>
                                        <p style="font-size:16px; padding-top:2px;">파일</p>
                                    </div>
                                    <br><br>
                                </div>
                                <div id="adv_elements" onclick="fold_adv()" value="open">
                                    <div class="fold_normal" id="fold3"></div>
                                    <div class="fold_normal2" id="fold4"></div>
                                    <p style="display: inline">고급 요소&nbsp;&nbsp;&nbsp;</p>
                                </div>
                                <div id="adv_template">
                                    <br>
        
                                    <div class="templete_adv" id="alert_m">
                                        <div class="templete_image"><img src="./css/images/alarms.svg">
                                            <div class="templete_priview">
                                                <p>미리보기</p>
                                            </div>
                                        </div>
                                        <div class="templete_name">
                                            <p style="font-weight:800">알람메세지</p>
                                        </div>
                                        <div class="templete_dis">
                                            <p>특정시간에 챗봇 사용자들에게 원하는 메세지를 알람으로 보낼수 있다.</p>
                                        </div>
                                    </div>
                                    <div class="templete_adv" id="booking">
                                        <div class="templete_image"><img scr="#">
                                            <div class="templete_priview">
                                                <p>미리보기</p>
                                            </div>
                                        </div>
                                        <div class="templete_name">
                                            <p style="font-weight:800">예약 Form</p>
                                        </div>
                                        <div class="templete_dis">수요조사, 공동구매등에 사용가능한 예약 기능</div>
                                    </div>
                                    <div class="templete_adv" id="vote">
                                        <div class="templete_image"><img scr="#">
                                            <div class="templete_priview">
                                                <p>미리보기</p>
                                            </div>
                                        </div>
                                        <div class="templete_name">
                                            <p style="font-weight:800">투표 Form</p>
                                        </div>
                                        <div class="templete_dis">투표에 사용가능한 기능</div>
                                    </div>
                                    <br><br>
                                </div>
                                <div id="download_elements">
                                    <p style="display: inline">다운로드한 요소</p>
                                </div>
        
                                <a href="#">
                                    <div class="madang">창작마당</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> <!-- 좌측에 블럭들 위치해있는 section-->
                <div class="section2">
                    <div class="section2_1"></div> <!-- 중하에 시각적 블럭 영역 svg section-->
                    <div class="main">
                        <!-- content 영역 -->
                        <div class="main_dis">
                            <!-- 챗봇 기본정보 -->
                            <div>
                                <h2>이음대학교</h2>
                            </div>
                            <div class="more_button info_button">더보기</div>
                            <!-- 저장 -->
                            <input class="save_button info_button" type="submit" id="saveButton" value="저장"/>
        
        
                        </div>
                        <div class="main_flow">
                            <!-- 챗봇 플로우차트 공간 -->
                            <div class="zoom">
                                <!-- 플로우차트 줌인줌아웃 -->
                                <div id="zoomin" onclick="zoomin()">+</div>
                                <div id="zoomout" onclick="zoomout()">-</div>
        
                            </div>
                            <div class="chatbot_Flow" id="chatbot_Flow">
                            
                                <div class="svg-chart" id="svg-chart" xmlns="http://www.w3.org/2000/svg" ">
                            <div class=" svg-foreign">
                            
                                    <div class="entry window">
                                        <div class="entry-body">시작</div>
                                    </div>
                                  ${text} 
                                </div>
                            </div>
                        </div> <!-- 중상에 선택한 요소 조작 section-->
                    </div>
                </div>
                </div>
                <div class="section3" id="right_section">
                    <!-- 웇흑에 미리보기 section-->
                    <div class="section3_tag">
                        <div class="select3_element section3-attribute">속성</div>
                        <div class="select3_element section3-preview">미리보기</div>
                    </div>
                    <input type="button" class="fold_layout" id="fold_button" onclick="fold_layout()" value=">>">
                    <div class="attribute">
                        <form>
                            <textarea id='textarea'></textarea>
                        </form>
                    </div>
                    <div class="preview"></div>
                    <a href="#">
                        <div class="message">메세지</div>
                    </a>
        
                </div>
            </section>
        
        
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script type="text/javascript" src="js/bootstrap.js"></script>
            <script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
            <script src="js/main.js"></script>
            <script src="https://jsplumbtoolkit.com/community/demo/draggableConnectors/lib/jsplumb.js"></script>
            <script src="https://jsplumbtoolkit.com/js/jquery.validate.js"></script>
            <script src="https://jsplumbtoolkit.com/js/additional-methods.js"></script>
            <script src="https://js.stripe.com/v3/"></script>
            <script src="js/jsplumb-test.js"></script>
        </body>
        
        </html>
`;
    },text:function(node){

       var list=`<div>`;
        var i = 1;
        while(i < node.length){
      list= list+ `<div class="templete1-body window jtk-managed jtk-draggable jtk-endpoint-anchor" id="${node[i].blockId}" draggable="true" style="left: ${node[i].positionX}px; top: ${node[i].positionY}px;">`;
      list= list+      `<div class="text_name">`;
      list= list+      `<div class="name_content" contenteditable="true" onclick="$(this).focus();">${node[i].selection}</div>`;
      list= list+      `</div><div class="text_content" contenteditable="true" onclick="$(this).focus();" data-text=${node[i].values}></div></div>`;

          i = i + 1;
        }
 

       list = list+`</div>`;
        return list;
      }
    }
//   },text:function(id, numberOfTemplete1){
//     var $element=$('<div class=" templete1-body window" id="'+id+'" draggable="true"><div class="text_name"><div class="name_content"  contenteditable="true" onclick="$(this).focus();" >텍스트'+numberOfTemplete1+'</div></div><div class="text_content" contenteditable="true" onclick="$(this).focus();" data-text="챗봇에 보여질 텍스트 내용을 작성하세요!"></div></div>');
//     $(".svg-foreign").append($element);
//     jsPlumb.draggable($("#" + id));
//     jsPlumb.addEndpoint($("#" + id), { anchor: "TopCenter" }, exampleEndpoint1);
//     jsPlumb.addEndpoint($("#" + id), { anchor: "BottomCenter" }, exampleEndpoint2);
//   }



// text:function(filelist){
//     var list = '<ul>';
//     var i = 0;
//     while(i < filelist.length){
//       list = list + `<li><a href="/topic/${filelist[i].id}">${filelist[i].title}</a></li>`;
//       i = i + 1;
//     }
//     list = list+'</ul>';
//     return list;
//   }
// }
// var $element=$('<div class=" templete1-body window" id="'+id+'" draggable="true"><form action="/text_create" method="post"><p><input type="text" name="title" placeholder="할일 제목"></p><p><textarea name="description" placeholder="할일 내용"></textarea></p><p><input type="submit"></p></form><div class="text_name"><div class="name_content"  contenteditable="true" onclick="$(this).focus();" >텍스트'+numberOfTemplete1+'</div></div><div class="text_content" contenteditable="true" onclick="$(this).focus();" data-text="챗봇에 보여질 텍스트 내용을 작성하세요!"></div></div>');
// //var $element=$('<div class=" templete1-body window" id="'+id+'" draggable="true"><form action="/text_create" method="post"><p><input type="text" name="title" placeholder="할일 제목"></p><p><input type="text" name="id" placeholder="할일 제목">"'+id+'"</p><p><textarea name="description" placeholder="할일 내용"></textarea></p><p><input type="submit"></p></form><div class="text_name"><div class="name_content"  contenteditable="true" onclick="$(this).focus();" >텍스트'+numberOfTemplete1+'</div></div><div class="text_content" contenteditable="true" onclick="$(this).focus();" data-text="챗봇에 보여질 텍스트 내용을 작성하세요!"></div></div>');  
// $(".svg-foreign").append($element);
//   jsPlumb.draggable($("#" + id));
//   jsPlumb.addEndpoint($("#" + id), { anchor: "TopCenter" }, exampleEndpoint1);
//   jsPlumb.addEndpoint($("#" + id), { anchor: "BottomCenter" }, exampleEndpoint2);
  