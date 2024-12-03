document.addEventListener('DOMContentLoaded', function() {
    // 获取所有标签按钮和内容容器
    const tabButtons = document.querySelectorAll('.category-tabs .tab-btn');
    const containers = {
        '叶雕艺术': document.querySelector('.leaf-art-container'),
        '立体纸雕': document.querySelector('.paper-art-container'),
        '传统剪纸': document.querySelector('.paper-cut-container')
    };

    // 标签切换功能
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 隐藏所有容器
            Object.values(containers).forEach(container => {
                if (container) {
                    container.style.display = 'none';
                }
            });
            
            // 激活当前按钮
            this.classList.add('active');
            
            // 显示对应容器
            const containerName = this.textContent;
            if (containers[containerName]) {
                containers[containerName].style.display = 'grid';
            }
        });
    });

    // 初始化显示第一个容器
    containers['叶雕艺术'].style.display = 'grid';
}); 