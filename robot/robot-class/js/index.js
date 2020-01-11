
// 绑定事件
function bindEvent() {
    $('#submit').click(function () {
        var val = $('#inp-box').val();
        if (val) {
            renderDom('mine', val);
            $('#inp-box').val('');
            getData(val);
        }
    });

    $('#inp-box').keyup(function(e) {
        console.log(e);
        if (e.keyCode == 13) {
            $('#submit').click()
        }
    })
}

// 传递数据 发送请求
function getData(val) {
    $.ajax({
        // url: 'http://temp.duyiedu.com/api/chat',
        url: 'http://127.0.0.1:3000/chat',
        type: 'GET',
        data: {
            text: val
        },
        // 希望拿到的响应数据是什么类型的
        dataType: 'json',
        success: function (res) {
            console.log(res);
            renderDom('robot', res.text);
        }
    })
}

bindEvent();
function renderDom(who, text) {
    var oDiv = $('<div></div>');
    oDiv.addClass(who);
    oDiv.append($('<div class="avitor"></div>'))
        .append($('<div class="text"></div>').text(text))
        .appendTo($('.container'));
    
    var scrollTop = $('.container')[0].scrollHeight - $('.container').innerHeight();
    $('.container').scrollTop(scrollTop);

}