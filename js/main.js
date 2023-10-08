// 检查页面是否需要滚动
function checkScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var backToTopBtn = document.getElementById('back-to-top-btn');

    if (scrollTop > 500) {
        // 页面滚动超过500像素时显示 "回到顶部" 按钮
        backToTopBtn.style.display = 'block';
    } else {
        // 页面滚动未超过500像素时隐藏 "回到顶部" 按钮
        backToTopBtn.style.display = 'none';
    }
}

// 回到页面顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 监听留言表单的提交事件
var messageForm = document.getElementById('message-form');
messageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    var messageInput = document.getElementById('message-input');
    var messageList = document.getElementById('message-list');

    var message = messageInput.value;
    if (message.trim() !== '') {
        // 创建新的留言项
        var messageItem = document.createElement('div');
        messageItem.classList.add('message-item');
        messageItem.innerText = message;

        // 将留言项添加到留言列表中
        messageList.appendChild(messageItem);

        // 清空留言输入框内容
        messageInput.value = '';
    }
});
